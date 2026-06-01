import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  MonitorPlay, 
  Gamepad2, 
  TerminalSquare, 
  Wallet, 
  ShieldCheck, 
  Laptop, 
  Smartphone, 
  Rocket, 
  Tv 
} from "lucide-react";
import { useRef } from "react";

const queryClient = new QueryClient();

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
    className={className}
  >
    {children}
  </motion.div>
);

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans" ref={containerRef}>
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 -z-10 bg-primary/10"
          style={{ y: heroY }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/30 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-4xl mx-auto z-10"
        >
          <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm mb-6 uppercase tracking-wider shadow-sm transform -rotate-2">
            an eduacational webpage to help inform the uninformed
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-primary mb-6 leading-tight drop-shadow-md">
            Linux <span className="text-foreground">vs</span> Windows
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-foreground/80 mb-10 max-w-2xl mx-auto">
            The computer showdown you didn't know you needed. Let's make sense of it all.
          </p>
          
        </motion.div>
      </section>

      {/* 2. WHAT IS AN OS? */}
      <section className="py-24 px-6 bg-secondary text-secondary-foreground relative">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-center text-white drop-shadow-sm">
              Wait... What's an "Operating System"?
            </h2>
          </FadeIn>

          <div className="max-w-3xl mx-auto mb-16">
            <FadeIn delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 shadow-lg">
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-white">
                  Imagine your computer is a movie set. You have actors (your apps), cameras (your screen), and microphones (your speakers). 
                  <br/><br/>
                  But without a <strong>Director</strong> telling everyone what to do, it's just chaos. 
                  <br/><br/>
                  An <strong>Operating System (or OS for short)</strong> is the Director. It makes sure Minecraft gets the power it needs, your YouTube video has sound, and your keyboard actually types letters.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-10 opacity-80">
              Want to go deeper? Here's where it all came from.
            </h3>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <FadeIn delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">🕰️</div>
                <h3 className="text-xl font-black text-white mb-3">Unix — Where It All Started</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  In <strong>1969</strong>, engineers at Bell Labs (AT&T) built an operating system called <strong>Unix</strong>. It introduced ideas that every modern OS still uses today — the idea of files and folders, running multiple programs at once, and user permissions. Unix was the grandfather of almost everything. Linux is directly inspired by it. macOS is actually built on a Unix foundation. Even the command line you see hackers use in movies comes from Unix.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">💾</div>
                <h3 className="text-xl font-black text-white mb-3">Windows 98 & The DOS Days</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  Before Windows looked the way it does now, it was very different. In the 1980s, PCs ran <strong>MS-DOS</strong> — a text-only OS where you typed every command by hand with no mouse. Windows started as a graphical layer on top of DOS. <strong>Windows 98</strong> was a huge moment — it brought the Start Menu, plug-and-play hardware, and Internet Explorer to millions of homes for the first time. It's what turned the PC from a nerdy tool into a household appliance.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">🌳</div>
                <h3 className="text-xl font-black text-white mb-3">The Unix Family Tree</h3>
                <p className="text-white/80 font-medium leading-relaxed mb-4">
                  Unix had many descendants. Some were free, some cost money. Here's the rough family:
                </p>
                <div className="space-y-2 text-sm font-medium">
                  <div className="bg-white/10 rounded-xl px-4 py-2 text-white">Unix (1969) — the original</div>
                  <div className="ml-4 bg-white/10 rounded-xl px-4 py-2 text-white">BSD — free Unix clone (1977)</div>
                  <div className="ml-8 bg-white/10 rounded-xl px-4 py-2 text-white">macOS — Apple's Unix (2001)</div>
                  <div className="ml-4 bg-white/10 rounded-xl px-4 py-2 text-white">Linux — inspired by Unix (1991)</div>
                  <div className="ml-8 bg-white/10 rounded-xl px-4 py-2 text-white">Android, ChromeOS, Ubuntu...</div>
                  <div className="bg-white/10 rounded-xl px-4 py-2 text-white/60">Windows — separate lineage entirely</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">01</div>
                <h3 className="text-xl font-black text-white mb-3">Binary — What Computers Actually Speak</h3>
                <p className="text-white/80 font-medium leading-relaxed mb-4">
                  At the very bottom of everything — underneath the OS, underneath the firmware — computers only understand one thing: <strong>binary</strong>. That's just 1s and 0s. On or off. Electricity flowing or not.
                </p>
                <p className="text-white/80 font-medium leading-relaxed mb-4">
                  The letter "A" is <code className="bg-white/20 rounded px-1">01000001</code> in binary. The number 7 is <code className="bg-white/20 rounded px-1">00000111</code>. Every image, every song, every game is ultimately billions of these tiny switches being flipped on and off, billions of times per second.
                </p>
                <p className="text-white/80 font-medium leading-relaxed">
                  The OS's job partly involves translating between the human-friendly things you do (click a button, type a letter) and the binary the chip actually executes.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">🧩</div>
                <h3 className="text-xl font-black text-white mb-3">The Kernel — The OS's Inner Core</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  The heart of any OS is called the <strong>kernel</strong>. It's the part that actually talks to the hardware. Everything else — the desktop, the taskbar, the file browser — is just a pretty shell around the kernel. Linux is technically <em>just the kernel</em>; when people say "I use Linux," they mean the kernel plus a bunch of other software around it. The Windows kernel is called <strong>NT</strong> (New Technology) and has been around since 1993. The Linux kernel was written by a Finnish university student named <strong>Linus Torvalds</strong> in 1991.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">📥</div>
                <h3 className="text-xl font-black text-white mb-3">.exe vs .msi vs .deb vs .rpm</h3>
                <p className="text-white/80 font-medium leading-relaxed mb-5">
                  When you download a program, the file format tells you which OS it was built for — and how it installs. They're all "binaries" (compiled machine code), but packaged differently.
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-900/50 border border-blue-700/40 rounded-xl p-4">
                    <p className="font-black text-white mb-1">.exe — Windows Executable</p>
                    <p className="text-white/70 font-medium text-sm">The classic Windows program file. Double-click and it runs. No package manager involved — you're on your own for updates.</p>
                  </div>
                  <div className="bg-blue-900/50 border border-blue-700/40 rounded-xl p-4">
                    <p className="font-black text-white mb-1">.msi — Windows Installer</p>
                    <p className="text-white/70 font-medium text-sm">A smarter Windows package. Handles installation steps, adds the app to your Start Menu, and can cleanly uninstall — unlike a bare .exe which can leave junk behind.</p>
                  </div>
                  <div className="bg-purple-900/50 border border-purple-700/40 rounded-xl p-4">
                    <p className="font-black text-white mb-1">.deb — Debian/Ubuntu Package</p>
                    <p className="text-white/70 font-medium text-sm">Used by Debian, Ubuntu, and Linux Mint. Handled by the <code className="bg-white/10 rounded px-1">apt</code> package manager. Includes metadata, dependencies, and uninstall info all in one file.</p>
                  </div>
                  <div className="bg-red-900/50 border border-red-700/40 rounded-xl p-4">
                    <p className="font-black text-white mb-1">.rpm — Red Hat Package</p>
                    <p className="text-white/70 font-medium text-sm">Used by Fedora, RHEL, and CentOS. Handled by <code className="bg-white/10 rounded px-1">dnf</code> or <code className="bg-white/10 rounded px-1">yum</code>. Same idea as .deb but for a different family of Linux distros.</p>
                  </div>
                  <div className="bg-green-900/50 border border-green-700/40 rounded-xl p-4">
                    <p className="font-black text-white mb-1">.AppImage — Universal Linux App</p>
                    <p className="text-white/70 font-medium text-sm">A single self-contained file that runs on almost any Linux distro — no installation, no package manager needed. You download it, mark it as executable, and double-click. It bundles everything the app needs inside itself. Think of it like a .exe but for all of Linux at once.</p>
                  </div>
                </div>
                <p className="text-white/60 font-medium text-sm mt-4">
                  A .deb won't run on Windows, and a .exe won't run on Linux — they're compiled for completely different environments. This is why you can't just grab any download and expect it to work everywhere.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="bg-accent text-accent-foreground p-7 rounded-3xl shadow-lg h-full">
                <div className="text-4xl mb-4">🔢</div>
                <h3 className="text-xl font-black mb-3">Hexadecimal — Binary's Shorthand</h3>
                <p className="font-medium leading-relaxed opacity-90 mb-4">
                  Binary is hard to read. So programmers invented <strong>hexadecimal</strong> — a number system that uses 0–9 plus A–F to represent values. It packs four binary digits into one symbol.
                </p>
                <div className="bg-black/20 rounded-2xl p-4 font-mono text-sm space-y-1">
                  <p><span className="opacity-60">Binary: </span>0000 = <span className="font-bold">0</span></p>
                  <p><span className="opacity-60">Binary: </span>1010 = <span className="font-bold">A</span></p>
                  <p><span className="opacity-60">Binary: </span>1111 = <span className="font-bold">F</span></p>
                  <p><span className="opacity-60">Color #FF5733 = </span><span className="font-bold">255 red, 87 green, 51 blue</span></p>
                </div>
                <p className="font-medium leading-relaxed opacity-90 mt-4 text-sm">
                  You've seen hex every time you've seen a color like <strong>#FF5733</strong> in an art app or on a website.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 2b. WHAT IS FIRMWARE? */}
      <section className="py-24 px-6 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/20 rounded-full blur-3xl -z-0" />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-center text-white drop-shadow-sm">
              Wait... What is <strong className="underline decoration-accent decoration-4">firmware</strong>?
            </h2>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 shadow-lg">
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-6">
                  Okay, so remember how the Operating System is like the Director of a movie set? Well, firmware is the <strong>building itself</strong> — the walls, the electricity, the plumbing.
                </p>
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-6">
                  Firmware is a tiny piece of software that lives <em>inside</em> the hardware — like your keyboard, your graphics card, or your router. It's baked in at the factory and tells that specific piece of hardware the bare minimum it needs to know to turn on and do its job.
                </p>
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-white">
                  You almost never touch firmware. It just sits there quietly doing its thing. But here's the wild part — your computer actually runs firmware <em>before</em> it even loads Windows or Linux. It wakes up, checks that everything is plugged in and working, and then hands control over to the OS. That startup firmware is called the <strong>BIOS</strong> (or its newer version, <strong>UEFI</strong>).
                </p>
              </div>
            </FadeIn>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <FadeIn delay={0.3}>
                <div className="bg-accent text-accent-foreground p-6 rounded-2xl text-center shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <p className="text-3xl mb-3">⌨️</p>
                  <p className="font-bold text-lg mb-1">Your Keyboard</p>
                  <p className="font-medium opacity-80">Has firmware that tells it how to send keystrokes</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="bg-white text-secondary p-6 rounded-2xl text-center shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <p className="text-3xl mb-3">📡</p>
                  <p className="font-bold text-lg mb-1 text-blue-950">Your Router</p>
                  <p className="font-medium text-blue-950 opacity-80">Uses firmware to manage your Wi-Fi connection</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.7}>
                <div className="bg-primary text-primary-foreground p-6 rounded-2xl text-center shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <p className="text-3xl mb-3">🖥️</p>
                  <p className="font-bold text-lg mb-1">Your Motherboard</p>
                  <p className="font-medium opacity-80">Runs BIOS/UEFI firmware before any OS loads</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT IS WINDOWS? */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <div className="bg-blue-100 p-8 rounded-3xl border-4 border-blue-200 shadow-lg transform rotate-1">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-blue-900">
                  Meet Windows
                </h2>
                <p className="text-xl text-blue-800 leading-relaxed font-medium mb-4">
                  Made by a giant company called Microsoft. 
                </p>
                <p className="text-xl text-blue-800 leading-relaxed font-medium">
                  If you've used a computer at school, the library, or to play games, you probably used Windows. It's like the default choice — the vanilla ice cream of computers. It works great, everyone knows how to use it, and it costs money to buy.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. WHAT IS LINUX? */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 shadow-lg transform -rotate-1">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                  Meet Linux
                </h2>
                <p className="text-xl text-white/90 leading-relaxed font-medium mb-4">
                  The rebel of the computer world! It has a cute penguin mascot named Tux.
                </p>
                <p className="text-xl text-white/90 leading-relaxed font-medium">
                  It wasn't made by one giant company to make money. It was built by thousands of smart people around the world who decided to give it away for <strong>free</strong>. You can change anything about it, and it secretly runs the internet.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. THE BIG COMPARISON */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-16 text-center text-foreground">
              The Epic Showdown
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cost */}
            <FadeIn delay={0.1}>
              <div className="bg-card p-8 rounded-3xl shadow-md border-2 border-card-border hover:shadow-xl transition-shadow h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent rounded-xl"><Wallet size={32} className="text-accent-foreground" /></div>
                  <h3 className="text-2xl font-bold">Cost</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <p className="font-bold text-blue-900">Windows:</p>
                    <p className="text-blue-800">Costs money (usually $100+ just for the software!).</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <p className="font-bold text-purple-900">Linux:</p>
                    <p className="text-purple-800">100% Free. Always.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Customization */}
            <FadeIn delay={0.2}>
              <div className="bg-card p-8 rounded-3xl shadow-md border-2 border-card-border hover:shadow-xl transition-shadow h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary rounded-xl"><TerminalSquare size={32} className="text-secondary-foreground" /></div>
                  <h3 className="text-2xl font-bold">Making it Yours</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <p className="font-bold text-blue-900">Windows:</p>
                    <p className="text-blue-800">Microsoft controls how it looks. You can change your wallpaper, but that's about it.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <p className="font-bold text-purple-900">Linux:</p>
                    <p className="text-purple-800">Like Lego bricks! You can change literally anything to make it look exactly how you want.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Gaming */}
            <FadeIn delay={0.3}>
              <div className="bg-card p-8 rounded-3xl shadow-md border-2 border-card-border hover:shadow-xl transition-shadow h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-destructive rounded-xl"><Gamepad2 size={32} className="text-destructive-foreground" /></div>
                  <h3 className="text-2xl font-bold">Gaming</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <p className="font-bold text-blue-900">Windows:</p>
                    <p className="text-blue-800">The clear winner! Almost all PC games are made for Windows first.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <p className="font-bold text-purple-900">Linux:</p>
                    <p className="text-purple-800">Getting much better (thanks to the Steam Deck!), but some games with anti-cheat won't work.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Safety */}
            <FadeIn delay={0.4}>
              <div className="bg-card p-8 rounded-3xl shadow-md border-2 border-card-border hover:shadow-xl transition-shadow h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-500 rounded-xl"><ShieldCheck size={32} className="text-white" /></div>
                  <h3 className="text-2xl font-bold">Viruses & Spying</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <p className="font-bold text-blue-900">Windows:</p>
                    <p className="text-blue-800">Gets a lot of viruses because it's so popular. Plus, it tracks a lot of what you do for ads.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <p className="font-bold text-purple-900">Linux:</p>
                    <p className="text-purple-800">Barely ever gets viruses. And it respects your privacy — no spying!</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. WHERE IS LINUX HIDING? */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-center text-white">
              Linux is Hiding Everywhere!
            </h2>
            <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
              You might think you've never used Linux, but it's secretly running the coolest stuff on Earth (and in space).
            </p>
          </FadeIn>

          <div className="max-w-2xl mx-auto space-y-6">
              <FadeIn delay={0.3}>
                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-2xl">
                  <Smartphone className="text-accent" size={32} />
                  <p className="text-lg font-medium text-white">Every Android phone is actually running Linux inside!</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-2xl">
                  <Laptop className="text-primary" size={32} />
                  <p className="text-lg font-medium text-white">Chromebooks at school? Yep, that's just a special version of Linux from Google.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-2xl">
                  <Rocket className="text-secondary" size={32} />
                  <p className="text-lg font-medium text-white">NASA and SpaceX rockets use Linux to go to space. Even the International Space Station runs on it!</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.6}>
                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-2xl">
                  <Tv className="text-destructive" size={32} />
                  <p className="text-lg font-medium text-white">Smart TVs and even ATMs use it because it never crashes.</p>
                </div>
              </FadeIn>
          </div>
        </div>
      </section>

      {/* 6b. HARDWARE: ARM64 vs x86_64 */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-center text-foreground">
              Wait — Not All Computers Are Built the Same
            </h2>
            <p className="text-xl text-center text-foreground/70 font-medium mb-16 max-w-3xl mx-auto">
              Before we go further, there's something wild you probably never knew: computers don't all speak the same language inside. The <strong>chip</strong> — the brain of your device — comes in two very different flavors.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0.2}>
              <div className="bg-card p-8 rounded-3xl border-2 border-card-border shadow-md h-full">
                <div className="text-5xl mb-4 text-center">🖥️</div>
                <h3 className="text-2xl font-black text-center mb-4 text-foreground">x86_64</h3>
                <p className="text-lg font-semibold text-center text-primary mb-4">"The Classic Desktop Brain"</p>
                <p className="text-lg font-medium text-foreground/80 leading-relaxed">
                  This is the chip design that's been inside most laptops and desktop PCs for decades. Intel and AMD make these. When people say "a PC," they almost always mean an x86_64 machine. Windows was built entirely around this architecture — it's basically their home turf.
                </p>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="font-bold text-blue-900 mb-1">You'll find x86_64 in:</p>
                  <p className="text-blue-800 font-medium">Most Windows laptops, gaming PCs, desktop computers, and servers in data centers.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-card p-8 rounded-3xl border-2 border-card-border shadow-md h-full">
                <div className="text-5xl mb-4 text-center">📱</div>
                <h3 className="text-2xl font-black text-center mb-4 text-foreground">ARM64</h3>
                <p className="text-lg font-semibold text-center text-secondary mb-4">"The Efficient Mobile Brain"</p>
                <p className="text-lg font-medium text-foreground/80 leading-relaxed">
                  ARM chips were designed to use as little battery as possible while still being powerful. They're everywhere in phones and tablets. But recently, ARM has been showing up in laptops too — Apple's M1/M2/M3 chips are ARM, and it turns out they're incredibly fast.
                </p>
                <div className="mt-6 p-4 bg-purple-50 rounded-xl">
                  <p className="font-bold text-purple-900 mb-1">You'll find ARM64 in:</p>
                  <p className="text-purple-800 font-medium">Every smartphone, every iPad, Apple MacBooks (2020 and newer), Raspberry Pi, and Chromebooks.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="bg-foreground text-background p-8 rounded-3xl shadow-xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-black mb-4 text-white">So where do phones fit in?</h3>
              <p className="text-lg font-medium text-white/80 leading-relaxed mb-4">
                Phones are basically tiny ARM computers — and they run their own special operating systems. Android is built on top of Linux (so Tux the penguin is secretly inside your phone). iOS on iPhones is Apple's own OS, also built for ARM.
              </p>
              <p className="text-lg font-medium text-white/80 leading-relaxed mb-4">
                Here's the weird part: you can't just take a Windows program and run it on a phone. The phone's chip speaks a different language. That's why apps have to be specially made for Android or iPhone — it's not the same code that runs on your PC.
              </p>
              <p className="text-lg font-medium text-white/80 leading-relaxed">
                Linux, being open and flexible, actually runs on <em>both</em> x86_64 and ARM64. That's a big reason it's everywhere — from your phone to a SpaceX rocket to a supercomputer. Windows only recently started supporting ARM, and it still has a long way to go.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6b2. GPUs */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-center text-foreground">
              GPUs: The Other Brain
            </h2>
            <p className="text-xl text-center text-foreground/70 font-medium mb-16 max-w-3xl mx-auto">
              Your CPU handles general thinking. Your GPU handles the visual stuff — and a whole lot more.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <FadeIn delay={0.1}>
              <div className="bg-card p-8 rounded-3xl border-2 border-card-border shadow-md h-full">
                <div className="text-5xl mb-4">🧠 vs 🎨</div>
                <h3 className="text-2xl font-black text-foreground mb-4">CPU vs GPU — What's the Difference?</h3>
                <p className="text-foreground/80 font-medium leading-relaxed mb-4">
                  Your <strong>CPU (Central Processing Unit)</strong> is the main brain — it handles a few tasks at a time but does each one incredibly fast. Think of it as one genius solving problems one by one.
                </p>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  Your <strong>GPU (Graphics Processing Unit)</strong> works completely differently. It's thousands of tiny, simpler processors all working in parallel. Think of it as an army of workers each doing one tiny piece of a giant puzzle at the same time. That's perfect for rendering graphics — where you need to calculate the colour of millions of pixels simultaneously, every single frame.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-card p-8 rounded-3xl border-2 border-card-border shadow-md h-full">
                <div className="text-5xl mb-4">📺</div>
                <h3 className="text-2xl font-black text-foreground mb-4">Integrated vs Dedicated Graphics</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <p className="font-bold text-blue-900 mb-1">Integrated GPU</p>
                    <p className="text-blue-800 font-medium">Built into the same chip as the CPU. Uses your regular RAM. Found in laptops, Chromebooks, and budget PCs. Fine for YouTube and schoolwork, struggles with modern games or video editing. Intel calls theirs "Intel Iris" or "Intel UHD".</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <p className="font-bold text-purple-900 mb-1">Dedicated GPU</p>
                    <p className="text-purple-800 font-medium">A separate card plugged into the motherboard with its own fast memory (called VRAM). Much more powerful. Found in gaming PCs and workstations. Made by NVIDIA or AMD. Runs hot and needs its own power connector.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <FadeIn delay={0.3}>
              <div className="bg-card p-7 rounded-3xl border-2 border-card-border shadow-md h-full">
                <div className="text-4xl mb-4">🟢</div>
                <h3 className="text-xl font-black text-foreground mb-3">NVIDIA</h3>
                <p className="text-foreground/80 font-medium leading-relaxed mb-3">
                  The market leader for gaming and AI. Their cards are called <strong>GeForce</strong> (consumer) and <strong>RTX/GTX</strong> series. NVIDIA invented <strong>CUDA</strong> — a way to use the GPU for non-graphics tasks like AI, video rendering, and scientific simulations.
                </p>
                <div className="p-3 bg-green-50 rounded-xl">
                  <p className="text-green-900 font-bold text-sm mb-1">On Linux:</p>
                  <p className="text-green-800 font-medium text-sm">Historically painful. NVIDIA uses proprietary (closed) drivers, so the Linux community had to work around them. Getting NVIDIA working well on Linux used to require significant effort — though it's improved a lot recently.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-card p-7 rounded-3xl border-2 border-card-border shadow-md h-full">
                <div className="text-4xl mb-4">🔴</div>
                <h3 className="text-xl font-black text-foreground mb-3">AMD</h3>
                <p className="text-foreground/80 font-medium leading-relaxed mb-3">
                  NVIDIA's main competitor. Their cards are called <strong>Radeon RX</strong> series. Generally a bit cheaper, and AMD has made a big push into the CPU+GPU combo chip space with their <strong>APUs</strong>.
                </p>
                <div className="p-3 bg-red-50 rounded-xl">
                  <p className="text-red-900 font-bold text-sm mb-1">On Linux:</p>
                  <p className="text-red-800 font-medium text-sm">AMD is the Linux community's darling. Their drivers are <strong>open source</strong> and built directly into the Linux kernel — meaning AMD graphics just work out of the box on Linux with no extra setup.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-card p-7 rounded-3xl border-2 border-card-border shadow-md h-full">
                <div className="text-4xl mb-4">🔵</div>
                <h3 className="text-xl font-black text-foreground mb-3">Intel Arc</h3>
                <p className="text-foreground/80 font-medium leading-relaxed mb-3">
                  Intel — who made integrated graphics for decades — recently released their first dedicated GPU line called <strong>Arc</strong>. They're the newcomer, often cheaper, and improving fast.
                </p>
                <div className="p-3 bg-blue-50 rounded-xl">
                  <p className="text-blue-900 font-bold text-sm mb-1">On Linux:</p>
                  <p className="text-blue-800 font-medium text-sm">Similar to AMD — Intel's drivers are open source and built into the kernel. Generally works well, though the lineup is newer and less battle-tested than NVIDIA or AMD.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <div className="bg-foreground text-background p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-black text-white mb-6 text-center">GPUs Aren't Just for Gaming Anymore</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: "🤖", title: "AI & Machine Learning", desc: "Training AI models requires doing billions of simple math operations in parallel — exactly what GPUs are built for. ChatGPT was trained on thousands of NVIDIA GPUs." },
                  { icon: "🎬", title: "Video Editing", desc: "Exporting a 4K video means processing millions of frames. A GPU can do this in minutes; a CPU alone might take hours." },
                  { icon: "🔬", title: "Science & Simulation", desc: "Weather forecasting, drug discovery, and physics simulations all offload massive parallel calculations to GPUs." },
                  { icon: "💎", title: "VRAM — GPU Memory", desc: "GPUs have their own dedicated RAM called VRAM. More VRAM means higher-res textures in games and larger AI models. Budget cards have 4–8GB; high-end ones have 16–24GB." },
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.7 + i * 0.1}>
                    <div className="bg-gray-800 p-5 rounded-2xl h-full">
                      <p className="text-3xl mb-3">{item.icon}</p>
                      <p className="font-black text-white text-lg mb-2">{item.title}</p>
                      <p className="text-gray-300 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6c. GOING DEEPER: PHONE STUFF & BOOTLOADERS */}
      <section className="py-24 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-center text-white drop-shadow-sm">
              Going Deeper: The Stuff They Don't Teach You
            </h2>
            <p className="text-xl text-center text-white/70 font-medium mb-16 max-w-3xl mx-auto">
              Once you know about operating systems and hardware, a whole world of more advanced — but genuinely fascinating — concepts opens up. Here's a quick tour.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <FadeIn delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">🔓</div>
                <h3 className="text-xl font-black text-white mb-3">Jailbreaking a Phone</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  Apple locks down iPhones hard — you can only install apps they approve. <strong>Jailbreaking</strong> is the process of tricking the iPhone into removing those restrictions so you can install anything you want. It's legal to do to your own phone, but it voids your warranty and can make it less secure. Think of it like breaking the seal on something — you can, but Apple won't help you if things go wrong.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">🐧</div>
                <h3 className="text-xl font-black text-white mb-3">PostmarketOS</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  Remember how Linux can run on almost anything? <strong>PostmarketOS</strong> is a version of Linux that people have gotten running on old Android phones. So instead of throwing away a phone from 2015 that no longer gets updates, you can flash PostmarketOS onto it and give it a whole new life with a full Linux operating system. It's complicated to set up, but it's genuinely impressive.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-black text-white mb-3">Rooting a Phone</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  On Android, <strong>rooting</strong> is similar to jailbreaking on iPhone — it gives you "root" access, meaning you become the all-powerful admin of your own phone. Normally Android hides a lot of controls from you. With root, you can delete apps that came pre-installed, change deep system settings, or even install a completely different version of Android. More power, more risk.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-black text-white mb-3">Fastboot vs Firmware</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  <strong>Firmware</strong> is the low-level software baked into your hardware (you already know this!). <strong>Fastboot</strong> is a tool you can use on a computer to talk directly to an Android phone at the hardware level — before the OS even loads. It lets you flash (write) new software directly onto the phone's storage. Developers use it to install custom operating systems or recover a phone that won't turn on normally.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">🥾</div>
                <h3 className="text-xl font-black text-white mb-3">Bootloaders for PCs</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  When your PC turns on, the firmware (BIOS/UEFI) wakes up and immediately hands control to a small program called a <strong>bootloader</strong>. The bootloader's only job is to find your operating system and start it. On Linux, the most common bootloader is called <strong>GRUB</strong>. If you have both Windows and Linux installed, GRUB shows you a menu at startup asking which one you want to boot into — this is called <strong>dual booting</strong>.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="bg-accent text-accent-foreground p-7 rounded-3xl shadow-lg h-full hover:brightness-105 transition-all duration-300">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-black mb-3">Developer Options</h3>
                <p className="font-medium leading-relaxed opacity-90 mb-4">
                  Android phones hide a secret menu called <strong>Developer Options</strong> that's normally invisible. It has advanced controls that most people don't need — but it's also where you enable things like USB debugging (needed for Fastboot) or animation speed tweaks.
                </p>
                <div className="bg-black/20 rounded-2xl p-4">
                  <p className="font-bold mb-2">How to unlock it:</p>
                  <ol className="space-y-1 font-medium opacity-90 list-none">
                    <li>1. Go to <strong>Settings</strong></li>
                    <li>2. Tap <strong>About Phone</strong></li>
                    <li>3. Find <strong>Build Number</strong></li>
                    <li>4. Tap it <strong>7 times in a row</strong></li>
                    <li>5. Developer Options appears in Settings!</li>
                  </ol>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">⚔️</div>
                <h3 className="text-xl font-black text-white mb-3">systemd-boot vs GRUB</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  You already know GRUB — it's the most popular bootloader for Linux. But there's a newer, simpler option called <strong>systemd-boot</strong>. GRUB is powerful and can boot almost anything, including Windows. systemd-boot is much more minimal — it only knows how to load Linux (and Windows via a handoff), but it starts faster and has fewer moving parts to break. Many modern Linux installs now default to systemd-boot. It's the difference between a Swiss Army knife and a perfectly sharpened chef's knife.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="bg-white/10 backdrop-blur-sm p-7 rounded-3xl border-2 border-white/20 shadow-lg h-full hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-black text-white mb-3">UKI — Unified Kernel Image</h3>
                <p className="text-white/80 font-medium leading-relaxed">
                  Normally, when Linux boots, it loads several separate pieces one by one: the bootloader, then the kernel (the core of Linux), then a temporary mini-filesystem, then the real OS. A <strong>Unified Kernel Image (UKI)</strong> bundles the kernel and the temporary filesystem into one single signed file. Why does that matter? Because it makes the boot process more secure — your computer can verify that nothing has been tampered with before it even starts loading Linux. It's like sealing everything in a tamper-proof envelope.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 6d. FIRMWARE DEEP DIVE */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-center text-white drop-shadow-sm">
              Firmware: A Deeper Look
            </h2>
            <p className="text-xl text-center text-gray-400 font-medium mb-16 max-w-3xl mx-auto">
              Earlier we said firmware is the "building" your OS lives in. Let's break open that building and look inside, because there are actually several different kinds.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <FadeIn delay={0.15}>
              <div className="bg-gray-800 p-8 rounded-3xl border-2 border-gray-700 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-black rounded-lg px-3 py-1.5 font-mono text-green-400 text-xs font-bold tracking-wider border border-green-800 leading-tight">
                    <span className="opacity-60">C:\&gt; </span>BIOS_
                  </div>
                  <h3 className="text-2xl font-black text-white">BIOS</h3>
                  <span className="ml-auto text-xs font-bold bg-gray-700 text-gray-300 px-3 py-1 rounded-full uppercase tracking-wider">Legacy</span>
                </div>
                <p className="text-gray-300 font-medium leading-relaxed mb-4">
                  <strong className="text-white">Basic Input/Output System.</strong> BIOS is the original firmware that personal computers shipped with starting in the 1970s. When you turn on a PC, BIOS is the first thing that runs — it checks that your RAM, CPU, and storage are there, then finds your bootloader and hands off control.
                </p>
                <p className="text-gray-300 font-medium leading-relaxed">
                  BIOS is ancient by computing standards. It has a 16-bit brain (very old), can only read the first 2TB of a hard drive, and can only boot from a specific tiny section of the disk called the MBR. Most new computers no longer use classic BIOS — they use UEFI instead.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-gray-800 p-8 rounded-3xl border-2 border-gray-700 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">🚀</span>
                  <h3 className="text-2xl font-black text-white">UEFI</h3>
                  <span className="ml-auto text-xs font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full uppercase tracking-wider">Modern</span>
                </div>
                <p className="text-gray-300 font-medium leading-relaxed mb-4">
                  <strong className="text-white">Unified Extensible Firmware Interface.</strong> UEFI is the modern replacement for BIOS. It has a full graphical interface (you can use your mouse in it!), supports drives larger than 2TB, loads the OS faster, and has a security feature called <strong>Secure Boot</strong> that checks nothing suspicious has replaced your bootloader.
                </p>
                <p className="text-gray-300 font-medium leading-relaxed">
                  UEFI uses a special disk partition called the <strong>ESP (EFI System Partition)</strong> to store bootloaders. All modern PCs, Macs, and even some phones use UEFI. If you've ever pressed F2 or DEL at startup to see a settings screen, that was UEFI.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="bg-gray-800 p-8 rounded-3xl border-2 border-gray-700 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">🔐</span>
                  <h3 className="text-2xl font-black text-white">Secure Boot</h3>
                  <span className="ml-auto text-xs font-bold bg-accent text-accent-foreground px-3 py-1 rounded-full uppercase tracking-wider">Feature</span>
                </div>
                <p className="text-gray-300 font-medium leading-relaxed mb-4">
                  <strong className="text-white">Secure Boot</strong> is a UEFI feature that checks the digital signature of your bootloader before running it. Think of a signature like a wax seal on a letter — if the seal is broken, you know someone tampered with it.
                </p>
                <p className="text-gray-300 font-medium leading-relaxed">
                  This stops malware from hijacking your boot process. Most Linux distributions now support Secure Boot. Some older or custom Linux setups require you to disable it, which is why you'll sometimes see tutorials telling you to "turn off Secure Boot" — not because Linux is suspicious, but because the bootloader isn't signed with a key your firmware trusts yet.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="bg-gray-800 p-8 rounded-3xl border-2 border-gray-700 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">📟</span>
                  <h3 className="text-2xl font-black text-white">Embedded Firmware</h3>
                  <span className="ml-auto text-xs font-bold bg-secondary text-secondary-foreground px-3 py-1 rounded-full uppercase tracking-wider">Everywhere</span>
                </div>
                <p className="text-gray-300 font-medium leading-relaxed mb-4">
                  Not all firmware is about booting a full computer. Most firmware lives quietly inside specific components and never gets seen. Your <strong>SSD</strong> has firmware that manages where data is physically written. Your <strong>GPU</strong> has firmware that controls how it renders graphics. Your <strong>USB controller</strong> has firmware just to handle plugging things in.
                </p>
                <p className="text-gray-300 font-medium leading-relaxed">
                  These are updated separately from your OS — sometimes manufacturers release "firmware updates" for a hard drive or a graphics card to fix bugs or add features, just like a software update, but at the hardware level.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.7}>
            <div className="bg-accent text-accent-foreground p-8 rounded-3xl shadow-xl max-w-3xl mx-auto text-center">
              <p className="text-3xl mb-4">🧠</p>
              <h3 className="text-2xl font-black mb-3">The Big Picture</h3>
              <p className="text-lg font-medium leading-relaxed opacity-90">
                From the moment you press the power button: <strong>Embedded firmware</strong> wakes up each component → <strong>UEFI/BIOS</strong> checks everything is working → <strong>Bootloader</strong> (GRUB or systemd-boot) loads → <strong>Operating System</strong> (Linux or Windows) takes over → <strong>Apps</strong> run on top. Every layer depends on the one below it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6e. ANDROID VS APPLE */}
      <section className="py-24 px-6 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-center text-white drop-shadow-sm">
              Android vs iPhone: The Freedom Argument
            </h2>
            <p className="text-xl text-center text-white/70 font-medium mb-16 max-w-3xl mx-auto">
              Both are great phones. But under the hood, they treat you very differently.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <FadeIn delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 shadow-lg h-full">
                <div className="text-5xl text-center mb-4">🍎</div>
                <h3 className="text-2xl font-black text-center text-white mb-6">iPhone (Apple)</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="text-red-400 font-black text-xl mt-0.5">✗</span>
                    <p className="text-white/80 font-medium">You can only install apps Apple has approved in the App Store. They decide what's allowed on your own phone.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-red-400 font-black text-xl mt-0.5">✗</span>
                    <p className="text-white/80 font-medium">You can't replace the default apps. Stuck with Safari? Apple says so.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-red-400 font-black text-xl mt-0.5">✗</span>
                    <p className="text-white/80 font-medium">Rooting or jailbreaking is difficult, quickly patched, and voids all support.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-red-400 font-black text-xl mt-0.5">✗</span>
                    <p className="text-white/80 font-medium">The bootloader is locked with no official way to unlock it — Apple doesn't want you touching the internals.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-green-400 font-black text-xl mt-0.5">✓</span>
                    <p className="text-white/80 font-medium">In exchange, iPhones are polished, get long software support, and "just work" — Apple's whole philosophy is simplicity.</p>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-accent text-accent-foreground p-8 rounded-3xl shadow-xl h-full">
                <div className="text-5xl text-center mb-4">🤖</div>
                <h3 className="text-2xl font-black text-center mb-6">Android (Google + Others)</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="font-black text-xl mt-0.5">✓</span>
                    <p className="font-medium opacity-90">You can install apps from <strong>anywhere</strong> — not just the Play Store. This is called "sideloading" and Android supports it out of the box.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="font-black text-xl mt-0.5">✓</span>
                    <p className="font-medium opacity-90">Many Android manufacturers (OnePlus, Google Pixel, Fairphone) officially let you <strong>unlock the bootloader</strong> and install a completely different OS.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="font-black text-xl mt-0.5">✓</span>
                    <p className="font-medium opacity-90">Android is built on Linux — so the community around modifying it is huge. Custom ROMs like <strong>LineageOS</strong> can replace the entire Android install.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="font-black text-xl mt-0.5">✓</span>
                    <p className="font-medium opacity-90">You can root your phone, giving yourself full admin access — something Apple makes essentially impossible.</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="font-black text-xl mt-0.5 opacity-60">~</span>
                    <p className="font-medium opacity-80">The tradeoff: more freedom means more responsibility. You can break things. But you can also fix them.</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 max-w-3xl mx-auto text-center">
              <p className="text-2xl font-black text-white mb-3">The bottom line</p>
              <p className="text-lg text-white/80 font-medium leading-relaxed">
                An iPhone is like a company car — maintained for you, but you follow their rules. An Android is like owning your own car — you're responsible for it, but you can mod it, repaint it, swap the engine, or hand the keys to a mechanic. For people who like to tinker, Android wins every time.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6f. EDL MODE */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-center text-white">
              EDL Mode: The Nuclear Option
            </h2>
            <p className="text-xl text-center text-gray-400 font-medium mb-16 max-w-3xl mx-auto">
              When a phone is so bricked it won't even turn on, there's usually one last escape hatch built into the chip itself.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <FadeIn delay={0.2}>
              <div className="bg-gray-800 p-8 rounded-3xl border-2 border-gray-700 h-full">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-2xl font-black text-white mb-4">What is EDL?</h3>
                <p className="text-gray-300 font-medium leading-relaxed mb-4">
                  <strong className="text-white">Emergency Download Mode (EDL)</strong> is a special low-level mode built into Qualcomm chips (the processor found in most Android phones). It runs at a level even deeper than the bootloader — it's in the chip's own firmware, meaning it works even if the bootloader is completely broken or missing.
                </p>
                <p className="text-gray-300 font-medium leading-relaxed">
                  In EDL mode, the phone shows up on your PC as a special device that lets you read or write directly to the phone's storage at a raw level — bypassing Android, bypassing the bootloader, bypassing almost everything. It's the closest thing to a hardware reset switch that exists in software.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-gray-800 p-8 rounded-3xl border-2 border-gray-700 h-full">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-2xl font-black text-white mb-4">When would you use it?</h3>
                <ul className="space-y-3 text-gray-300 font-medium">
                  <li className="flex gap-3 items-start">
                    <span className="text-accent font-black mt-0.5">→</span>
                    <p>Your phone won't boot at all after a failed flash or update</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent font-black mt-0.5">→</span>
                    <p>You accidentally corrupted the bootloader and now the phone is stuck</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent font-black mt-0.5">→</span>
                    <p>You want to restore the phone to completely stock firmware from scratch</p>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-accent font-black mt-0.5">→</span>
                    <p>You're a developer who needs to reflash the entire device image</p>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-red-900/40 border border-red-700/50 rounded-xl">
                  <p className="text-red-300 font-bold text-sm">Warning: EDL gives you enough power to permanently brick your phone if used wrong. This is an expert tool.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="bg-gray-800 p-8 rounded-3xl border-2 border-accent/40 mb-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">📱</span>
                <h3 className="text-2xl font-black text-white">OnePlus 7 Pro — EDL How-To</h3>
              </div>
              <p className="text-gray-300 font-medium leading-relaxed mb-6">
                The OnePlus 7 Pro is famous in the modding community for being very EDL-friendly. Here's how to enter EDL mode on it (and similar OnePlus devices):
              </p>
              <div className="space-y-3">
                <div className="flex gap-4 items-start bg-gray-900 p-4 rounded-xl">
                  <span className="bg-accent text-accent-foreground font-black text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <p className="text-gray-300 font-medium">Power off the phone completely.</p>
                </div>
                <div className="flex gap-4 items-start bg-gray-900 p-4 rounded-xl">
                  <span className="bg-accent text-accent-foreground font-black text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <p className="text-gray-300 font-medium">Hold <strong className="text-white">Volume Up + Volume Down</strong> simultaneously, then plug in a USB cable to your PC while still holding both buttons.</p>
                </div>
                <div className="flex gap-4 items-start bg-gray-900 p-4 rounded-xl">
                  <span className="bg-accent text-accent-foreground font-black text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <p className="text-gray-300 font-medium">The screen stays <strong className="text-white">completely black</strong> — this is normal. EDL mode has no UI.</p>
                </div>
                <div className="flex gap-4 items-start bg-gray-900 p-4 rounded-xl">
                  <span className="bg-accent text-accent-foreground font-black text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <p className="text-gray-300 font-medium">On your PC, the phone shows up as <strong className="text-white">"QHSUSB_BULK" or "Qualcomm HS-USB QDLoader"</strong> in Device Manager (Windows) or <code className="bg-gray-700 px-1 rounded">lsusb</code> (Linux).</p>
                </div>
                <div className="flex gap-4 items-start bg-gray-900 p-4 rounded-xl">
                  <span className="bg-accent text-accent-foreground font-black text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5">5</span>
                  <p className="text-gray-300 font-medium">Use a tool like <strong className="text-white">QFIL</strong> (Windows) or <strong className="text-white">edl</strong> (Linux/Python) to flash stock firmware or recovery images.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="bg-gray-800 p-6 rounded-3xl border-2 border-gray-700 max-w-3xl mx-auto">
              <h3 className="text-xl font-black text-white mb-4">Other phones with EDL access</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: "OnePlus 6/6T", note: "Vol Up + Vol Down + USB" },
                  { name: "OnePlus 8/8 Pro", note: "Same combo as 7 Pro" },
                  { name: "Xiaomi/Redmi", note: "Most models support EDL" },
                  { name: "POCO phones", note: "Qualcomm-based, EDL works" },
                  { name: "Google Pixel", note: "Uses Fastboot instead — easier" },
                  { name: "Fairphone", note: "Official unlock, no EDL needed" },
                ].map((phone, i) => (
                  <div key={i} className="bg-gray-900 p-4 rounded-xl">
                    <p className="font-bold text-white text-sm mb-1">{phone.name}</p>
                    <p className="text-gray-400 text-xs font-medium">{phone.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. WHICH ONE IS RIGHT FOR YOU? */}
      <section className="py-24 px-6 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-12">
              Quiz Time: Which One Are You?
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-xl transform rotate-1">
                <h3 className="text-2xl font-black mb-4 text-blue-600 border-b-4 border-blue-100 pb-2">You are Team Windows if...</h3>
                <ul className="space-y-4 text-lg font-medium text-gray-700">
                  <li className="flex gap-2"><span>✨</span> You just want things to work instantly</li>
                  <li className="flex gap-2"><span>✨</span> You play a LOT of different PC games</li>
                  <li className="flex gap-2"><span>✨</span> You don't care about changing how your screen looks too much</li>
                  <li className="flex gap-2"><span>✨</span> You want it to "just work"</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white p-8 rounded-3xl shadow-xl transform -rotate-1">
                <h3 className="text-2xl font-black mb-4 text-purple-600 border-b-4 border-purple-100 pb-2">You are Team Linux if...</h3>
                <ul className="space-y-4 text-lg font-medium text-gray-700">
                  <li className="flex gap-2"><span>✨</span> You like tinkering, building, and coding</li>
                  <li className="flex gap-2"><span>✨</span> You have an old, slow pc not capable of running windows and you still want it to have a modern os</li>
                  <li className="flex gap-2"><span>✨</span> You want fine-grained control and infinite customizability at the cost of simplicity</li>
                  <li className="flex gap-2"><span>✨</span> You want to configure everything yourself and have only what YOU install</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background py-12 text-center border-t-4 border-muted">
        <p className="text-lg font-bold text-foreground/50">
          Built for awesome 7th graders. Go learn something cool today!
        </p>
      </footer>
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
