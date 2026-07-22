import { createFileRoute } from "@tanstack/react-router";

import { MainLayout } from "@/components/MainLayout";
import heroClinic from "@/assets/hero-clinic.jpg";
import team01 from "@/assets/team-01.jpg";
import team02 from "@/assets/team-02.jpg";

export const Route = createFileRoute("/galeria")({
  component: Galeria,
  head: () => ({
    meta: [
      { title: "Galeria - Karodental Warszawa Gocław" },
      {
        name: "description",
        content: "Zobacz zdjęcia nowoczesnego gabinetu Karodental na warszawskim Gocławiu.",
      },
      { property: "og:title", content: "Galeria - Karodental Warszawa Gocław" },
      {
        property: "og:description",
        content: "Zobacz zdjęcia nowoczesnego gabinetu Karodental.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const galleryImages = [
  { src: heroClinic, alt: "Nowoczesne wnętrze gabinetu Karodental" },
  { src: team01, alt: "Zespół Karodental" },
  { src: team02, alt: "Przyjazna atmosfera w gabinecie" },
];

function Galeria() {
  return (
    <MainLayout>
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="inline-block py-1 px-3 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded mb-6">
              Galeria
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-8">
              Zobacz nasz gabinet
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Przestrzeń zaprojektowana z myślą o komforcie i spokoju naszych pacjentów.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group aspect-square rounded-3xl overflow-hidden bg-stone-200"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {galleryImages.map((image, index) => (
              <div
                key={`dup-${index}`}
                className="group aspect-square rounded-3xl overflow-hidden bg-stone-200"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-muted-foreground">
            Wkrótce dodamy więcej zdjęć z naszego gabinetu.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
