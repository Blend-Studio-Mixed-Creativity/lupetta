import { useScrollReveal } from '../../../hooks/useScrollReveal';

const ITEMS = [
  {
    iconPath:
      'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Elevata durabilità nel tempo',
    subtitle: 'Resistenza',
    desc: 'La struttura è progettata per resistere all’utilizzo quotidiano in allevamento, anche in contesti operativi intensi. I materiali scelti aiutano a mantenere affidabilità e continuità di funzionamento nel tempo.',
    color: '#65b32e',
    glow: 'rgba(101,179,46,0.45)',
  },
  {
    iconPath:
      'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z',
    title: 'Facilità di pulizia',
    subtitle: 'Pulizia',
    desc: 'Le superfici e i componenti sono pensati per rendere le operazioni di pulizia più semplici e rapide. Questo permette all’operatore di intervenire con meno passaggi manuali e con una gestione più ordinata della macchina.',
    color: '#006071',
    glow: 'rgba(0,96,113,0.45)',
  },
  {
    iconPath:
      'M9 3.75h6v2.25a3 3 0 001.2 2.4l1.6 1.2A4.5 4.5 0 0119.5 13.2v5.55a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5V13.2a4.5 4.5 0 011.7-3.6l1.6-1.2a3 3 0 001.2-2.4V3.75zM9 12h6',
    title: 'Massima igiene nella gestione del latte',
    subtitle: 'Igiene latte',
    desc: 'I materiali idonei al contatto alimentare e il sistema di lavaggio automatico integrato contribuiscono a mantenere il circuito del latte pulito e controllato, riducendo il rischio di residui e contaminazioni.',
    color: '#65b32e',
    glow: 'rgba(101,179,46,0.45)',
  },
];

type ItemProps = (typeof ITEMS)[number] & { index: number; parentVisible: boolean };

function MaterialCard({ iconPath, title, subtitle, desc, index, parentVisible }: ItemProps) {
  return (
    <div
      className={`${index === ITEMS.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''} ${parentVisible ? 'sr-reveal-scale' : 'sr-hidden'}`}
      style={{ animationDelay: `${index * 0.14}s`, width: '100%', maxWidth: 'min(340px, 100%)', margin: '0 auto' }}
    >
      <div 
        className="w-full h-full rounded-3xl p-1.5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-5px_rgba(0,96,113,0.4)] group cursor-pointer"
        style={{
          background: 'linear-gradient(144deg, #006071, #65b32e 50%, #00c8a0)',
        }}
      >
        <div className="w-full min-h-80 sm:min-h-95 md:min-h-125 bg-[#0b1a20] rounded-[19px] p-6 sm:p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
          {/* Subtle inner hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,#65b32e_0%,transparent_70%)] pointer-events-none" />
          
          <div
            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 group-hover:border-accent/50 transition-all duration-500 relative z-10"
          >
            <svg className="w-7 h-7 text-white group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
            </svg>
          </div>
          <p className="text-xs font-bold text-accent tracking-widest uppercase mb-1 relative z-10">
            {subtitle}
          </p>
          <h3 className="montserrat-heading text-2xl mb-4 text-white relative z-10 transition-colors group-hover:text-green-50">
            {title}
          </h3>
          <p className="text-white/60 text-base leading-relaxed relative z-10">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MaterialiSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-[#0b1a20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div ref={ref} className={`text-center mb-10 sm:mb-16 md:mb-20 ${isVisible ? 'sr-reveal-up' : 'sr-hidden'}`}>
          <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Materiali e design per <span className="montserrat-italic text-accent">resistenza e igiene</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-8 lg:gap-12">
          {ITEMS.map((item, i) => (
            <MaterialCard key={i} {...item} index={i} parentVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}







