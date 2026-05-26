export function Button({ href, children, variant = 'primary', testId, ...props }) {
  const baseStyles = 'relative inline-flex items-center justify-center rounded-xl text-base font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-14 px-12 py-3 overflow-hidden group';

  const variants = {
    primary: 'w-full sm:w-auto bg-slate-950 text-white shadow-2xl shadow-slate-950/50 hover:shadow-3xl hover:shadow-slate-950/60 hover:scale-105 active:scale-100',
    secondary: 'w-full sm:w-auto bg-white border-2 border-slate-900 text-slate-900 shadow-xl shadow-slate-900/20 hover:bg-slate-50 hover:shadow-2xl hover:shadow-slate-900/30 hover:scale-105 active:scale-100',
  };

  return (
    <a
      href={href}
      data-testid={testId}
      className={`${baseStyles} ${variants[variant]}`}
      tabIndex="0"
      style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
      {...props}
    >
      <span className="flex items-center justify-center gap-3 w-full relative z-10">
        {children}
      </span>
    </a>
  );
}

