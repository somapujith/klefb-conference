import { Brain, Cpu, Zap, ShieldCheck, Database, Network, BookOpen, Cloud, Globe, Fingerprint, Leaf, Calendar, ArrowRight } from 'lucide-react';

export function Themes() {
  const mainTracks = [
    {
      title: "Artificial Intelligence & Generative Models",
      description: "Pushing the boundaries of deep learning, LLMs, and multimodal systems to revolutionize how machines learn and create.",
      icon: <Brain className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Next-Gen Computer Architecture",
      description: "Exploring high-performance computing, neuromorphic hardware, and hardware accelerators driving the next era of tech.",
      icon: <Cpu className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Quantum Information Processing",
      description: "Bridging quantum mechanics and computer theory to build scalable algorithms for cryptography and advanced science.",
      icon: <Zap className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Cyber-Resilience & Zero Trust",
      description: "Architecting secure frameworks to autonomously detect, respond to, and prevent threats in hyper-connected ecosystems.",
      icon: <ShieldCheck className="w-8 h-8 text-red-500" />
    },
    {
      title: "Data Science & Big Data Analytics",
      description: "Harnessing the power of massive datasets through advanced statistical modeling and predictive analytics.",
      icon: <Database className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "Edge AI & Distributed Intelligence",
      description: "Bringing intelligence to the network edge, minimizing latency, and maximizing the potential of IoT applications.",
      icon: <Network className="w-8 h-8 text-indigo-500" />
    },
    {
      title: "Advanced Software Engineering",
      description: "Pioneering methodologies in DevOps, DevSecOps, and AI-assisted automation for robust software architectures.",
      icon: <BookOpen className="w-8 h-8 text-cyan-500" />
    },
    {
      title: "Cloud-Native Infrastructure",
      description: "Building the backbone of modern computing with scalable, containerized, and globally distributed systems.",
      icon: <Cloud className="w-8 h-8 text-sky-500" />
    }
  ];

  const emergingTracks = [
    {
      title: "Social Good",
      description: "Leveraging technology and data science to tackle global challenges and improve the quality of human life.",
      icon: <Globe className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Human-Centric",
      description: "Designing intelligent systems that prioritize user experience, accessibility, and ethical human-computer interaction.",
      icon: <Fingerprint className="w-6 h-6 text-violet-600" />
    },
    {
      title: "Sustainability",
      description: "Innovating green computing architectures and algorithms to drastically reduce the environmental footprint of IT.",
      icon: <Leaf className="w-6 h-6 text-amber-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-blue-100 selection:text-blue-900 pb-32">
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left max-w-2xl">
            <div className="text-blue-600 font-bold tracking-widest text-[10px] uppercase mb-4">Research Horizons 2026</div>
            <h1 className="heading-large text-6xl md:text-8xl font-bold text-slate-900 mb-6 tracking-tight leading-[0.9]">
              Conference<br/>
              <span className="text-blue-600">Themes</span>
            </h1>
          </div>
          <div className="md:w-1/3 border-l-2 border-blue-100 pl-8">
            <p className="text-slate-500 text-lg leading-relaxed">
              Exploring the frontiers of Artificial Intelligence and advanced computing. A curated showcase of breakthrough innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Tracks Grid */}
      <section className="px-4 pb-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {mainTracks.map((track, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                  {track.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                  {track.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Tracks Section */}
      <section className="px-4 pb-32">
        <div className="container mx-auto max-w-6xl text-center">
          
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="text-slate-400 font-bold tracking-widest text-[10px] uppercase mb-4">Look into the Future</div>
            <h2 className="heading-large text-4xl md:text-5xl font-bold text-slate-900">
              Emerging <span className="text-blue-600">Tracks</span>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 mt-6 rounded-full opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergingTracks.map((track, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between overflow-hidden relative group"
              >
                {/* Decorative background watermark */}
                <div className="absolute -right-6 -bottom-6 opacity-[0.03] transform group-hover:scale-125 transition-transform duration-700 pointer-events-none">
                  {track.icon}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                    {track.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {track.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed relative z-10">
                    {track.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glassmorphic CTA Card */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-16">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            {/* Left Content */}
            <div className="w-full md:w-1/2 relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-transparent text-white px-4 py-1.5 rounded-full border border-white/50 uppercase tracking-widest text-[10px] font-bold mb-6">
                <Calendar className="w-3 h-3" />
                Call for Papers Open
              </div>
              
              <h2 className="heading-large text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Contribute<br/>
                <span className="text-blue-400">Your Vision</span>
              </h2>
              
              <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                Join the elite research consortium and showcase your exclusive breakthroughs to the world.
              </p>
              
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 w-full sm:w-auto flex items-center justify-center md:justify-start gap-3 shadow-[0_8px_25px_rgb(37,99,235,0.3)] hover:shadow-[0_12px_35px_rgb(37,99,235,0.4)] hover:-translate-y-0.5">
                Submit Your Paper
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Dates Timeline */}
            <div className="w-full md:w-1/2 relative z-10 flex flex-col gap-6">
              
              {/* Date 1 */}
              <div className="flex items-center justify-between border border-slate-700/50 bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl hover:bg-slate-800/80 transition-colors">
                <div className="text-left">
                  <div className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-1">Paper Submission</div>
                  <div className="text-white font-medium">Deadline</div>
                </div>
                <div className="text-2xl font-bold text-white">MAY 15</div>
              </div>

              {/* Date 2 */}
              <div className="flex items-center justify-between border border-slate-700/50 bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl hover:bg-slate-800/80 transition-colors">
                <div className="text-left">
                  <div className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-1">Author Notification</div>
                  <div className="text-white font-medium">Acceptance</div>
                </div>
                <div className="text-2xl font-bold text-white">MAY 22</div>
              </div>

              {/* Date 3 */}
              <div className="flex items-center justify-between border border-slate-700/50 bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl hover:bg-slate-800/80 transition-colors">
                <div className="text-left">
                  <div className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-1">Camera Ready</div>
                  <div className="text-white font-medium">Final Paper</div>
                </div>
                <div className="text-2xl font-bold text-white">JULY 20</div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
