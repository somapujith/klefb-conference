export function Card({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200 flex flex-col items-start text-left">
      <div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 text-slate-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2 font-sans" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

