import heroImg from "@/assets/hero-steel.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="hero-copy relative z-10 container mx-auto px-4 text-center">
        <img src={logo} alt="A & DE Accesorios" className="h-24 md:h-32 mx-auto mb-8" />
        <p className="uppercase tracking-[0.4em] text-primary text-sm mb-4 font-medium">
          Fabricantes de acero inoxidable calidad 304
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-none mb-6">
          <span className="text-gradient-brand">Accesorios</span>
          <br />
          <span className="text-foreground">de Acero</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-10">
          Barandas, herrajes, soportes y piezas personalizadas en acero inoxidable calidad 304
          para vidrio y construcción. Soluciones para proyectos residenciales y comerciales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/51981296259?text=Hola%2C%20quiero%20cotizar%20accesorios%20de%20acero"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-display uppercase tracking-widest text-sm font-semibold hover:opacity-90 transition-opacity shadow-red"
          >
            Cotizar ahora
          </a>
          <a
            href="#productos"
            className="border border-glow text-foreground px-8 py-4 rounded-md font-display uppercase tracking-widest text-sm font-semibold hover:bg-secondary transition-colors"
          >
            Ver productos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
