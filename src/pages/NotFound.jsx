import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center bg-white" style={{ minHeight: 'calc(100vh - 400px)' }}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-8xl md:text-9xl font-bold tracking-tighter text-slate-900 mb-4 leading-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            404
          </h1>
          
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Page Not Found
          </h2>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed font-light">
            Oops! The page you're looking for seems to have wandered off into the digital void. Let's get you back to the conference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/" variant="primary" testId="button-404-home">
              Return Home
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
            <Button href="/contact" variant="secondary" testId="button-404-contact">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
