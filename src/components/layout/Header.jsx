import { NAV_LINKS } from '../../constants/navigation';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/40 overflow-hidden text-slate-900">
      <div className="container mx-auto px-7 h-20 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a
            href="/"
            className="flex items-center gap-2 group"
            data-testid="link-home"
          >
            <img
              alt="KL University"
              className="h-14 w-auto object-contain"
              src="/klh.png"
            />
          </a>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
          {NAV_LINKS.slice(0, -1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={link.testId}
              className="text-sm font-bold transition-colors text-slate-500 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex-shrink-0">
          <a
            href="/submission"
            data-testid="button-register"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-900 px-5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 active:bg-slate-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
          >
            Register Now
          </a>
        </div>

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
  );
}
