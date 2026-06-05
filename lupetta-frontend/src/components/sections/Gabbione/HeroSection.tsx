import { motion } from 'motion/react';
import heroImg from '../../../assets/images/shooting-slider/shooting-25.webp';
import { Spotlight } from '../../ui/spotlight-new';

export default function HeroSection() {
  return (
    <section
      className="tablet-hero relative text-white overflow-hidden min-h-screen flex items-center"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,10,15,0.65) 0%, rgba(0,60,75,0.45) 100%)' }} />
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(185, 100%, 37%, .25) 0, hsla(154, 62%, 44%, .1) 50%, transparent 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(185, 100%, 37%, .15) 0, hsla(154, 62%, 44%, .05) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(154, 62%, 44%, .1) 0, transparent 80%)"
        translateY={-200} width={700} height={1200} smallWidth={300} duration={8} xOffset={120}
      />
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 pt-24 sm:pt-28 md:pt-28 pb-20 sm:pb-28 md:pb-28 lg:pb-36 relative z-10 w-full text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-accent/20 border border-accent/40 text-white text-sm font-semibold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(101,179,46,0.2)] backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Lupetta Smart Home
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 montserrat-italic text-left drop-shadow-xl">
            Soluzioni di contenimento:
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300 block drop-shadow-sm">prova la nuova Lupetta Smart Home nella tua stalla</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed text-left drop-shadow-md font-medium"
          >
            Lupetta Smart Home è il sistema abitativo progettato da Tredì Italia per offrire ai vitelli un ambiente controllato, funzionale e facilmente gestibile dall’allevatore.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
