import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white pt-16 pb-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
          >
            <div className="p-3 space-y-2 opacity-80">
              <div className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"></div>
              <div className="space-y-1">
                <div className="h-0.5 w-full bg-slate-100 rounded-full"></div>
                <div className="h-0.5 w-full bg-slate-100 rounded-full"></div>
                <div className="h-0.5 w-3/4 bg-slate-100 rounded-full"></div>
              </div>
              {i % 2 === 1 && (
                <div className="flex items-end gap-1 h-8 mt-4">
                  <div className="bg-primary/20 w-full h-1/2 rounded-t-sm"></div>
                  <div className="bg-primary/20 w-full h-full rounded-t-sm"></div>
                  <div className="bg-primary/20 w-full h-2/3 rounded-t-sm"></div>
                </div>
              )}
              <div className="pt-4 space-y-1">
                <div className="h-0.5 w-full bg-slate-50 rounded-full"></div>
                <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
              </div>
              <div className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter">
                KLEFB '26
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.8]">
        <img
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          src="/assets/hero-v-oLfqzb.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-blue-500/10 mix-blend-overlay"></div>
      </div>

      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[130px] opacity-40 animate-pulse duration-3000"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/15 rounded-full blur-[100px] opacity-30 animate-pulse duration-5000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4)_0%,rgba(248,250,252,1)_95%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <Badge>AIQSEC 2027 • KL University, Bachupally</Badge>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-slate-900 mb-8 leading-[0.95]"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            <span className="whitespace-nowrap">The Next Era of</span><br />
            <span className="text-primary">Advanced Computing</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            The premier venue for presenting groundbreaking research in advanced computing systems, AI architecture, and
            sustainable technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/submission" variant="primary" testId="button-hero-cfp">
              Submit Research
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
            <Button href="/schedule" variant="secondary" testId="button-hero-schedule">
              View Program
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 hidden md:block">
        <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
