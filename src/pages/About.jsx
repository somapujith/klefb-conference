import './About.css';

export function About() {
  return (
    <div className="min-h-screen bg-white overflow-hidden font-sans">
      {/* Hero Section */}
      <div className="relative py-40 px-4 about-hero-bg">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10"></div>
        <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
          <div className="animate-float inline-flex items-center justify-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full mb-10 border border-blue-100 shadow-sm">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-blue-800 tracking-wide uppercase">About the Conference</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
            AIQ<span className="text-gradient">SEC</span> 2026
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
            A premier international conference bringing together the brightest minds in artificial intelligence and advanced computing systems.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-32 px-4 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-50 rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="mission-circle"></div>
              <div className="glass-card rounded-[2.5rem] h-[450px] flex items-center justify-center text-center p-12 relative z-10 transition-all duration-500">
                <div>
                  <div className="text-7xl font-black text-blue-900/10 absolute -top-4 -left-4 select-none">VISION</div>
                  <div className="text-6xl font-extrabold text-slate-800 mb-4 text-gradient">Our</div>
                  <div className="text-6xl font-extrabold text-slate-800">Mission</div>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <div>
                <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                  Advancing Innovation
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  We foster innovation and excellence in advanced computing research by providing a global platform for knowledge exchange, collaboration, and breakthrough discoveries that shape the future of technology.
                </p>
              </div>
              <div className="space-y-6 pt-4">
                {['World-class Research', 'Global Collaboration', 'Future Technology'].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group cursor-default">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm border border-blue-100">
                      <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-slate-700 font-semibold text-xl group-hover:text-blue-600 transition-colors">{item}</span>
                  </div>
                ))}
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
              <div className="inline-flex items-center justify-center bg-blue-100/50 px-4 py-2 rounded-full border border-blue-200">
                <span className="text-sm font-bold text-blue-800 tracking-wider uppercase">Host Institution</span>
              </div>
              <div>
                <h2 className="text-6xl font-black mb-8 leading-tight text-slate-900">
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
            <div className="relative h-full min-h-96 md:min-h-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-4 bg-gradient-to-tr from-blue-200 to-cyan-100 rounded-[3rem] blur-2xl opacity-60"></div>
              <div className="relative w-full h-96 md:h-full bg-white rounded-[3rem] shadow-2xl border border-white/80 p-8 flex items-center justify-center overflow-hidden" style={{ minHeight: '500px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white"></div>
                <div className="relative z-10 w-full h-full rounded-[2.5rem] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-200/50 shadow-inner flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-300 rounded-full blur-3xl"></div>
                  </div>
                  <div className="relative z-10 text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                      <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <div>
                      <p className="text-slate-700 font-bold text-lg">Premier Institution</p>
                      <p className="text-slate-500 text-sm mt-2">Hyderabad's Leading Research Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Attend Section */}
      <div className="py-40 px-4 bg-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black text-slate-900 mb-6">
              Why Attend <span className="text-gradient">AIQSEC 2026</span>
            </h2>
            <p className="text-2xl text-slate-500 font-light max-w-2xl mx-auto">
              Join a community of innovators and thought leaders
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: (<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>), title: 'Global Community', desc: 'Connect with researchers and professionals from over 50 countries', color: 'text-blue-500' },
              { icon: (<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>), title: 'Cutting-Edge Research', desc: 'Access breakthrough innovations in AI and advanced computing', color: 'text-indigo-500' },
              { icon: (<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>), title: 'Networking', desc: 'Build meaningful collaborations and lasting partnerships', color: 'text-cyan-500' },
              { icon: (<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>), title: 'Career Growth', desc: 'Explore opportunities and expand your professional horizons', color: 'text-sky-500' },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative glass-card p-10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500 blur-xl"></div>
                <div className="relative z-10 space-y-6">
                  <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center ${item.color} shadow-sm border border-slate-100 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 icon-glow`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base">
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
              className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-12 py-6 rounded-full hover:from-blue-700 hover:to-cyan-600 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 text-xl group"
            >
              <span>Submit Your Paper</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300 text-2xl font-black">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
