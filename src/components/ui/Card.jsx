export function Card({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200 transition-all duration-200 hover:border-slate-300 hover:shadow-sm flex flex-col items-start text-left group">
      <div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

