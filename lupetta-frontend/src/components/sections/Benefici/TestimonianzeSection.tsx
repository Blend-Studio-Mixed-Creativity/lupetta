import { motion } from 'motion/react';
import { Play, Clock } from 'lucide-react';

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
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Voce dal campo</span>
          <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
            Le video <span className="montserrat-italic text-primary">interviste</span> in stalla
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Scopri come l'allattamento automatico Lupetta ha migliorato la routine quotidiana e il benessere animale, raccontato direttamente da chi lo vive ogni giorno.
          </p>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Interview 1 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-slate-200/80 shadow-lg hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
          >
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
                  Andrea
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-primary/10 text-primary rounded-md border border-primary/20">
                  Lombardia
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
                  Piemonte
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
    </section>
  );
}
