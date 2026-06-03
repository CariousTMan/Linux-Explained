import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { useState } from "react";

const queryClient = new QueryClient();

function Home() {
  const [quizPick, setQuizPick] = useState<"windows" | "linux" | null>(null);

  return (
    <div style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive', background: "#f5f0ff", minHeight: "100vh" }}>

      {/* scrolling banner */}
      <div style={{ background: "#ff0055", color: "white", padding: "8px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <span style={{ display: "inline-block", animation: "marquee 22s linear infinite", fontWeight: "bold", fontSize: "14px" }}>
          &nbsp;&nbsp;&nbsp;★ WELCOME TO MY LINUX VS WINDOWS WEBSITE ★&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ MADE FOR SCIENCE CLASS ★&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ PLEASE DONT STEAL MY CODE ★&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ WORKS BEST IN GOOGLE CHROME ★&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ I LEARNED HTML IN ONE WEEK ★&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #7700cc 0%, #0055ff 100%)", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#ffdd00", color: "#222", padding: "6px 18px", borderRadius: "999px", fontWeight: "bold", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "20px", border: "2px solid black" }}>
          AN EDUACATIONAL WEBPAGE TO HELP INFORM THE UNINFORMED
        </div>
        <h1 style={{ fontFamily: 'Impact, "Arial Black", sans-serif', color: "white", fontSize: "clamp(48px, 12vw, 90px)", margin: "0 0 10px 0", textShadow: "4px 4px 0 #ff0055", lineHeight: 1 }}>
          Linux <span style={{ color: "#ffdd00" }}>vs</span> Windows
        </h1>
        <p style={{ color: "#ddd", fontSize: "20px", margin: "15px 0 30px 0" }}>
          The computer showdown you didn't know you needed. Let's make sense of it all.
        </p>
        <a href="#start" style={{ display: "inline-block", background: "#ffdd00", color: "black", padding: "12px 30px", borderRadius: "8px", fontWeight: "bold", textDecoration: "none", border: "3px solid black", fontSize: "16px" }}>
          ↓ START READING ↓
        </a>
      </div>

      <hr style={{ border: "4px dashed #9900cc", margin: 0 }} />

      {/* WHAT IS AN OS */}
      <div id="start" style={{ background: "#eef0ff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textAlign: "center", fontSize: "clamp(30px, 6vw, 50px)", color: "#7700cc", textShadow: "2px 2px 0 #ddd", marginBottom: "20px" }}>
            WAIT... WHAT IS AN OPERATING SYSTEM??
          </h2>
          <div style={{ background: "white", border: "4px solid #7700cc", borderRadius: "12px", padding: "25px", marginBottom: "30px" }}>
            <p style={{ fontSize: "17px", lineHeight: "1.8", margin: 0 }}>
              Okay so imagine your computer is a movie set. You have actors (your apps), cameras (your screen), and microphones (your speakers).
              But without a <strong>Director</strong> telling everyone what to do, it's just chaos!! 🎬
              <br /><br />
              An <strong>Operating System (or OS)</strong> is that Director. It makes sure Minecraft gets the power it needs, your YouTube video has sound, and your keyboard actually types letters. Pretty cool right??
            </p>
          </div>

          <h3 style={{ textAlign: "center", color: "#0055ff", fontSize: "18px", marginBottom: "16px" }}>
            -- some extra stuff i learned (its actually really interesting!!) --
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
            {[
              { color: "#cc6600", title: "🕰️ Unix (1969)", text: 'Unix was the GRANDFATHER of all operating systems. Made in 1969 by Bell Labs. Linux is basically inspired by it. Even macOS uses Unix underneath!!' },
              { color: "#0055ff", title: "💾 Windows 98 & DOS", text: "Before Windows had a Start Menu it was just a black screen where you typed commands!! Called MS-DOS. Windows 98 was the first one most people used at home." },
              { color: "#9900cc", title: "🌳 The Unix Family Tree", text: "Unix had kids: BSD → macOS, and Linux. Windows is in its own separate family (called NT). That's why .exe files don't work on Linux!!" },
              { color: "#cc0000", title: "01 Binary", text: 'Computers ONLY understand 1s and 0s. The letter "A" is 01000001 in binary. Every video game, song, and website is just billions of on/off switches. Wild!!' },
              { color: "#007700", title: "🧩 The Kernel", text: "The kernel is the innermost part of the OS. It talks directly to the hardware. Linux is JUST a kernel technically - everything else around it is extra software." },
              { color: "#006699", title: "📥 .exe vs .deb files", text: "Different OSes use different file formats. .exe is Windows only. .deb is for Ubuntu/Linux. You can't run a .exe on Linux - it's like putting a Nintendo cartridge in a PlayStation." },
            ].map((card, i) => (
              <div key={i} style={{ background: "white", border: `3px solid ${card.color}`, borderRadius: "10px", padding: "16px" }}>
                <h4 style={{ color: card.color, margin: "0 0 8px 0", fontSize: "15px" }}>{card.title}</h4>
                <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr style={{ border: "4px solid #0055ff", margin: 0 }} />

      {/* WINDOWS */}
      <div style={{ background: "#dde8ff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textAlign: "center", fontSize: "clamp(30px, 6vw, 50px)", color: "#0055ff", marginBottom: "20px" }}>
            MEET WINDOWS 💻
          </h2>
          <div style={{ background: "#c8dcff", border: "4px solid #0055ff", borderRadius: "12px", padding: "25px", transform: "rotate(0.5deg)" }}>
            <p style={{ fontSize: "17px", lineHeight: "1.8", margin: "0 0 15px 0" }}>
              Made by a GIANT company called <strong>Microsoft</strong>. If you've used a computer at school, the library, or for gaming, you probably used Windows.
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1.8", margin: 0 }}>
              It's like the <em>default choice</em> — the vanilla ice cream of computers. It works great, everyone knows how to use it, and it usually comes pre-installed when you buy a PC.
            </p>
          </div>
        </div>
      </div>

      <hr style={{ border: "4px solid #9900cc", margin: 0 }} />

      {/* LINUX */}
      <div style={{ background: "#eeddf5", padding: "60px 20px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textAlign: "center", fontSize: "clamp(30px, 6vw, 50px)", color: "#9900cc", marginBottom: "20px" }}>
            MEET LINUX 🐧
          </h2>
          <div style={{ background: "#e0c3f5", border: "4px solid #9900cc", borderRadius: "12px", padding: "25px", transform: "rotate(-0.5deg)" }}>
            <p style={{ fontSize: "17px", lineHeight: "1.8", margin: "0 0 15px 0" }}>
              The <strong>REBEL</strong> of the computer world!! It has a cute penguin mascot named Tux 🐧
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1.8", margin: 0 }}>
              It wasn't made by one giant company to make money. Thousands of smart people around the world decided to give it away for <strong>FREE</strong>. You can change ANYTHING about it, and it secretly runs most of the internet!!
            </p>
          </div>
        </div>
      </div>

      <hr style={{ border: "4px dashed #ff6600", margin: 0 }} />

      {/* BIG COMPARISON TABLE */}
      <div style={{ background: "white", padding: "60px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textAlign: "center", fontSize: "clamp(36px, 8vw, 60px)", color: "#ff0055", marginBottom: "6px", textShadow: "3px 3px 0 #ffd0d0" }}>
            THE EPIC SHOWDOWN!!
          </h2>
          <p style={{ textAlign: "center", color: "#888", marginBottom: "28px", fontSize: "15px" }}>
            (i made this table myself using HTML!! 😎)
          </p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "3px solid black", fontSize: "15px", minWidth: "500px" }}>
              <thead>
                <tr>
                  <th style={{ background: "#222", color: "white", padding: "12px 14px", textAlign: "left", fontSize: "17px" }}>Category</th>
                  <th style={{ background: "#0055ff", color: "white", padding: "12px 14px", textAlign: "center", fontSize: "17px" }}>💻 Windows</th>
                  <th style={{ background: "#9900cc", color: "white", padding: "12px 14px", textAlign: "center", fontSize: "17px" }}>🐧 Linux</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: "💰 Cost", win: "Costs money (~$130+ or comes with PC)", lin: "100% FREE forever!!" },
                  { cat: "🔒 Privacy", win: "Collects some data, sends it to Microsoft", lin: "Open source = anyone can check the code" },
                  { cat: "🎮 Gaming", win: "★★★★★ Best gaming support", lin: "★★★☆☆ Getting better with Steam/Proton!" },
                  { cat: "🛡️ Viruses", win: "More viruses target it (more users = more targets)", lin: "Way fewer viruses in the wild" },
                  { cat: "🖥️ Software", win: "Almost every app works on Windows", lin: "Some apps don't work (but alternatives exist)" },
                  { cat: "⚙️ Customizing", win: "Some options, but limited", lin: "You can change LITERALLY EVERYTHING" },
                  { cat: "📞 Getting Help", win: "Easy — most people use it", lin: "Big online community, can be confusing at first" },
                  { cat: "🐢 Old Computers", win: "Windows 11 won't install on old hardware", lin: "Can bring old slow computers back to life!!" },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#f9f9f9" : "white" }}>
                    <td style={{ padding: "11px 14px", borderTop: "1px solid #ddd", fontWeight: "bold", color: "#333" }}>{row.cat}</td>
                    <td style={{ padding: "11px 14px", borderTop: "1px solid #ddd", textAlign: "center", color: "#0044cc" }}>{row.win}</td>
                    <td style={{ padding: "11px 14px", borderTop: "1px solid #ddd", textAlign: "center", color: "#7700cc" }}>{row.lin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <hr style={{ border: "4px solid #007700", margin: 0 }} />

      {/* WHERE IS LINUX HIDING */}
      <div style={{ background: "#ddf5dd", padding: "60px 20px" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textAlign: "center", fontSize: "clamp(30px, 6vw, 50px)", color: "#007700", marginBottom: "16px" }}>
            LINUX IS EVERYWHERE!! 🌍
          </h2>
          <p style={{ textAlign: "center", fontSize: "17px", color: "#333", marginBottom: "28px", lineHeight: "1.6" }}>
            You probably use Linux every day without even knowing it lol. Here's where it's hiding:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
            {[
              { icon: "📱", title: "Android Phones", text: "Android is built on the Linux kernel. That means most smartphones in the world run Linux!!" },
              { icon: "🌐", title: "The Internet", text: "About 96% of web servers run Linux. When you visit any website, Linux is probably serving it to you." },
              { icon: "🎮", title: "PS5 & Steam Deck", text: "The PlayStation uses a customized OS built on Linux. So does the Steam Deck!!" },
              { icon: "🚀", title: "SpaceX Rockets", text: "The computers that control SpaceX rockets run Linux. ACTUAL ROCKETS!!" },
              { icon: "🧠", title: "Smart TVs", text: "Most smart TVs run Linux underneath. Samsung, LG, and lots more." },
              { icon: "☁️", title: "Cloud Computing", text: "Google, Amazon, and Microsoft all run their cloud servers on Linux. Even Microsoft uses Linux!!" },
            ].map((item, i) => (
              <div key={i} style={{ background: "white", border: "3px solid #007700", borderRadius: "10px", padding: "18px", textAlign: "center" }}>
                <div style={{ fontSize: "36px", marginBottom: "8px" }}>{item.icon}</div>
                <h4 style={{ color: "#007700", margin: "0 0 8px 0", fontSize: "15px" }}>{item.title}</h4>
                <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.5", color: "#444" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr style={{ border: "4px solid #009999", margin: 0 }} />

      {/* CHROMEBOOKS */}
      <div style={{ background: "#e0f7f7", padding: "60px 20px" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: "14px", color: "#555", marginBottom: "8px", letterSpacing: "2px", textTransform: "uppercase" }}>
            wait theres actually a third one at school...
          </p>
          <h2 style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textAlign: "center", fontSize: "clamp(28px, 6vw, 52px)", color: "#007777", marginBottom: "6px" }}>
            CHROMEBOOKS
          </h2>
          <p style={{ textAlign: "center", fontSize: "clamp(20px, 4vw, 32px)", fontWeight: "bold", color: "#cc0000", marginBottom: "28px", letterSpacing: "1px" }}>
            (dun dun duuuuunnnn 🎵)
          </p>

          <div style={{ background: "white", border: "4px solid #007777", borderRadius: "12px", padding: "25px", marginBottom: "20px" }}>
            <p style={{ fontSize: "17px", lineHeight: "1.8", margin: "0 0 15px 0" }}>
              If you've ever used a computer at school that looked kind of cheap, opened in like 8 seconds, and ran everything in a browser — that was probably a <strong>Chromebook</strong>.
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1.8", margin: 0 }}>
              Chromebooks run <strong>ChromeOS</strong>, made by Google. And here's the twist: <strong>ChromeOS is built on top of Linux.</strong> So technically, your boring school laptop is a Linux computer. It just has a really locked-down version that only really wants you to use Chrome and Google Docs!!
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px", marginBottom: "20px" }}>
            {[
              { color: "#007777", icon: "⚡", title: "Why schools love them", text: "They're cheap (~$200-300), turn on instantly, basically can't get viruses, and everything saves to Google Drive automatically. Perfect for schools that need 30 computers that just work." },
              { color: "#cc6600", icon: "🔒", title: "The catch", text: "Chromebooks are SUPER locked down. Your school's IT admin can control literally everything on it — what sites you can visit, what apps you can install, even when it turns off." },
              { color: "#9900cc", icon: "🐧", title: "The Linux secret", text: "Newer Chromebooks actually let you enable a real Linux terminal! It's called the Linux Development Environment. So your school laptop secretly has a full Linux hiding inside it!!" },
              { color: "#cc0000", icon: "💀", title: "The bad news", text: "Most Chromebooks have really weak processors and only 4GB of RAM. You can't install Windows games, Adobe apps, or most regular programs. They really only work well online." },
            ].map((card, i) => (
              <div key={i} style={{ background: "white", border: `3px solid ${card.color}`, borderRadius: "10px", padding: "16px" }}>
                <div style={{ fontSize: "28px", marginBottom: "6px" }}>{card.icon}</div>
                <h4 style={{ color: card.color, margin: "0 0 8px 0", fontSize: "15px" }}>{card.title}</h4>
                <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.6" }}>{card.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#007777", color: "white", borderRadius: "12px", padding: "20px", textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold", lineHeight: "1.7" }}>
              🏆 So the real school computer ranking is:<br />
              <span style={{ color: "#ffdd00" }}>Chromebook</span> (most locked down) → <span style={{ color: "#aaddff" }}>Windows</span> (middle ground) → <span style={{ color: "#aaffaa" }}>Linux</span> (total freedom)<br />
              <span style={{ fontSize: "13px", fontWeight: "normal", opacity: 0.85 }}>your school picked the one that lets them watch you the most lol</span>
            </p>
          </div>
        </div>
      </div>

      <hr style={{ border: "4px solid #ff6600", margin: 0 }} />

      {/* HARDWARE: ARM vs x86 */}
      <div style={{ background: "#fff5e0", padding: "60px 20px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textAlign: "center", fontSize: "clamp(28px, 5vw, 48px)", color: "#ff6600", marginBottom: "8px" }}>
            HARDWARE: ARM64 vs x86_64 🖥️
          </h2>
          <p style={{ textAlign: "center", color: "#888", marginBottom: "28px", fontSize: "14px" }}>
            (this is the advanced stuff but its actually really interesting!!)
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px", marginBottom: "18px" }}>
            <div style={{ background: "white", border: "3px solid #ff6600", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ color: "#ff6600", margin: "0 0 10px 0", fontSize: "20px" }}>x86_64 (Intel / AMD)</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                The architecture that most desktops and laptops use. Very powerful but uses more electricity. Intel and AMD both make these chips. Almost all PC games and software are built for x86_64. Your school computer probably uses this!!
              </p>
            </div>
            <div style={{ background: "white", border: "3px solid #cc0066", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ color: "#cc0066", margin: "0 0 10px 0", fontSize: "20px" }}>ARM64 (Apple Silicon etc.)</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                A newer design that uses WAY less power. Your phone is ARM64. Apple switched their Macs to ARM (called M1/M2/M3). ARM chips are faster per watt but some software doesn't work on them yet.
              </p>
            </div>
          </div>
          <div style={{ background: "#fff0d0", border: "3px dashed #ff6600", borderRadius: "10px", padding: "18px", textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: "15px", fontWeight: "bold", color: "#cc4400" }}>
              💡 COOL FACT: Linux runs on BOTH x86_64 AND ARM64!! Windows only recently started supporting ARM and it's still not great. This is why Linux runs on everything from phones to supercomputers!!
            </p>
          </div>
        </div>
      </div>

      <hr style={{ border: "4px solid #cc0066", margin: 0 }} />

      {/* GPUs */}
      <div style={{ background: "#f5e0ff", padding: "60px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textAlign: "center", fontSize: "clamp(28px, 5vw, 48px)", color: "#9900cc", marginBottom: "8px" }}>
            GPUs: THE OTHER BRAIN 🎮
          </h2>
          <p style={{ textAlign: "center", color: "#888", marginBottom: "28px", fontSize: "14px" }}>
            your CPU does the thinking. your GPU does the drawing. here's the difference!!
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "18px", marginBottom: "18px" }}>
            <div style={{ background: "white", border: "3px solid #9900cc", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ color: "#9900cc", margin: "0 0 10px 0", fontSize: "18px" }}>🧠 CPU vs 🎨 GPU — whats the difference??</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                The <strong>CPU</strong> is like one genius doing hard problems really fast. The <strong>GPU</strong> is like thousands of simple workers all doing tiny tasks at the same time. That parallel approach is perfect for graphics — you need to calculate millions of pixel colors every single frame!
              </p>
            </div>
            <div style={{ background: "white", border: "3px solid #0055ff", borderRadius: "10px", padding: "20px" }}>
              <h3 style={{ color: "#0055ff", margin: "0 0 10px 0", fontSize: "18px" }}>📺 Integrated vs Dedicated</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                <strong>Integrated:</strong> Built into the CPU chip. Uses regular RAM. Fine for YouTube and homework, can't run modern games well.<br /><br />
                <strong>Dedicated:</strong> A separate card with its own fast memory (called VRAM). WAY more powerful. Made by NVIDIA or AMD.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px", marginBottom: "18px" }}>
            {[
              { color: "#007700", badge: "🟢 NVIDIA", text: "Market leader. Made CUDA which lets GPUs do AI training. Historically BAD on Linux because their drivers are closed source. Getting better though!!" },
              { color: "#cc0000", badge: "🔴 AMD", text: "Main competitor to NVIDIA. Linux community LOVES AMD because their drivers are open source and built right into the Linux kernel — they just work without any setup!!" },
              { color: "#0055ff", badge: "🔵 Intel Arc", text: "Brand new GPU lineup from Intel. Also has open source drivers. Cheaper option. Still improving but promising!!" },
            ].map((b, i) => (
              <div key={i} style={{ background: "white", border: `3px solid ${b.color}`, borderRadius: "10px", padding: "15px" }}>
                <h4 style={{ color: b.color, margin: "0 0 8px 0", fontSize: "15px" }}>{b.badge}</h4>
                <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.5" }}>{b.text}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#222", color: "white", borderRadius: "10px", padding: "22px" }}>
            <h3 style={{ textAlign: "center", margin: "0 0 16px 0", color: "#ffdd00", fontSize: "18px" }}>GPUs aren't just for gaming anymore!!</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
              {[
                { icon: "🤖", t: "AI Training", d: "ChatGPT was trained on thousands of NVIDIA GPUs doing parallel math" },
                { icon: "🎬", t: "Video Editing", d: "4K video export takes minutes with a GPU vs hours with just a CPU" },
                { icon: "🔬", t: "Science Stuff", d: "Weather forecasting, drug discovery, and physics simulations all use GPUs" },
                { icon: "💎", t: "VRAM", d: "GPUs have their own RAM. More VRAM = better graphics & bigger AI models. Budget = 4–8GB, High-end = 16–24GB" },
              ].map((g, i) => (
                <div key={i} style={{ background: "#333", borderRadius: "8px", padding: "12px" }}>
                  <div style={{ fontSize: "24px", marginBottom: "6px" }}>{g.icon}</div>
                  <p style={{ fontWeight: "bold", margin: "0 0 4px 0", fontSize: "13px" }}>{g.t}</p>
                  <p style={{ margin: 0, fontSize: "12px", color: "#bbb", lineHeight: "1.4" }}>{g.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr style={{ background: "#ffdd00", height: "4px", border: "none", margin: 0 }} />

      {/* QUIZ */}
      <div style={{ background: "#ffdd00", padding: "60px 20px" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: 'Impact, "Arial Black", sans-serif', fontSize: "clamp(36px, 8vw, 60px)", color: "#333", marginBottom: "6px", textShadow: "2px 2px 0 white" }}>
            QUIZ TIME!! 🧠
          </h2>
          <p style={{ color: "#555", marginBottom: "28px", fontSize: "16px" }}>
            which one are you?? click one to find out!!
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", textAlign: "left" }}>
            <div
              onClick={() => setQuizPick("windows")}
              style={{ background: "white", border: `4px solid ${quizPick === "windows" ? "#0055ff" : "#ccc"}`, borderRadius: "12px", padding: "22px", cursor: "pointer", transition: "all 0.2s", boxShadow: quizPick === "windows" ? "0 0 0 4px #aaccff" : "none" }}
            >
              <h3 style={{ color: "#0055ff", borderBottom: "3px solid #dde8ff", paddingBottom: "8px", marginTop: 0, fontSize: "18px" }}>💻 You are Team Windows if...</h3>
              <ul style={{ paddingLeft: "20px", fontSize: "15px", lineHeight: "2.1", margin: 0 }}>
                <li>You just want things to work instantly</li>
                <li>You play a LOT of different PC games</li>
                <li>You don't care about changing how your screen looks too much</li>
                <li>You want it to "just work"</li>
              </ul>
            </div>
            <div
              onClick={() => setQuizPick("linux")}
              style={{ background: "white", border: `4px solid ${quizPick === "linux" ? "#9900cc" : "#ccc"}`, borderRadius: "12px", padding: "22px", cursor: "pointer", transition: "all 0.2s", boxShadow: quizPick === "linux" ? "0 0 0 4px #ddaaff" : "none" }}
            >
              <h3 style={{ color: "#9900cc", borderBottom: "3px solid #eeddf5", paddingBottom: "8px", marginTop: 0, fontSize: "18px" }}>🐧 You are Team Linux if...</h3>
              <ul style={{ paddingLeft: "20px", fontSize: "15px", lineHeight: "2.1", margin: 0 }}>
                <li>You like tinkering, building, and coding</li>
                <li>You have an old, slow PC and want a modern OS for free</li>
                <li>You want fine-grained control and infinite customizability</li>
                <li>You want to configure everything yourself</li>
              </ul>
            </div>
          </div>

          {quizPick && (
            <div style={{ marginTop: "24px", background: quizPick === "windows" ? "#dde8ff" : "#eeddf5", border: `4px solid ${quizPick === "windows" ? "#0055ff" : "#9900cc"}`, borderRadius: "12px", padding: "20px", fontSize: "18px", fontWeight: "bold", color: quizPick === "windows" ? "#0044cc" : "#7700cc" }}>
              {quizPick === "windows"
                ? "💻 You picked Team Windows!! Good choice — it's reliable and easy to use. Most games work great on it!!"
                : "🐧 You picked Team Linux!! Awesome!! You are officially a power user. Welcome to the penguin side 🐧"}
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: "#222", color: "white", padding: "30px 20px", textAlign: "center", borderTop: "4px solid #9900cc" }}>
        <p style={{ margin: "0 0 8px 0", fontSize: "18px", fontWeight: "bold" }}>
          Built for awesome 7th graders. Go learn something cool today!! 🚀
        </p>
        <p style={{ margin: "0 0 8px 0", color: "#aaa", fontSize: "13px" }}>
          made for science class :) &nbsp;|&nbsp; <span style={{ animation: "blink 1s step-start infinite", color: "#ffdd00" }}>★ BEST VIEWED IN GOOGLE CHROME ★</span>
        </p>
      </div>

    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
