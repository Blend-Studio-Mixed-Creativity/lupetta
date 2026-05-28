import { motion } from 'motion/react';
import { GlowingCards, GlowingCard } from '../../lightswind/glowing-cards';
import sacchiImg from '../../../assets/images/TREDI.png';

const PRODOTTI = [
  {
    glowColor: '#006071',
    badge: 'MR Gold',
    title: 'Latte MR Gold',
    claim: 'Ideale per una crescita sana e risultati eccellenti.',
    desc: 'Il contenuto di additivi specifici lo rende un prodotto d’élite per facilitare l’ingestione di mangime starter in prossimità dello svezzamento.',
    vantaggi: ['Stabilità', 'Digeribilità', 'Ottimo accrescimento', 'Facilità di svezzamento'],
  },
  {
    glowColor: '#65b32e',
    badge: 'MR Platinum',
    title: 'Latte MR Platinum',
    claim: 'Il massimo degli accrescimenti.',
    desc: 'La grande quantità di WPC nella formula lo rende un prodotto con un grande potere anabolico per una massima crescita strutturale degli animali.',
    vantaggi: ['Stabilità', 'Digeribilità', 'Sviluppo muscolare', 'Sanità della mandria'],
  },
];

export default function ProdottiSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #006071, #65b32e, transparent)' }} />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">I prodotti</span>
            <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
              La nostra <span className="montserrat-italic text-primary">linea latte</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Una formula di latti speciali sperimentati con Lupetta per raggiungere il massimo dei risultati. Due formulazioni complementari per accompagnare il vitello dalla nascita allo svezzamento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative w-full h-72 sm:h-96 lg:h-112"
          >
            <img
              src={sacchiImg}
              alt="Sacchi Tredì Italia — Latte MR Gold e MR Platinum"
              className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl"
            />
          </motion.div>
        </div>

        <GlowingCards enableGlow glowRadius={28} glowOpacity={0.85} gap="2rem" padding="0" backgroundColor="transparent" borderRadius="1.5rem">
          {PRODOTTI.map((prod, i) => (
            <GlowingCard key={i} glowColor={prod.glowColor} className="p-0 overflow-hidden border-slate-100">
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${prod.glowColor}, transparent)` }} />
              <div className="p-8 sm:p-10">
                <span
                  className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full mb-5"
                  style={{ background: `${prod.glowColor}15`, color: prod.glowColor }}
                >
                  {prod.badge}
                </span>
                <h3 className="montserrat-heading text-2xl sm:text-3xl text-slate-900 mb-2 tracking-tight">{prod.title}</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: prod.glowColor }}>{prod.claim}</p>
                <p className="text-slate-500 text-base leading-relaxed mb-6">{prod.desc}</p>

                <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-3">Vantaggi</p>
                <ul className="grid grid-cols-2 gap-2.5">
                  {prod.vantaggi.map((v) => (
                    <li key={v} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: prod.glowColor }} />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowingCard>
          ))}
        </GlowingCards>
      </div>
    </section>
  );
}
