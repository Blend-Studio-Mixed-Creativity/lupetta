import { useEffect, useRef, useState, useCallback } from 'react';

const FEATURES = [
  'Piano di alimentazione personalizzato',
  'Funzionamento adattivo in base alla crescita dell\u2019animale',
  'Meno sprechi grazie al controllo dei parametri in tempo reale',
];

const PARAMS = [
  {
    label: 'Temperatura',
    sub: 'di erogazione',
    iconPath:
      'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z',
  },
  {
    label: 'Quantit\u00e0 erogata',
    sub: 'a pasto',
    iconPath:
      'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
  },
  {
    label: 'Intervallo',
    sub: 'tra i pasti',
    iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

/* -- Main component -- */
export default function FeatureHighlight() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const observe = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = observe();
    return cleanup;
  }, [observe]);

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-28 overflow-hidden">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 text-center">

        {/* Eyebrow */}
        <span
          className="text-[#006071] font-bold text-sm tracking-widest uppercase block mb-4"
          style={{
            opacity: visible ? 1 : 0,
            letterSpacing: visible ? '0.32em' : '0.05em',
            transition: 'opacity 0.6s ease 0.1s, letter-spacing 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        >
          Lorem Feature
        </span>

        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight mb-6 sm:mb-8 overflow-hidden text-balance"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            filter: visible ? 'blur(0)' : 'blur(6px)',
            transition:
              'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, filter 0.7s ease 0.2s',
          }}
        >
          Sistema <br />
          <span className="montserrat-italic text-[#65b32e] inline-block leading-[1.4] py-2">
            Smart Feeding System®
          </span>
        </h2>

        {/* Text block */}
        <div
          className="space-y-6 max-w-5xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
          }}
        >
          {/* Lead paragraph */}
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-800 leading-relaxed font-medium">
            Il progetto <span className="text-[#006071] font-semibold">Lupetta</span> nasce per la ricerca di una metodologia di somministrazione innovativa<br className="hidden md:inline" /> che garantisca il{' '}
            <span className="text-[#65b32e] font-semibold">benessere</span> e un{' '}
            <span className="text-[#65b32e] font-semibold">costante accrescimento</span> del vitello.
          </p>

          {/* Quote-style highlight (centered, no left border) */}
          <div className="relative py-2">
            <span
              aria-hidden
              className="block mx-auto w-12 h-[3px] rounded-full mb-4"
              style={{ background: 'linear-gradient(90deg, #65b32e, #006071)' }}
            />
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              La tecnologia <span className="font-semibold text-[#006071]">Smart di Lupetta</span>,{' '}
              <span className="font-semibold text-slate-800">brevettata e unica nel campo zootecnico</span>,<br className="hidden md:inline" /> permette di impostare un piano di alimentazione che, in base al comportamento alimentare del vitello,<br className="hidden md:inline" /> si adatta in modo automatico durante tutte le fasi critiche dello svezzamento.
            </p>
          </div>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Lupetta guida l&rsquo;operatore sulla <span className="font-semibold text-slate-800">ideale curva alimentare</span> dell&rsquo;animale:<br className="hidden md:inline" /> questo{' '}
            <span className="font-semibold text-[#65b32e]">sistema adattativo</span> riduce gli sprechi e garantisce efficacia ed efficienza di somministrazione durante tutto l&rsquo;arco della giornata.
          </p>
        </div>

        {/* -- BIG Parameters card -- */}
        <div
          className="relative rounded-3xl mt-10 sm:mt-14 mb-10 sm:mb-14 overflow-hidden mx-auto w-full text-left"
          style={{
            background:
              'linear-gradient(140deg, rgba(0,96,113,0.05) 0%, rgba(101,179,46,0.06) 100%), #ffffff',
            border: '1px solid rgba(0,96,113,0.12)',
            boxShadow:
              '0 30px 70px -25px rgba(0,96,113,0.30), 0 4px 14px rgba(15,23,42,0.05)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition:
              'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s',
          }}
        >
          {/* decorative orbs */}
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(101,179,46,0.20) 0%, transparent 70%)' }}
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,168,192,0.16) 0%, transparent 70%)' }}
          />

          <div className="relative p-6 sm:p-10 lg:p-14">
            <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
              <span
                className="w-2 h-8 rounded-full"
                style={{ background: 'linear-gradient(180deg, #65b32e, #006071)' }}
              />
              <p className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#006071]">
                Parametri impostabili
              </p>
              <span
                className="w-2 h-8 rounded-full"
                style={{ background: 'linear-gradient(180deg, #006071, #65b32e)' }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {PARAMS.map((p, i) => (
                <div
                  key={p.label}
                  className="group relative rounded-2xl bg-white border border-slate-200/80 px-5 py-8 sm:py-10 flex flex-col items-center text-center cursor-default transition-all duration-500 hover:-translate-y-2 hover:border-[#65b32e]/60 hover:shadow-[0_20px_50px_-15px_rgba(101,179,46,0.55)]"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                    transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${0.75 + i * 0.15}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${0.75 + i * 0.15}s, border-color 0.35s ease, box-shadow 0.35s ease, translate 0.35s ease`,
                  }}
                >
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: 'linear-gradient(135deg, #65b32e, #006071)',
                      boxShadow: '0 14px 30px -8px rgba(101,179,46,0.55)',
                    }}
                  >
                    <svg
                      className="w-9 h-9 sm:w-10 sm:h-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.6}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={p.iconPath} />
                    </svg>
                  </div>
                  <span className="montserrat-heading text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                    {p.label}
                  </span>
                  <span className="text-sm sm:text-base text-slate-500 mt-1">{p.sub}</span>
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-center mt-8 max-w-2xl mx-auto">
              <span className="font-semibold text-[#006071]">Tutti i parametri</span> sono registrati dalla macchina a scopo di verifica della qualità di lavoro dell&rsquo;operatore.
            </p>
          </div>
        </div>

        {/* Closing paragraph */}
        <p
          className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-5xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.85s, transform 0.7s ease 0.85s',
          }}
        >
          <span className="font-semibold text-slate-800">Ritardi ai pasti</span>,{' '}
          <span className="font-semibold text-slate-800">velocità di suzione</span> e{' '}
          <span className="font-semibold text-slate-800">avanzi giornalieri</span><br className="hidden md:inline" /> sono i principali fattori che il dispositivo analizza per personalizzare il piano alimentare.
        </p>

        {/* Features check list */}
        <ul className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full mx-auto">
          {FEATURES.map((item, i) => (
            <li
              key={i}
              className="flex flex-col items-center text-center gap-3 px-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${1 + i * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${1 + i * 0.1}s`,
              }}
            >
              <span
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #65b32e, #4fa028)',
                  boxShadow: '0 8px 20px -6px rgba(101,179,46,0.5)',
                }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-slate-700 text-lg sm:text-xl font-medium leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
