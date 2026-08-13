import { createFileRoute } from "@tanstack/react-router";

import { MainLayout } from "@/components/MainLayout";

export const Route = createFileRoute("/leczenie")({
  component: Leczenie,
  head: () => ({
    meta: [
      { title: "Leczenie - Karodental Warszawa Gocław" },
      {
        name: "description",
        content:
          "Kompleksowe usługi stomatologiczne w Karodental: stomatologia zachowawcza, protetyka, ortodoncja, implantologia, chirurgia i stomatologia estetyczna.",
      },
      { property: "og:title", content: "Leczenie - Karodental Warszawa Gocław" },
      {
        property: "og:description",
        content:
          "Pełen zakres usług stomatologicznych dla dzieci i dorosłych w nowoczesnym gabinecie na Gocławiu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  {
    title: "Stomatologia zachowawcza",
    description:
      "Leczenie próchnicy, odbudowa zębów oraz profilaktyka. Używamy najwyższej jakości materiałów kompozytowych, które łączą trwałość z naturalnym wyglądem.",
  },
  {
    title: "Protetyka",
    description:
      "Korony, mosty, protezy i zęby na implantach. Przywracamy funkcję i estetykę uzębienia, projektując prace protetyczne z najwyższą precyzją.",
  },
  {
    title: "Ortodoncja",
    description:
      "Aparaty stałe, ruchome oraz przezroczyste nakładki. Korygujemy wady zgryzu u dzieci i dorosłych, pomagając uzyskać piękny i zdrowy uśmiech.",
  },
  {
    title: "Implantologia",
    description:
      "Trwałe uzupełnienie braków zębowych za pomocą nowoczesnych implantów. Oferujemy kompleksową opiekę od planowania po ostateczną odbudowę.",
  },
  {
    title: "Stomatologia estetyczna",
    description:
      "Wybielanie zębów, licówki porcelanowe, bonding i korekta kształtu. Tworzymy uśmiechy, które dodają pewności siebie.",
  },
  {
    title: "Chirurgia stomatologiczna",
    description:
      "Bezbolesne usuwanie zębów, w tym ósemek, oraz zaawansowane zabiegi chirurgiczne przeprowadzane w komfortowych warunkach.",
  },
  {
    title: "Diagnostyka RTG",
    description:
      "Cyfrowe zdjęcia rentgenowskie w gabinecie. Precyzyjna diagnostyka pozwala zaplanować bezpieczne i skuteczne leczenie.",
  },
];

function Leczenie() {
  return (
    <MainLayout>
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="inline-block py-1 px-3 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded mb-6">
              Leczenie
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light tracking-tighter leading-[0.95] mb-8">
              Kompleksowa opieka stomatologiczna
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Oferujemy pełen zakres usług dla całej rodziny – od profilaktyki po zaawansowane
              zabiegi chirurgiczne i implantologiczne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-8 rounded-3xl border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-display text-xl font-extrabold shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-extrabold mb-3">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-[40px] bg-foreground text-background">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold mb-4">Nie wiesz, czego potrzebujesz?</h2>
              <p className="text-background/70 mb-8 leading-relaxed">
                Umów się na konsultację. Przeprowadzimy dokładny wywiad i diagnostykę, a następnie
                zaproponujemy plan leczenia dopasowany do Twoich potrzeb.
              </p>
              <a
                href="tel:+48226713333"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold hover:bg-accent/90 transition-colors"
              >
                Zadzwoń: 22 671 33 33
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
