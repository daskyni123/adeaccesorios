import { ArrowRight, Factory, Shield, Wrench, Users } from "lucide-react";

const features = [
  { icon: Factory, title: "Fabricación propia", desc: "Control directo de cada pieza y de su acabado." },
  { icon: Shield, title: "Acero inoxidable 304", desc: "Material definido para toda nuestra línea de productos." },
  { icon: Wrench, title: "A medida", desc: "Soluciones preparadas para las necesidades de cada proyecto." },
  { icon: Users, title: "Para cada proyecto", desc: "Atendemos hogares, talleres, instaladores y empresas." },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="scroll-mt-20 py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center" data-reveal>
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden border border-border bg-background">
              <img
                src="/catalogo-products/barandas-01.jpg"
                alt="Baranda de acero inoxidable fabricada por A & DE"
                loading="lazy"
                width={773}
                height={944}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Barandas y soluciones fabricadas a medida</p>
          </div>

          <div className="order-1 lg:order-2 max-w-xl">
            <p className="uppercase tracking-[0.3em] text-primary text-xs md:text-sm mb-4">Quiénes somos</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight text-foreground">
              Fabricación propia.<br />
              <span className="text-primary">Calidad 304.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Somos A &amp; DE Accesorios, fabricantes para la industria del vidrio y la construcción. Diseñamos y producimos piezas en acero inoxidable 304 para instalaciones, hogares y proyectos profesionales.
            </p>
            <a
              href="/productos.html"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase text-foreground transition-colors hover:text-primary"
            >
              Explorar productos <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 border-t border-border">
          {features.map((f) => (
            <div
              key={f.title}
              data-reveal
              className="feature-row flex gap-4 border-b border-border py-5"
            >
              <div className="mt-1 shrink-0 text-primary">
                <f.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold uppercase text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
