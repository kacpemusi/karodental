import { createFileRoute, Link } from "@tanstack/react-router";

import { MainLayout } from "@/components/MainLayout";
import heroClinic from "@/assets/hero-clinic.jpg";
import team01 from "@/assets/team-01.jpg";
import team02 from "@/assets/team-02.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Karodental - Stomatologia rodzinna Warszawa Gocław",
      },
      {
        name: "description",
        content:
          "Karodental to nowoczesny gabinet stomatologii rodzinnej na warszawskim Gocławiu. Oferujemy kompleksową opiekę stomatologiczną dla dzieci i dorosłych.",
      },
      {
        property: "og:title",
        content: "Karodental - Stomatologia rodzinna Warszawa Gocław",
      },
      {
        property: "og:description",
        content:
          "Karodental to nowoczesny gabinet stomatologii rodzinnej na warszawskim Gocławiu. Oferujemy kompleksową opiekę stomatologiczną dla dzieci i dorosłych.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <span className="inline-block py-1 px-3 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded mb-6">
                Warszawa Gocław
              </span>
              <h1 className="font-display text-6xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-balance">
                Wiemy, jak ważny jest Twój{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  uśmiech
                </span>
                .
              </h1>
              <p className="text-xl text-muted-foreground max-w-[45ch] mb-10 leading-relaxed">
                Nowoczesna stomatologia w przyjaznej atmosferze. Dbamy o zdrowie zębów całej Twojej
                rodziny z precyzją i pasją.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/leczenie"
                  className="px-8 py-4 bg-foreground text-background rounded-full font-bold hover:bg-primary transition-colors"
                >
                  Sprawdź ofertę
                </Link>
                <Link
                  to="/cennik"
                  className="px-8 py-4 border border-border rounded-full font-bold hover:bg-white transition-colors"
                >
                  Cennik usług
                </Link>
              </div>
            </div>
            <div className="relative fade-up" style={{ animationDelay: "200ms" }}>
              <div className="w-full aspect-square bg-stone-200 rounded-[40px] shadow-2xl overflow-hidden outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={heroClinic}
                  alt="Nowoczesny gabinet stomatologiczny Karodental na Gocławiu"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl font-extrabold tracking-tight mb-4 fade-up">
                Kompleksowe leczenie
              </h2>
              <p className="text-muted-foreground fade-up">
                Oferujemy pełen zakres usług stomatologicznych, od profilaktyki po zaawansowaną
                chirurgię.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-2">
                <div className="size-12 rounded-full border border-border grid place-items-center opacity-30">
                  ←
                </div>
                <div className="size-12 rounded-full border border-border grid place-items-center">
                  →
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Stomatologia zachowawcza"
              description="Profilaktyka i leczenie próchnicy z użyciem najwyższej jakości materiałów estetycznych."
              href="/leczenie"
              variant="primary"
              icon={<div className="size-6 border-2 border-current rounded-full" />}
              delay="0ms"
            />
            <ServiceCard
              title="Protetyka"
              description="Przywracamy funkcję i estetykę zgryzu dzięki koronom, mostom oraz protezom."
              href="/leczenie"
              variant="accent"
              icon={<div className="size-6 border-2 border-current rounded-sm" />}
              delay="100ms"
            />
            <ServiceCard
              title="Ortodoncja"
              description="Nowoczesne aparaty stałe i ruchome dla dzieci oraz dorosłych. Piękny uśmiech w każdym wieku."
              href="/leczenie"
              variant="primary"
              icon={<div className="size-6 border-b-2 border-current" />}
              delay="200ms"
            />
            <ServiceCard
              title="Implantologia"
              description="Trwałe i naturalnie wyglądające uzupełnienie braków zębowych najwyższej klasy implantami."
              href="/leczenie"
              variant="accent"
              icon={
                <div className="size-6 grid grid-cols-2 gap-1">
                  <div className="bg-current rounded-full" />
                  <div className="bg-current rounded-full" />
                </div>
              }
              delay="300ms"
            />
            <ServiceCard
              title="Stomatologia estetyczna"
              description="Wybielanie, licówki porcelanowe i bonding – wszystko dla Twojego wymarzonego uśmiechu."
              href="/leczenie"
              variant="primary"
              icon={<div className="size-5 border-2 border-current rotate-45" />}
              delay="400ms"
            />
            <ServiceCard
              title="Chirurgia stomatologiczna"
              description="Bezbolesne usuwanie ósemek oraz inne zabiegi chirurgiczne w pełnym komforcie."
              href="/leczenie"
              variant="accent"
              icon={
                <div className="size-6 border-2 border-current rounded-full flex items-center justify-center">
                  +
                </div>
              }
              delay="500ms"
            />
          </div>
        </div>
      </section>

      {/* About & Team Section */}
      <section className="py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="w-full aspect-[3/4] bg-stone-200 rounded-3xl overflow-hidden outline-1 -outline-offset-1 outline-black/5">
                  <img
                    src={team01}
                    alt="Lekarz stomatolog Karodental"
                    width={704}
                    height={944}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-12">
                  <div className="w-full aspect-[3/4] bg-stone-300 rounded-3xl overflow-hidden outline-1 -outline-offset-1 outline-black/5">
                    <img
                      src={team02}
                      alt="Przyjazna atmosfera w gabinecie Karodental"
                      width={704}
                      height={944}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl font-extrabold tracking-tight mb-8 leading-tight">
                Poznaj nasz gabinet na Gocławiu
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Karodental to miejsce, w którym nowoczesne technologie spotykają się z ludzkim
                  podejściem. Nasz zespół składa się z pasjonatów, którzy stale podnoszą swoje
                  kwalifikacje.
                </p>
                <p>
                  Wierzymy, że wizyta u dentysty może być bezstresowa. Specjalizujemy się w opiece
                  nad pacjentami, którzy odczuwają lęk przed leczeniem, oraz w pracy z dziećmi.
                </p>
              </div>
              <div className="mt-12 pt-12 border-t border-border">
                <div className="flex items-center gap-6">
                  <div>
                    <p className="font-display text-3xl font-extrabold text-primary">15+</p>
                    <p className="text-xs font-bold uppercase tracking-widest">Lat doświadczenia</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div>
                    <p className="font-display text-3xl font-extrabold text-accent">12k+</p>
                    <p className="text-xs font-bold uppercase tracking-widest">
                      Zadowolonych pacjentów
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  variant: "primary" | "accent";
  icon: React.ReactNode;
  delay: string;
}

function ServiceCard({ title, description, href, variant, icon, delay }: ServiceCardProps) {
  const baseBg = variant === "primary" ? "bg-primary/5" : "bg-accent/5";
  const hoverBg = variant === "primary" ? "group-hover:bg-primary" : "group-hover:bg-accent";
  const textColor = variant === "primary" ? "text-primary" : "text-accent";

  return (
    <Link
      to={href}
      className="group block p-8 rounded-3xl border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all fade-up"
      style={{ animationDelay: delay }}
    >
      <div
        className={`size-14 rounded-2xl ${baseBg} flex items-center justify-center mb-6 ${hoverBg} group-hover:text-white transition-colors`}
      >
        {icon}
      </div>
      <h3 className="font-display text-xl font-extrabold mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{description}</p>
      <span
        className={`text-xs font-bold uppercase tracking-widest ${textColor} flex items-center gap-2`}
      >
        Czytaj więcej{" "}
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </span>
    </Link>
  );
}
