export function Button({ href, children, variant = 'primary', testId, ...props }) {
  const baseStyles = 'relative inline-flex h-12 items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const variants = {
    primary: 'w-full sm:w-auto bg-slate-900 px-8 text-white hover:bg-slate-800 active:bg-slate-950 shadow-sm',
    secondary: 'w-full sm:w-auto border border-slate-200 bg-white px-8 text-slate-700 hover:bg-slate-50 hover:text-slate-950 active:bg-slate-100',
  };

  return (
    <a
      href={href}
      data-testid={testId}
      className={`${baseStyles} ${variants[variant]} focus-visible:ring-slate-500`}
      tabIndex="0"
      {...props}
    >
      <span className="flex items-center">
        {children}
      </span>
    </a>
  );
}

