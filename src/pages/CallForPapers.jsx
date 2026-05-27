import { ExternalLink, FileText, Lightbulb, Database, Network, Settings, Cpu, Globe, Scale, Users, Info } from 'lucide-react';

export function CallForPapers() {
  const tracks = [
    {
      id: 1,
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      title: "Sustainable Power, Energy Systems & Green Technologies",
      description: "Focuses on renewable energy, smart grids, and environmentally friendly technological solutions."
    },
    {
      id: 2,
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: "Artificial Intelligence, Data Science & Cybersecurity Governance",
      description: "Explores AI algorithms, big data analytics, and the ethics and security of digital information."
    },
    {
      id: 3,
      icon: <Network className="w-6 h-6 text-blue-600" />,
      title: "Smart Systems, Communication Technologies & Intelligent Infrastructure",
      description: "Covers IoT, 5G/6G communications, and the development of intelligent urban environments."
    },
    {
      id: 4,
      icon: <Settings className="w-6 h-6 text-blue-600" />,
      title: "Engineering, Digital Management & Human-Centred Technology",
      description: "Addresses the intersection of industrial engineering, management, and user-focused design."
    },
    {
      id: 5,
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: "VLSI, Robotics, Embedded Systems & Intelligent Signal Processing",
      description: "Focuses on hardware architecture, autonomous systems, and advanced signal processing techniques."
    },
    {
      id: 6,
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Innovation, Entrepreneurship & Inclusive Digital Economies",
      description: "Discusses the economic impact of technology, digital inclusion, and startup ecosystems."
    },
    {
      id: 7,
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      title: "Law, Ethics, Public Policy & Human-Centred Governance",
      description: "Examines the legal and ethical frameworks required for responsible technological advancement."
    },
    {
      id: 8,
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Education, Society & the Future of Human-AI Coexistence",
      description: "Explores the impact of AI on learning, social structures, and the future of work."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 md:pt-56 md:pb-48 px-4 bg-gradient-to-b from-slate-50/80 to-white overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          
          {/* Soft Badge */}
          <div className="inline-block mb-10">
            <span className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-2.5 rounded-full border border-slate-200 uppercase tracking-widest text-[11px] font-bold shadow-sm">
              AIQSEC 2026
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="heading-large text-6xl md:text-[5.5rem] font-bold text-slate-900 mb-12 tracking-tight leading-tight">
            Call for Papers
          </h1>
          
          {/* Buttons with world-class spacing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
            <a 
              href="#"
              className="group flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 px-10 py-4 rounded-full font-bold text-sm transition-all duration-300 w-full sm:w-auto justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Paper Submission Link 
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
            </a>
            <a 
              href="#"
              className="group flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 px-10 py-4 rounded-full font-bold text-sm transition-all duration-300 w-full sm:w-auto justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Call for Paper Brochure 
              <FileText className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Conference Scope - Centered, airy, and beautiful */}
      <section className="py-24 md:py-40 px-4 bg-white relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="heading-large text-4xl md:text-5xl font-bold text-slate-900 mb-12">
            Conference Scope
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-16 opacity-20"></div>
          
          <p className="subheading-large text-slate-600 leading-[2] font-normal text-xl md:text-2xl">
            AIQSEC 2026 focuses on industrial and upcoming frontier technologies, applications of electronics, controls, communications, instrumentation and computational intelligence. The objectives of the conference are to provide high quality research and professional interactions for the advancement of science, technology, and fellowship. Papers with new research results are encouraged for submission.
          </p>
        </div>
      </section>

      {/* Technical Topics - Soft Shadows and generous padding */}
      <section className="py-32 md:py-48 px-4 bg-slate-50/50">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">
              Research Tracks
            </span>
            <h2 className="heading-large text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Technical Topics
            </h2>
            <p className="body-large text-slate-500 text-lg leading-relaxed">
              Explore our comprehensive range of specialized research tracks designed to foster innovation across multiple disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {tracks.map((track) => (
              <div 
                key={track.id} 
                className="group bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 text-blue-600 rounded-2xl mb-10 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                  {track.icon}
                </div>
                
                <div className="label text-slate-400 mb-4 tracking-widest text-[10px] font-bold uppercase">
                  Track {String(track.id).padStart(2, '0')}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 leading-snug">
                  {track.title}
                </h3>
                
                <p className="body-small text-slate-500 leading-[1.8] mt-auto">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CMT Acknowledgement - Floating sleek card */}
      <section className="py-32 md:py-40 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-center md:text-left shadow-2xl shadow-slate-900/20 relative overflow-hidden">
            
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50"></div>
            
            <div className="bg-slate-800/80 p-5 rounded-3xl shrink-0 relative z-10 backdrop-blur-sm border border-slate-700/50">
              <Info className="w-8 h-8 text-blue-400" />
            </div>
            
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-white mb-4">CMT Acknowledgement</h4>
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                The Microsoft CMT service was actively utilized for managing the comprehensive peer-reviewing process for this conference.
              </p>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
