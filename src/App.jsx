import './index.css';

function App() {
  return (
    <>
      
      <div
        className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20"
      >
        <header
          className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/40 overflow-hidden text-slate-900"
        >
          <div
            className="container mx-auto px-4 h-16 flex items-center justify-between"
          >
            <div >
              <a href="/"
                ><a
                  className="flex items-center gap-2 group"
                  data-testid="link-home"
                  ><img
                    alt="KL University"
                    className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                    src="/klh.png" /></a
              ></a>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <div >
                <a href="/"
                  ><a
                    data-testid="link-home"
                    className="text-sm font-semibold transition-all relative py-1 px-1 group text-primary"
                    >Home<span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                      
                    ></span></a
                ></a>
              </div>
              <div >
                <a href="/about"
                  ><a
                    data-testid="link-about"
                    className="text-sm font-semibold transition-all relative py-1 px-1 group text-muted-foreground hover:text-primary"
                    >About<span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                      
                    ></span></a
                ></a>
              </div>
              <div >
                <a href="/submission"
                  ><a
                    data-testid="link-call for papers"
                    className="text-sm font-semibold transition-all relative py-1 px-1 group text-muted-foreground hover:text-primary"
                    >Call for Papers<span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                      
                    ></span></a
                ></a>
              </div>
              <div >
                <a href="/important-dates"
                  ><a
                    data-testid="link-important dates"
                    className="text-sm font-semibold transition-all relative py-1 px-1 group text-muted-foreground hover:text-primary"
                    >Important Dates<span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                      
                    ></span></a
                ></a>
              </div>
              <div >
                <a href="/speakers"
                  ><a
                    data-testid="link-speakers"
                    className="text-sm font-semibold transition-all relative py-1 px-1 group text-muted-foreground hover:text-primary"
                    >Speakers<span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                      
                    ></span></a
                ></a>
              </div>
              <div >
                <a href="/committee"
                  ><a
                    data-testid="link-committee"
                    className="text-sm font-semibold transition-all relative py-1 px-1 group text-muted-foreground hover:text-primary"
                    >Committee<span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                      
                    ></span></a
                ></a>
              </div>
              <div >
                <a href="/venue"
                  ><a
                    data-testid="link-venue"
                    className="text-sm font-semibold transition-all relative py-1 px-1 group text-muted-foreground hover:text-primary"
                    >Venue<span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                      
                    ></span></a
                ></a>
              </div>
              <div >
                <a href="/themes"
                  ><a
                    data-testid="link-themes"
                    className="text-sm font-semibold transition-all relative py-1 px-1 group text-muted-foreground hover:text-primary"
                    >Themes<span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                      
                    ></span></a
                ></a>
              </div>
              <div >
                <a href="/sponsors"
                  ><a
                    data-testid="link-sponsorship"
                    className="text-sm font-semibold transition-all relative py-1 px-1 group text-muted-foreground hover:text-primary"
                    >Sponsorship<span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                      
                    ></span></a
                ></a>
              </div>
              <div >
                <a href="/contact"
                  ><a
                    data-testid="link-contact"
                    className="text-sm font-semibold transition-all relative py-1 px-1 group text-muted-foreground hover:text-primary"
                    >Contact<span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                      
                    ></span></a
                ></a>
              </div>
              <div >
                <a href="/submission"
                  ><a
                    data-testid="button-register"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >Register Now</a
                  ></a
                >
              </div>
            </nav>
            <button
              className="md:hidden p-2 text-foreground rounded-lg hover:bg-accent transition-colors"
              aria-expanded="false"
              aria-label="Toggle Navigation"
              data-testid="button-mobile-menu"
              tabIndex="0"
            >
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
                className="lucide lucide-menu h-6 w-6"
                aria-hidden="true"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>
        </header>
        <main id="main-content" className="flex-1 overflow-hidden">
          <div className="w-full" >
            <div
              className="flex flex-col min-h-[calc(100vh-4rem)] bg-slate-50 text-slate-800"
            >
              <section
                className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white pt-16 pb-32"
              >
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none select-none"
                >
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="flex items-end gap-1 h-8 mt-4">
                        <div
                          className="bg-primary/20 w-full h-1/2 rounded-t-sm"
                        ></div>
                        <div
                          className="bg-primary/20 w-full h-full rounded-t-sm"
                        ></div>
                        <div
                          className="bg-primary/20 w-full h-2/3 rounded-t-sm"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="flex items-end gap-1 h-8 mt-4">
                        <div
                          className="bg-primary/20 w-full h-1/2 rounded-t-sm"
                        ></div>
                        <div
                          className="bg-primary/20 w-full h-full rounded-t-sm"
                        ></div>
                        <div
                          className="bg-primary/20 w-full h-2/3 rounded-t-sm"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="flex items-end gap-1 h-8 mt-4">
                        <div
                          className="bg-primary/20 w-full h-1/2 rounded-t-sm"
                        ></div>
                        <div
                          className="bg-primary/20 w-full h-full rounded-t-sm"
                        ></div>
                        <div
                          className="bg-primary/20 w-full h-2/3 rounded-t-sm"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -mt-20 w-32 h-44 bg-white border border-slate-200 rounded shadow-xl overflow-hidden shadow-slate-200/50 will-change-transform"
                    
                  >
                    <div className="p-3 space-y-2 opacity-80">
                      <div
                        className="h-1 w-1/2 bg-slate-300 mb-2 rounded-full"
                      ></div>
                      <div className="space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-full bg-slate-100 rounded-full"
                        ></div>
                        <div
                          className="h-0.5 w-3/4 bg-slate-100 rounded-full"
                        ></div>
                      </div>
                      <div className="pt-4 space-y-1">
                        <div
                          className="h-0.5 w-full bg-slate-50 rounded-full"
                        ></div>
                        <div className="h-0.5 w-5/6 bg-slate-50 rounded-full"></div>
                      </div>
                      <div
                        className="absolute bottom-2 right-2 text-[6px] font-mono text-slate-300 uppercase tracking-tighter"
                      >
                        KLEFB '26
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 z-0 pointer-events-none opacity-[0.8]"
                  
                >
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    src="/assets/hero-v-oLfqzb.jpg"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-blue-500/10 mix-blend-overlay"
                  ></div>
                </div>
                <div
                  className="absolute inset-0 z-1 pointer-events-none"
                  
                >
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[130px] opacity-40 animate-pulse duration-3000"
                  ></div>
                  <div
                    className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/15 rounded-full blur-[100px] opacity-30 animate-pulse duration-5000"
                  ></div>
                  <div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4)_0%,rgba(248,250,252,1)_95%)]"
                  ></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-5xl mx-auto text-center">
                    <div
                      className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-12 backdrop-blur-sm"
                      
                    >
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
                        className="lucide lucide-zap h-3 w-3 mr-2 animate-pulse"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                         /></svg
                      >AIQSEC 2026 • KL University, Bachupally
                    </div>
                    <h1
                      className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter text-slate-900 mb-8 leading-[0.95]"
                      
                    >
                      The Next Era of
                      <span className="text-primary italic block md:inline"
                        >Advanced Computing</span
                      >
                    </h1>
                    <p
                      className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                      
                    >
                      The premier venue for presenting groundbreaking research
                      in advanced computing systems, AI architecture, and
                      sustainable technology.
                    </p>
                    <div
                      className="flex flex-col sm:flex-row items-center justify-center gap-6"
                      
                    >
                      <a href="/submission"
                        ><a
                          data-testid="button-hero-cfp"
                          className="relative group inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-primary px-12 text-base font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary overflow-hidden"
                          tabIndex="0"
                          ><div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                          ></div>
                          <span className="relative flex items-center"
                            >Submit Research<svg
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
                              <path
                                d="m12 5 7 7-7 7"
                               /></svg></span></a></a
                      ><a href="/schedule"
                        ><a
                          data-testid="button-hero-schedule"
                          className="relative inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full border-2 border-primary/20 bg-white/60 backdrop-blur-xl px-12 text-base font-bold text-primary shadow-lg transition-all hover:bg-white hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          tabIndex="0"
                          >View Program</a
                        ></a
                      >
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 hidden md:block"
                  
                >
                  <div
                    className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1"
                  >
                    <div className="w-1 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </section>
              <section
                className="py-32 bg-white border-y border-slate-200 relative z-10"
              >
                <div className="container mx-auto px-4">
                  <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto"
                  >
                    <div
                      className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl flex flex-col items-center text-center group transition-all duration-300 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
                      
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></div>
                      <div
                        className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10"
                      >
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
                          className="lucide lucide-globe h-8 w-8"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path
                            d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                           />
                          <path d="M2 12h20" />
                        </svg>
                      </div>
                      <h3
                        className="text-3xl font-serif font-bold text-slate-900 mb-4 relative z-10 group-hover:text-primary transition-colors"
                      >
                        Global Network
                      </h3>
                      <p
                        className="text-slate-600 text-lg leading-relaxed font-light relative z-10"
                      >
                        Connecting researchers from over 80 countries in a
                        unified platform.
                      </p>
                    </div>
                    <div
                      className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl flex flex-col items-center text-center group transition-all duration-300 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
                      
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></div>
                      <div
                        className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10"
                      >
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
                          className="lucide lucide-book-open h-8 w-8"
                          aria-hidden="true"
                        >
                          <path d="M12 7v14" />
                          <path
                            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
                           />
                        </svg>
                      </div>
                      <h3
                        className="text-3xl font-serif font-bold text-slate-900 mb-4 relative z-10 group-hover:text-primary transition-colors"
                      >
                        Open Access
                      </h3>
                      <p
                        className="text-slate-600 text-lg leading-relaxed font-light relative z-10"
                      >
                        All selected research papers available for the global
                        academic community.
                      </p>
                    </div>
                    <div
                      className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl flex flex-col items-center text-center group transition-all duration-300 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
                      
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      ></div>
                      <div
                        className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10"
                      >
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
                          className="lucide lucide-award h-8 w-8"
                          aria-hidden="true"
                        >
                          <path
                            d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                           />
                          <circle cx="12" cy="8" r="6" />
                        </svg>
                      </div>
                      <h3
                        className="text-3xl font-serif font-bold text-slate-900 mb-4 relative z-10 group-hover:text-primary transition-colors"
                      >
                        Excellence
                      </h3>
                      <p
                        className="text-slate-600 text-lg leading-relaxed font-light relative z-10"
                      >
                        Recognizing groundbreaking contributions with
                        prestigious awards.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-32 bg-slate-950 relative overflow-hidden z-10">
                <div className="absolute inset-0 z-0">
                  <div
                    className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30"
                  ></div>
                  <div
                    className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] opacity-20"
                  ></div>
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]"
                  ></div>
                </div>
                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                  <div
                    className="bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] p-12 border border-slate-800 shadow-2xl relative overflow-hidden group"
                    
                  >
                    <div
                      className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-[60px] group-hover:bg-primary/20 transition-all duration-700"
                    ></div>
                    <div
                      className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4"
                    >
                      <h3
                        className="text-3xl font-serif font-bold text-white flex items-center gap-3"
                      >
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
                          className="lucide lucide-calendar text-primary h-8 w-8"
                          aria-hidden="true"
                        >
                          <path d="M8 2v4" />
                          <path d="M16 2v4" />
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                           />
                          <path d="M3 10h18" /></svg
                        >Event Timeline
                      </h3>
                      <div
                        className="text-sm font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-5 py-2 rounded-full shadow-inner"
                      >
                        AIQSEC 2026
                      </div>
                    </div>
                    <div className="space-y-6 relative">
                      <div
                        className="flex justify-between items-center group/item p-6 rounded-2xl hover:bg-slate-800/80 border border-transparent hover:border-slate-700/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-6">
                          <div
                            className="w-3 h-3 rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)] bg-primary animate-pulse"
                          ></div>
                          <div>
                            <h4
                              className="text-xl font-bold text-slate-200 group-hover/item:text-primary transition-colors"
                            >
                              Important Dates
                            </h4>
                            <p
                              className="text-sm text-slate-400 uppercase tracking-widest mt-1 font-medium"
                            >
                              Event Timeline
                            </p>
                          </div>
                        </div>
                        <span
                          className="font-mono text-lg px-6 py-2.5 rounded-xl transition-all duration-300 shadow-md bg-primary text-white border-primary shadow-primary/20"
                          >Coming Soon</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        <footer id="contact" className="bg-muted py-12 border-t border-border">
          <div
            className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img
                  alt="KL University"
                  className="h-14 w-auto object-contain"
                  src="/klh.png"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                International Conference on Advanced Computing &amp; Systems.
                Shaping the future of technical innovation.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-foreground mb-4">
                Conference
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/"
                    ><a
                      className="text-muted-foreground hover:text-primary transition-colors"
                      >About</a
                    ></a
                  >
                </li>
                <li>
                  <a href="/schedule"
                    ><a
                      className="text-muted-foreground hover:text-primary transition-colors"
                      >Schedule</a
                    ></a
                  >
                </li>
                <li>
                  <a href="/speakers"
                    ><a
                      className="text-muted-foreground hover:text-primary transition-colors"
                      >Committees</a
                    ></a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-foreground mb-4">
                Authors
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/submission"
                    ><a
                      className="text-muted-foreground hover:text-primary transition-colors"
                      >Call for Papers</a
                    ></a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    >Submission Guidelines</a
                  >
                </li>
                <li>
                  <a href="/important-dates"
                    ><a
                      className="text-muted-foreground hover:text-primary transition-colors"
                      >Important Dates</a
                    ></a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-foreground mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">contact@kluniversity.in</li>
                <li className="text-muted-foreground">KL University, Bachupally</li>
              </ul>
            </div>
          </div>
          <div
            className="container mx-auto px-4 mt-12 pt-8 border-t border-border/50 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center"
          >
            <p>© 2026 KL University. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors"
                >Privacy Policy</a
              ><a href="#" className="hover:text-primary transition-colors"
                >Terms of Service</a
              >
            </div>
          </div>
        </footer>
      </div>
      <div
        role="region"
        aria-label="Notifications (F8)"
        tabIndex="-1"
        
      >
        <ol
          tabIndex="-1"
          className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
        ></ol>
      </div>
    
    </>
  );
}

export default App;
