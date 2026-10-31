import { ArrowRight, Factory, Shield, Wrench, Users } from "lucide-react";

const features = [
  { icon: Factory, title: "Fabricación propia", desc: "Control directo de cada pieza y de su acabado." },
  { icon: Shield, title: "Acero inoxidable 304", desc: "Material definido para toda nuestra línea de productos." },
  { icon: Wrench, title: "A medida", desc: "Soluciones preparadas para las necesidades de cada proyecto." },
  { icon: Users, title: "Para cada proyecto", desc: "Atendemos hogares, talleres, instaladores y empresas." },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="scroll-mt-20 bg-[linear-gradient(180deg,hsl(220_50%_8%),hsl(220_48%_10%))] py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16" data-reveal>
          <div className="order-2 lg:order-1">
            <div className="about-image group relative overflow-hidden rounded-xl border border-white/10 bg-background shadow-2xl shadow-black/20">
              <img
                src="/catalogo-products/barandas-01.jpg"
                alt="Baranda de acero inoxidable fabricada por A & DE"
                loading="lazy"
                width={773}
                height={944}
                className="aspect-[1.15] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[1.4] lg:aspect-[1.15]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/65">A &amp; DE Accesorios</p>
                  <p className="mb-0 font-display text-sm font-semibold uppercase tracking-wide text-white md:text-base">Calidad en cada detalle</p>
                </div>
                <span className="rounded-full border border-white/20 bg-background/65 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur">Acero 304</span>
              </div>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">Barandas y soluciones fabricadas a medida</p>
          </div>

          <div className="order-1 max-w-xl lg:order-2">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-primary md:text-xs">Quiénes somos</p>
            <h2 className="font-display text-4xl font-semibold uppercase leading-[1.06] tracking-tight text-foreground md:text-5xl">
              Fabricación propia.<br />
              <span className="text-gradient-brand">Calidad que se nota.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
              Somos A &amp; DE Accesorios, fabricantes para la industria del vidrio y la construcción. Ofrecemos venta al por mayor y menor, además de piezas en acero inoxidable 304 hechas a la medida de cada proyecto.
            </p>
            <a
              href="/productos.html"
              className="group mt-7 inline-flex min-h-12 items-center gap-2 rounded-md border border-border px-5 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-all hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Explorar productos <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              data-reveal
              className="feature-row flex gap-4 rounded-lg border border-white/10 bg-background/35 p-5 transition-all hover:border-primary/30 hover:bg-background/65"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-sm font-semibold uppercase tracking-wide text-foreground">{f.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
