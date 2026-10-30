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
    <section id="productos" className="py-24 bg-navy-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-reveal>
          <p className="uppercase tracking-[0.3em] text-primary text-sm mb-3">Lo que fabricamos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground">
            Nuestros Productos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <a
              key={p.title}
              href={`/productos.html?familia=${encodeURIComponent(p.family)}#familias`}
              aria-label={`Ver catálogo: ${p.title}`}
              data-reveal
              className="product-card group block overflow-hidden rounded-lg border border-border bg-card text-left transition-all duration-300 hover:border-glow hover:shadow-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-display text-xl font-semibold uppercase text-foreground">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-primary">
                  Ver productos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
