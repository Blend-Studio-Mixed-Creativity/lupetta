import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import FAQGameModal from './FAQGameModal';

/* ─────────────────────────────────────────────
   Icone
───────────────────────────────────────────── */
function IconArrow({ left = false }: { left?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 transition-transform duration-200 ${left ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={left ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Componente principale
───────────────────────────────────────────── */
export default function InteractiveFAQSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get('openGame') === '1') {
      setModalOpen(true);
      navigate('/faq', { replace: true });
    }
  }, [searchParams, navigate]);

  const steps: { icon: React.ReactNode; title: string; desc: string }[] = [
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Inserisci i tuoi dati',
      desc: 'Bastano nome, cognome e email. Niente registrazioni complicate.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: 'Scegli il tuo percorso',
      desc: 'Ogni domanda ti avvicina alla risposta giusta. Puoi tornare indietro in qualsiasi momento.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.347a3.75 3.75 0 01-1.04 2.575 3.75 3.75 0 01-5.465 0 3.75 3.75 0 01-1.04-2.575l-.347-.347z" />
        </svg>
      ),
      title: 'Ottieni la risposta',
      desc: 'Ricevi informazioni precise e un link alla sezione più utile del sito.',
    },
  ];

  return (
    <>
      <section id="percorso-interattivo" className="py-20 sm:py-28 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intestazione */}
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block py-1.5 sm:py-2 px-4 sm:px-5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-6">
              Percorso interattivo
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Non sai da dove partire?
            </h2>
            <p className="text-base sm:text-lg text-slate-500 mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Rispondi a poche domande e ti portiamo direttamente alla soluzione più adatta alla tua situazione.
            </p>
          </div>

          {/* Layout a due colonne */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Card lancio */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 p-5 sm:p-8 lg:p-10 min-h-[460px] relative overflow-hidden flex flex-col">
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-5 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #006071, transparent)' }}
              />

              {/* Header gradient */}
              <div
                className="rounded-2xl p-6 mb-6 text-white"
                style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.347a3.75 3.75 0 01-1.04 2.575 3.75 3.75 0 01-5.465 0 3.75 3.75 0 01-1.04-2.575l-.347-.347z" />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/70">Percorso guidato</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-snug">
                  Trova la risposta giusta<br />
                  <span className="text-white/80 font-normal">in pochi click</span>
                </h3>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  Inserisci i tuoi dati per iniziare: risponderemo alle tue domande passo dopo passo.
                </p>
              </div>

              {/* Preview step */}
              <div className="space-y-3 mb-8 flex-1">
                {['Inserisci i tuoi dati', 'Rispondi alle domande guidate', 'Ricevi la risposta su misura'].map((label, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-500">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
                    >
                      {i + 1}
                    </span>
                    {label}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                onClick={() => setModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl"
                style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
              >
                Inizia il percorso <IconArrow />
              </motion.button>
              <p className="text-center text-xs text-slate-400 mt-3">
                I tuoi dati non saranno condivisi con terze parti.
              </p>
            </div>

            {/* Colonna info */}
            <div className="space-y-6 lg:pt-4">
              <div>
                <h3 className="text-2xl text-slate-900 tracking-tight mb-3">
                  Come funziona il percorso guidato
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  In pochi passaggi ti guidiamo fino alla risposta più rilevante per la tua situazione, senza dover scorrere pagine di documenti.
                </p>
              </div>

              <div className="space-y-4">
                {steps.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm mb-1">{item.title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-primary/4 border border-primary/15">
                <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">
                  Hai bisogno di parlare con qualcuno?
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Il nostro team è disponibile per una consulenza gratuita.
                </p>
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Contattaci <IconArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQGameModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}