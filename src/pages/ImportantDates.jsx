export function ImportantDates() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 flex items-center justify-center">
      <div className="text-center">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '50px'
          }}>
            🚀
          </div>
          <h1 className="text-5xl font-bold text-slate-900">Coming Soon</h1>
          <p className="text-xl text-slate-600">Important Dates will be announced soon</p>
        </div>
      </div>
    </div>
  );
}
