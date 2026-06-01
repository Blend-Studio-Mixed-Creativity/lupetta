import { useScrollReveal } from '../../../hooks/useScrollReveal';
import renderCompatibilita from '../../../assets/images/lupetta-maxi-render-compatibilita.webp';
import renderMonitoraggio from '../../../assets/images/lupetta-maxi-render-monitoraggio.webp';

type ContentBlock = {
  eyebrow: string;
  title: string;
  accent: string;
  paragraphs: string[];
  bullets?: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const BLOCKS: ContentBlock[] = [
  {
    eyebrow: 'Controllo dati e alimentazione',
    title: 'Integrazione tecnologica',
    accent: 'e Monitoraggio',
    paragraphs: [
      'Ogni vitello è identificato tramite un tag auricolare, così da essere alimentato secondo una logica preimpostata dall’utente, e registrando ogni suo parametro sul comportamento alimentare.',
      'Oltre alla registrazione del numero dei pasti e della quantità consumata nel giorno il dispositivo offre la possibilità di verificare quante volte il vitello si è presentato a richiedere il pasto',
      'La raccolta di tutti questi dati viene poi processata e tradotta dal software indicando con segnali luminosi a display e notifiche push sui dispositivi mobili (telefono, tablet o pc). L’algoritmo di segnalazione è stato costruito incrociando la statistica dei trattamenti su ogni singolo vitello con il proprio grafico alimentare.',
      'La vitellaia rappresenta un ambiente complesso, in cui non sempre l’imprenditore ha la possibilità di essere costantemente presente o di effettuare investimenti importanti in termini di tempo e risorse. In questo contesto, l’adozione di soluzioni tecnologiche avanzate diventa un elemento chiave.',
      'La Maxi Tech consente di effettuare un monitoraggio continuo e una diagnostica basata su dati in tempo reale, permettendo all’allevatore di controllare lo stato di salute e le condizioni ambientali anche a distanza. Questo approccio garantisce interventi più tempestivi e consente all’allevatore di avere sempre una visione completa e aggiornata della situazione.',
    ],
    image: renderMonitoraggio,
    imageAlt: 'Render 3D trasparente della Lupetta Maxi Tech con componenti interni visibili',
    reverse: true,
  },
  {
    eyebrow: 'Moduli, gabbioni e sensori',
    title: 'Compatibilità con gabbioni di movimento',
    accent: 'e Moduli Aggiuntivi',
    paragraphs: [
      
      'Il monitoraggio costante dei parametri tramite la Maxi Tech si completa perfettamente con il sistema di gestione in tempo reale delle condizioni ambientali.',
      'Lupetta Smart Home è dotata di sensori interni ed esterni in grado di rilevare temperatura, umidità, composizione dei gas dell’aria e indice THI (Temperature Humidity Index), consentendo di calcolare il differenziale tra ambiente interno ed esterno e di regolarli in modo automatico.',
      'L’integrazione tra il sistema di controllo Maxi Tech e un ambiente costantemente monitorato nei suoi parametri fondamentali rappresenta una soluzione completa ed efficiente, ideale per favorire la crescita e lo sviluppo ottimale dell’animale.',
    ],
    bullets: [
      'Facilità di movimentazione e pulizia',
      'Superfici lisce, prive di angoli, per maggiore sicurezza e igiene',
      'Ampio spazio disponibile per un numero limitato di animali',
      'Regolazione intelligente di temperatura, luce, qualità dell’aria e umidità',
      'Pareti progettate con effetto autoventilante',
    ],
    image: renderCompatibilita,
    imageAlt: 'Render 3D della Lupetta Maxi Tech con alloggiamenti e moduli laterali',
  },
];

function ImageBox({ image, imageAlt }: Pick<ContentBlock, 'image' | 'imageAlt'>) {
  return (
    <div className="relative h-72 sm:h-[400px] lg:h-[480px] flex items-center justify-center">
      <img
        src={image}
        alt={imageAlt}
        className="max-w-full max-h-full object-contain mix-blend-multiply drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
      />
    </div>
  );
}

function FeatureBullets({ bullets, isVisible }: { bullets: string[]; isVisible: boolean }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-8">
      {bullets.map((bullet, bulletIndex) => (
        <div
          key={bullet}
          className={`feature-bullet group relative flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white px-5 py-4 text-slate-700 text-base leading-snug shadow-xs transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-accent/50 ${isVisible ? 'feature-bullet--in' : ''}`}
          style={{ transitionDelay: isVisible ? `${bulletIndex * 90 + 200}ms` : '0ms' }}
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
              <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="text-sm font-medium text-slate-700 leading-normal">{bullet}</span>
        </div>
      ))}
    </div>
  );
}

function AlternatingBlock({ block, index }: { block: ContentBlock; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.12 });
  const textAnimation = block.reverse ? 'sr-reveal-right' : 'sr-reveal-left';
  const imageAnimation = block.reverse ? 'sr-reveal-left' : 'sr-reveal-right';
  const sectionBg =
    index === 0
      ? 'bg-linear-to-br from-slate-50 via-emerald-50/40 to-white'
      : 'bg-linear-to-br from-primary/5 via-white to-accent/5';

  return (
    <section className={`relative overflow-hidden ${sectionBg} py-16 sm:py-20 lg:py-24`}>
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/15 to-transparent" />
      {index === 1 && (
        <>
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        </>
      )}
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className={`lg:col-span-7 ${block.reverse ? 'lg:order-2' : ''} ${isVisible ? textAnimation : 'sr-hidden'}`}>
            <span className="text-accent font-bold text-sm tracking-[0.18em] uppercase block mb-2">{block.eyebrow}</span>
            <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.1] mb-8">
              {block.title}<br />
              <span className="montserrat-italic text-primary">{block.accent}</span>
            </h2>
            
            <div className="space-y-6">
              {block.paragraphs.map((paragraph, pIdx) => (
                <p 
                  key={pIdx} 
                  className={`text-slate-600 text-base sm:text-lg leading-relaxed ${
                    pIdx === 0 
                      ? 'text-slate-900 font-medium border-l-4 border-accent pl-5 py-1 text-lg sm:text-xl' 
                      : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {block.bullets && <FeatureBullets bullets={block.bullets} isVisible={isVisible} />}
          </div>

          {/* Image Column */}
          <div className={`lg:col-span-5 ${block.reverse ? 'lg:order-1' : ''} ${isVisible ? imageAnimation : 'sr-hidden'}`} style={{ animationDelay: '0.12s' }}>
            <ImageBox image={block.image} imageAlt={block.imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PostSpecsBlocksSection() {
  return (
    <>
      <style>{`
        .feature-bullet {
          opacity: 0;
          transform: translateY(16px);
          will-change: transform, opacity;
        }
        .feature-bullet--in {
          animation: featureBulletIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes featureBulletIn {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .feature-bullet,
          .feature-bullet--in {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
      {BLOCKS.map((block, index) => (
        <AlternatingBlock key={block.title} block={block} index={index} />
      ))}
    </>
  );
}