import { motion } from 'motion/react';
import { GlowingCards, GlowingCard } from '../../lightswind/glowing-cards';

const NORME = [
  {
    glowColor: '#006071',
    iconPath: 'M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12',
    title: 'Requisiti di Sicurezza',
    subtitle: 'Apparecchiature Agricole',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.',
  },
  {
    glowColor: '#65b32e',
    iconPath: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
    title: 'Norme Benessere Animale',
    subtitle: 'Allevamenti',
    desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit.',
  },
  {
    glowColor: '#00c8a0',
    iconPath: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
    title: 'Impatto Ambientale',
    subtitle: 'Alimentazione Sostenibile',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam.',
  },
];

export default function NormativeSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #65b32e, #006071, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#65b32e' }}>Normative</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4">
            Normative di Sicurezza e <span className="montserrat-italic" style={{ color: '#006071' }}>Benessere</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Rispettiamo e superiamo gli standard normativi europei per garantire qualità e sicurezza.</p>
        </motion.div>

        <GlowingCards enableGlow glowRadius={25} gap="2rem" padding="0" backgroundColor="transparent" borderRadius="1rem">
          {NORME.map((norm, i) => (
            <GlowingCard key={i} glowColor={norm.glowColor} className="p-8 sm:p-10 border-slate-100">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${norm.glowColor}18` }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={norm.glowColor}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={norm.iconPath} />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: norm.glowColor }}>{norm.subtitle}</span>
              <h3 className="text-2xl text-slate-900 mt-2 mb-4">{norm.title}</h3>
              <p className="text-slate-500 text-base leading-relaxed">{norm.desc}</p>
            </GlowingCard>
          ))}
        </GlowingCards>
      </div>
    </section>
  );
}







