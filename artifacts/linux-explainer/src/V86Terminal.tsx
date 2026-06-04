import { useEffect, useRef } from "react";

declare global {
  interface Window {
    V86Starter: new (config: object) => unknown;
  }
}

export default function V86Terminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const emulatorRef = useRef<unknown>(null);

  useEffect(() => {
    if (emulatorRef.current || !containerRef.current) return;

    const script = document.createElement("script");
    script.src = "/libv86.js";
    script.onload = () => {
      emulatorRef.current = new window.V86Starter({
        wasm_path: "/v86.wasm",
        memory_size: 128 * 1024 * 1024,
        vga_memory_size: 2 * 1024 * 1024,
        bios: { url: "/seabios.bin" },
        vga_bios: { url: "/vgabios.bin" },
        bzimage: { url: "/bzimage.bin" },
        bzimage_initrd_from_filesystem: true,
        cmdline: "console=ttyS0 tsc=reliable mitigations=off random.trust_cpu=on",
        serial_container: containerRef.current!,
        autostart: true,
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        flex: 1,
        background: "#000",
        color: "#ccc",
        fontFamily: "monospace",
        fontSize: "13px",
        overflow: "auto",
        padding: "4px",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
      }}
    />
  );
}
