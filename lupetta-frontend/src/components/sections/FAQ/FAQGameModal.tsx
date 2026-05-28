import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { TREE_NODES } from './interactiveFaqData';

/* ─────────────────────────────────────────────
   Tipi
───────────────────────────────────────────── */
type Phase = 'boot' | 'register' | 'tree' | 'result';
interface FormState { nome: string; cognome: string; email: string; website: string }

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, filter: 'blur(4px)' }),
  center: { x: 0, opacity: 1, filter: 'blur(0px)' },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, filter: 'blur(4px)' }),
};

/* ─────────────────────────────────────────────
   Stelle fisse animate
───────────────────────────────────────────── */
function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 200 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.3,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 2,
        opacity: Math.random() * 0.6 + 0.2,
      })),
    [],
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [s.opacity * 0.2, s.opacity, s.opacity * 0.2] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Stelle cadenti
───────────────────────────────────────────── */
function ShootingStars() {
  const meteors = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        startX: 20 + Math.random() * 60,
        startY: Math.random() * 30,
        delay: i * 3.5 + Math.random() * 2,
        duration: 1.2 + Math.random() * 0.8,
        angle: 20 + Math.random() * 20,
        length: 80 + Math.random() * 80,
      })),
    [],
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((m) => (
        <motion.div
          key={m.id}
          className="absolute"
          style={{
            left: `${m.startX}%`,
            top: `${m.startY}%`,
            width: m.length,
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(0,200,160,0.9), transparent)',
            transform: `rotate(${m.angle}deg)`,
            transformOrigin: 'left center',
            borderRadius: 4,
          }}
          initial={{ scaleX: 0, opacity: 0, x: 0 }}
          animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0], x: [0, m.length * 1.5] }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            repeat: Infinity,
            repeatDelay: 12 + Math.random() * 8,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Griglia sci-fi
───────────────────────────────────────────── */
function GridOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,200,160,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,160,0.8) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   Nebulosa animata
───────────────────────────────────────────── */
function Nebula() {
  return (
    <>
      <motion.div
        className="absolute -top-64 -left-64 w-xl h-144 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,96,113,0.4), transparent)' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-64 -right-64 w-xl h-144 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,200,160,0.28), transparent)' }}
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,60,180,0.15), transparent)' }}
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-56 h-56 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,80,140,0.18), transparent)' }}
        animate={{ x: [0, -20, 10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  );
}

/* ─────────────────────────────────────────────
   Angoli HUD della card
───────────────────────────────────────────── */
function HUDCorner({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const size = 18;
  const thickness = 2;
  const color = 'rgba(0,200,160,0.6)';
  const style: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    borderColor: color,
    borderStyle: 'solid',
    ...(position === 'tl' && { top: -1, left: -1, borderWidth: `${thickness}px 0 0 ${thickness}px`, borderRadius: '4px 0 0 0' }),
    ...(position === 'tr' && { top: -1, right: -1, borderWidth: `${thickness}px ${thickness}px 0 0`, borderRadius: '0 4px 0 0' }),
    ...(position === 'bl' && { bottom: -1, left: -1, borderWidth: `0 0 ${thickness}px ${thickness}px`, borderRadius: '0 0 0 4px' }),
    ...(position === 'br' && { bottom: -1, right: -1, borderWidth: `0 ${thickness}px ${thickness}px 0`, borderRadius: '0 0 4px 0' }),
  };
  return <div style={style} />;
}

/* ─────────────────────────────────────────────
   Linea di scansione
───────────────────────────────────────────── */
function ScanLine() {
  return (
    <motion.div
      className="absolute inset-x-0 h-16 pointer-events-none z-0"
      style={{
        background: 'linear-gradient(to bottom, transparent, rgba(0,200,160,0.04), transparent)',
      }}
      animate={{ top: ['-5%', '105%'] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
    />
  );
}

/* ─────────────────────────────────────────────
   Fase boot — "avvio sistema"
───────────────────────────────────────────── */
const BOOT_LINES = [
  'Inizializzazione sistema...',
  'Caricamento modulo FAQ...',
  'Connessione al server...',
  'Pronto.',
];

function BootPhase({ onDone }: { onDone: () => void }) {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const add = () => {
      if (i < BOOT_LINES.length) {
        setLines((l) => [...l, BOOT_LINES[i]]);
        i++;
        setTimeout(add, i === BOOT_LINES.length ? 600 : 350);
      } else {
        setTimeout(onDone, 400);
      }
    };
    setTimeout(add, 200);
  }, [onDone]);

  return (
    <motion.div
      key="boot"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-8 font-mono"
    >
      <p className="text-xs text-cyan-400/60 uppercase tracking-widest mb-6">Sistema in avvio</p>
      <div className="space-y-2">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-sm ${i === lines.length - 1 ? 'text-cyan-400' : 'text-slate-400'}`}
          >
            <span className="text-cyan-600 mr-2">&gt;</span>{line}
            {i === lines.length - 1 && (
              <motion.span
                className="inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity }}
              />
            )}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Fase 1: Registrazione
───────────────────────────────────────────── */
function GameRegisterPhase({ onSuccess }: { onSuccess: (nome: string) => void }) {
  const [form, setForm] = useState<FormState>({ nome: '', cognome: '', email: '', website: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // Timestamp anti-bot: catturato una volta al mount.
  const ts = useMemo(() => Date.now(), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL ?? ''}/api/faq-leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _ts: ts }),
      });
      if (res.status === 429) {
        setError('Troppi tentativi. Riprova tra qualche minuto.');
        return;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = (data as { message?: string; errors?: Record<string, string[]> });
        const firstFieldError = msg.errors ? Object.values(msg.errors)[0]?.[0] : undefined;
        setError(firstFieldError ?? msg.message ?? 'Qualcosa e andato storto. Riprova.');
        return;
      }
      onSuccess(form.nome);
    } catch {
      setError('Impossibile raggiungere il server. Controlla la connessione.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/40 transition-all text-sm font-mono';

  return (
    <motion.div
      key="game-register"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -28 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="text-center mb-8">
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 relative"
          style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
          animate={{ boxShadow: ['0 0 20px rgba(0,200,160,0.2)', '0 0 60px rgba(0,200,160,0.6)', '0 0 20px rgba(0,200,160,0.2)'] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-8 h-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.347a3.75 3.75 0 01-1.04 2.575 3.75 3.75 0 01-5.465 0 3.75 3.75 0 01-1.04-2.575l-.347-.347z" />
          </svg>
        </motion.div>
        <p className="text-xs font-mono text-cyan-400/70 uppercase tracking-widest mb-1">// Accesso richiesto</p>
        <h2 className="text-2xl font-bold text-white mb-1">Inizia il tuo percorso</h2>
        <p className="text-slate-500 text-sm">Identifica il tuo profilo per continuare</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">
              Nome <span className="text-cyan-400">*</span>
            </label>
            <input type="text" required autoComplete="given-name"
              value={form.nome} onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
              placeholder="Mario" className={inputCls} />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">
              Cognome <span className="text-cyan-400">*</span>
            </label>
            <input type="text" required autoComplete="family-name"
              value={form.cognome} onChange={(e) => setForm((f) => ({ ...f, cognome: e.target.value }))}
              placeholder="Rossi" className={inputCls} />
          </div>
        </div>
        <div>
          <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-1.5">
            Email <span className="text-cyan-400">*</span>
          </label>
          <input type="email" required autoComplete="email"
            value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="mario.rossi@azienda.it" className={inputCls} />
        </div>

        {/* Honeypot anti-bot: invisibile agli utenti reali. */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
          <label>
            Lascia vuoto questo campo
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
            />
          </label>
        </div>

        {error && (
          <p className="text-sm text-red-400 bg-red-500/10 rounded-xl px-4 py-3 border border-red-500/20 font-mono">{error}</p>
        )}

        <motion.button
          type="submit" disabled={loading}
          whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(0,200,160,0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)', boxShadow: '0 0 32px rgba(0,200,160,0.3)' }}
        >
          <motion.div
            className="absolute inset-0 bg-white/10"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          />
          {loading ? (
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          ) : (
            <span className="relative flex items-center gap-2">
              Avvia il percorso
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          )}
        </motion.button>
        <p className="text-center text-xs text-slate-700 font-mono">// dati non condivisi con terze parti</p>
      </form>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Fase 2: Albero decisionale
───────────────────────────────────────────── */
function GameTreePhase({
  nome, nodeId, path, direction, onChoose, onBack,
}: {
  nome: string; nodeId: string; path: string[]; direction: number;
  onChoose: (next: string) => void; onBack: () => void;
}) {
  const node = TREE_NODES[nodeId];
  if (!node) return null;

  const progress = Math.min((path.length - 1) / 5, 1);
  const step = path.length - 1;

  return (
    <motion.div
      key={nodeId} custom={direction} variants={slideVariants}
      initial="enter" animate="center" exit="exit"
      transition={{ duration: 0.38, ease: 'easeOut' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-7">
        <span className="text-xs font-mono text-slate-500">
          <span className="text-cyan-400">{nome}</span> @ lupetta
        </span>
        <div className="flex items-center gap-3">
          <div className="w-28 h-1 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #006071, #00c8a0)' }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
          <span className="text-xs font-mono text-slate-600 tabular-nums">{step}/5</span>
        </div>
      </div>

      {/* Step label */}
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          className="flex items-center justify-center w-6 h-6 rounded text-xs font-bold font-mono text-black"
          style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
          {step + 1}
        </motion.div>
        <span className="text-xs font-mono text-cyan-400/60 uppercase tracking-widest">Domanda</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>

      {/* Domanda */}
      <motion.h3
        className="text-2xl font-bold text-white leading-snug mb-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {node.question}
      </motion.h3>

      {/* Opzioni */}
      <div className="space-y-2.5">
        {node.options?.map((opt, i) => (
          <motion.button
            key={opt.next}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, ease: 'easeOut' }}
            onClick={() => onChoose(opt.next)}
            whileHover={{ x: 6, backgroundColor: 'rgba(0,200,160,0.06)' }}
            whileTap={{ scale: 0.98 }}
            className="group w-full text-left px-4 py-3.5 rounded-xl border border-white/8 bg-white/4 hover:border-cyan-500/35 transition-all duration-200 flex items-center gap-3"
            style={{ borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono shrink-0 text-slate-500 group-hover:text-black transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', transition: 'background 0.2s' }}
            >
              <motion.span whileHover={{ background: 'linear-gradient(135deg,#006071,#00c8a0)' }}>
                {String.fromCharCode(65 + i)}
              </motion.span>
            </span>
            <span className="text-slate-300 group-hover:text-white font-medium text-sm transition-colors leading-snug flex-1">
              {opt.label}
            </span>
            <motion.span
              className="text-slate-600 group-hover:text-cyan-400 transition-colors"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.span>
          </motion.button>
        ))}
      </div>

      {nodeId !== 'root' && (
        <motion.button
          onClick={onBack}
          className="mt-6 flex items-center gap-1.5 text-xs font-mono text-slate-600 hover:text-slate-300 transition-colors"
          whileHover={{ x: -3 }}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          torna_indietro()
        </motion.button>
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Fase 3: Risultato
───────────────────────────────────────────── */
function GameResultPhase({ nodeId, onRestart }: { nodeId: string; onRestart: () => void }) {
  const node = TREE_NODES[nodeId];
  if (!node) return null;

  const particles = useMemo(
    () => Array.from({ length: 18 }, (_, i) => ({
      id: i,
      angle: (i / 18) * 360,
      distance: 40 + Math.random() * 40,
      duration: 0.6 + Math.random() * 0.4,
    })),
    [],
  );

  return (
    <motion.div
      key="game-result"
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.48, ease: 'easeOut' }}
    >
      <div className="text-center mb-7">
        <div className="relative inline-block mb-4">
          {/* Particelle di esplosione */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full"
              style={{ background: 'rgba(0,200,160,0.8)' }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: Math.cos((p.angle * Math.PI) / 180) * p.distance,
                y: Math.sin((p.angle * Math.PI) / 180) * p.distance,
                opacity: 0,
                scale: 0,
              }}
              transition={{ duration: p.duration, ease: 'easeOut', delay: 0.1 }}
            />
          ))}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full"
            style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
            animate={{
              boxShadow: [
                '0 0 30px rgba(0,200,160,0.3)',
                '0 0 70px rgba(0,200,160,0.7)',
                '0 0 30px rgba(0,200,160,0.3)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <motion.svg
              className="w-8 h-8 text-white"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </motion.svg>
          </motion.div>
        </div>
        <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">// risposta_trovata</p>
        <h3 className="text-2xl font-bold text-white leading-snug">{node.question}</h3>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/4 p-5 mb-6 relative overflow-hidden" style={{ borderColor: 'rgba(0,200,160,0.15)' }}>
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,160,0.4), transparent)' }} />
        <p className="text-slate-300 text-sm leading-relaxed">{node.answer}</p>
      </div>

      {node.link && (
        <Link
          to={node.link.to}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white text-sm mb-3 relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
          style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)', boxShadow: '0 0 36px rgba(0,200,160,0.35)' }}
        >
          {node.link.label}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}

      <motion.button
        onClick={onRestart}
        whileHover={{ x: -3 }}
        className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl border border-white/8 bg-white/4 text-xs font-mono text-slate-500 hover:text-slate-300 hover:border-white/15 transition-all"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        riavvia_percorso()
      </motion.button>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Modale principale
───────────────────────────────────────────── */
export default function FAQGameModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [phase, setPhase] = useState<Phase>('boot');
  const [nome, setNome] = useState('');
  const [nodeStack, setNodeStack] = useState<string[]>(['root']);
  const [direction, setDirection] = useState(1);

  const currentNodeId = nodeStack[nodeStack.length - 1];
  const currentNode = TREE_NODES[currentNodeId];
  const isLeaf = currentNode && !currentNode.options;

  /* Reset quando si riapre */
  useEffect(() => {
    if (isOpen) {
      setPhase('boot');
      setNome('');
      setNodeStack(['root']);
      setDirection(1);
    }
  }, [isOpen]);

  /* Blocca scroll body */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* ESC per chiudere */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleBootDone = useCallback(() => setPhase('register'), []);

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

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-9999 overflow-hidden flex flex-col"
          style={{ background: '#020913' }}
        >
          {/* Livelli di sfondo fissi */}
          <div className="absolute inset-0 pointer-events-none">
            <GridOverlay />
            <StarField />
            <ShootingStars />
            <Nebula />
          </div>

          {/* HUD top bar */}
          <div className="relative z-10 flex items-center justify-between px-4 sm:px-5 py-3 sm:py-5 shrink-0">
            {/* Brand */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
                animate={{ boxShadow: ['0 0 8px rgba(0,200,160,0.3)', '0 0 20px rgba(0,200,160,0.6)', '0 0 8px rgba(0,200,160,0.3)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.347a3.75 3.75 0 01-1.04 2.575 3.75 3.75 0 01-5.465 0 3.75 3.75 0 01-1.04-2.575l-.347-.347z" />
                </svg>
              </motion.div>
              <div>
                <p className="text-xs font-mono text-slate-500 leading-none">lupetta</p>
                <p className="text-xs font-mono text-cyan-400/70 leading-none">.percorso_guidato</p>
              </div>
            </motion.div>

            {/* Close */}
            <motion.button
              onClick={onClose}
              aria-label="Chiudi"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1, borderColor: 'rgba(0,200,160,0.5)' }}
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-500 hover:text-white transition-all"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>

          {/* Area scrollabile — solo la card, non la pagina */}
          <div
            className="relative z-10 flex-1 overflow-y-auto px-4 pb-6"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
          >
            <div className="flex justify-center min-h-full py-2 sm:py-6">
          {/* Click fuori chiude (wrapper fantasma) */}

          {/* Card quiz */}
          <motion.div
            initial={{ scale: 0.84, opacity: 0, y: 32 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.84, opacity: 0, y: 32 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="relative z-10 w-full max-w-md"
          >
            {/* Bagliore esterno */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(0,200,160,0.1), transparent 70%)', transform: 'scale(1.15)' }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(5, 12, 28, 0.92)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 0 0 1px rgba(0,200,160,0.05), 0 40px 80px rgba(0,0,0,0.9)',
                backdropFilter: 'blur(32px)',
              }}
            >
              {/* Angoli HUD */}
              <HUDCorner position="tl" />
              <HUDCorner position="tr" />
              <HUDCorner position="bl" />
              <HUDCorner position="br" />

              {/* Scan line */}
              <ScanLine />

              {/* Bordo superiore luminoso */}
              <motion.div
                className="h-px w-full"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,160,0.6), transparent)' }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="p-5 sm:p-8 lg:p-10 relative z-10">
                <AnimatePresence mode="wait" custom={direction}>
                  {phase === 'boot' && (
                    <BootPhase key="boot" onDone={handleBootDone} />
                  )}
                  {phase === 'register' && (
                    <GameRegisterPhase key="game-register" onSuccess={handleRegisterSuccess} />
                  )}
                  {phase === 'tree' && !isLeaf && (
                    <GameTreePhase
                      key={currentNodeId} nome={nome} nodeId={currentNodeId}
                      path={nodeStack} direction={direction}
                      onChoose={handleChoose} onBack={handleBack}
                    />
                  )}
                  {(phase === 'result' || (phase === 'tree' && isLeaf)) && (
                    <GameResultPhase key={currentNodeId + '_result'} nodeId={currentNodeId} onRestart={handleRestart} />
                  )}
                </AnimatePresence>
              </div>

              {/* Bordo inferiore */}
              <div
                className="h-px w-full"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,160,0.25), transparent)' }}
              />
            </div>
          </motion.div>
            </div>{/* fine flex justify-center */}
          </div>{/* fine area scroll */}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}