export function Badge({ children }) {
  return (
    <div className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-3.5 py-1 text-xs font-medium text-slate-600 mb-8">
      {children}
    </div>
  );
}

