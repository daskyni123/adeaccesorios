const CatalogSection = () => {
  return (
    <section id="catalogo" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-reveal>
          <p className="uppercase tracking-[0.3em] text-primary text-sm mb-3">Descarga nuestro</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground">
            Catálogo de Productos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Explora nuestra línea completa de accesorios fabricados en acero inoxidable calidad 304.
          </p>
        </div>

        <div className="catalog-frame max-w-4xl mx-auto rounded-lg overflow-hidden border border-border" data-reveal>
          <iframe
            src="/catalogo-ade-accesorios.pdf"
            title="Catálogo A & DE Accesorios"
            className="w-full"
            style={{ height: "80vh", minHeight: 500 }}
          />
        </div>

        <div className="text-center mt-8" data-reveal>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/productos.html"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-display uppercase tracking-widest text-sm font-semibold hover:opacity-90 transition-opacity shadow-red"
            >
              Ver todos los productos
            </a>
            <a
              href="/catalogo-ade-accesorios.pdf"
              download
              className="inline-flex items-center justify-center gap-2 border border-glow text-foreground px-8 py-4 rounded-md font-display uppercase tracking-widest text-sm font-semibold hover:bg-secondary transition-colors"
            >
              Descargar Catálogo PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
