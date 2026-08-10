import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { MainLayout } from "@/components/MainLayout";
import heroClinic from "@/assets/hero-clinic.jpg";
import beataPrzadka from "@/assets/beata-przadka-gumiezna.jpg.asset.json";
import grzegorzGumiezny from "@/assets/grzegorz-gumiezny.jpg.asset.json";
import justynaGorgol from "@/assets/justyna-gorgol.jpg.asset.json";
import agnieszkaChomicz from "@/assets/agnieszka-chomicz.jpg.asset.json";
import pawelStasiatsko from "@/assets/pawel-stasiatsko.jpg.asset.json";
import martaBreczko from "@/assets/dr-marta-breczko.jpg.asset.json";
import cert1 from "@/assets/cert-1.jpg.asset.json";
import cert2 from "@/assets/cert-2.jpg.asset.json";
import cert3 from "@/assets/cert-3.jpg.asset.json";
import cert4 from "@/assets/cert-4.jpg.asset.json";
import cert5 from "@/assets/cert-5.jpg.asset.json";
import cert6 from "@/assets/cert-6.jpg.asset.json";
import cert7 from "@/assets/cert-7.jpg.asset.json";
import cert8 from "@/assets/cert-8.jpg.asset.json";
import cert9 from "@/assets/cert-9.jpg.asset.json";
import cert10 from "@/assets/cert-10.jpg.asset.json";
import cert11 from "@/assets/cert-11.jpg.asset.json";
import cert12 from "@/assets/cert-12.jpg.asset.json";
import cert13 from "@/assets/cert-13.jpg.asset.json";
import cert14 from "@/assets/cert-14.jpg.asset.json";
import cert15 from "@/assets/cert-15.jpg.asset.json";
import cert16 from "@/assets/cert-16.jpg.asset.json";
import cert17 from "@/assets/cert-17.jpg.asset.json";
import cert18 from "@/assets/cert-18.jpg.asset.json";
import cert19 from "@/assets/cert-19.jpg.asset.json";
import cert20 from "@/assets/cert-20.jpg.asset.json";
import cert22 from "@/assets/cert22.jpg.asset.json";
import cert23 from "@/assets/cert23.jpg.asset.json";
import cert24 from "@/assets/cert24.jpg.asset.json";
import cert25 from "@/assets/cert25.jpg.asset.json";
import cert26 from "@/assets/cert26.jpg.asset.json";
import cert27 from "@/assets/cert27.jpg.asset.json";
import cert28 from "@/assets/cert28.jpg.asset.json";
import cert29 from "@/assets/cert29.jpg.asset.json";
import cert30 from "@/assets/cert30.jpg.asset.json";
import cert31 from "@/assets/cert31.jpg.asset.json";
import cert32 from "@/assets/cert32.jpg.asset.json";
import cert33 from "@/assets/cert33.jpg.asset.json";
import cert34 from "@/assets/cert34.jpg.asset.json";
import cert35 from "@/assets/cert35.jpg.asset.json";
import cert36 from "@/assets/cert36.jpg.asset.json";
import cert37 from "@/assets/cert37.jpg.asset.json";

const certificates = [
  { src: cert1.url, alt: "Dyplom doktora nauk medycznych - Uniwersytet Medyczny w Białymstoku (2009)" },
  { src: cert2.url, alt: "Dyplom specjalisty stomatologii dziecięcej - CEM Łódź (2004)" },
  { src: cert3.url, alt: "Dyplom pierwszego stopnia specjalizacji w zakresie stomatologii ogólnej (1999)" },
  { src: cert4.url, alt: "Certyfikat kursu ortodontycznego - Trachem, prof. Bernardo Garcia (2011)" },
  { src: cert5.url, alt: "Certyfikat uczestnictwa - Sympozjum Stomatologii Amerykańskiej (2003)" },
  { src: cert6.url, alt: "Dyplom Dornwell - wykład prof. Cornelis H. Pameijer (2005)" },
  { src: cert7.url, alt: "Zaświadczenie - II sesja IAO w Polsce (2008)" },
  { src: cert8.url, alt: "Zaświadczenie - Ortodoncja Rondeau Seminars, cz. I (2007)" },
  { src: cert9.url, alt: "Zaświadczenie - Pomorska Akademia Medyczna, stomatologia dziecięca (2003)" },
  { src: cert10.url, alt: "Certyfikat - II Gdańskie Forum Stomatologiczne PTS (2003)" },
  { src: cert11.url, alt: "Certyfikat - szkolenie z zaawansowanych technik mezoterapii, Croma (2010)" },
  { src: cert12.url, alt: "Dyplom - szkolenie Stany nagłe. Pierwsza pomoc w gabinecie stomatologicznym (2009)" },
  { src: cert13.url, alt: "Certyfikat Optident - Diagnostyka radiologiczna w endodoncji i implantologii (2006)" },
  { src: cert14.url, alt: "Certyfikat International Association for Orthodontics - UNO-DENTAL (2008)" },
  { src: cert15.url, alt: "Certyfikat - Jesienne Spotkania Stomatologiczne, Podlaskie Stowarzyszenie Stomatologów (2009)" },
  { src: cert16.url, alt: "Certyfikat - Traumatologia zębów u dzieci i młodzieży, UM w Łodzi (2004)" },
  { src: cert17.url, alt: "Zaświadczenie Trachem - kurs ortodontyczny dr Larry Brown, sesja II (2010)" },
  { src: cert18.url, alt: "Dyplom pierwszego stopnia specjalizacji w zakresie stomatologii ogólnej - Grzegorz Gumiężny (1999)" },
  { src: cert19.url, alt: "Dyplom specjalisty w dziedzinie protetyka stomatologiczna - CEM Łódź (2004)" },
  { src: cert20.url, alt: "Certyfikat - I Kongres Implantologiczny Denon Dental, BEGO (2008)" },
  { src: cert22.url, alt: "Dyplom Dornwell - wykład prof. Cornelis H. Pameijer, Grzegorz Gumiężny (2005)" },
  { src: cert23.url, alt: "Certyfikat - Implanty: Idea, Sztuka, Praktyka, Kurs Medyczny Quintessenz (2007)" },
  { src: cert24.url, alt: "Certyfikat - Jesienne Spotkania Stomatologiczne, Podlaskie Stowarzyszenie Stomatologów, Białowieża (2009)" },
  { src: cert25.url, alt: "Certyfikat Optident - Diagnostyka radiologiczna w endodoncji i implantologii, Grzegorz Gumiężny (2006)" },
  { src: cert26.url, alt: "Certificate - Osteologia w Warszawie 2006, regeneracja i odbudowa kości" },
  { src: cert27.url, alt: "Certificate - ANKYLOS Implant System, DENTSPLY Friadent, Niemcy (2007)" },
  { src: cert28.url, alt: "Certyfikat - IV Międzynarodowy Kongres Polskiego Stowarzyszenia Implantologicznego, Spała (2006)" },
  { src: cert29.url, alt: "Certyfikat - Sympozjum Stomatologii Amerykańskiej, Grzegorz Gumiężny (2003)" },
  { src: cert30.url, alt: "Certificate - 13th DENTSPLY Friadent World Symposium, Berlin (2008)" },
  { src: cert31.url, alt: "Dyplom - XIII Naukowo-Szkoleniowe Sympozjum Lekarzy Stomatologów w Zakopanem, Grzegorz Gumiężny (2004)" },
  { src: cert32.url, alt: "Certyfikat - Maraton Implantologii Praktycznej, techniki laboratoryjne w pracach na implantach (2007)" },
  { src: cert33.url, alt: "Certification - Attachment for traditional prostheses and implant, Rhein83 / Holtrade (2003)" },
  { src: cert34.url, alt: "Certyfikat - 2. Evident Success Congress Warsaw, Red & White Esthetic (2007)" },
  { src: cert35.url, alt: "Certyfikat - Implanty: Idea, Sztuka, Praktyka, Kurs Medyczny Quintessence (2008)" },
  { src: cert36.url, alt: "Certyfikat - Forum Implantologii OSTEOPLANT, Poznań (2005)" },
  { src: cert37.url, alt: "Certyfikat - X Toruńska Konferencja Stomatologiczna EXPODENT 2004, Beata Prządka-Gumiężna" },
];


export const Route = createFileRoute("/gabinet")({
  component: Gabinet,
  head: () => ({
    meta: [
      { title: "O nas - Karodental Warszawa Gocław" },
      {
        name: "description",
        content:
          "Poznaj gabinet Karodental na warszawskim Gocławiu. 30+ lat doświadczenia w kompleksowej opiece stomatologicznej dla dzieci i dorosłych.",
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
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

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
              30+ lat doświadczenia w stomatologii rodzinnej. Tworzymy miejsce, w którym nowoczesne
              technologie spotykają się z empatią i troską o każdego pacjenta.
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-200 mb-6">
                <img
                  src={beataPrzadka.url}
                  alt="Dr n. med. Beata Prządka - Gumiężna"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-extrabold">Dr n. med. Beata Prządka - Gumiężna</h3>
              <p className="text-sm text-muted-foreground">ortodontka, specjalista stomatologii dziecięcej</p>
            </div>

            <div className="group text-center">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-300 mb-6">
                <img
                  src={grzegorzGumiezny.url}
                  alt="Dr n. med. Grzegorz Gumiężny"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-extrabold">Dr n. med. Grzegorz Gumiężny</h3>
              <p className="text-sm text-muted-foreground">specjalista protetyki stomatologicznej</p>
            </div>

            <div className="group text-center">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center">
                <span className="font-display text-6xl font-extrabold text-primary-foreground">MM</span>
              </div>
              <h3 className="font-display text-xl font-extrabold">Małgorzata Matuszewska</h3>
              <p className="text-sm text-muted-foreground">lekarz stomatolog</p>
            </div>

            <div className="group text-center">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-200 mb-6">
                <img
                  src={justynaGorgol.url}
                  alt="Justyna Gorgol - Łajca"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-extrabold">Justyna Gorgol - Łajca</h3>
              <p className="text-sm text-muted-foreground">lekarz stomatolog</p>
            </div>

            <div className="group text-center">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/80 to-accent/80 mb-6 flex items-center justify-center">
                <span className="font-display text-6xl font-extrabold text-primary-foreground">JG</span>
              </div>
              <h3 className="font-display text-xl font-extrabold">Julia Gumiężna</h3>
              <p className="text-sm text-muted-foreground">lekarz stomatolog</p>
            </div>

            <div className="group text-center">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-200 mb-6">
                <img
                  src={pawelStasiatsko.url}
                  alt="Paweł Stasiatsko"
                  width={704}
                  height={944}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-extrabold">Paweł Stasiatsko</h3>
              <p className="text-sm text-muted-foreground">specjalista chirurgii stomatologicznej</p>
            </div>

            <div className="group text-center">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-200 mb-6">
                <img
                  src={martaBreczko.url}
                  alt="Marta Breczko"
                  width={704}
                  height={944}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-extrabold">Marta Breczko</h3>
              <p className="text-sm text-muted-foreground">lekarz stomatolog</p>
            </div>

            <div className="group text-center">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-200 mb-6">
                <img
                  src={agnieszkaChomicz.url}
                  alt="Dr n. med. Agnieszka Chomicz"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-extrabold">Dr n. med. Agnieszka Chomicz</h3>
              <p className="text-sm text-muted-foreground">lekarz stomatolog</p>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <button
                  key={cert.src}
                  type="button"
                  onClick={() => setLightbox(cert)}
                  className="group block rounded-2xl overflow-hidden bg-white border border-border shadow-sm hover:shadow-lg transition-shadow text-left cursor-zoom-in"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-stone-50">
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      loading="lazy"
                      className="w-full h-full object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Zamknij"
            className="absolute top-4 right-4 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="size-6" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
          />
        </div>
      )}
    </MainLayout>
  );
}
