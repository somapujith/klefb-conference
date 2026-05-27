import './About.css';

export function About() {
  return (
    <div className="min-h-screen bg-white overflow-hidden font-sans">
      {/* Hero Section */}
      <div className="relative py-40 px-4 about-hero-bg">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10"></div>
        <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
          <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-8 leading-tight tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            AIQ<span className="text-gradient">SEC</span> 2026
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
            A premier international conference bringing together the brightest minds in artificial intelligence and advanced computing systems.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 px-4 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-2 rounded-full bg-white border border-slate-200/60 text-slate-800 text-sm font-semibold tracking-[0.15em] uppercase mb-8 shadow-[0_4px_12px_rgb(0,0,0,0.05)]">
                OUR MISSION
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Advancing Innovation in Computing
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                We foster excellence in advanced computing research by providing a global platform for knowledge exchange, collaboration, and breakthrough discoveries that shape the future of technology.
              </p>
              
              <div className="space-y-4">
                {['World-class Research', 'Global Collaboration', 'Future Technology'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-full">
              <div className="h-full bg-slate-50 rounded-[2rem] p-10 flex flex-col justify-center border border-slate-100 shadow-sm min-h-[300px]">
                <svg className="w-10 h-10 text-slate-300 mb-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.714-4.676-10.39-10.391-10.391h-3.626v3.626h3.626c3.715 0 6.765 3.05 6.765 6.765v7.391h3.626zm10.003 0v-7.391c0-5.714-4.676-10.39-10.391-10.391h-3.626v3.626h3.626c3.715 0 6.765 3.05 6.765 6.765v7.391h3.626z"/>
                </svg>
                <div className="text-2xl font-medium text-slate-800 leading-snug">
                  "Empowering the next generation of researchers to build intelligent systems that solve real-world problems."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KL University Section */}
      <div className="py-32 px-4 bg-slate-50 relative overflow-hidden border-y border-slate-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-20 items-stretch">
            <div className="space-y-10 flex flex-col justify-center">
              <div>
                <h2 className="text-6xl font-black mb-8 leading-tight text-slate-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  KL University
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6 font-light">
                  Established in 1980, KL University has evolved into a premier educational institution offering undergraduate, postgraduate, and doctoral programs in engineering and management.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed mb-12 font-light">
                  Located in Bachupally, Hyderabad, the university provides state-of-the-art infrastructure and a focus on research excellence, making it the perfect venue for intellectual exchange and global collaboration.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 w-full">
                <div className="glass-card p-10 rounded-3xl transition-all duration-300">
                  <div className="text-6xl font-black text-blue-600 mb-4">44+</div>
                  <div className="text-lg text-slate-700 font-bold uppercase tracking-wide">Years of Excellence</div>
                </div>
                <div className="glass-card p-10 rounded-3xl transition-all duration-300">
                  <div className="text-6xl font-black text-cyan-600 mb-4">25K+</div>
                  <div className="text-lg text-slate-700 font-bold uppercase tracking-wide">Students Enrolled</div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-96 md:min-h-full flex items-center justify-center p-4">
              <img
                src="/assets/kl-university-institution.png"
                alt="KL University - Premier Institution"
                className="w-96 h-96 md:w-full md:max-w-2xl md:h-auto object-contain rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Attend Section */}
      <div className="py-32 px-4 bg-slate-50 relative border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-sm font-bold tracking-widest uppercase mb-6 border border-blue-200/50">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Why Attend <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">AIQSEC 2026</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto">
              Join a global community of innovators, researchers, and thought leaders shaping the future of advanced computing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: 'Global Community', desc: 'Connect with researchers and professionals from over 50 countries worldwide.', color: 'from-blue-500 to-cyan-400' },
              { icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>), title: 'Cutting-Edge', desc: 'Access breakthrough innovations in AI and advanced computing technologies.', color: 'from-indigo-500 to-blue-500' },
              { icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>), title: 'Networking', desc: 'Build meaningful collaborations and lasting partnerships with industry leaders.', color: 'from-cyan-500 to-teal-400' },
              { icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>), title: 'Career Growth', desc: 'Explore diverse opportunities and expand your professional horizons significantly.', color: 'from-sky-500 to-blue-400' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white p-8 rounded-[2rem] border border-slate-200/60 hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} text-white shadow-md mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm flex-grow">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-40 px-4 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200/50 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div className="glass-card p-16 md:p-24 rounded-[3rem] border-2 border-white">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-slate-900 tracking-tight">
              Ready to Join Us?
            </h2>
            <p className="text-2xl text-slate-600 mb-12 font-light">
              Submit your research and be part of a transformative conference experience.
            </p>
            <a
              href="/call-for-papers"
              className="inline-flex items-center justify-center gap-4 bg-white text-black font-bold px-12 py-6 rounded-full text-xl group border-2 border-black"
            >
              <span>Submit Your Paper</span>
              <span className="text-2xl font-black">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
