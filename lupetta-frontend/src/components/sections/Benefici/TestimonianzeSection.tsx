import { motion } from 'motion/react';
import { Quote, Play, Clock } from 'lucide-react';

interface Testimonianza {
  initials: string;
  name: string;
  role: string;
  farm: string;
  location: string;
  product: string;
  color: string;
  quote: string;
  results: { value: string; label: string }[];
}

const TESTIMONIANZE: Testimonianza[] = [
  {
    initials: 'MR',
    name: 'Marco Rossi',
    role: 'Titolare',
    farm: 'Azienda agricola Rossi',
    location: 'Cremona',
    product: 'Lupetta MAXI Tech',
    color: '#006071',
    quote:
      "Da quando abbiamo installato Lupetta MAXI Tech in stalla non ci alziamo più di notte per le poppate. I vitelli crescono in modo più uniforme, gli episodi di diarrea sono crollati e il risparmio di manodopera è evidente già dal primo mese. La cosa che apprezziamo di più è il controllo da remoto: anche quando siamo fuori azienda riceviamo gli alert in tempo reale.",
    results: [
      { value: '+35%', label: 'Incremento ponderale' },
      { value: '-3h', label: 'Lavoro al giorno' },
      { value: '0', label: 'Mortalità neonatale' },
    ],
  },
  {
    initials: 'GF',
    name: 'Giuseppe Ferrari',
    role: 'Allevatore',
    farm: 'Cascina Ferrari & Figli',
    location: 'Mantova',
    product: 'Lupetta MINI Wi-Fi',
    color: '#65b32e',
    quote:
      "Per una realtà come la nostra, la MINI Wi-Fi è la soluzione perfetta: compatta, silenziosa, precisa nelle dosi e si è integrata nelle gabbie che già avevamo senza alcuna modifica. Monitoro ogni razione dallo smartphone, anche dai campi. L'assistenza tecnica di Tredì è sempre disponibile e i vitelli sono visibilmente più tranquilli al momento della poppata.",
    results: [
      { value: '+28%', label: 'Crescita media' },
      { value: '-40%', label: 'Tempo gestione' },
      { value: '100%', label: 'Pasti regolari' },
    ],
  },
];

function CaseCard({ t, index }: { t: Testimonianza; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div
        className="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center, ${t.color}25 0%, transparent 70%)` }}
      />

      <div
        className="relative bg-white rounded-4xl border overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_rgb(0,0,0,0.10)]"
        style={{
          borderColor: `${t.color}20`,
          boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
        }}
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}60)` }} />

        <div className="p-8 sm:p-10 flex flex-col flex-1">
          {/* Top row: avatar + meta + badge */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4 min-w-0">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-sm font-black tracking-widest shrink-0 shadow-md"
                style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)` }}
              >
                {t.initials}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-slate-900 text-base truncate">{t.name}</div>
                <div className="text-xs text-slate-400 truncate">
                  {t.role} · {t.farm}
                </div>
                <div className="text-xs text-slate-400 truncate">{t.location}</div>
              </div>
            </div>
            <span
              className="text-[10px] font-bold uppercase px-3 py-1.5 rounded-full whitespace-nowrap shrink-0"
              style={{ background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}25` }}
            >
              {t.product}
            </span>
          </div>

          {/* Quote */}
          <div className="relative mb-8 flex-1">
            <Quote
              className="absolute -top-2 -left-1 w-10 h-10 opacity-10"
              style={{ color: t.color }}
            />
            <blockquote className="relative pl-8 text-slate-600 text-base sm:text-lg leading-relaxed italic">
              {t.quote}
            </blockquote>
          </div>

          {/* Results */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: `${t.color}15` }}>
            {t.results.map((r) => (
              <div key={r.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: t.color }}>
                  {r.value}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-1 leading-tight">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function TestimonianzeSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Case history</span>
          <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
            Dicono di noi gli <span className="montserrat-italic text-primary">allevatori</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Abbiamo intervistato due aziende agricole che hanno scelto Lupetta. Risultati concreti, misurabili e raccontati direttamente da chi lavora ogni giorno in stalla.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIANZE.map((t, i) => (
            <CaseCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* Video Interviews Showcase */}
        <div className="mt-20 lg:mt-32 relative">
          {/* Subtle background glow behind the video section */}
          <div className="absolute inset-0 bg-radial from-accent/5 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />
          
          <div className="border border-slate-200/80 bg-white/70 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-xl">
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-slate-100 text-primary border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Voce dal campo
              </span>
              <h3 className="montserrat-heading text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mt-4 mb-4">
                Le video <span className="montserrat-italic text-primary">interviste</span> in stalla
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                Scopri come l'allattamento automatico Lupetta ha migliorato la routine quotidiana e il benessere animale, raccontato direttamente da chi lo vive ogni giorno.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Interview 1 */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group relative flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-lg hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Glowing hover effect */}
                <div className="absolute inset-0 bg-radial from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Aspect ratio frame for Vimeo player */}
                <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                  <iframe
                    src="https://player.vimeo.com/video/1197293631?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 w-full h-full"
                    title="Lupetta_Testimonianza Capo Stalla Casalmorano_V1"
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md border border-slate-200">
                      Casalmorano
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-primary/10 text-primary rounded-md border border-primary/20">
                      Capo Stalla
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
                    Azienda Agricola Casalmorano
                  </h4>
                  <p className="mt-2.5 text-slate-500 text-xs sm:text-sm leading-relaxed flex-grow">
                    Una testimonianza diretta incentrata sui vantaggi gestionali, la regolarità delle poppate e la drastica diminuzione del lavoro manuale.
                  </p>
                  
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      1:30 min
                    </span>
                    <span className="flex items-center gap-1.5 text-primary">
                      <Play className="w-3 h-3 text-primary fill-primary animate-pulse" />
                      Intervista video
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Interview 2 */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group relative flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-lg hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Glowing hover effect */}
                <div className="absolute inset-0 bg-radial from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Aspect ratio frame for Vimeo player */}
                <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                  <iframe
                    src="https://player.vimeo.com/video/1197293632?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 w-full h-full"
                    title="Lupetta_Testimonianza Emma_V1"
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md border border-slate-200">
                      Emma
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-primary/10 text-primary rounded-md border border-primary/20">
                      Allevatrice
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
                    L'esperienza di Emma
                  </h4>
                  <p className="mt-2.5 text-slate-500 text-xs sm:text-sm leading-relaxed flex-grow">
                    Una recensione focalizzata sulla semplicità dell'allattamento controllato, la pulizia dei sistemi automatizzati e la vitalità superiore dei vitelli svezzati.
                  </p>
                  
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      1:15 min
                    </span>
                    <span className="flex items-center gap-1.5 text-primary">
                      <Play className="w-3 h-3 text-primary fill-primary animate-pulse" />
                      Intervista video
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
