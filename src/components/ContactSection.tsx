import { Phone, MapPin, Clock, ExternalLink, MapPinned } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="scroll-mt-20 bg-navy-gradient py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16" data-reveal>
          <div className="contact-detail max-w-lg">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-primary md:text-xs">Hablemos</p>
            <h2 className="font-display text-4xl font-semibold uppercase leading-[1.06] tracking-tight text-foreground md:text-5xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mb-7 mt-4 text-sm leading-7 text-muted-foreground md:text-base">
              Cuéntanos qué necesitas. Te orientamos para encontrar la solución adecuada, al por mayor o menor.
            </p>

            <div className="space-y-2">
              <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-background/35 p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1 font-display text-xs font-bold uppercase tracking-wider text-foreground">Teléfono / WhatsApp</h3>
                  <a href="tel:+51981296259" className="text-sm text-muted-foreground transition-colors hover:text-primary">981 296 259</a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-background/35 p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1 font-display text-xs font-bold uppercase tracking-wider text-foreground">Ubicación</h3>
                  <p className="mb-0 text-sm leading-6 text-muted-foreground">Av. Los Héroes 1329, Urb. Villa María del Triunfo, Lima 15801</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-background/35 p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1 font-display text-xs font-bold uppercase tracking-wider text-foreground">Horario</h3>
                  <p className="mb-0 text-sm text-muted-foreground">Lunes a sábado, hasta las 6:00 p. m.</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/51981296259?text=Hola%2C%20quiero%20cotizar%20accesorios%20de%20acero"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-red transition-all hover:-translate-y-0.5 hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Escríbenos por WhatsApp <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="contact-map overflow-hidden rounded-xl border border-white/10 bg-background/70 shadow-2xl shadow-black/20">
            <div className="flex flex-col gap-3 border-b border-white/10 bg-background/80 p-4 sm:flex-row sm:items-center sm:justify-between md:p-5">
              <div>
                <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] text-primary">Visítanos</p>
                <p className="mb-0 text-xs leading-5 text-muted-foreground">Av. Los Héroes 1329, Villa María del Triunfo, Lima 15801 · R2QV+RC</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=A%20%26%20DE%20Accesorios%2C%20Av.%20Los%20H%C3%A9roes%201329%2C%20Villa%20Mar%C3%ADa%20del%20Triunfo%2C%20Lima"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-md border border-border px-4 text-[10px] font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
