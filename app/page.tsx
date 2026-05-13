'use client';

import Image from 'next/image';

const WHATSAPP_NUMBER = "593983460388";
const WHATSAPP_MESSAGE = "Hola Dra. Leydi, me gustaría agendar una consulta a domicilio.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const services = [
  {
    title: "Consulta general",
    description:
      "Evaluación clínica completa en la comodidad de su hogar, con tiempo dedicado y sin esperas.",
    icon: StethoscopeIcon,
  },
  {
    title: "Emergencias menores",
    description:
      "Suturas, curaciones, retiro de puntos y atención de heridas con material estéril.",
    icon: BandageIcon,
  },
  {
    title: "Manejo de enfermedades",
    description:
      "Seguimiento de hipertensión, diabetes y condiciones crónicas, con plan de tratamiento personalizado.",
    icon: HeartPulseIcon,
  },
  {
    title: "Adultos y niños",
    description:
      "Atención integral para toda la familia, desde controles pediátricos hasta cuidado del adulto mayor.",
    icon: FamilyIcon,
  },
  {
    title: "Sueroterapia",
    description:
      "Hidratación intravenosa supervisada para recuperación, vitalidad y bienestar.",
    icon: DropIcon,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyHomeCare />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[#F7F5F0]/80 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-white font-display text-lg leading-none">
            L
          </span>
          <span className="font-display text-lg tracking-tight">
            Dra. Leydi Calvache
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-muted">
          <a href="#servicios" className="hover:text-ink transition">Servicios</a>
          <a href="#por-que" className="hover:text-ink transition">¿Por qué?</a>
          <a href="#sobre-mi" className="hover:text-ink transition">Sobre mí</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-soft transition"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Agendar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, #E9C46A33 0, transparent 40%), radial-gradient(circle at 85% 30%, #1A4D3A22 0, transparent 45%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory border border-black/5 text-xs uppercase tracking-wider text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-whatsapp animate-pulse" />
            Atención médica a domicilio
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Salud que llega
            <br />
            <span className="italic text-primary">hasta su puerta.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-muted max-w-xl leading-relaxed">
            Soy la <strong className="text-ink font-semibold">Dra. Leydi Calvache</strong>,
            médica general. Brindo atención cercana, profesional y oportuna en la
            comodidad de su hogar — sin salas de espera, sin estrés.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-white font-medium transition shadow-lg shadow-whatsapp/25"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Agendar por WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-muted">
            <Bullet>Adultos y niños</Bullet>
            <Bullet>Material estéril</Bullet>
            <Bullet>Atención personalizada</Bullet>
          </div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="w-full max-w-sm rounded-3xl border border-black/5 bg-white shadow-xl shadow-black/5 p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-primary text-white">
                <CrossIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-ink text-sm">Dra. Leydi Calvache</p>
                <p className="text-xs text-ink-muted">Médica General · Manta, Ecuador</p>
              </div>
            </div>

            <div className="h-px bg-black/5" />

            <ul className="flex flex-col gap-3">
              {[
                "Consulta general a domicilio",
                "Emergencias menores y suturas",
                "Sueroterapia y rehidratación",
                "Atención a adultos y niños",
                "Manejo de enfermedades crónicas",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink-muted">
                  <CheckIcon className="w-4 h-4 flex-shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="h-px bg-black/5" />

            <p className="text-center text-sm text-ink-muted italic leading-relaxed">
              "Su salud merece tiempo, escucha y dedicación — no una sala de espera."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-wider text-primary font-medium">
            Servicios
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight leading-tight">
            Atención médica completa,
            <br />
            <span className="italic text-primary">en su hogar.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            Desde una consulta de rutina hasta el manejo de condiciones más
            específicas. Todo con la atención que su familia merece.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative bg-white rounded-2xl p-7 border border-black/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-white transition">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2.5 text-ink-muted leading-relaxed">
                {s.description}
              </p>
            </article>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-primary text-white rounded-2xl p-7 hover:bg-primary-soft transition-all duration-300 flex flex-col justify-between min-h-[200px]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/15 grid place-items-center">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-tight">
                ¿Necesita otro servicio?
              </h3>
              <p className="mt-2.5 text-white/80 leading-relaxed">
                Escríbame por WhatsApp y conversemos sobre su caso particular.
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
              Conversar
              <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyHomeCare() {
  const items = [
    {
      title: "Sin desplazamientos",
      text: "Olvídese del tráfico, las salas de espera y los trámites. La atención llega a usted.",
    },
    {
      title: "Tiempo dedicado",
      text: "Una consulta sin prisa, donde sus dudas se escuchan y resuelven con detalle.",
    },
    {
      title: "Privacidad y comodidad",
      text: "El entorno familiar facilita la conversación honesta y reduce la ansiedad médica.",
    },
    {
      title: "Atención continua",
      text: "Seguimiento por WhatsApp para resolver dudas posteriores a la visita.",
    },
  ];

  return (
    <section id="por-que" className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <p className="text-sm uppercase tracking-wider text-primary font-medium">
            ¿Por qué a domicilio?
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight leading-tight">
            La medicina,
            <br />
            <span className="italic text-primary">como debería ser.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            La atención domiciliaria recupera lo esencial de la práctica médica:
            la relación humana entre paciente y profesional.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="relative">
              <div className="font-display text-3xl text-primary/30">
                0{i + 1}
              </div>
              <h3 className="mt-2 font-display text-xl tracking-tight">
                {it.title}
              </h3>
              <p className="mt-2 text-ink-muted leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre-mi" className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-sm uppercase tracking-wider text-primary font-medium">
          Sobre mí
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl tracking-tight leading-tight">
          Dra. Leydi Calvache
        </h2>
        <p className="mt-3 text-ink-muted text-lg">
          Médico General
        </p>
        
        <div className="mt-8 flex justify-center">
          <Image
            src="/DRA.LeydiCalvache.jpeg"
            alt="Dra. Leydi Calvache"
            width={300}
            height={350}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <p className="mt-8 text-lg text-ink-muted leading-relaxed">
          Mi compromiso es brindar una atención médica humana, accesible y de
          calidad. Creo en escuchar antes de prescribir, en explicar antes de
          tratar, y en estar disponible cuando más se necesita. Cada visita es
          una oportunidad para acompañar a una familia en el cuidado de su
          salud.
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-primary text-white p-10 lg:p-14 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 90% 20%, #E9C46A 0, transparent 50%)",
          }}
        />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-tight">
              ¿Listo para
              <br />
              <span className="italic text-accent">una consulta?</span>
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Escríbame directamente por WhatsApp. Respondo personalmente y
              coordinamos la visita.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-white font-medium transition shadow-xl shadow-black/20"
            >
              <WhatsAppIcon className="w-5 h-5" />
              +593 98 346 0388
            </a>
            <p className="text-sm text-white/60 md:text-right">
              Respuesta rápida en horario hábil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-ink-muted">
        <p>© {new Date().getFullYear()} Dra. Leydi Calvache. Todos los derechos reservados.</p>
        <p>
          Diseñado por{" "}
          <span className="font-medium text-ink">CodiDevs</span>
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-white grid place-items-center shadow-xl shadow-whatsapp/30 transition hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20" />
      <WhatsAppIcon className="relative w-7 h-7" />
    </a>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <CheckIcon className="w-4 h-4 text-primary" />
      {children}
    </span>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function StethoscopeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4.8 2.3v6a4.5 4.5 0 0 0 9 0v-6" />
      <path d="M3 2.3h3.6M12 2.3h3.6" />
      <path d="M9.3 12.8v3a4.7 4.7 0 0 0 9.4 0v-3" />
      <circle cx="19" cy="9.5" r="2.3" />
    </svg>
  );
}

function BandageIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="9" width="20" height="6" rx="3" transform="rotate(-30 12 12)" />
      <circle cx="10" cy="12" r="0.6" fill="currentColor" />
      <circle cx="14" cy="12" r="0.6" fill="currentColor" />
      <circle cx="12" cy="10" r="0.6" fill="currentColor" />
      <circle cx="12" cy="14" r="0.6" fill="currentColor" />
    </svg>
  );
}

function HeartPulseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M3.5 12h3l2-4 3 8 2-4h7" />
      <path d="M20.5 12.5c1.2-1.4 1.5-3.4.4-4.9-1.4-1.9-4-1.9-5.4 0-1.4-1.9-4-1.9-5.4 0-.3.4-.5.9-.6 1.4" />
    </svg>
  );
}

function FamilyIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="8" cy="6" r="2.5" />
      <circle cx="17" cy="7" r="2" />
      <path d="M3.5 18c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" />
      <path d="M14 18c0-2 1.3-3.5 3-3.5s3 1.5 3 3.5" />
      <circle cx="12.5" cy="14" r="1.5" />
      <path d="M10.5 19c0-1.1.9-2 2-2s2 .9 2 2" />
    </svg>
  );
}

function DropIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 3.5s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
      <path d="M9 14a3 3 0 0 0 3 3" />
    </svg>
  );
}

function CrossIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z" />
    </svg>
  );
}

function ClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

function ArrowIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
