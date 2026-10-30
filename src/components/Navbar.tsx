import { useEffect, useState } from "react";
import { Menu, X, Phone, ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.png";

const getCartCount = () => {
  try {
    const items = JSON.parse(localStorage.getItem("ade-accessory-quote") || "[]");
    return items.reduce((total: number, item: { quantity?: number }) => total + (item.quantity || 0), 0);
  } catch {
    return 0;
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(getCartCount);

  useEffect(() => {
    const refreshCart = () => setCartCount(getCartCount());
    window.addEventListener("storage", refreshCart);
    window.addEventListener("focus", refreshCart);
    return () => {
      window.removeEventListener("storage", refreshCart);
      window.removeEventListener("focus", refreshCart);
    };
  }, []);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "/productos.html" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="A & DE Accesorios" className="h-14" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/carrito.html"
            aria-label={`Carrito de compras, ${cartCount} productos`}
            className="relative flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
          >
            <ShoppingCart className="w-4 h-4" />
            Carrito
            <span className="grid min-w-5 h-5 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
              {cartCount}
            </span>
          </a>
          <a
            href="https://wa.me/51981296259"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="/carrito.html"
            aria-label={`Carrito de compras, ${cartCount} productos`}
            className="relative text-foreground"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -right-2 -top-2 grid min-w-4 h-4 place-items-center rounded-full bg-primary px-1 text-[9px] font-bold text-primary-foreground">
              {cartCount}
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="text-foreground"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="lg:hidden bg-card border-t border-border px-4 pb-4">
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
    </nav>
  );
};

export default Navbar;
