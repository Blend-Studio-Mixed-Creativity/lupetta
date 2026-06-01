import { motion } from 'motion/react';
import dashboardImg from '../../../assets/images/app-dashboard-screenshot.png';

export default function ProfiliSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #006071, #65b32e, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #65b32e, #006071, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#65b32e' }}>App Lupetta</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-8 leading-tight">
              Unica interfaccia, <br /><span className="montserrat-italic" style={{ color: '#006071' }}>tutti i dati che servono</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-500">
              L’app Lupetta permette all’allevatore di avere sempre sotto controllo lo stato delle macchine installate in stalla, anche a distanza. Da un’unica interfaccia è possibile visualizzare i valori in tempo reale, verificare il corretto funzionamento di ogni Lupetta, monitorare i parametri principali e intervenire con maggiore tempestività quando qualcosa richiede attenzione. In questo modo la gestione quotidiana diventa più semplice, ordinata e continua, contribuendo a garantire agli animali condizioni di alimentazione più regolari, salute e benessere.
            </p>
          </motion.div>

          {/* Right: dashboard screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-3 hover:shadow-[0_30px_60px_-15px_rgba(0,96,113,0.3)] transition-all duration-500 max-w-2xl w-full">
              <img
                src={dashboardImg}
                alt="App Lupetta Dashboard"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
