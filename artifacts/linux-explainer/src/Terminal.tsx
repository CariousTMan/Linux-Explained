import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";

type LineType = "input" | "output" | "system" | "error";
type Line = { type: LineType; text: string };

const BOOT_LINES: Line[] = [
  { type: "system", text: "Debian GNU/Linux 12 (bookworm)" },
  { type: "system", text: "Linux kernel 6.1.0-18-amd64 on x86_64" },
  { type: "system", text: "" },
  { type: "system", text: "This is a Linux terminal — no desktop, no mouse, no icons." },
  { type: "system", text: "Just the kernel, a shell, and a blinking cursor." },
  { type: "system", text: "This is how most servers and supercomputers are used." },
  { type: "system", text: "" },
  { type: "system", text: 'Type "help" to see available commands.' },
  { type: "system", text: "" },
];

const CWD = "/home/student";

function runCommand(raw: string): { lines: Line[]; clear?: boolean; exit?: boolean } {
  const trimmed = raw.trim();
  const parts = trimmed.split(/\s+/);
  const cmd = parts[0]?.toLowerCase() ?? "";
  const args = parts.slice(1);

  const out = (...texts: string[]): Line[] =>
    texts.map(t => ({ type: "output" as LineType, text: t }));
  const err = (...texts: string[]): Line[] =>
    texts.map(t => ({ type: "error" as LineType, text: t }));

  switch (cmd) {
    case "":
      return { lines: [] };

    case "clear":
      return { lines: [], clear: true };

    case "exit":
      return { lines: [], exit: true };

    case "help":
      return {
        lines: out(
          "Available commands:",
          "  help              show this message",
          "  ls                list files in current directory",
          "  pwd               print working directory",
          "  whoami            print current user",
          "  uname -a          print system information",
          "  cat [file]        read a file",
          "  echo [text]       print text to the screen",
          "  neofetch          show system info (like a real Linux nerd)",
          "  apt               the package manager",
          "  sudo [command]    try to run as administrator",
          "  clear             clear the screen",
          "  exit              go back to the website",
          "",
        ),
      };

    case "ls":
      return {
        lines: out(
          "\x1b[34mdocuments\x1b[0m   \x1b[34mdownloads\x1b[0m   readme.txt   notes.txt   hello.sh",
        ),
      };

    case "pwd":
      return { lines: out(CWD) };

    case "whoami":
      return { lines: out("student") };

    case "uname":
      return {
        lines: out(
          "Linux debian 6.1.0-18-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.76-1 (2024-02-01) x86_64 GNU/Linux",
        ),
      };

    case "cat": {
      const file = args[0];
      if (!file) return { lines: err("cat: missing file operand") };
      if (file === "readme.txt")
        return {
          lines: out(
            "Welcome to the Linux terminal demo.",
            "",
            "Without a desktop environment, Linux is just this:",
            "a prompt, a keyboard, and the whole operating system",
            "accessible through text commands.",
            "",
            "Every server running a website, every supercomputer,",
            "and most cloud infrastructure works exactly like this.",
          ),
        };
      if (file === "notes.txt")
        return { lines: out("TODO: learn more Linux commands") };
      if (file === "hello.sh")
        return {
          lines: out('#!/bin/bash', 'echo "Hello, world!"'),
        };
      if (file === "secret.txt")
        return { lines: err("cat: secret.txt: Permission denied") };
      return { lines: err(`cat: ${file}: No such file or directory`) };
    }

    case "echo":
      return { lines: out(args.join(" ")) };

    case "sudo": {
      if (!args[0]) return { lines: err("sudo: no command specified") };
      const subcmd = args[0].toLowerCase();
      const subargs = args.slice(1);
      if (subcmd === "apt" || subcmd === "apt-get") {
        const action = subargs[0];
        if (action === "install") {
          const pkg = subargs[1];
          if (!pkg) return { lines: err("apt: package name required") };
          return {
            lines: out(
              `Reading package lists... Done`,
              `Building dependency tree... Done`,
              `The following NEW packages will be installed:`,
              `  ${pkg}`,
              `0 upgraded, 1 newly installed, 0 to remove.`,
              `Get:1 http://deb.debian.org/debian bookworm/main amd64 ${pkg}`,
              `Fetched 420 kB in 0s`,
              `Selecting previously unselected package ${pkg}.`,
              `Setting up ${pkg} ...`,
              `Processing triggers for man-db ...`,
              `Done.`,
            ),
          };
        }
        if (action === "update") {
          return {
            lines: out(
              "Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]",
              "Get:2 http://security.debian.org bookworm-security InRelease [48.0 kB]",
              "Fetched 199 kB in 1s (199 kB/s)",
              "Reading package lists... Done",
            ),
          };
        }
        if (action === "upgrade") {
          return {
            lines: out(
              "Reading package lists... Done",
              "Building dependency tree... Done",
              "Calculating upgrade... Done",
              "0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.",
            ),
          };
        }
      }
      if (subcmd === "reboot") {
        return { lines: out("Broadcast message from student@debian:", "The system is going down for reboot NOW!", "", "...just kidding, it's a demo.") };
      }
      if (subcmd === "rm" && subargs.includes("-rf") && (subargs.includes("/") || subargs.includes("/*"))) {
        return { lines: out("lol nice try") };
      }
      return { lines: out(`[sudo] running: ${args.join(" ")}`, "Done.") };
    }

    case "apt":
    case "apt-get": {
      const sub = args[0];
      if (sub === "install" || sub === "remove" || sub === "upgrade")
        return {
          lines: err(
            "E: Could not open lock file /var/lib/dpkg/lock-frontend (13: Permission denied)",
            "E: Are you root? Try: sudo apt " + args.join(" "),
          ),
        };
      if (sub === "list")
        return {
          lines: out(
            "Listing packages...",
            "bash/stable 5.2.15 amd64",
            "coreutils/stable 9.1 amd64",
            "nano/stable 7.2 amd64",
            "python3/stable 3.11.2 amd64",
            "vim/stable 9.0 amd64",
          ),
        };
      return {
        lines: out(
          "Usage: apt {install|remove|list|upgrade|search} [package]",
          "       (most actions require sudo / root access)",
        ),
      };
    }

    case "neofetch":
      return {
        lines: out(
          "        _,met$$$$$gg.          student@debian",
          '     ,g$$$$$$$$$$$$$$$P.       ──────────────',
          '   ,g$$P""       """Y$$.".      OS: Debian GNU/Linux 12 (bookworm) x86_64',
          "  ,$$P'              `$$$.      Kernel: 6.1.0-18-amd64",
          " ',$$P       ,ggs.     `$$b:    Shell: bash 5.2.15",
          " `d$$'     ,$P\"'   .    $$$     Terminal: demo",
          "  $$P      d$'     ,    $$P     CPU: Intel i5 (simulated)",
          "  $$:      $$.   -    ,d$$'     Memory: 512MB / 4096MB",
          "  $$;      Y$b._   _,d$P'",
          "  Y$$.    `.`\"Y$$$$P\"'          This is a simulated Debian terminal.",
          "  `$$b      \"-.__               Running inside a web browser.",
          "   `Y$$",
          "    `Y$$.",
          '      `$$b.',
          '        `Y$$b.',
          '           `"Y$b._',
          '               `""""',
          "",
        ),
      };

    case "man":
      if (!args[0]) return { lines: err("What manual page do you want?") };
      return {
        lines: out(
          `No manual entry for ${args[0]}`,
          "(Hint: try --help, or just Google it)",
        ),
      };

    case "cd":
      return {
        lines: err(
          `bash: cd: ${args[0] ?? "~"}: This demo doesn't support navigation`,
        ),
      };

    case "python3":
    case "python":
      return {
        lines: out(
          "Python 3.11.2 (main, Mar 13 2023, 12:18:29)",
          "[GCC 12.2.0] on linux",
          'Type "help", "copyright", "credits" or "license" for more information.',
          "(This is a demo — Python isn't actually running here.)",
        ),
      };

    case "vim":
    case "nano":
      return {
        lines: out(
          `${cmd}: text editors aren't available in this demo.`,
          "In a real terminal, these open full-screen text editors.",
        ),
      };

    default:
      return {
        lines: err(`bash: ${cmd}: command not found`),
      };
  }
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(BOOT_LINES);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const focusInput = () => inputRef.current?.focus();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = input;
    const { lines: outLines, clear, exit } = runCommand(raw);

    if (exit) {
      const base = import.meta.env.BASE_URL?.replace(/\/$/, "") ?? "";
      window.location.href = base + "/";
      return;
    }

    const inputLine: Line = { type: "input", text: raw };

    if (clear) {
      setLines([]);
    } else {
      setLines(prev => [...prev, inputLine, ...outLines]);
    }

    if (raw.trim()) {
      setCmdHistory(prev => [raw.trim(), ...prev]);
      setHistIdx(-1);
    }
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = histIdx + 1;
      if (next < cmdHistory.length) {
        setHistIdx(next);
        setInput(cmdHistory[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = histIdx - 1;
      if (next < 0) {
        setHistIdx(-1);
        setInput("");
      } else {
        setHistIdx(next);
        setInput(cmdHistory[next]);
      }
    }
  };

  return (
    <div
      style={{ background: "#0d0d0d", minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: '"Courier New", Courier, monospace', fontSize: "14px" }}
      onClick={focusInput}
    >
      {/* chrome bar */}
      <div style={{ background: "#1c1c1c", borderBottom: "1px solid #2a2a2a", padding: "8px 16px", display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f" }} />
        </div>
        <span style={{ color: "#666", fontSize: "12px", flex: 1, textAlign: "center" }}>student@debian: ~</span>
        <Link
          href="/"
          style={{ color: "#888", fontSize: "12px", textDecoration: "none", border: "1px solid #333", padding: "3px 10px", borderRadius: "4px", whiteSpace: "nowrap" }}
        >
          Back to website
        </Link>
      </div>

      {/* info banner */}
      <div style={{ background: "#0a1a0a", borderBottom: "1px solid #1a3a1a", padding: "8px 20px", color: "#4a9a4a", fontSize: "12px", flexShrink: 0 }}>
        This is Linux without a desktop environment. No mouse, no icons, no windows — just a shell.
        Commands you type are sent directly to the OS. This is how servers, supercomputers, and most of the internet is managed.
      </div>

      {/* terminal body */}
      <div style={{ flex: 1, padding: "12px 20px", overflowY: "auto", lineHeight: "1.6" }}>
        {lines.map((line, i) => {
          if (line.type === "input") {
            return (
              <div key={i}>
                <span style={{ color: "#22cc22" }}>student@debian</span>
                <span style={{ color: "#888" }}>:</span>
                <span style={{ color: "#4488ff" }}>~</span>
                <span style={{ color: "#888" }}>$ </span>
                <span style={{ color: "#fff" }}>{line.text}</span>
              </div>
            );
          }
          return (
            <div key={i} style={{ color: line.type === "system" ? "#888" : line.type === "error" ? "#ff6666" : "#e0e0e0", whiteSpace: "pre" }}>
              {line.text}
            </div>
          );
        })}

        {/* live input line */}
        <form onSubmit={submit} style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#22cc22", whiteSpace: "nowrap" }}>student@debian</span>
          <span style={{ color: "#888" }}>:</span>
          <span style={{ color: "#4488ff" }}>~</span>
          <span style={{ color: "#888" }}>$ </span>
          <input
            ref={inputRef}
            autoFocus
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#fff",
              fontFamily: "inherit",
              fontSize: "inherit",
              flex: 1,
              caretColor: "#22cc22",
            }}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </form>

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
