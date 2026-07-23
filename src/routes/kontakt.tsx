import { createFileRoute } from "@tanstack/react-router";

import { MainLayout } from "@/components/MainLayout";

export const Route = createFileRoute("/kontakt")({
  component: Kontakt,
  head: () => ({
    meta: [
      { title: "Kontakt - Karodental Warszawa Gocław" },
      {
        name: "description",
        content:
          "Skontaktuj się z Karodental na warszawskim Gocławiu. Telefony: 22 671 33 33, 22 671 99 93. Adres: ul. Bora-Komorowskiego 4/15.",
      },
      { property: "og:title", content: "Kontakt - Karodental Warszawa Gocław" },
      {
        property: "og:description",
        content: "Umów wizytę w Karodental. Telefony i godziny otwarcia gabinetu na Gocławiu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Kontakt() {
  return (
    <MainLayout>
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="inline-block py-1 px-3 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded mb-6">
              Kontakt
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-8">
              Umów się na wizytę
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Jesteśmy do Twojej dyspozycji. Zadzwoń lub napisz – pomożemy Ci znaleźć dogodny termin.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-2xl font-extrabold mb-6">Telefony</h2>
                <div className="space-y-4">
                  <a
                    href="tel:+48226713333"
                    className="block text-2xl font-bold text-primary hover:text-accent transition-colors"
                  >
                    +48 22 671 33 33
                  </a>
                  <a
                    href="tel:+48226719993"
                    className="block text-2xl font-bold text-primary hover:text-accent transition-colors"
                  >
                    +48 22 671 99 93
                  </a>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold mb-6">Adres</h2>
                <p className="text-lg text-muted-foreground">
                  ul. Bora-Komorowskiego 22
                  <br />
                  03-982 Warszawa (Gocław)
                </p>
                <a
                  href="https://share.google/J6Uq0MXcjwMx3CJ5W"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-primary hover:text-accent transition-colors underline underline-offset-4"
                >
                  Zobacz na Google Maps →
                </a>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold mb-6">Dojazd</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Autobus</p>
                    <p>
                      Przystanek <span className="font-medium text-foreground">Bora-Komorowskiego</span>
                    </p>
                    <p className="text-sm mt-1">
                      Linie: 117, 147, 148, 168, 213, 219, 411, 507, 509, E-1
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Parking</p>
                    <p className="text-sm">
                      W okolicy gabinetu dostępne są bezpłatne miejsca parkingowe.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold mb-6">Godziny otwarcia</h2>
                <div className="space-y-2 text-muted-foreground max-w-xs">
                  <div className="flex justify-between">
                    <span>Poniedziałek – Piątek</span>
                    <span className="font-semibold text-foreground">08:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sobota</span>
                    <span className="font-semibold text-foreground">09:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Niedziela</span>
                    <span className="font-semibold text-foreground">Zamknięte</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-extrabold mb-6">E-mail</h2>
                <a
                  href="mailto:gabinet@karodental.pl"
                  className="text-lg text-primary hover:text-accent transition-colors"
                >
                  gabinet@karodental.pl
                </a>
              </div>
            </div>

            <div className="p-8 md:p-12 rounded-[40px] bg-white border border-border shadow-xl">
              <h2 className="font-display text-2xl font-extrabold mb-2">Napisz do nas</h2>
              <p className="text-muted-foreground mb-8">
                Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.
              </p>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="jan@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+48 123 456 789"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Opisz, w jakiej sprawie się do nas zgłaszasz..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-colors"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
