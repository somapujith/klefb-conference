import './About.css';
import '../theme/typography.css';

export function About() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-slate-900 selection:text-white">
      {/* Hero Section */}
      <div className="pt-40 pb-32 px-4 border-b border-slate-200 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="label border border-slate-900 text-slate-900 bg-white inline-block px-4 py-1 mb-10">
            Conference 2027
          </div>
          <h1 className="heading-large font-bold text-slate-900 mb-8 uppercase">
            AIQSEC
          </h1>
          <p className="body-large text-slate-600 max-w-3xl mx-auto">
            A premier international conference bringing together the brightest minds in artificial intelligence and advanced computing systems.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 px-4 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="md:col-span-5 md:border-r border-slate-200 pr-12 lg:pr-24 h-full">
              <div className="label border border-slate-300 text-slate-900 inline-flex items-center px-4 py-1.5 mb-12">
                Our Mission
              </div>
              <h2 className="heading-medium font-bold text-slate-900 mb-8">
                Advancing Innovation in Computing.
              </h2>
              <p className="body-large text-slate-600">
                We foster excellence in advanced computing research by providing a global platform for knowledge exchange, collaboration, and breakthrough discoveries that shape the future of technology.
              </p>
            </div>
            
            <div className="md:col-span-7 space-y-16">
              <div className="pl-6 border-l-4 border-slate-900 py-2">
                <div className="subheading-large text-slate-900">
                  "Empowering the next generation of researchers to build intelligent systems that solve real-world problems."
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                {['World-class Research', 'Global Collaboration', 'Future Technology'].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <span className="text-slate-900 font-bold text-sm tracking-wide uppercase border-b border-slate-200 pb-3">{`0${i + 1}`}</span>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KL University Section */}
      <div className="py-32 px-4 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 md:order-1 relative p-4 bg-white border border-slate-200 shadow-sm">
              <img
                src="/assets/kl-university-institution.png"
                alt="KL University - Premier Institution"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="order-1 md:order-2 space-y-12">
              <div>
                <h2 className="heading-large font-bold text-slate-900 mb-8">
                  KL University
                </h2>
                <div className="h-px w-24 bg-slate-900 mb-8"></div>
                <p className="body-large text-slate-600 mb-6">
                  Established in 1980, KL University has evolved into a premier educational institution offering undergraduate, postgraduate, and doctoral programs in engineering and management.
                </p>
                <p className="body-large text-slate-600">
                  Located in Bachupally, Hyderabad, the university provides state-of-the-art infrastructure and a focus on research excellence, making it the perfect venue for intellectual exchange and global collaboration.
                </p>
              </div>
              <div className="flex gap-16 border-y border-slate-200 py-8">
                <div>
                  <div className="heading-large font-bold text-slate-900 mb-1">44+</div>
                  <div className="label text-slate-500">Years of Excellence</div>
                </div>
                <div>
                  <div className="heading-large font-bold text-slate-900 mb-1">25K+</div>
                  <div className="label text-slate-500">Students Enrolled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Attend Section */}
      <div className="py-32 px-4 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-12">
            <div className="max-w-2xl">
              <span className="label border border-slate-200 text-slate-800 inline-block px-4 py-1.5 mb-6">
                Benefits
              </span>
              <h2 className="heading-large font-bold text-slate-900">
                Why Attend AIQSEC 2027
              </h2>
            </div>
            <p className="body-large text-slate-500 max-w-sm">
              Join a global community of innovators, researchers, and thought leaders shaping the future of advanced computing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-slate-200">
            {[
              { icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: 'Global Community', desc: 'Connect with researchers and professionals from over 50 countries worldwide.' },
              { icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>), title: 'Cutting-Edge', desc: 'Access breakthrough innovations in AI and advanced computing technologies.' },
              { icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>), title: 'Networking', desc: 'Build meaningful collaborations and lasting partnerships with industry leaders.' },
              { icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>), title: 'Career Growth', desc: 'Explore diverse opportunities and expand your professional horizons significantly.' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 lg:p-12 flex flex-col h-full hover:bg-slate-50 transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-slate-200 text-slate-800 mb-8 bg-white">
                  {item.icon}
                </div>
                <h3 className="subheading-medium font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="body-small text-slate-500 flex-grow">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 md:py-32 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-slate-50 p-12 md:p-24 text-center rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
            <h2 className="heading-large font-bold text-slate-900 mb-8">
              Ready to Join Us?
            </h2>
            <p className="body-large text-slate-500 mb-12 max-w-3xl mx-auto">
              Submit your research and be part of a transformative conference experience shaping the future of AI.
            </p>
            <a
              href="/call-for-papers"
              className="inline-flex items-center justify-center gap-3 bg-white border border-black text-black font-medium px-12 py-3 hover:bg-slate-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 rounded-full"
            >
              <span className="button">Submit Your Paper</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
