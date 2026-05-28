import { motion } from 'motion/react';
import { GlowingCards, GlowingCard } from '../../lightswind/glowing-cards';

const STEPS = [
  { step: '01', title: 'Temperatura corretta', desc: 'Sciogli la polvere in acqua a circa 45-50 °C per favorire una dispersione omogenea e mantenere intatte le proprietà nutrizionali.', glowColor: '#006071' },
  { step: '02', title: 'Diluizione consigliata', desc: 'Rispetta la concentrazione indicata sulla confezione (in genere 130-150 g per litro) per garantire l’apporto energetico corretto al vitello.', glowColor: '#65b32e' },
  { step: '03', title: 'Miscelazione omogenea', desc: 'Mescola fino a ottenere una soluzione liscia, senza grumi, per assicurare la stessa qualità in ogni pasto.', glowColor: '#006071' },
  { step: '04', title: 'Somministrazione', desc: 'Servi alla temperatura del corpo (38-40 °C), in più pasti distribuiti nella giornata per favorire una digestione regolare.', glowColor: '#65b32e' },
];

export default function DosaggioSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #65b32e, #006071, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #006071, #65b32e, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#65b32e' }}>Dosaggio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4">
            Preparazione e <span className="montserrat-italic" style={{ color: '#006071' }}>dosaggio consigliato</span>
          </h2>
        </motion.div>

        <GlowingCards enableGlow glowRadius={26} gap="1.5rem" padding="0" backgroundColor="transparent" borderRadius="1rem">
          {STEPS.map((item, i) => (
            <GlowingCard key={i} glowColor={item.glowColor} className="p-8 border-slate-100 relative overflow-hidden">
              <span className="absolute top-4 right-5 text-5xl font-bold montserrat-heading select-none" style={{ color: `${item.glowColor}22` }}>{item.step}</span>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-lg font-black" style={{ background: `${item.glowColor}18`, color: item.glowColor }}>{item.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </GlowingCard>
          ))}
        </GlowingCards>
      </div>
    </section>
  );
}







