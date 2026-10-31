import { ArrowDown, ArrowRight, BadgeCheck, Factory, ShieldCheck, ShoppingBag, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-steel.jpg";
import barandasImg from "@/assets/product-barandas.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="hero-section relative flex min-h-[min(900px,100svh)] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Fabricación de accesorios de acero inoxidable calidad 304"
          width={1920}
          height={1080}
          className="hero-background w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 bg-background/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_50%,hsl(225_70%_35%_/_0.18),transparent_44%),linear-gradient(180deg,hsl(220_50%_8%_/_0.18),hsl(220_50%_8%_/_0.78))]" />
      </div>

      <div className="relative z-10 container mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 md:py-32 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 xl:gap-20">
        <div className="hero-copy text-center lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/65 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/80 shadow-lg shadow-black/10 backdrop-blur md:text-xs">
            <BadgeCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            Fabricación propia <span className="text-primary">·</span> Acero inoxidable 304
          </p>
          <h1 className="mb-6 max-w-2xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.035em] md:text-7xl xl:text-[5.5rem]">
            <span className="text-gradient-brand">Acero inoxidable</span>
            <br />
            <span className="text-foreground">para cada proyecto</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-base leading-7 text-foreground/75 md:text-lg md:leading-8 lg:mx-0">
            Barandas, herrajes y soluciones para vidrio y construcción. Atendemos ventas al por mayor
            y menor, con fabricación a medida y asesoría para tu proyecto.
          </p>
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground lg:mx-0">
            <ShoppingBag className="h-4 w-4 text-primary" aria-hidden="true" />
            Venta al por mayor y menor
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="https://wa.me/51981296259?text=Hola%2C%20quiero%20cotizar%20accesorios%20de%20acero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-primary px-7 font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-red transition-all hover:-translate-y-0.5 hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Cotizar proyecto <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#productos"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-white/20 bg-background/45 px-7 font-display text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-all hover:border-white/40 hover:bg-background/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Explorar productos <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-left text-[11px] font-medium text-foreground/75 sm:grid-cols-4 lg:max-w-2xl">
            <span className="inline-flex items-center gap-2"><Factory className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />Fabricación propia</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />Calidad 304</span>
            <span className="inline-flex items-center gap-2"><Wrench className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />A medida</span>
            <span className="inline-flex items-center gap-2"><ShoppingBag className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />Mayor y menor</span>
          </div>
        </div>

        <figure className="hero-showcase overflow-hidden rounded-xl border border-white/15 bg-background/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
          <video
            className="mx-auto block aspect-video max-h-[68vh] w-full bg-background object-cover"
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
          <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 bg-background/90 px-5 py-4 md:px-6">
            <div>
              <p className="mb-1 font-display text-sm font-semibold uppercase tracking-[0.12em] text-foreground md:text-base">
              Fabricación para cada espacio
              </p>
              <p className="text-xs text-muted-foreground md:text-sm">Diseño, precisión y acabado en acero 304.</p>
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
