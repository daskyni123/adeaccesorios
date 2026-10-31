import { Phone, MapPin, Clock, ExternalLink, MapPinned } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="scroll-mt-20 py-16 md:py-20 bg-navy-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center" data-reveal>
          <div className="contact-detail max-w-lg">
            <p className="uppercase tracking-[0.3em] text-primary text-xs md:text-sm mb-4">Contáctanos</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight text-foreground">
              Hablemos de tu proyecto
            </h2>
            <p className="mt-4 mb-8 text-muted-foreground leading-relaxed">
              Cuéntanos qué necesitas y te ayudamos a encontrar la solución adecuada en acero inoxidable 304.
            </p>

            <div className="border-t border-border">
              <div className="flex items-start gap-4 border-b border-border py-5">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-base font-semibold uppercase text-foreground">Teléfono / WhatsApp</h3>
                  <a href="tel:+51981296259" className="text-sm text-muted-foreground transition-colors hover:text-primary">981 296 259</a>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-border py-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-base font-semibold uppercase text-foreground">Ubicación</h3>
                  <p className="text-sm text-muted-foreground">Av. Los Héroes 1329, Urb. Villa María del Triunfo, Lima 15801</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-5">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-base font-semibold uppercase text-foreground">Horario</h3>
                  <p className="text-sm text-muted-foreground">Lunes a sábado, hasta las 6:00 p. m.</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/51981296259?text=Hola%2C%20quiero%20cotizar%20accesorios%20de%20acero"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-red transition-opacity hover:opacity-90"
            >
              Escríbenos por WhatsApp <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="contact-map overflow-hidden border border-border">
            <div className="flex flex-col gap-3 border-b border-border bg-background/80 p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="mb-0 text-sm text-muted-foreground">Av. Los Héroes 1329, Villa María del Triunfo, Lima 15801 · R2QV+RC</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=A%20%26%20DE%20Accesorios%2C%20Av.%20Los%20H%C3%A9roes%201329%2C%20Villa%20Mar%C3%ADa%20del%20Triunfo%2C%20Lima"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-md border border-border px-4 text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
              >
                Abrir ubicación <MapPinned className="h-4 w-4 text-primary" aria-hidden="true" />
              </a>
            </div>
            <iframe
              title="Mapa de ubicación de A & DE Accesorios"
              src="https://www.google.com/maps?q=A%20%26%20DE%20Accesorios%2C%20Av.%20Los%20H%C3%A9roes%201329%2C%20Villa%20Mar%C3%ADa%20del%20Triunfo%2C%20Lima&z=17&output=embed"
              width="100%"
              height="440"
              className="h-[320px] w-full md:h-[440px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
