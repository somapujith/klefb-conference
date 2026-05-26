export function Button({ href, children, variant = 'primary', testId, ...props }) {
  const baseStyles = 'relative inline-flex h-14 items-center justify-center rounded-full text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-2';

  const variants = {
    primary: 'w-full sm:w-auto bg-primary px-12 text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:bg-primary/90',
    secondary: 'w-full sm:w-auto border-2 border-primary/20 bg-white/60 backdrop-blur-xl px-12 text-primary shadow-lg hover:bg-white hover:border-primary/40 hover:shadow-xl',
  };

  return (
    <a
      href={href}
      data-testid={testId}
      className={`${baseStyles} ${variants[variant]} focus-visible:ring-primary overflow-hidden`}
      tabIndex="0"
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
      <span className="relative flex items-center">
        {children}
      </span>
    </a>
  );
}
