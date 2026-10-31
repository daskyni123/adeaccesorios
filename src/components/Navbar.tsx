import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Menu, X, Phone, ShoppingCart, Search, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const getCartCount = () => {
  try {
    const items = JSON.parse(localStorage.getItem("ade-accessory-quote") || "[]");
    return items.reduce((total: number, item: { quantity?: number }) => total + (item.quantity || 0), 0);
  } catch {
    return 0;
  }
};

type CatalogProduct = {
  category: string;
  code: string;
  name: string;
  detail: string;
  searchImage?: string;
};

const normalizeSearch = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es").trim();

const getProductId = (product: CatalogProduct) => {
  const slug = (value: string) =>
    value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `${slug(product.category)}-${slug(product.code || "a-medida")}-${slug(product.name)}`;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [catalogProducts, setCatalogProducts] = useState<CatalogProduct[]>([]);
  const [catalogLoading, setCatalogLoading] = useState(false);
  const [catalogError, setCatalogError] = useState(false);
  const [cartCount, setCartCount] = useState(getCartCount);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const filteredSuggestions = useMemo(() => {
    const query = normalizeSearch(searchQuery);
    if (!query) return catalogProducts.slice(0, 4);
    return catalogProducts.filter((product) =>
      normalizeSearch(`${product.name} ${product.code} ${product.category} ${product.detail}`).includes(query),
    ).slice(0, 6);
  }, [catalogProducts, searchQuery]);

  useEffect(() => {
    const refreshCart = () => setCartCount(getCartCount());
    window.addEventListener("storage", refreshCart);
    window.addEventListener("focus", refreshCart);
    return () => {
      window.removeEventListener("storage", refreshCart);
      window.removeEventListener("focus", refreshCart);
    };
  }, []);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen || catalogProducts.length || catalogError) return;
    let active = true;
    setCatalogLoading(true);
    const catalogModuleUrl = new URL("/productos-data.js", window.location.origin).href;
    const loadCatalog = async () => {
      try {
        const catalog: {
          products: CatalogProduct[];
          productImage: (product: CatalogProduct, productList: CatalogProduct[]) => string;
        } = await import(/* @vite-ignore */ catalogModuleUrl);
        if (active) {
          setCatalogProducts(catalog.products.map((product) => ({
            ...product,
            searchImage: catalog.productImage(product, catalog.products),
          })));
        }
      } catch (error) {
        console.error("No se pudo cargar el catálogo para las sugerencias de búsqueda.", error);
        if (active) setCatalogError(true);
      } finally {
        if (active) setCatalogLoading(false);
      }
    };
    void loadCatalog();
    return () => {
      active = false;
    };
  }, [searchOpen, catalogProducts.length, catalogError]);

  const searchCatalog = (value: string) => {
    const query = value.trim();
    if (query) window.location.href = `/productos.html?buscar=${encodeURIComponent(query)}#familias`;
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchCatalog(searchQuery);
  };

  const searchButton = (
    <button
      type="button"
      onClick={() => setSearchOpen((isOpen) => !isOpen)}
      aria-expanded={searchOpen}
      aria-controls="navbar-product-search"
      aria-label={searchOpen ? "Cerrar búsqueda" : "Buscar productos"}
      className="grid h-10 w-10 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
    </button>
  );

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "/productos.html" },
    { label: "Ofertas", href: "#ofertas" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/85 shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4">
        <a href="#inicio" className="flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <img src={logo} alt="A & DE Accesorios" className="h-12 w-auto object-contain" />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-semibold text-muted-foreground transition-colors hover:text-foreground uppercase tracking-[0.16em]"
            >
              {l.label}
            </a>
          ))}
          {searchButton}
          <a
            href="/carrito.html"
            aria-label={`Carrito de compras, ${cartCount} productos`}
            className="relative flex items-center gap-2 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-foreground uppercase tracking-[0.14em]"
          >
            <ShoppingCart className="h-4 w-4" />
            Carrito
            <span className="grid min-w-5 h-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground shadow-red">
              {cartCount}
            </span>
          </a>
          <a
            href="https://wa.me/51981296259"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-md bg-primary px-4 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-red transition-all hover:-translate-y-0.5 hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Phone className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-5 lg:hidden">
          {searchButton}
          <a
            href="/carrito.html"
            aria-label={`Carrito de compras, ${cartCount} productos`}
            className="relative rounded-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -right-2 -top-2 grid min-w-4 h-4 place-items-center rounded-full bg-primary px-1 text-[9px] font-bold text-primary-foreground">
              {cartCount}
            </span>
          </a>
          <button
            id="navbar-search-exact-option"
            type="button"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="rounded-sm text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-border bg-background/95 px-4 pb-5 shadow-xl shadow-black/20 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/carrito.html"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3 text-sm font-medium text-muted-foreground hover:text-primary uppercase tracking-widest"
          >
            <ShoppingCart className="w-4 h-4" />
            Carrito ({cartCount})
          </a>
          <a
            href="https://wa.me/51981296259"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-md text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      )}
      {searchOpen && (
        <div className="absolute right-4 top-[calc(100%+0.5rem)] z-50 w-[min(24rem,calc(100vw-2rem))]">
          <form
            id="navbar-product-search"
            role="search"
            onSubmit={handleSearch}
            className="flex items-center gap-3 rounded-xl border border-border bg-background p-2.5 shadow-2xl shadow-black/40"
          >
            <label className="sr-only" htmlFor="navbar-search-input">Buscar productos en el catálogo</label>
            <Search className="ml-2 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <input
              ref={searchInputRef}
              id="navbar-search-input"
              type="search"
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setActiveSuggestion(-1);
              }}
              onKeyDown={(event) => {
                const hasSearchOption = searchQuery.trim() && (catalogError || filteredSuggestions.length > 0);
                const optionCount = filteredSuggestions.length + (hasSearchOption ? 1 : 0);
                if (event.key === "Escape") {
                  setSearchOpen(false);
                } else if (event.key === "ArrowDown" && optionCount) {
                  event.preventDefault();
                  setActiveSuggestion((current) => (current + 1) % optionCount);
                } else if (event.key === "ArrowUp" && optionCount) {
                  event.preventDefault();
                  setActiveSuggestion((current) => current <= 0 ? optionCount - 1 : current - 1);
                } else if (event.key === "Enter" && activeSuggestion >= 0 && filteredSuggestions[activeSuggestion]) {
                  event.preventDefault();
                  window.location.href = `/productos.html?producto=${encodeURIComponent(getProductId(filteredSuggestions[activeSuggestion]))}`;
                } else if (event.key === "Enter" && activeSuggestion === filteredSuggestions.length && hasSearchOption) {
                  event.preventDefault();
                  searchCatalog(searchQuery);
                }
              }}
              placeholder="Buscar productos..."
              autoComplete="off"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded="true"
              aria-controls="navbar-search-suggestions"
              aria-activedescendant={activeSuggestion < 0
                ? undefined
                : activeSuggestion >= filteredSuggestions.length
                  ? "navbar-search-exact-option"
                  : `navbar-search-suggestion-${activeSuggestion}`}
              className="h-11 min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
          <div
            id="navbar-search-suggestions"
            role="listbox"
            aria-label={searchQuery.trim() ? "Sugerencias de búsqueda" : "Productos populares"}
            className="navbar-search-suggestions mt-1 overflow-hidden rounded-xl border border-border bg-background shadow-2xl shadow-black/40"
          >
            {filteredSuggestions.map((suggestion, index) => (
              <a
                id={`navbar-search-suggestion-${index}`}
                key={getProductId(suggestion)}
                href={`/productos.html?producto=${encodeURIComponent(getProductId(suggestion))}`}
                role="option"
                aria-selected={index === activeSuggestion}
                onMouseMove={() => setActiveSuggestion(index)}
                className="flex min-h-12 w-full items-center gap-3 border-b border-border/70 px-4 py-2 text-left last:border-0 hover:bg-white/5 aria-selected:bg-white/5"
              >
                <img
                  src={suggestion.searchImage}
                  alt=""
                  aria-hidden="true"
                  loading={index > 2 ? "lazy" : "eager"}
                  className="h-11 w-11 shrink-0 rounded-md border border-white/10 bg-white/5 object-cover"
                />
                <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">{suggestion.name}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{suggestion.code ? `Cod. ${suggestion.code}` : suggestion.category}</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
              </a>
            ))}
            {searchQuery.trim() && filteredSuggestions.length > 0 && (
              <>
                <button
                  id="navbar-search-exact-option"
                  type="button"
                  role="option"
                  aria-selected={activeSuggestion === filteredSuggestions.length}
                  onMouseMove={() => setActiveSuggestion(filteredSuggestions.length)}
                  onClick={() => searchCatalog(searchQuery)}
                  className="flex min-h-12 w-full items-center gap-3 px-4 py-2 text-left hover:bg-white/5 aria-selected:bg-white/5"
                >
                  <Search className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0 flex-1 truncate text-sm text-foreground">Buscar “{searchQuery.trim()}”</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                </button>
              </>
            )}
            {searchQuery.trim() && !catalogLoading && filteredSuggestions.length === 0 && !catalogError && (
              <p className="px-4 py-3 text-sm text-muted-foreground" role="status">No encontramos productos. Revisa el nombre o código.</p>
            )}
            {catalogLoading && (
              <p className="px-4 py-3 text-sm text-muted-foreground" role="status">Cargando productos...</p>
            )}
            {catalogError && (
              <button
                id="navbar-search-exact-option"
                type="button"
                role="option"
                aria-selected={activeSuggestion === filteredSuggestions.length}
                onClick={() => searchCatalog(searchQuery)}
                className="flex min-h-12 w-full items-center gap-3 px-4 py-2 text-left hover:bg-white/5"
              >
                <Search className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate text-sm text-foreground">Buscar “{searchQuery.trim() || "en el catálogo"}” en el catálogo</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
