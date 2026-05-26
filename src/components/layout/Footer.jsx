import { FOOTER_LINKS } from '../../constants/navigation';

export function Footer() {
  return (
    <footer id="contact" className="bg-muted py-12 border-t border-border">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img
              alt="KL University"
              className="h-14 w-auto object-contain"
              src="/klh.png"
            />
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            International Conference on Advanced Computing & Systems. Shaping the future of technical innovation.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Conference</h4>
          <ul className="space-y-2 text-sm">
            {FOOTER_LINKS.conference.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Authors</h4>
          <ul className="space-y-2 text-sm">
            {FOOTER_LINKS.authors.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="text-muted-foreground">contact@kluniversity.in</li>
            <li className="text-muted-foreground">KL University, Bachupally</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border/50 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 KL University. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-900 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
