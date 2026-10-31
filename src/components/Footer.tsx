import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#080b12] py-10 md:py-12" data-reveal>
    <div className="container mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[1.2fr_0.8fr_1fr] md:items-center md:pb-10">
        <div>
          <a href="#inicio" className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <img src={logo} alt="A & DE Accesorios" className="h-12 w-auto object-contain" />
          </a>
          <p className="mb-0 mt-3 max-w-sm text-xs leading-6 text-muted-foreground">
            Accesorios de acero inoxidable para vidrio y construcción. Venta al por mayor y menor.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-5 gap-y-3 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground" aria-label="Enlaces del pie de página">
          <a href="/productos.html" className="transition-colors hover:text-foreground">Productos</a>
          <a href="/#ofertas" className="transition-colors hover:text-foreground">Ofertas</a>
          <a href="/#catalogo" className="transition-colors hover:text-foreground">Catálogo</a>
          <a href="/#nosotros" className="transition-colors hover:text-foreground">Nosotros</a>
        </nav>
        <div className="flex flex-col gap-3 text-xs text-muted-foreground md:items-end">
          <a href="tel:+51981296259" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
            <Phone className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> 981 296 259
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=A%20%26%20DE%20Accesorios%2C%20Av.%20Los%20H%C3%A9roes%201329%2C%20Villa%20Mar%C3%ADa%20del%20Triunfo%2C%20Lima" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Villa María del Triunfo, Lima
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-5 text-[10px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="mb-0">© {new Date().getFullYear()} A &amp; DE Accesorios. Todos los derechos reservados.</p>
        <a href="#inicio" className="w-fit font-semibold uppercase tracking-wider transition-colors hover:text-foreground">Volver arriba ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
