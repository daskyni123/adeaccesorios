import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Search, Sparkles } from "lucide-react";
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

const catalogSuggestions = [
  { title: "Kits Euro para ducha", family: "Kits Euro", searchTerm: "Kits Euro", description: "Sistemas corredizos y accesorios para mamparas." },
  { title: "Bisagras para ducha", family: "Duchas", searchTerm: "Bisagra", description: "Encuentra modelos para vidrio y muro." },
  { title: "Barandas a medida", family: "Barandas", searchTerm: "Baranda", description: "Opciones en acero, vidrio, madera y tensores." },
  { title: "Herrajes para vidrio", family: "Contravientos", searchTerm: "Conector", description: "Uniones y fijaciones para tus instalaciones." },
  { title: "Garruchas para mampara", family: "Garruchas", searchTerm: "Garrucha", description: "Revisa las opciones disponibles en el catálogo." },
  { title: "Jaladores para vidrio", family: "Jaladores", searchTerm: "Jalador", description: "Modelos y soluciones para puertas de vidrio." },
  { title: "Chapas para puertas", family: "Chapas", searchTerm: "Chapa", description: "Encuentra herrajes para puertas y mamparas." },
  { title: "Repisas de acero", family: "Repisas", searchTerm: "Repisa", description: "Alternativas funcionales para tus espacios." },
];

const normalizeSearch = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es").trim();

const ProductsSection = () => {
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const normalizedQuery = normalizeSearch(query);
  const suggestions = useMemo(() => {
    if (!normalizedQuery) return catalogSuggestions.slice(0, 4);
    return catalogSuggestions
      .filter((item) => normalizeSearch(`${item.title} ${item.family} ${item.searchTerm}`).includes(normalizedQuery))
      .slice(0, 5);
  }, [normalizedQuery]);

  useEffect(() => {
    if (!searchOpen) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !searchRef.current?.contains(event.target)) setSearchOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [searchOpen]);

  const searchCatalog = (term: string) => {
    const trimmedTerm = term.trim();
    if (!trimmedTerm) {
      setSearchOpen(true);
      inputRef.current?.focus();
      return;
    }
    window.location.href = `/productos.html?buscar=${encodeURIComponent(trimmedTerm)}#familias`;
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchCatalog(query);
  };

  return (
    <section id="productos" className="scroll-mt-20 bg-navy-gradient py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between" data-reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-primary md:text-xs">Ingeniería para vidrio y construcción</p>
            <h2 className="font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-foreground md:text-5xl">
              Soluciones hechas <span className="text-gradient-brand">para durar</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Venta al por mayor y menor de componentes de calidad y fabricación a medida, con atención al detalle desde la elección del herraje hasta el acabado final.
            </p>
          </div>
          <a
            href="/productos.html"
            className="group inline-flex min-h-11 w-fit items-center gap-2 rounded-md border border-border bg-background/30 px-4 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-all hover:border-primary/50 hover:bg-background/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Explorar catálogo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div ref={searchRef} className="product-discovery mb-8 md:mb-10" data-reveal>
          <form
            className="product-search-form"
            role="search"
            onSubmit={handleSearch}
          >
            <label className="sr-only" htmlFor="homepage-product-search">Buscar productos por nombre, código o familia</label>
            <Search className="product-search-icon" aria-hidden="true" />
            <input
              ref={inputRef}
              id="homepage-product-search"
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setSearchOpen(true);
                setActiveSuggestion(-1);
              }}
              onFocus={() => setSearchOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" && suggestions.length) {
                  event.preventDefault();
                  setSearchOpen(true);
                  setActiveSuggestion((current) => (current + 1) % suggestions.length);
                } else if (event.key === "ArrowUp" && suggestions.length) {
                  event.preventDefault();
                  setActiveSuggestion((current) => (current <= 0 ? suggestions.length - 1 : current - 1));
                } else if (event.key === "Enter" && activeSuggestion >= 0 && suggestions[activeSuggestion]) {
                  event.preventDefault();
                  searchCatalog(suggestions[activeSuggestion].searchTerm);
                } else if (event.key === "Escape") {
                  setSearchOpen(false);
                  setActiveSuggestion(-1);
                }
              }}
              placeholder="¿Qué producto estás buscando?"
              autoComplete="off"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={searchOpen}
              aria-controls="homepage-product-suggestions"
              aria-activedescendant={activeSuggestion >= 0 ? `product-suggestion-${activeSuggestion}` : undefined}
              className="product-search-input"
            />
            {query && (
              <button
                type="button"
                className="product-search-clear"
                aria-label="Limpiar búsqueda"
                onClick={() => {
                  setQuery("");
                  setSearchOpen(true);
                  setActiveSuggestion(-1);
                  inputRef.current?.focus();
                }}
              >
                ×
              </button>
            )}
            <button type="submit" className="product-search-submit">
              Buscar <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>

          <div className="product-search-panel" hidden={!searchOpen}>
            <div id="homepage-product-suggestions" role="listbox" aria-label="Sugerencias de productos">
              {suggestions.map((item, index) => (
                <button
                  id={`product-suggestion-${index}`}
                  key={item.family}
                  type="button"
                  role="option"
                  aria-selected={index === activeSuggestion}
                  className="product-search-suggestion"
                  style={{ animationDelay: `${index * 45}ms` }}
                  onMouseMove={() => setActiveSuggestion(index)}
                  onClick={() => searchCatalog(item.searchTerm)}
                >
                  <span className="product-suggestion-icon"><Search className="h-4 w-4" aria-hidden="true" /></span>
                  <span className="product-suggestion-copy">
                    <span className="product-suggestion-title">{item.title}</span>
                    <span className="product-suggestion-description">{item.description}</span>
                  </span>
                  <span className="product-suggestion-family">{item.family}</span>
                  <ArrowRight className="product-suggestion-arrow h-4 w-4" aria-hidden="true" />
                </button>
              ))}
            </div>
            {searchOpen && suggestions.length === 0 && (
              <p className="product-search-empty" role="status">Presiona “Buscar” para revisar todo el catálogo.</p>
            )}
          </div>

          {!query.trim() && (
            <div className="product-interest-row">
              <span className="product-interest-label"><Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> Podría interesarte</span>
              {catalogSuggestions.slice(0, 4).map((item) => (
                <button
                  type="button"
                  key={item.family}
                  className="product-interest-chip"
                  onClick={() => searchCatalog(item.searchTerm)}
                >
                  {item.family}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {products.map((p, index) => (
            <a
              key={p.title}
              href={`/productos.html?familia=${encodeURIComponent(p.family)}#familias`}
              aria-label={`Ver catálogo: ${p.title}`}
              data-reveal
              className="product-card group block overflow-hidden rounded-xl border border-white/10 bg-card/75 text-left shadow-lg shadow-black/10 transition-all duration-300 hover:border-primary/45 hover:bg-card hover:shadow-2xl hover:shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative aspect-[1.25] overflow-hidden bg-background">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/5 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-background/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
                  Línea 0{index + 1}
                </span>
                <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Acero inoxidable 304
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="mb-3 font-display text-lg font-semibold uppercase leading-tight tracking-wide text-foreground md:text-xl">
                  {p.title}
                </h3>
                <p className="min-h-[4.5rem] text-sm leading-6 text-muted-foreground">{p.description}</p>
                <span className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                  Ver línea de productos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
