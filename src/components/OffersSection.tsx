import { ArrowRight, BadgePercent, MessageCircle, ShieldCheck } from "lucide-react";

const featuredKits = [
  {
    code: "A002",
    name: "Kit Euro A002 fijo + corredizo",
    description: "Sistema fijo + corredizo para mampara de ducha, disponible en acabado brillante o negro.",
    image: "/catalogo-products/kits-euro-a002-01.png",
    productId: "kits-euro-a002-kit-euro-a002-fijo-corredizo",
  },
  {
    code: "A005",
    name: "Kit Euro A005 fijo + corredizo",
    description: "Configuración de una hoja fija y una móvil para vidrio de 8 mm. Consulta acabados disponibles.",
    image: "/catalogo-products/kits-euro-a005-01.jpg",
    productId: "kits-euro-a005-kit-euro-a005-fijo-corredizo",
  },
  {
    code: "A010",
    name: "Kit Euro A010 doble corredizo",
    description: "Sistema doble corredizo para mampara de ducha, compatible con vidrio de 8 a 10 mm.",
    image: "/catalogo-products/kits-euro-a010-01.png",
    productId: "kits-euro-a010-kit-euro-a010-doble-corredizo",
  },
];

const OffersSection = () => {
  return (
    <section id="ofertas" className="scroll-mt-20 overflow-hidden bg-[linear-gradient(180deg,hsl(220_50%_8%),hsl(220_46%_10%)_55%,hsl(220_50%_8%))] py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 border-b border-border pb-8 md:mb-12 md:flex-row md:items-end md:justify-between md:pb-10" data-reveal>
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary md:text-sm">
              <BadgePercent className="h-4 w-4" aria-hidden="true" />
              Favoritos de nuestros clientes
            </p>
            <h2 className="font-display text-4xl font-semibold uppercase leading-none tracking-tight text-foreground md:text-6xl">
              Kits Euro<span className="text-primary">.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Sistemas confiables para mamparas de ducha. Elige el acabado y la configuración adecuados para tu instalación.
            </p>
          </div>
          <a
            href="/productos.html?familia=Kits%20Euro#familias"
            className="group inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded-md border border-border bg-background/35 px-5 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-all hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Ver todos los kits <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {featuredKits.map((kit) => {
            const productUrl = `/productos.html?producto=${encodeURIComponent(kit.productId)}`;
            const whatsappUrl = `https://wa.me/51981296259?text=${encodeURIComponent(`Hola, quisiera consultar si hay una promoción vigente para el ${kit.name} (${kit.code}).`)}`;

            return (
              <article
                key={kit.code}
                data-reveal
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card/80 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card hover:shadow-2xl hover:shadow-black/25"
              >
                <a href={productUrl} className="relative block aspect-[1.45] overflow-hidden bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" aria-label={`Ver detalle: ${kit.name}`}>
                  <img
                    src={kit.image}
                    alt={kit.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04] md:p-8"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] text-primary shadow-sm">
                    <BadgePercent className="h-3.5 w-3.5" aria-hidden="true" />
                    Precio especial por consultar
                  </span>
                </a>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Kit para ducha</p>
                    <span className="rounded border border-border px-2 py-1 text-[10px] font-semibold tracking-wider text-muted-foreground">REF. {kit.code}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold uppercase leading-tight tracking-wide text-foreground md:text-xl">{kit.name}</h3>
                  <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">{kit.description}</p>
                  <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[11px] text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    Acero inoxidable calidad 304
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a href={productUrl} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-3 text-[10px] font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      Ficha técnica <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-3 text-[10px] font-bold uppercase tracking-wider text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      Consultar
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground" data-reveal>
          <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          Precio, promociones y disponibilidad se confirman al solicitar cotización.
        </p>
      </div>
    </section>
  );
};

export default OffersSection;
