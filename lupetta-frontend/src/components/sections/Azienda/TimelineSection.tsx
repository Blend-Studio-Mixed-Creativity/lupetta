import { useEffect, useRef, useState } from 'react';
import img2016 from '../../../assets/images/timeline-2016.png';
import img2021 from '../../../assets/images/timeline-2021.png';
import img2025 from '../../../assets/images/timeline-2025.png';
import img2026 from '../../../assets/images/timeline-2026.png';

type Milestone = {
  year: string;
  title: string;
  desc: string;
  img: string;
};

const MILESTONES: Milestone[] = [
  {
    year: '2016',
    title: 'Allattatrice individuale',
    desc: 'Nasce la Lupetta dedicata al nutrimento del singolo vitello: la base di una nuova metodologia di somministrazione, frutto di anni di ricerca sul comportamento alimentare dell\u2019animale.',
    img: img2016,
  },
  {
    year: '2021',
    title: 'Web App dedicata',
    desc: "Arriva la piattaforma di monitoraggio: l'allevatore controlla l'intero processo di svezzamento da smartphone e desktop, con dati raccolti in tempo reale.",
    img: img2021,
  },
  {
    year: '2025',
    title: 'Lupetta Maxi Tech',
    desc: "Il modello industriale per gestire pi\u00f9 capi contemporaneamente con la stessa precisione del modello individuale: nuova interfaccia e algoritmi Smart Feeding evoluti.",
    img: img2025,
  },
  {
    year: '2026',
    title: 'Lupetta Smart Home',
    desc: "L'ambiente completo per il vitello: ricovero, alimentazione e monitoraggio integrati in un unico sistema modulare\u00a0e\u00a0scalabile.",
    img: img2026,
  },
];

/**
 * Hook che restituisce il progresso (0 -> 1) di scroll della sezione
 * relativo al viewport. 0 quando la top tocca il fondo dello schermo,
 * 1 quando il fondo tocca la top dello schermo.
 */
function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Avanza non appena la sezione entra dal basso, completa quando esce dall'alto.
      const total = rect.height + vh;
      const seen = vh - rect.top;
      const p = Math.min(1, Math.max(0, seen / total));
      setProgress(p);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return { ref, progress };
}

/** Singola riga della timeline con observer per attivare l'entrata. */
function MilestoneRow({
  m,
  i,
  total,
}: {
  m: Milestone;
  i: number;
  total: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const isLeft = i % 2 === 0;
  const isLast = i === total - 1;

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -10% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center overflow-visible ${isLast ? 'pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24' : 'pb-24 lg:pb-40'}`}
    >
      {/* MARKER centrale (visibile solo desktop) */}
      <div
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-12 z-20 items-center justify-center"
        aria-hidden
      >
        <span
          className="absolute w-20 h-20 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(101,179,46,0.45) 0%, transparent 70%)',
            transform: active ? 'scale(1)' : 'scale(0)',
            transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        />
        <span
          className="relative w-8 h-8 rounded-full border-4 border-white shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #65b32e, #006071)',
            transform: active ? 'scale(1)' : 'scale(0)',
            transition: 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.15s',
            boxShadow: active
              ? '0 0 0 8px rgba(101,179,46,0.18), 0 14px 30px -8px rgba(0,96,113,0.55)'
              : '0 0 0 0 rgba(101,179,46,0)',
          }}
        />
      </div>

      {/* IMAGE side */}
      <div
        className={`relative ${isLeft ? 'lg:order-1 lg:pr-12 xl:pr-20' : 'lg:order-2 lg:pl-12 xl:pl-20'}`}
        style={{
          opacity: active ? 1 : 0,
          transform: active
            ? 'translateX(0) scale(1)'
            : `translateX(${isLeft ? -80 : 80}px) scale(0.9)`,
          filter: active ? 'blur(0)' : 'blur(6px)',
          transition:
            'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.2s, filter 0.7s ease 0.2s',
        }}
      >
        <img
          src={m.img}
          alt={m.title}
          className="w-full h-auto max-h-[28rem] object-contain mx-auto"
          loading="lazy"
        />
      </div>

      {/* TEXT side */}
      <div
        className={`${isLeft ? 'lg:order-2 lg:pl-12 xl:pl-20' : 'lg:order-1 lg:pr-12 xl:pr-20 lg:text-right'}`}
        style={{
          opacity: active ? 1 : 0,
          transform: active
            ? 'translateX(0)'
            : `translateX(${isLeft ? 80 : -80}px)`,
          transition:
            'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.35s',
        }}
      >
        {/* Anno enorme */}
        <div
          className="montserrat-heading font-extrabold leading-[1.18] mb-1 sm:mb-2 pt-6 pb-4 overflow-visible"
          style={{
            fontSize: 'clamp(4rem, 10vw, 9rem)',
            background: 'linear-gradient(135deg, #65b32e 0%, #006071 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.04em',
            paddingRight: '0.15em',
            marginRight: '-0.15em',
          }}
        >
          {m.year}
        </div>



        <h3 className="montserrat-heading text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {m.title}
        </h3>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl lg:max-w-none">
          {m.desc}
        </p>
      </div>
    </div>
  );
}

export default function TimelineSection() {
  const { ref, progress } = useScrollProgress<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 bg-slate-50 overflow-x-hidden overflow-y-visible"
      style={{ minHeight: 'auto' }}
    >
      {/* Decorative bg */}
      <div
        aria-hidden
        className="absolute top-1/3 -left-40 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(101,179,46,0.14) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 -right-40 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,168,192,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#006071] font-bold text-sm tracking-[0.32em] uppercase block mb-4">
            Tecnologia
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl text-slate-900 tracking-tight text-balance">
            La storia della <span className="montserrat-italic text-accent">nostra tecnologia</span>
          </h2>
          <p className="text-slate-500 text-lg mt-5 max-w-2xl mx-auto">
            Dieci anni di evoluzione raccontati passo dopo passo.
          </p>
        </div>

        {/* Timeline wrapper con linea centrale */}
        <div className="relative">

          {/* Linea centrale verticale (visibile solo desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1.5 bg-slate-200 rounded-full overflow-hidden z-10"
          >
            <div
              className="w-full rounded-full origin-top"
              style={{
                background: 'linear-gradient(180deg, #006071, #65b32e)',
                height: `${Math.round(progress * 100)}%`,
                transition: 'height 0.15s linear',
                boxShadow: '0 0 24px rgba(101,179,46,0.45)',
              }}
            />
          </div>

          {/* Linea mobile verticale a sinistra */}
          <div
            aria-hidden
            className="lg:hidden absolute left-3 sm:left-5 top-0 bottom-0 w-1 bg-slate-200 rounded-full overflow-hidden"
          >
            <div
              className="w-full rounded-full"
              style={{
                background: 'linear-gradient(180deg, #006071, #65b32e)',
                height: `${Math.round(progress * 100)}%`,
                transition: 'height 0.15s linear',
              }}
            />
          </div>

          {/* Padding sinistro su mobile per fare spazio alla linea */}
          <div className="pl-10 sm:pl-14 lg:pl-0 space-y-0">
            {MILESTONES.map((m, i) => (
              <MilestoneRow key={m.year} m={m} i={i} total={MILESTONES.length} />
            ))}
          </div>
        </div>

        {/* Footer: indicatore di percorso completato */}
        <div className="mt-16 sm:mt-24 text-center">
          <button
            onClick={() => {
              const el = document.getElementById('basis-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #65b32e, #006071)',
                boxShadow: '0 0 0 6px rgba(101,179,46,0.18)',
              }}
            />
            <span className="text-sm font-bold tracking-widest uppercase text-[#006071]">
              {progress > 0.85 ? 'Il viaggio continua...' : 'Scorri per scoprire'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
