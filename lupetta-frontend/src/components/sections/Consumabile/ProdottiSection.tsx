import { motion } from 'motion/react';
import { GlowingCards, GlowingCard } from '../../lightswind/glowing-cards';

const PRODOTTI = [
  {
    glowColor: '#006071',
    iconPath: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
    title: 'Lorem lacteum premium',
    desc: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
    specs: ['Lorem 26% ipsum', 'Dolor 18% sit', 'Amet 0.5% consectetur'],
  },
  {
    glowColor: '#65b32e',
    iconPath: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z',
    title: 'Ipsum integratum plus',
    desc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.',
    specs: ['Lorem vitamine A-D-E', 'Dolor minerali essent.', 'Amet probiotici select.'],
  },
  {
    glowColor: '#00c8a0',
    iconPath: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
    title: 'Dolor supplementum',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.',
    specs: ['Lorem elettroliti', 'Dolor aminoacidi', 'Amet antiossidanti'],
  },
];

export default function ProdottiSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #006071, #65b32e, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#65b32e' }}>Prodotti</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4">
            La nostra <span className="montserrat-italic" style={{ color: '#006071' }}>linea latte</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Formulazioni studiate per ogni fase di crescita del vitello.
          </p>
        </motion.div>

        <GlowingCards enableGlow glowRadius={28} glowOpacity={0.85} gap="2rem" padding="0" backgroundColor="transparent" borderRadius="1.5rem">
          {PRODOTTI.map((prod, i) => (
            <GlowingCard key={i} glowColor={prod.glowColor} className="p-0 overflow-hidden border-slate-100">
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${prod.glowColor}, transparent)` }} />
              <div className="p-8 sm:p-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${prod.glowColor}18` }}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={prod.glowColor}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={prod.iconPath} />
                  </svg>
                </div>
                <h3 className="text-2xl text-slate-900 mb-3">{prod.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed mb-6">{prod.desc}</p>
                <ul className="space-y-2.5">
                  {prod.specs.map((s, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: prod.glowColor }} />
                      {s}
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







