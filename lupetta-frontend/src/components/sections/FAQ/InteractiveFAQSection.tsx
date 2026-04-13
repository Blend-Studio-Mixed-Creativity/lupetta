import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { TREE_NODES } from './interactiveFaqData';

/* ─────────────────────────────────────────────
   Tipi
───────────────────────────────────────────── */
type Phase = 'register' | 'tree' | 'result';

interface FormState {
  nome: string;
  cognome: string;
  email: string;
}

/* ─────────────────────────────────────────────
   Animazioni
───────────────────────────────────────────── */
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

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

function IconCheck() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Breadcrumb
───────────────────────────────────────────── */
function Breadcrumb({ path }: { path: string[] }) {
  const dots = Math.min(path.length, 6);
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: dots }).map((_, i) => (
        <span
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i === dots - 1 ? 'w-5 h-2 bg-primary' : 'w-2 h-2 bg-primary/40'
          }`}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Fase 1: Registrazione
───────────────────────────────────────────── */
function RegisterPhase({ onSuccess }: { onSuccess: (nome: string) => void }) {
  const [form, setForm] = useState<FormState>({ nome: '', cognome: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL ?? ''}/api/faq-leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError((data as { message?: string })?.message ?? 'Qualcosa è andato storto. Riprova.');
        return;
      }
      onSuccess(form.nome);
    } catch {
      setError('Impossibile raggiungere il server. Controlla la connessione.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm';

  return (
    <motion.div
      key="register"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Header card */}
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
        <h3 className="text-xl font-bold leading-snug">
          Trova la risposta giusta<br />
          <span className="text-white/80 font-normal">in pochi click</span>
        </h3>
        <p className="text-sm text-white/70 mt-2 leading-relaxed">
          Inserisci i tuoi dati per iniziare: risponderemo alle tue domande passo dopo passo.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Nome <span className="text-red-400">*</span>
            </label>
            <input
              type="text" required autoComplete="given-name"
              value={form.nome} onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
              placeholder="Mario" className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Cognome <span className="text-red-400">*</span>
            </label>
            <input
              type="text" required autoComplete="family-name"
              value={form.cognome} onChange={(e) => setForm((f) => ({ ...f, cognome: e.target.value }))}
              placeholder="Rossi" className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email" required autoComplete="email"
            value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="mario.rossi@azienda.it" className={inputClass}
          />
        </div>

        {error && (
          <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3 border border-red-100">{error}</p>
        )}

        <button
          type="submit" disabled={loading}
          className="group w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
        >
          {loading ? (
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          ) : (
            <>Inizia il percorso <IconArrow /></>
          )}
        </button>
        <p className="text-center text-xs text-slate-400">
          I tuoi dati non saranno condivisi con terze parti.
        </p>
      </form>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Fase 2: Albero decisionale
───────────────────────────────────────────── */
function TreePhase({
  nome, nodeId, path, direction, onChoose, onBack,
}: {
  nome: string; nodeId: string; path: string[]; direction: number;
  onChoose: (next: string) => void; onBack: () => void;
}) {
  const node = TREE_NODES[nodeId];
  if (!node) return null;

  return (
    <motion.div
      key={nodeId} custom={direction} variants={slideVariants}
      initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-sm text-slate-400 font-medium">
          Ciao, <span className="text-primary font-semibold">{nome}</span>!
        </span>
        <Breadcrumb path={path} />
      </div>

      <div className="mb-6">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Domanda</p>
        <h3 className="text-xl text-slate-900 tracking-tight leading-snug">{node.question}</h3>
      </div>

      <div className="space-y-3">
        {node.options?.map((opt) => (
          <button
            key={opt.next} onClick={() => onChoose(opt.next)}
            className="group w-full text-left px-5 py-4 rounded-xl border border-slate-200 bg-white hover:border-primary hover:bg-primary/4 transition-all duration-200 flex items-center justify-between gap-3 hover:shadow-md"
          >
            <span className="text-slate-700 group-hover:text-primary font-medium text-sm leading-snug transition-colors">
              {opt.label}
            </span>
            <span className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-primary flex items-center justify-center shrink-0 transition-colors duration-200">
              <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {nodeId !== 'root' && (
        <button onClick={onBack} className="group mt-5 flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors">
          <IconArrow left /> Torna indietro
        </button>
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Fase 3: Risultato
───────────────────────────────────────────── */
function ResultPhase({ nodeId, onRestart }: { nodeId: string; onRestart: () => void }) {
  const node = TREE_NODES[nodeId];
  if (!node) return null;

  return (
    <motion.div
      key="result" initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-2 mb-5">
        <span className="w-7 h-7 rounded-lg bg-accent text-white flex items-center justify-center">
          <IconCheck />
        </span>
        <span className="text-xs font-semibold text-accent uppercase tracking-widest">Risposta trovata</span>
      </div>

      <h3 className="text-xl text-slate-900 tracking-tight leading-snug mb-4">{node.question}</h3>

      <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5 mb-6">
        <p className="text-slate-600 text-sm leading-relaxed">{node.answer}</p>
      </div>

      {node.link && (
        <Link
          to={node.link.to}
          className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl mb-4"
          style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
        >
          {node.link.label} <IconArrow />
        </Link>
      )}

      <button
        onClick={onRestart}
        className="group w-full flex items-center justify-center gap-1.5 py-3 rounded-xl border border-slate-200 text-sm text-slate-500 hover:text-slate-700 hover:border-slate-300 transition-all"
      >
        <IconArrow left /> Ricomincia il percorso
      </button>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Componente principale
───────────────────────────────────────────── */
export default function InteractiveFAQSection() {
  const [phase, setPhase] = useState<Phase>('register');
  const [nome, setNome] = useState('');
  const [nodeStack, setNodeStack] = useState<string[]>(['root']);
  const [direction, setDirection] = useState(1);

  const currentNodeId = nodeStack[nodeStack.length - 1];
  const currentNode = TREE_NODES[currentNodeId];
  const isLeaf = currentNode && !currentNode.options;

  const handleRegisterSuccess = (n: string) => {
    setNome(n);
    setNodeStack(['root']);
    setPhase('tree');
  };

  const handleChoose = (nextId: string) => {
    const next = TREE_NODES[nextId];
    if (!next) return;
    setDirection(1);
    setNodeStack((s) => [...s, nextId]);
    if (!next.options) setPhase('result');
  };

  const handleBack = () => {
    if (nodeStack.length <= 1) return;
    setDirection(-1);
    setNodeStack((s) => s.slice(0, -1));
    if (phase === 'result') setPhase('tree');
  };

  const handleRestart = () => {
    setDirection(-1);
    setNodeStack(['root']);
    setPhase('register');
    setNome('');
  };

  /* Icone colonna destra */
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
      desc: 'Ricevi informazioni precise e un link alla sezione pi\u00f9 utile del sito.',
    },
  ];

  return (
    <section id="percorso-interattivo" className="py-20 sm:py-28 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intestazione */}
        <div className="text-center mb-14">
          <span className="inline-block py-2 px-5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
            Percorso interattivo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            Non sai da dove partire?
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Rispondi a poche domande e ti portiamo direttamente alla soluzione pi\u00f9 adatta alla tua situazione.
          </p>
        </div>

        {/* Layout a due colonne */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Card interattiva */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 p-8 sm:p-10 min-h-115 relative overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-5 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #006071, transparent)' }}
            />
            <AnimatePresence mode="wait" custom={direction}>
              {phase === 'register' && (
                <RegisterPhase key="register" onSuccess={handleRegisterSuccess} />
              )}
              {phase === 'tree' && !isLeaf && (
                <TreePhase
                  key={currentNodeId} nome={nome} nodeId={currentNodeId}
                  path={nodeStack} direction={direction}
                  onChoose={handleChoose} onBack={handleBack}
                />
              )}
              {(phase === 'result' || (phase === 'tree' && isLeaf)) && (
                <ResultPhase key={currentNodeId + '_result'} nodeId={currentNodeId} onRestart={handleRestart} />
              )}
            </AnimatePresence>
          </div>

          {/* Colonna info */}
          <div className="space-y-6 lg:pt-4">
            <div>
              <h3 className="text-2xl text-slate-900 tracking-tight mb-3">
                Come funziona il percorso guidato
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                In pochi passaggi ti guidiamo fino alla risposta pi\u00f9 rilevante per la tua situazione, senza dover scorrere pagine di documenti.
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
  );
}
