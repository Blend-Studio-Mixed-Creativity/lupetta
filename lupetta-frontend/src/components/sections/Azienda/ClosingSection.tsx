import { useScrollReveal } from '../../../hooks/useScrollReveal';
import closingBg from '../../../assets/images/allattamento2-lupetta.webp';

const CLOSING_POINTS = [
  {
    step: '01',
    title: 'Osserviamo',
    text: 'Il comportamento naturale del vitello guida ogni scelta progettuale.',
  },
  {
    step: '02',
    title: 'Traduciamo',
    text: 'La tecnologia trasforma frequenza, temperatura e quantità in parametri controllati.',
  },
  {
    step: '03',
    title: 'Miglioriamo',
    text: 'Ogni pasto diventa un dato utile per benessere, crescita e gestione quotidiana.',
  },
];

export default function ClosingSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.25 });

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden flex items-center bg-[#003d4a]"
      style={{ minHeight: 'auto' }}
    >
      <img
        src={closingBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, rgba(0,48,58,0.97) 0%, rgba(0,72,86,0.92) 46%, rgba(0,0,0,0.72) 100%)' }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.55) 100%)' }}
      />

      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 text-white">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-16 items-center">
          <div>
            <span
              className="text-[#a5d97a] font-bold text-sm tracking-widest uppercase block mb-5"
              style={{
                opacity: isVisible ? 1 : 0,
                letterSpacing: isVisible ? '0.32em' : '0.05em',
                transition: 'opacity 0.6s ease 0.1s, letter-spacing 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
              }}
            >
              Natura + tecnologia
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-balance max-w-4xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                filter: isVisible ? 'blur(0)' : 'blur(6px)',
                transition:
                  'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s, filter 0.7s ease 0.2s',
              }}
            >
              La natura insegna. <br />
              <span className="montserrat-italic text-[#a5d97a]">Lupetta</span> la trasforma in tecnologia.
            </h2>
            <p
              className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mt-7"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s',
              }}
            >
              Dall&rsquo;osservazione del comportamento naturale nasce un sistema che accompagna il vitello con pasti più regolari, controllati e adatti alla crescita.
            </p>
          </div>

          <div className="space-y-4">
            {CLOSING_POINTS.map((item, i) => (
              <div
                key={item.step}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/15 hover:border-[#a5d97a]/60"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(34px)',
                  transition: `opacity 0.65s ease ${0.55 + i * 0.14}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${0.55 + i * 0.14}s, background-color 0.3s ease, border-color 0.3s ease, translate 0.3s ease`,
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                    style={{
                      background: 'linear-gradient(135deg, #65b32e, #006071)',
                      boxShadow: '0 12px 28px -10px rgba(101,179,46,0.75)',
                    }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h3 className="montserrat-heading text-xl sm:text-2xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
                <div
                  aria-hidden
                  className="absolute left-0 bottom-0 h-1 transition-all duration-500 group-hover:w-full w-16"
                  style={{ background: 'linear-gradient(90deg, #65b32e, #a5d97a)' }}
                />
              </div>
            ))}


          </div>
        </div>
      </div>
    </section>
  );
}
