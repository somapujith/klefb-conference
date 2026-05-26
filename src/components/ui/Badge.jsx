export function Badge({ children }) {
  return (
    <div
      className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-5 py-2 text-xs font-semibold text-blue-700 mb-8 shadow-sm"
      style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
    >
      {children}
    </div>
  );
}

