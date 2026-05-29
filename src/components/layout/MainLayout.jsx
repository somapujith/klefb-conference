import { Header } from './Header';
import { Footer } from './Footer';

export function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Header />
      <main id="main-content" className="flex-1 overflow-hidden" style={{ animation: 'fadeIn 0.3s ease-in' }}>
        <div className="w-full">
          <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-white text-slate-800">
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
