import { ArrowDown, ArrowRight, BadgeCheck, Factory, ShieldCheck, ShoppingBag, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-steel.jpg";
import barandasImg from "@/assets/product-barandas.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative flex min-h-[92svh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Fabricación de accesorios de acero inoxidable calidad 304"
          width={1920}
          height={1080}
          className="hero-background w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 container mx-auto grid w-full items-center gap-12 px-4 pb-20 pt-28 md:py-32 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div className="hero-copy text-center lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground shadow-lg shadow-black/10 backdrop-blur md:text-xs">
            <BadgeCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            Fabricantes · Acero inoxidable 304
          </p>
          <h1 className="mb-6 max-w-2xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl xl:text-8xl">
            <span className="text-gradient-brand">Acero inoxidable</span>
            <br />
            <span className="text-foreground">para cada proyecto</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
            Venta al por mayor y menor de barandas, herrajes y piezas para vidrio y construcción.
            Fabricamos soluciones a medida con acabados precisos para cada proyecto.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="https://wa.me/51981296259?text=Hola%2C%20quiero%20cotizar%20accesorios%20de%20acero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-red transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              Cotizar proyecto <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/40 px-7 py-4 font-display text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
            >
              Explorar productos <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-xs font-medium text-muted-foreground lg:justify-start">
            <span className="inline-flex items-center gap-2"><Factory className="h-4 w-4 text-primary" aria-hidden="true" />Fabricación propia</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />Calidad 304</span>
            <span className="inline-flex items-center gap-2"><Wrench className="h-4 w-4 text-primary" aria-hidden="true" />Hecho a medida</span>
            <span className="inline-flex items-center gap-2"><ShoppingBag className="h-4 w-4 text-primary" aria-hidden="true" />Mayor y menor</span>
          </div>
        </div>

        <figure className="overflow-hidden rounded-xl border border-white/10 bg-background/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
          <video
            className="mx-auto block aspect-[4/3] max-h-[68vh] w-full bg-background object-cover"
            src="/catalogo-products/barandas-ia.mp4"
            poster={barandasImg}
            loop
            playsInline
            controls
            preload="metadata"
            aria-label="Video de barandas de acero inoxidable"
          >
            Tu navegador no puede reproducir este video.
          </video>
          <figcaption className="flex items-center justify-between gap-4 border-t border-border px-5 py-4">
            <div>
              <p className="mb-1 font-display text-sm font-semibold uppercase tracking-wide text-foreground md:text-base">
                Detalle de nuestro trabajo
              </p>
              <p className="text-xs text-muted-foreground md:text-sm">Barandas fabricadas para cada espacio.</p>
            </div>
            <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
              Acero 304
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
