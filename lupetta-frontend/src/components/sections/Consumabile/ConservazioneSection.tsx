import { motion } from 'motion/react';
import { GlowingCards, GlowingCard } from '../../lightswind/glowing-cards';

const ITEMS = [
  {
    glowColor: '#006071',
    iconPath: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
    title: 'Temperatura di conservazione',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.',
  },
  {
    glowColor: '#65b32e',
    iconPath: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
    title: 'Condizioni di stoccaggio',
    desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet.',
  },
];

export default function ConservazioneSection() {
  return (
    <section className="dark relative overflow-hidden" style={{ background: '#0d1f26' }}>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #006071 0%, #65b32e 100%)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#ffffff' }}>Conservazione</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-4">
            Stoccaggio e <span className="montserrat-italic" style={{ color: '#65b32e' }}>conservazione</span>
          </h2>
        </motion.div>

        <GlowingCards enableGlow glowRadius={28} gap="2.5rem" padding="0" backgroundColor="transparent" borderRadius="1rem">
          {ITEMS.map((item, i) => (
            <GlowingCard key={i} glowColor={item.glowColor} className="p-8 sm:p-10 border-white/10 [background:rgba(255,255,255,0.04)]">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${item.glowColor}25`, border: `1px solid ${item.glowColor}40` }}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={item.glowColor}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
              </div>
              <h3 className="text-2xl text-white mb-4">{item.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.desc}</p>
            </GlowingCard>
          ))}
        </GlowingCards>
      </div>
    </section>
  );
}







