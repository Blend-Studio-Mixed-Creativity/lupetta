import { useScrollReveal } from '../../../hooks/useScrollReveal';
import vitelloImg from '../../../assets/images/vitello-lupetta3.webp';

const PRINCIPLES = [
  { label: 'Frequenti', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
  {
    label: 'Moderati',
    icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25',
  },
  {
    label: 'Caldi',
    icon: 'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z',
  },
];

export default function BasisSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 0.9s ease 0.2s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s',
            }}
          >
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] -z-10"
              style={{ background: 'linear-gradient(135deg, rgba(101,179,46,0.18), rgba(0,96,113,0.15))' }}
            />
            <img
              src={vitelloImg}
              alt="Vitello allattato dalla madre"
              className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 0.9s ease 0.35s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s',
            }}
          >
            <span className="text-[#006071] font-bold text-sm tracking-[0.32em] uppercase block mb-5">
              Le basi del progetto
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mb-8 leading-tight text-balance">
              Nelle prime fasi di vita, ogni animale ha bisogno di pasti{' '}
              <span className="montserrat-italic text-[#65b32e]">frequenti e moderati</span>.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Da questa semplice osservazione del comportamento naturale del vitello nasce Lupetta: un sistema pensato per riprodurre, con la precisione della tecnologia, quello che la natura fa da sempre.
            </p>

            {/* Three key principles */}
            <div className="grid grid-cols-3 gap-3">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.label}
                  className="rounded-2xl bg-slate-50 border border-slate-100 p-4 flex flex-col items-center text-center"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #65b32e, #006071)',
                      boxShadow: '0 10px 22px -8px rgba(101,179,46,0.5)',
                    }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-slate-700">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
