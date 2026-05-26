import { Calendar } from 'lucide-react';

export function TimelineSection() {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden z-10">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] p-12 border border-slate-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-[60px] group-hover:bg-primary/20 transition-all duration-700"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              <Calendar className="text-primary h-8 w-8" aria-hidden="true" />
              Event Timeline
            </h3>
            <div className="text-sm font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-5 py-2 rounded-full shadow-inner">
              AIQSEC 2027
            </div>
          </div>

          <div className="space-y-6 relative">
            <div className="flex justify-between items-center group/item p-6 rounded-2xl hover:bg-slate-800/80 border border-transparent hover:border-slate-700/50 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-3 h-3 rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)] bg-primary animate-pulse"></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-200 group-hover/item:text-primary transition-colors">
                    Important Dates
                  </h4>
                  <p className="text-sm text-slate-400 uppercase tracking-widest mt-1 font-medium">Event Timeline</p>
                </div>
              </div>
              <span className="font-mono text-lg px-6 py-2.5 rounded-xl transition-all duration-300 shadow-md bg-primary text-white border-primary shadow-primary/20">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
