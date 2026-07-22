import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { type ReactNode, useState } from "react";

import karoLogo from "@/assets/karologo.png.asset.json";

interface MainLayoutProps {
  children: ReactNode;
}

const navLinks = [
  { to: "/cennik", label: "Cennik usług" },
  { to: "/leczenie", label: "Oferta" },
  { to: "/gabinet", label: "O nas" },
  { to: "/kontakt", label: "Kontakt" },
];

export function MainLayout({ children }: MainLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-accent/30">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center shrink-0" aria-label="Karodental - strona główna">
            <img
              src={karoLogo.url}
              alt="Karodental - stomatologia rodzinna"
              className="h-14 sm:h-16 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+48226713333"
              className="hidden sm:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Zadzwoń
            </a>
            <a
              href="tel:+48226713333"
              className="sm:hidden inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all"
              aria-label="Zadzwoń do nas"
            >
              <Phone className="size-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden inline-flex size-10 items-center justify-center rounded-full border border-border hover:bg-accent/10 transition-colors"
              aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary" }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+48226713333"
                className="flex items-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider text-primary"
              >
                <Phone className="size-4" />
                +48 22 671 33 33
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-foreground text-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <div className="mb-8">
                <img
                  src={karoLogo.url}
                  alt="Karodental"
                  className="h-14 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-background/60 text-sm leading-relaxed mb-6">
                Twój uśmiech w najlepszych rękach. Profesjonalna opieka stomatologiczna w samym sercu
                Gocławia.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">
                Kontakt
              </h4>
              <div className="space-y-4">
                <p className="text-lg font-medium">+48 22 671 33 33</p>
                <p className="text-lg font-medium">+48 22 671 99 93</p>
                <p className="text-sm text-background/60">gabinet@karodental.pl</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">
                Lokalizacja
              </h4>
              <p className="text-lg font-medium">ul. Bora-Komorowskiego 4/15</p>
              <p className="text-sm text-background/60">03-982 Warszawa (Gocław)</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">
                Godziny
              </h4>
              <div className="text-sm space-y-2 text-background/80">
                <div className="flex justify-between">
                  <span>Pon - Pt:</span>
                  <span>08:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota:</span>
                  <span>09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Niedziela:</span>
                  <span>Zamknięte</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between gap-6 text-[10px] font-bold uppercase tracking-widest text-background/30">
            <p>© {new Date().getFullYear()} Karodental Warszawa. Wszystkie prawa zastrzeżone.</p>
            <div className="flex gap-8">
              <Link to="/" className="hover:text-background transition-colors">
                Strona główna
              </Link>
              <Link to="/gabinet" className="hover:text-background transition-colors">
                Gabinet
              </Link>
              <Link to="/leczenie" className="hover:text-background transition-colors">
                Leczenie
              </Link>
              <Link to="/kontakt" className="hover:text-background transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
