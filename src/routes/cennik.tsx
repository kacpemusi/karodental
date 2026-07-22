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
          "Cennik usług stomatologicznych gabinetu Karodental na warszawskim Gocławiu.",
      },
      { property: "og:title", content: "Cennik usług - Karodental Warszawa Gocław" },
      {
        property: "og:description",
        content: "Zapoznaj się z cennikiem usług stomatologicznych w Karodental.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Cennik() {
  return (
    <MainLayout>
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block py-1 px-3 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded mb-6">
            Cennik
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-8">
            Cennik usług
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Szczegółowy cennik przygotujemy wkrótce. W międzyczasie zapraszamy do kontaktu –
            chętnie odpowiemy na wszystkie pytania dotyczące kosztów leczenia.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
