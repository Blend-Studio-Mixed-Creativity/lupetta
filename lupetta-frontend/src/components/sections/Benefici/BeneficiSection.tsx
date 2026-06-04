import { motion } from 'motion/react';
import { Clock, Smartphone, Settings, TrendingUp, HeartPulse, Sparkles } from 'lucide-react';

interface Beneficio {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const BENEFICI: Beneficio[] = [
  {
    icon: Clock,
    title: 'Risparmio di tempo',
    desc: 'Carico latte giornaliero e somministrazione automatizzata che libera tempo prezioso per altre attività della stalla.',
  },
  {
    icon: Smartphone,
    title: 'Controllo remoto',
    desc: 'App integrata per monitorare gli animali a distanza e ricevere segnalazioni in tempo reale da qualunque luogo.',
  },
  {
    icon: Settings,
    title: 'Flessibilità totale',
    desc: 'Si adatta alla maggior parte delle gabbie già esistenti nella tua stalla senza modifiche strutturali.',
  },
  {
    icon: TrendingUp,
    title: 'Performance superiori',
    desc: 'Incremento ponderale maggiore nei primi 30 giorni di vita grazie ai pasti frazionati automatici.',
  },
  {
    icon: HeartPulse,
    title: 'Prevenzione salute',
    desc: 'Riduzione drastica degli episodi diarroici nei primi 7 giorni e migliori condizioni di salute generale.',
  },
  {
    icon: Sparkles,
    title: 'Igiene avanzata',
    desc: 'Sistema di lavaggio semplificato per la massima igiene e la prevenzione delle contaminazioni.',
  },
];

interface Stat {
  value: string;
  label: string;
  sub: string;
  color: string;
}

const STATS: Stat[] = [
  { value: '+30%', label: 'Incremento ponderale', sub: 'nei primi 30 giorni', color: '#65b32e' },
  { value: '-40%', label: 'Tempo di gestione', sub: 'risparmio giornaliero', color: '#006071' },
  { value: '-30%', label: 'Episodi diarroici', sub: 'nei primi 7 giorni', color: '#65b32e' },
  { value: '24/7', label: 'Monitoraggio', sub: 'controllo continuo', color: '#006071' },
];

export default function BeneficiSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Vantaggi competitivi</span>
          <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
            Perché scegliere <span className="montserrat-italic text-primary">Lupetta</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Con Lupetta gestisci i tuoi vitelli singolarmente o in piccoli gruppi, garantendo più benessere agli animali e più risparmio per te — senza i costi elevati dei grandi impianti. Lupetta è la tecnologia che porta la tua stalla nel futuro con risultati{"\u00a0"}misurabili.
          </p>
        </motion.div>

        {/* Grid 6 benefici */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-20 sm:mb-24">
          {BENEFICI.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true }}
                className="group relative bg-white border border-slate-200/70 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgb(0,0,0,0.08)] hover:border-accent/30"
              >
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-accent/15 to-primary/10 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Statistiche */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="relative rounded-4xl bg-linear-to-br from-[#0d1f26] to-[#0a181d] p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Risultati misurabili</span>
            <h3 className="montserrat-heading text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mt-3 mb-4 leading-tight">
              Con Lupetta puoi <span className="montserrat-italic text-accent">ottenere</span>
            </h3>
            <p className="text-base text-white/60 leading-relaxed">
              Dati ottenuti incrociando report statistici dell'app e feedback di oltre 200 allevamenti in Italia.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center sm:text-left"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-2" style={{ color: s.color }}>
                  {s.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-white tracking-tight">{s.label}</div>
                <div className="text-xs sm:text-sm text-white/40 mt-1">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
