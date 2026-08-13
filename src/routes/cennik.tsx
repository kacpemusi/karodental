import { createFileRoute } from "@tanstack/react-router";

import { MainLayout } from "@/components/MainLayout";

export const Route = createFileRoute("/cennik")({
  component: Cennik,
  head: () => ({
    meta: [
      { title: "Cennik usług - Karodental Warszawa Gocław" },
      {
        name: "description",
        content:
          "Orientacyjny cennik usług stomatologicznych gabinetu Karodental na warszawskim Gocławiu.",
      },
      { property: "og:title", content: "Cennik usług - Karodental Warszawa Gocław" },
      {
        property: "og:description",
        content: "Zapoznaj się z orientacyjnym cennikiem usług stomatologicznych w Karodental.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type PriceItem = { name: string; price: string };
type PriceCategory = { title: string; items: PriceItem[] };

const priceList: PriceCategory[] = [
  {
    title: "Pracownia RTG",
    items: [
      { name: "Zdjęcie punktowe", price: "60 zł" },
      { name: "Pantomogram", price: "120 zł" },
      { name: "Zdjęcie cefalometryczne", price: "120 zł" },
      { name: "Tomografia", price: "300 zł" },
    ],
  },
  {
    title: "Wypełnienia",
    items: [
      { name: "Badanie jamy ustnej jako samodzielna wizyta", price: "150 zł" },
      { name: "Małe wypełnienie", price: "320 zł" },
      { name: "Średnie wypełnienie", price: "370 zł" },
      { name: "Duże wypełnienie", price: "420 - 500 zł" },
      { name: "Licówka kompozytowa", price: "700 zł" },
      { name: "Opatrunek ZnO/E", price: "180 zł" },
      { name: "Znieczulenie", price: "60 zł" },
    ],
  },
  {
    title: "Endodoncja",
    items: [
      { name: "Dewitalizacja miazgi z opatrunkiem", price: "250 zł" },
      { name: "Opracowanie i wypełnienie kanału – 1 kanał", price: "750 zł" },
      { name: "Opracowanie i wypełnienie kanału – 2 kanały", price: "950 zł" },
      { name: "Opracowanie i wypełnienie kanału – 3 kanały", price: "1150 zł" },
      { name: "Aplikacja leku do kanału zęba", price: "150 zł" },
    ],
  },
  {
    title: "Profilaktyka stomatologiczna",
    items: [
      { name: "Lakierowanie zębów stałych", price: "150 zł" },
      { name: "Lakierowanie zębów mlecznych", price: "150 zł" },
      { name: "Lakowanie", price: "150 zł" },
      { name: "Scaling", price: "350 zł" },
      { name: "Piaskowanie", price: "350 zł" },
      { name: "Scaling + piaskowanie + lakierowanie", price: "500 zł" },
    ],
  },
  {
    title: "Chirurgia",
    items: [
      { name: "Konsultacja implantologiczna", price: "200 zł" },
      { name: "Ekstrakcja zęba jednokorzeniowego", price: "250 – 400 zł" },
      { name: "Ekstrakcja zęba wielokorzeniowego", price: "350 – 500 zł" },
      { name: "Chirurgiczne usunięcie zęba zatrzymanego", price: "800 – 900 zł" },
      { name: "Płukanie kieszonki + lek", price: "150 zł" },
      { name: "Szycie zębodołu", price: "100 zł" },
      { name: "Nacięcie ropnia + drenaż + opatrunek", price: "200 zł" },
      { name: "Leczenie suchego zębodołu", price: "100 zł" },
      { name: "Implant – część chirurgiczna", price: "3 500 zł" },
      { name: "Implant – część protetyczna", price: "3 500 zł" },
      { name: "Śruba gojąca", price: "300 zł" },
    ],
  },
  {
    title: "Protetyka",
    items: [
      { name: "Konsultacja protetyczna", price: "200 zł" },
      { name: "Proteza całkowita", price: "2 800 zł" },
      { name: "Proteza elastyczna", price: "3 000 zł" },
      { name: "Proteza szkieletowa", price: "2 900 zł" },
      { name: "Wkład koronowo-korzeniowy prosty", price: "700 zł" },
      { name: "Wkład koronowo-korzeniowy złożony", price: "900 zł" },
      { name: "Korona porcelanowa standardowa", price: "1 500 zł" },
      { name: "Korona porcelanowa na złocie", price: "1 500 zł + cena złota" },
      { name: "Korona pełnoceramiczna", price: "2 200 zł" },
      { name: "Licówka porcelanowa", price: "2 200 zł" },
      { name: "Cementowanie korony", price: "200 zł" },
      { name: "Szyna relaksacyjna", price: "600 zł" },
    ],
  },
  {
    title: "Ortodoncja",
    items: [
      { name: "Konsultacja ortodontyczna", price: "200 zł" },
      { name: "Modele diagnostyczne", price: "300 zł" },
      { name: "Aparat wyjmowany", price: "od 1 000 zł" },
      { name: "Wizyta kontrolna – aparat wyjmowany", price: "150 zł (jeden aparat)" },
      { name: "Naprawa aparatu", price: "od 300 zł" },
      { name: "Aparat stały metalowy – jeden łuk", price: "2 600 zł" },
      { name: "Aparat stały porcelanowy – jeden łuk", price: "3 600 zł" },
      { name: "Wizyta kontrolna z aparatem stałym", price: "270 – 300 zł" },
      { name: "Aparat retencyjny", price: "500 zł" },
      { name: "Clear aligner 1 etap (3 szyny), jeden łuk", price: "1 400 zł" },
      { name: "Invisalign", price: "6 500 – 18 700 zł" },
    ],
  },
  {
    title: "Pedodoncja (stomatologia dziecięca)",
    items: [
      { name: "Wizyta adaptacyjna", price: "150 zł" },
      { name: "Wypełnienie w zębie mlecznym", price: "200 – 250 zł" },
      { name: "Opatrunek w zębie mlecznym", price: "100 zł" },
      { name: "Ekstrakcja zęba mlecznego", price: "150 – 200 zł" },
      { name: "Lapisowanie zębów", price: "150 zł" },
    ],
  },
  {
    title: "Wybielanie zębów",
    items: [
      { name: "W gabinecie", price: "1 300 zł" },
      { name: "Nakładkowe", price: "1 200 zł" },
      { name: "Wybielanie martwego zęba", price: "200 zł" },
    ],
  },
];

function Cennik() {
  return (
    <MainLayout>
      <section className="pt-20 pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block py-1 px-3 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded mb-6">
            Cennik
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-8">
            Cennik usług
          </h1>
          <div className="max-w-3xl space-y-5 text-lg text-muted-foreground leading-relaxed mb-16">
            <p>
              Każdy uśmiech, z jakim spotykamy się w Karodental, jest inny – i podobnie traktujemy
              każde leczenie. Zamiast stosować uniwersalne schematy, tworzymy plan terapii skrojony
              na miarę potrzeb konkretnego pacjenta.
            </p>
            <p>
              Właśnie dlatego ceny widoczne w naszym cenniku mają charakter orientacyjny. Ostateczna
              kwota zależy m.in. od czasu pracy, wybranych materiałów oraz usług realizowanych przez
              współpracujące z nami laboratorium.{" "}
              <strong className="font-bold text-foreground">
                Precyzyjny kosztorys przygotowujemy zawsze indywidualnie, po wizycie diagnostycznej.
              </strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {priceList.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-border overflow-hidden bg-card"
              >
                <div className="px-6 py-5 bg-primary/5 border-b border-border">
                  <h2 className="font-display text-xl font-extrabold text-primary tracking-tight">
                    {category.title}
                  </h2>
                </div>
                <ul className="divide-y divide-border">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 px-6 py-3.5"
                    >
                      <span className="text-sm md:text-base text-foreground/90">{item.name}</span>
                      <span className="text-sm md:text-base font-bold text-foreground whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-muted/30 p-8 md:p-10">
            <p className="text-sm md:text-base font-bold text-foreground leading-relaxed">
              Podane ceny mają charakter poglądowy i nie stanowią oferty handlowej w rozumieniu art. 66
              §1 Kodeksu cywilnego. Ostateczna wycena usługi może się różnić i jest ustalana
              indywidualnie.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
