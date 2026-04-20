import TiltCard3D from '../../ui/TiltCard3D';
import RevealSection from '../../RevealSection';
import { motion } from 'motion/react';

const BENEFITS = [
  { iconPath: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941', title: 'Incremento del peso e sviluppo muscolare', desc: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.' },
  { iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', title: 'Riduzione malattie gastrointestinali', desc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.' },
  { iconPath: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99', title: 'Ottimizzazione digestione e assorbimento', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.' },
  { iconPath: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z', title: 'Riduzione malattie respiratorie', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat eleifend leo.' },
  { iconPath: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z', title: 'Sviluppo sistema immunitario', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam feugiat vitae ultricies eget.' },
  { iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', title: 'Crescita uniforme e costante', desc: 'Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi condimentum sed commodo vitae.' },
];

// Poche particelle leggere (no filter blur, valori deterministici per evitare reflow)
const PARTICLES = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 8) % 100}%`,
  top: `${(i * 23 + 12) % 100}%`,
  size: 4 + (i % 3) * 2,
  delay: i * 0.6,
  duration: 6 + (i % 3),
  color: i % 2 === 0 ? '#006071' : '#65b32e',
}));

function PhotonParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: 0.3,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function NutrizioneSection() {
  return (
    <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 z-20 overflow-hidden">
      {/* Sfondo statico CSS (sostituisce il GradientBackground WebGL costoso) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, #f0fdf4 0%, #ecfeff 40%, #f0f9ff 100%)',
        }}
      />

      {/* Bagliore statico superiore (no animazione, no filter blur a runtime) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none z-[1] opacity-70"
        style={{
          background:
            'radial-gradient(ellipse at center top, rgba(101,179,46,0.18) 0%, rgba(0,96,113,0.08) 50%, transparent 80%)',
        }}
      />

      {/* Particelle leggere */}
      <PhotonParticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealSection className="flex justify-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            className="relative bg-white/90 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white px-6 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-12 text-center max-w-4xl mx-auto overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
          >
            <span className="relative z-10 inline-block px-4 py-1.5 rounded-full bg-[#006071]/8 text-[#006071] font-bold text-xs sm:text-sm tracking-widest uppercase mb-6 border border-[#006071]/15">L&apos;Impatto sulla Salute</span>
            <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Effetti della nutrizione programmata sul <span className="montserrat-italic text-transparent bg-clip-text bg-gradient-to-r from-[#006071] to-[#65b32e]">benessere e crescita</span>
            </h2>
          </motion.div>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              <TiltCard3D className="rounded-3xl h-full">
                <div className="h-full bg-white p-8 lg:p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-white hover:shadow-[0_20px_50px_rgb(0,96,113,0.12)] hover:border-[#65b32e]/30 transition-shadow duration-500 group relative overflow-hidden flex flex-col cursor-default">

                  {/* Bagliore angolo top-right (statico) */}
                  <div
                    className="absolute -right-10 -top-10 w-32 h-32 rounded-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(101,179,46,0.25) 0%, transparent 70%)',
                    }}
                  />

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#006071]/10 to-[#65b32e]/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:from-[#006071]/20 group-hover:to-[#65b32e]/20 transition-transform duration-300">
                    <svg className="w-7 h-7 text-[#006071] group-hover:text-[#65b32e] transition-colors duration-300 relative z-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={benefit.iconPath} />
                    </svg>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 relative z-10 leading-tight group-hover:text-[#006071] transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed relative z-10 mt-auto">{benefit.desc}</p>

                  {/* Linea inferiore animata su hover (solo transform, GPU friendly) */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] pointer-events-none overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-[#006071] to-[#65b32e] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  </div>
                </div>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
