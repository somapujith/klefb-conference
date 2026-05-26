export function Card({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl flex flex-col items-center text-center group transition-all duration-300 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-3xl font-bold text-slate-900 mb-4 relative z-10 group-hover:text-primary transition-colors" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        {title}
      </h3>
      <p className="text-slate-600 text-lg leading-relaxed font-light relative z-10">
        {description}
      </p>
    </div>
  );
}
