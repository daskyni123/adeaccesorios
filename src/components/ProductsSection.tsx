import { ArrowRight } from "lucide-react";
import barandasImg from "@/assets/product-barandas.jpg";
import herrajesImg from "@/assets/product-herrajes.jpg";
import piezasImg from "@/assets/product-piezas.jpg";

const products = [
  {
    title: "Barandas y Pasamanos",
    family: "Barandas",
    description: "Sistemas de barandas en acero inoxidable calidad 304 con vidrio templado para escaleras, balcones y terrazas.",
    image: barandasImg,
  },
  {
    title: "Herrajes Metálicos",
    family: "Contravientos",
    description: "Conectores, bisagras, cerraduras y accesorios de precisión en acero inoxidable calidad 304 para vidrio.",
    image: herrajesImg,
  },
  {
    title: "Piezas Personalizadas",
    family: "Jaladores",
    description: "Fabricación a medida de soportes, brackets y piezas decorativas en acero inoxidable calidad 304.",
    image: piezasImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="scroll-mt-20 py-20 md:py-28 bg-navy-gradient">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between" data-reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary md:text-sm">Ingeniería para vidrio y construcción</p>
            <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
              Soluciones que <span className="text-gradient-brand">perduran</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Componentes y fabricación a medida, con atención al detalle desde la selección del herraje hasta el acabado final.
            </p>
          </div>
          <a
            href="/productos.html"
            className="inline-flex w-fit items-center gap-2 border-b border-primary/50 pb-2 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
          >
            Explorar catálogo <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {products.map((p, index) => (
            <a
              key={p.title}
              href={`/productos.html?familia=${encodeURIComponent(p.family)}#familias`}
              aria-label={`Ver catálogo: ${p.title}`}
              data-reveal
              className="product-card group block overflow-hidden rounded-lg border border-border/80 bg-card/80 text-left transition-all duration-300 hover:border-primary/50 hover:shadow-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/5 to-transparent opacity-90" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-background/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                  0{index + 1} / Fabricación
                </span>
                <span className="absolute bottom-4 left-5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Acero inoxidable 304
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="mb-3 font-display text-xl font-semibold uppercase text-foreground">
                  {p.title}
                </h3>
                <p className="min-h-[4.5rem] text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <span className="mt-5 flex items-center justify-between border-t border-border pt-4 font-display text-xs font-semibold uppercase tracking-widest text-primary">
                  Ver línea de productos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
