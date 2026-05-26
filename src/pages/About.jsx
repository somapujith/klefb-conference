export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10"></div>
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-50 px-5 py-3 rounded-full mb-8 border border-blue-200">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span className="text-sm font-semibold text-blue-700" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>About the Conference</span>
          </div>
          <h1 className="text-7xl font-bold text-slate-900 mb-8 leading-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            AIQSEC 2026
          </h1>
          <p className="text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            A premier international conference bringing together the brightest minds in artificial intelligence and advanced computing systems to drive innovation and shape the future of technology.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-32 px-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl h-96 flex items-center justify-center text-black text-center p-12 shadow-2xl">
                <div>
                  <div className="text-6xl font-bold mb-4">Our</div>
                  <div className="text-6xl font-bold">Mission</div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  Advancing Innovation
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  We foster innovation and excellence in advanced computing research by providing a global platform for knowledge exchange, collaboration, and breakthrough discoveries that shape the future of technology.
                </p>
              </div>
              <div className="space-y-5 pt-6">
                {['World-class Research', 'Global Collaboration', 'Future Technology'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-3 h-3 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-slate-800 font-semibold text-lg" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KL University Section */}
      <div className="py-32 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-20 items-stretch">
            <div className="space-y-10 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center bg-blue-600/25 px-3 py-1.5 rounded-full border border-blue-400/60">
                <span className="text-xs font-semibold text-black whitespace-nowrap" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Host Institution</span>
              </div>
              <div>
                <h2 className="text-6xl font-bold mb-8 leading-tight text-black" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  KL University
                </h2>
                <p className="text-lg text-black leading-relaxed mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  Established in 1980, KL University has evolved into a premier educational institution offering undergraduate, postgraduate, and doctoral programs in engineering and management.
                </p>
                <p className="text-lg text-black leading-relaxed mb-12" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  Located in Bachupally, Hyderabad, the university provides state-of-the-art infrastructure and a focus on research excellence, making it the perfect venue for intellectual exchange and global collaboration.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="group bg-gradient-to-br from-blue-600/40 to-blue-800/40 backdrop-blur-md p-8 rounded-2xl border border-blue-400/40 hover:border-blue-300/80 hover:from-blue-600/60 hover:to-blue-800/60 transition-all duration-300">
                  <div className="text-5xl font-black text-black mb-3">44+</div>
                  <div className="text-base text-black font-semibold" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Years of Excellence</div>
                </div>
                <div className="group bg-gradient-to-br from-blue-600/40 to-blue-800/40 backdrop-blur-md p-8 rounded-2xl border border-blue-400/40 hover:border-blue-300/80 hover:from-blue-600/60 hover:to-blue-800/60 transition-all duration-300">
                  <div className="text-5xl font-black text-black mb-3">25K+</div>
                  <div className="text-base text-black font-semibold" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Students Enrolled</div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-96 md:min-h-full flex items-center justify-center">
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-600/30 to-cyan-600/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-full h-96 md:h-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 rounded-3xl shadow-2xl hover:shadow-blue-600/50 transition-shadow duration-300" style={{ minHeight: '400px' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Attend Section */}
      <div className="py-40 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-32">
            <h2 className="text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Why Attend AIQSEC 2026
            </h2>
            <p className="text-xl text-slate-600 font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Join a community of innovators and thought leaders
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { icon: (<svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>), title: 'Global Community', desc: 'Connect with researchers and professionals from over 50 countries', color: 'from-cyan-500/20 to-blue-500/20', borderColor: 'border-cyan-300/50' },
              { icon: (<svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>), title: 'Cutting-Edge Research', desc: 'Access breakthrough innovations in AI and advanced computing', color: 'from-purple-500/20 to-blue-500/20', borderColor: 'border-purple-300/50' },
              { icon: (<svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>), title: 'Networking', desc: 'Build meaningful collaborations and lasting partnerships', color: 'from-orange-500/20 to-yellow-500/20', borderColor: 'border-orange-300/50' },
              { icon: (<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><polyline points="23 6 13.5 15.5 8.5 10.5 1 17"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>), title: 'Career Growth', desc: 'Explore opportunities and expand your professional horizons', color: 'from-green-500/20 to-emerald-500/20', borderColor: 'border-green-300/50' },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-br ${item.color} backdrop-blur-sm ${item.borderColor} border-2 p-12 rounded-3xl hover:border-opacity-100 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/40 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-300 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 text-slate-800 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-base font-medium" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Ready to Join Us?
          </h2>
          <p className="text-xl text-blue-100 mb-12 font-light" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Submit your research and be part of a transformative conference experience.
          </p>
          <a
            href="/call-for-papers"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-white to-slate-100 text-blue-700 font-bold px-12 py-6 rounded-2xl hover:from-slate-50 hover:to-white hover:shadow-2xl hover:shadow-blue-900/40 hover:scale-105 transition-all duration-300 text-lg border-2 border-white/80 hover:border-white group"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            <span>Submit Your Paper</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl font-black">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
