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

          <div className="grid md:grid-cols-2 gap-12 items-center">
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
            <FadeIn delay={0.4}>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-accent text-accent-foreground p-6 rounded-2xl text-center shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <p className="text-3xl mb-3">⌨️</p>
                  <p className="font-bold text-lg mb-1">Your Keyboard</p>
                  <p className="font-medium opacity-80">Has firmware that tells it how to send keystrokes</p>
                </div>
                <div className="bg-white text-secondary p-6 rounded-2xl text-center shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <p className="text-3xl mb-3">📡</p>
                  <p className="font-bold text-lg mb-1 text-blue-900">Your Router</p>
                  <p className="font-medium opacity-70">Uses firmware to manage your Wi-Fi connection</p>
                </div>
                <div className="bg-primary text-primary-foreground p-6 rounded-2xl text-center shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <p className="text-3xl mb-3">🖥️</p>
                  <p className="font-bold text-lg mb-1">Your Motherboard</p>
                  <p className="font-medium opacity-80">Runs BIOS/UEFI firmware before any OS loads</p>
                </div>
              </div>
            </FadeIn>
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
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white p-8 rounded-3xl shadow-xl transform -rotate-1">
                <h3 className="text-2xl font-black mb-4 text-purple-600 border-b-4 border-purple-100 pb-2">You are Team Linux if...</h3>
                <ul className="space-y-4 text-lg font-medium text-gray-700">
                  <li className="flex gap-2"><span>✨</span> You like tinkering, building, and coding</li>
                  <li className="flex gap-2"><span>✨</span> You have an old, slow computer you want to make fast again</li>
                  <li className="flex gap-2"><span>✨</span> You hate the idea of a big company tracking you</li>
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
