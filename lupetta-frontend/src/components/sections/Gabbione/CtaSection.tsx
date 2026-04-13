import { motion } from 'motion/react';
import FallBeamBackground from '../../lightswind/fall-beam-background';
import { BorderBeam } from '../../lightswind/border-beam';

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#0b1a20', minHeight: '380px' }}>
      {/* Fall beam overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <FallBeamBackground lineCount={25} beamColorClass="green-400" className="h-full w-full absolute top-0 left-0" />
      </div>
      {/* Gradient glows */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: '#006071' }} />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: '#65b32e' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#65b32e' }}>Inizia ora</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mt-4 mb-6 text-white">
            Lorem Ipsum <span className="montserrat-italic" style={{ color: '#65b32e' }}>Dolor?</span>
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Primary CTA with BorderBeam */}
            <div className="relative rounded-2xl overflow-hidden">
              <button className="relative px-8 py-4 text-white font-bold text-lg rounded-2xl transition-all hover:scale-105 duration-300" style={{ background: 'linear-gradient(135deg, #65b32e, #50992a)' }}>
                Lorem Ipsum →
              </button>
              <BorderBeam colorFrom="#65b32e" colorTo="#00c8a0" size={80} duration={3} />
            </div>
            {/* Secondary */}
            <button className="px-8 py-4 text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Scopri di più
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}







