import { createFileRoute } from "@tanstack/react-router";

import { MainLayout } from "@/components/MainLayout";
import heroClinic from "@/assets/hero-clinic.jpg";
import team01 from "@/assets/team-01.jpg";
import team02 from "@/assets/team-02.jpg";

export const Route = createFileRoute("/gabinet")({
  component: Gabinet,
  head: () => ({
    meta: [
      { title: "O nas - Karodental Warszawa Gocław" },
      {
        name: "description",
        content:
          "Poznaj gabinet Karodental na warszawskim Gocławiu. 15 lat doświadczenia w kompleksowej opiece stomatologicznej dla dzieci i dorosłych.",
      },
      { property: "og:title", content: "O nas - Karodental Warszawa Gocław" },
      {
        property: "og:description",
        content:
          "Poznaj zespół Karodental i nasze podejście do nowoczesnej stomatologii rodzinnej.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Gabinet() {
  return (
    <MainLayout>
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="inline-block py-1 px-3 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded mb-6">
              O nas
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-8">
              Gabinet stomatologiczny z ludzkim podejściem
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Od 15 lat tworzymy miejsce, w którym nowoczesne technologie spotykają się z empatią i
              troską o każdego pacjenta.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src={heroClinic}
                alt="Wnętrze gabinetu Karodental"
                width={1200}
                height={1200}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Karodental powstało z myślą o pacjentach, którzy szukają nie tylko skutecznego
                leczenia, ale także przyjaznej atmosfery. Nasz zespół stale podnosi kwalifikacje,
                uczestnicząc w kursach i konferencjach stomatologicznych.
              </p>
              <p>
                Specjalizujemy się w opiece nad całymi rodzinami – od pierwszej wizyty dziecka u
                dentysty, po zaawansowane zabiegi dla dorosłych. Wierzymy, że profilaktyka i edukacja
                są kluczem do zdrowego uśmiechu na lata.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                  <span className="size-5 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                    ✓
                  </span>
                  <span>Nowoczesny sprzęt diagnostyczny, w tym cyfrowe RTG</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-5 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                    ✓
                  </span>
                  <span>Bezstresowe leczenie dzieci i pacjentów z lękiem</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-5 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                    ✓
                  </span>
                  <span>Indywidualny plan leczenia dopasowany do potrzeb</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-display text-4xl font-extrabold tracking-tight mb-4">Poznaj nasz zespół</h2>
            <p className="text-muted-foreground max-w-2xl">
              Doświadczeni i przyjaźni specjaliści, którzy z pasją podchodzą do każdego pacjenta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-200 mb-6">
                <img
                  src={team01}
                  alt="Lekarz stomatolog Karodental"
                  width={704}
                  height={944}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-extrabold">Dr Karolina Kowalska</h3>
              <p className="text-sm text-muted-foreground">Stomatolog zachowawczy i estetyczny</p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-300 mb-6">
                <img
                  src={team02}
                  alt="Lekarz stomatolog Karodental z pacjentem"
                  width={704}
                  height={944}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-extrabold">Dr Anna Nowak</h3>
              <p className="text-sm text-muted-foreground">Stomatologia dziecięca i ortodoncja</p>
            </div>
          </div>

          <div className="mt-32">
            <div className="mb-10">
              <h2 className="font-display text-4xl font-extrabold tracking-tight mb-4">
                Wybrane certyfikaty naszych lekarzy
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Stale poszerzamy wiedzę i umiejętności, uczestnicząc w kursach i szkoleniach w Polsce i za granicą.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden bg-white border border-border shadow-sm p-4 md:p-8">
              <img
                src={certyfikaty.url}
                alt="Wybrane certyfikaty zespołu Karodental"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
