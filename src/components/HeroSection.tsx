import heroImg from "@/assets/hero-steel.jpg";
import logo from "@/assets/logo.png";
import barandasImg from "@/assets/product-barandas.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Fabricación de accesorios de acero inoxidable calidad 304"
          width={1920}
          height={1080}
          className="hero-background w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 container mx-auto grid w-full items-center gap-10 px-4 py-28 lg:grid-cols-2 lg:gap-14">
        <div className="hero-copy text-center lg:text-left">
          <img src={logo} alt="A & DE Accesorios" className="mx-auto mb-8 h-24 md:h-32 lg:mx-0" />
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-primary">
            Fabricantes de acero inoxidable calidad 304
          </p>
          <h1 className="mb-6 font-display text-5xl font-bold uppercase leading-none md:text-7xl lg:text-8xl">
            <span className="text-gradient-brand">Accesorios</span>
            <br />
            <span className="text-foreground">de Acero</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground lg:mx-0">
            Barandas, herrajes, soportes y piezas personalizadas en acero inoxidable calidad 304
            para vidrio y construcción. Soluciones para proyectos residenciales y comerciales.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="https://wa.me/51981296259?text=Hola%2C%20quiero%20cotizar%20accesorios%20de%20acero"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-red transition-opacity hover:opacity-90"
            >
              Cotizar ahora
            </a>
            <a
              href="#productos"
              className="rounded-md border border-glow px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-secondary"
            >
              Ver productos
            </a>
          </div>
        </div>

        <figure className="overflow-hidden rounded-lg border border-border bg-background/80 shadow-2xl backdrop-blur-sm">
          <video
            className="mx-auto block max-h-[70vh] w-full bg-background object-contain"
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
          <figcaption className="px-5 py-4">
            <p className="mb-1 font-display text-lg font-semibold uppercase text-foreground">
              Barandas de acero inoxidable
            </p>
            <p className="text-sm text-muted-foreground">Diseño y calidad para tus espacios.</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
