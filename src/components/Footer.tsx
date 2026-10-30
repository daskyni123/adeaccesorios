import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-card border-t border-border py-8" data-reveal>
    <div className="container mx-auto px-4 text-center">
      <img src={logo} alt="A & DE Accesorios" className="h-10 mx-auto mb-3" />
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} A & DE Accesorios. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
