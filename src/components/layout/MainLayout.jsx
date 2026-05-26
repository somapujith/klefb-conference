import { Header } from './Header';
import { Footer } from './Footer';

export function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Header />
      <main id="main-content" className="flex-1 overflow-hidden">
        <div className="w-full">
          <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-slate-50 text-slate-800">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
