import { Download, ExternalLink } from "lucide-react";

const CatalogSection = () => {
  return (
    <section id="catalogo" className="relative scroll-mt-20 overflow-hidden bg-card py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12" data-reveal>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary md:text-xs">Diseñado para tus proyectos</p>
          <h2 className="font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Catálogo de Productos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
            Consulta nuestra línea de accesorios en acero inoxidable calidad 304 y encuentra la solución para tu instalación.
          </p>
        </div>

        <div className="mb-7 flex flex-col justify-center gap-3 sm:flex-row" data-reveal>
          <a
            href="/catalogo-ade-accesorios.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-red transition-all hover:-translate-y-0.5 hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Abrir catálogo <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="/catalogo-ade-accesorios.pdf"
            download
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border px-6 font-display text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Descargar PDF <Download className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="catalog-frame mx-auto max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-background shadow-2xl shadow-black/20" data-reveal>
          <iframe
            src="/catalogo-ade-accesorios.pdf"
            title="Catálogo A & DE Accesorios"
            className="w-full"
            style={{ height: "min(76vh, 760px)", minHeight: 480 }}
            loading="lazy"
          />
        </div>

        <div className="mt-8 text-center" data-reveal>
          <a
            href="/productos.html"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border px-6 font-display text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Ver todos los productos <ExternalLink className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
