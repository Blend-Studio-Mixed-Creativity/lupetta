import render1 from '../../../assets/images/lupetta-maxi-render-compatibilita.webp';
import render2 from '../../../assets/images/lupetta-maxi-render-monitoraggio.webp';

const ITEMS = [
  {
    image: render1,
    alt: 'Render Lupetta Smart Home — vista chiusa',
    eyebrow: 'Vista esterna',
    title: 'Una struttura progettata per l’allevamento moderno',
    desc: 'Linee compatte e materiali pensati per resistere al lavoro quotidiano in stalla. Lupetta Smart Home si integra in modo discreto negli spazi esistenti senza compromettere praticità e accesso operativo.',
    bullets: [
      'Ingombro studiato per ottimizzare le corsie di servizio',
      'Apertura superiore per ispezioni rapide',
      'Finitura resistente agli agenti tipici dell’ambiente stalla',
    ],
  },
  {
    image: render2,
    alt: 'Render Lupetta Smart Home — vista interna',
    eyebrow: 'Vista interna',
    title: 'Un ambiente pensato attorno al vitello',
    desc: 'All’interno trovano spazio le dotazioni necessarie al benessere dell’animale: alimentazione, abbeveraggio, ventilazione e luce sono organizzati per favorire una crescita serena e regolare.',
    bullets: [
      'Doppia stazione di alimentazione e abbeveraggio',
      'Ventilazione naturale tramite pareti autoventilanti',
      'Spazio adatto dal giorno 1 al giorno 150 di vita',
    ],
  },
];

export default function RenderShowcaseSection() {
  return (
    <section className="w-full bg-linear-to-br from-slate-100 via-emerald-50 to-slate-50 py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent/20 to-transparent" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Design e funzione</span>
          <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
            Uno sguardo da <span className="montserrat-italic text-primary">vicino</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Ogni dettaglio della Lupetta Smart Home nasce dall’incontro tra esperienza in allevamento e progettazione industriale. Forma, materiali e dotazioni sono studiati per semplificare il lavoro dell’allevatore e migliorare la vita quotidiana dell’animale.
          </p>
        </div>

        {/* Render + text rows */}
        <div className="space-y-20 sm:space-y-28">
          {ITEMS.map((it, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={it.alt}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Image */}
                <div className="w-full h-80 sm:h-96 lg:h-112 relative">
                  <img
                    src={it.image}
                    alt={it.alt}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                {/* Text */}
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">
                    {it.eyebrow}
                  </span>
                  <h3 className="montserrat-heading text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-3 mb-5 leading-tight">
                    {it.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-6">
                    {it.desc}
                  </p>
                  <ul className="space-y-3">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-sm sm:text-base leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
