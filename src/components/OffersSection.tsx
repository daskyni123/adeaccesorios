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
    <section id="ofertas" className="scroll-mt-20 overflow-hidden bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col gap-6 border-b border-border pb-8 md:mb-12 md:flex-row md:items-end md:justify-between md:pb-10" data-reveal>
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary md:text-sm">
              <BadgePercent className="h-4 w-4" aria-hidden="true" />
              Selección destacada
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-none text-foreground md:text-6xl">
              Kits Euro<span className="text-primary">.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Sistemas para mamparas de ducha. Consulta con nuestro equipo por disponibilidad, acabados y promociones vigentes.
            </p>
          </div>
          <a
            href="/productos.html?familia=Kits%20Euro#familias"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-md border border-border px-5 py-3 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
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
                className="group flex flex-col overflow-hidden rounded-lg border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-red"
              >
                <a href={productUrl} className="relative block aspect-[1.45] overflow-hidden bg-white" aria-label={`Ver detalle: ${kit.name}`}>
                  <img
                    src={kit.image}
                    alt={kit.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105 md:p-8"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                    <BadgePercent className="h-3.5 w-3.5" aria-hidden="true" />
                    Precio especial por consultar
                  </span>
                </a>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Kit para ducha</p>
                    <span className="rounded border border-border px-2 py-1 text-[10px] font-semibold tracking-wider text-muted-foreground">REF. {kit.code}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold uppercase leading-tight text-foreground">{kit.name}</h3>
                  <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-muted-foreground">{kit.description}</p>
                  <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-[11px] text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    Acero inoxidable calidad 304
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a href={productUrl} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-3 text-[10px] font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary/50 hover:bg-secondary">
                      Ficha técnica <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-3 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90">
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
