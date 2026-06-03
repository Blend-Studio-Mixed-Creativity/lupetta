import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { QUIZ_STEPS, RESULT_PROFILES } from './interactiveFaqData';

/* ─────────────────────────────────────────────
   Tipi
   ───────────────────────────────────────────── */
type Phase = 'boot' | 'step0' | 'quiz' | 'result' | 'success';

interface Step0Data {
  nomeCognome: string;
  azienda: string;
  telefono: string;
  email: string;
  provincia: string;
  numVitelli: string;
  privacyConsent: boolean;
}

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
      Array.from({ length: 150 }, (_, i) => ({
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
      Array.from({ length: 4 }, (_, i) => ({
        id: i,
        startX: 20 + Math.random() * 60,
        startY: Math.random() * 30,
        delay: i * 4.5 + Math.random() * 3,
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
            repeatDelay: 15 + Math.random() * 10,
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
      className="absolute inset-0 pointer-events-none opacity-[0.03]"
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
        style={{ background: 'radial-gradient(circle, rgba(0,96,113,0.35), transparent)' }}
        animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-64 -right-64 w-xl h-144 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,200,160,0.22), transparent)' }}
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  );
}

/* ─────────────────────────────────────────────
   Angoli HUD della card
   ───────────────────────────────────────────── */
function HUDCorner({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const size = 16;
  const thickness = 2;
  const color = 'rgba(0,200,160,0.5)';
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
      className="absolute inset-x-0 h-12 pointer-events-none z-0"
      style={{
        background: 'linear-gradient(to bottom, transparent, rgba(0,200,160,0.03), transparent)',
      }}
      animate={{ top: ['-5%', '105%'] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
    />
  );
}

/* ─────────────────────────────────────────────
   Fase boot — "avvio sistema"
   ───────────────────────────────────────────── */
const BOOT_LINES = [
  'Inizializzazione sistema...',
  'Caricamento modulo stalla...',
  'Connessione al server Lupetta...',
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
        setTimeout(add, i === BOOT_LINES.length ? 500 : 300);
      } else {
        setTimeout(onDone, 300);
      }
    };
    setTimeout(add, 100);
  }, [onDone]);

  return (
    <motion.div
      key="boot"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-8 font-mono"
    >
      <p className="text-xs text-cyan-400/60 uppercase tracking-widest mb-6">Inizializzazione Percorso</p>
      <div className="space-y-2">
        {lines.map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-sm ${idx === lines.length - 1 ? 'text-cyan-400' : 'text-slate-400'}`}
          >
            <span className="text-cyan-600 mr-2">&gt;</span>{line}
            {idx === lines.length - 1 && (
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
   Modale principale
   ───────────────────────────────────────────── */
export default function FAQGameModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>('boot');

  // Step 0 Data
  const [step0Data, setStep0Data] = useState<Step0Data>({
    nomeCognome: '',
    azienda: '',
    telefono: '',
    email: '',
    provincia: '',
    numVitelli: '',
    privacyConsent: false,
  });

  // Quiz States
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [direction, setDirection] = useState(1);

  // Submit / Final States
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const ts = useMemo(() => Date.now(), []);

  /* Reset quando si riapre */
  useEffect(() => {
    if (isOpen) {
      setPhase('boot');
      setStep0Data({
        nomeCognome: '',
        azienda: '',
        telefono: '',
        email: '',
        provincia: '',
        numVitelli: '',
        privacyConsent: false,
      });
      setCurrentStepIndex(0);
      setSelectedAnswers({});
      setDirection(1);
      setSubmitError('');
      setLoading(false);
    }
  }, [isOpen]);

  /* Blocca scroll body */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* ESC per chiudere */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleBootDone = useCallback(() => setPhase('step0'), []);

  // Step 0 Form Submit
  const handleStep0Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!step0Data.privacyConsent) {
      setSubmitError('È necessario prestare il consenso per procedere.');
      return;
    }
    setSubmitError('');
    setDirection(1);
    setPhase('quiz');
  };

  const handleQuizOptionClick = (stepId: number, val: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [stepId]: val }));
  };

  const handleQuizNext = () => {
    const currentStep = QUIZ_STEPS[currentStepIndex];
    if (!selectedAnswers[currentStep.id]) return;

    if (currentStepIndex < QUIZ_STEPS.length - 1) {
      setDirection(1);
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setDirection(1);
      setPhase('result');
    }
  };

  const handleQuizBack = () => {
    if (currentStepIndex > 0) {
      setDirection(-1);
      setCurrentStepIndex((prev) => prev - 1);
    } else {
      setDirection(-1);
      setPhase('step0');
    }
  };

  // Score calculations
  const { profile, recommendedModels } = useMemo(() => {
    if (phase !== 'result' && phase !== 'success') return { profile: null, recommendedModels: '' };

    const areaScores: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    QUIZ_STEPS.forEach((step) => {
      const val = selectedAnswers[step.id];
      const opt = step.options.find((o) => o.value === val);
      if (opt?.scores) {
        Object.entries(opt.scores).forEach(([areaIdStr, increment]) => {
          const areaId = Number(areaIdStr);
          areaScores[areaId] += increment;
        });
      }
    });

    let maxScore = -1;
    let maxAreaId = 6;
    let isTie = false;

    Object.entries(areaScores).forEach(([areaIdStr, score]) => {
      const areaId = Number(areaIdStr);
      if (score > maxScore) {
        maxScore = score;
        maxAreaId = areaId;
        isTie = false;
      } else if (score === maxScore) {
        isTie = true;
      }
    });

    // Rule: if Step 1 is G ("Non ho un solo problema: vorrei capire da dove partire"), force profile 6
    // If low max score or there's a tie, fall back to profile 6
    let profileId = maxAreaId;
    if (selectedAnswers[1] === 'G' || isTie || maxScore < 4) {
      profileId = 6;
    }

    const calculatedProfile = RESULT_PROFILES[profileId];

    // Model recommendation text logic
    const numVitelliVal = selectedAnswers[3];
    const spacesVal = selectedAnswers[9];

    let modelRec = '';
    if (numVitelliVal === 'A') {
      modelRec = 'Lupetta Mini Wifi, se gestisci un numero contenuto di vitelli e cerchi una soluzione semplice e funzionale.';
    } else if (numVitelliVal === 'B') {
      modelRec = 'Lupetta Mini Wifi o Lupetta Maxi Tech, da valutare tra Mini Wifi e Maxi Tech in base alle tue specifiche esigenze di automazione o controllo.';
    } else if (numVitelliVal === 'C' || numVitelliVal === 'D') {
      modelRec = 'Lupetta Maxi Tech, ideale per una stalla più strutturata o per numeri di vitelli medio-alti, dove il monitoraggio e la programmazione fanno la differenza.';
    } else {
      modelRec = 'Configurazione da valutare insieme ad un operatore Lupetta in base alle variazioni del carico di lavoro e alla flessibilità richiesta.';
    }

    if (spacesVal === 'B' || spacesVal === 'C' || spacesVal === 'D') {
      modelRec += '\n\nCompleta il tuo ambiente di crescita con Lupetta Smart Home: la soluzione complementare proposta da Tredì Italia per migliorare gli spazi, il comfort e l\'efficienza nella gestione quotidiana.';
    }

    return { profile: calculatedProfile, recommendedModels: modelRec };
  }, [phase, selectedAnswers]);

  // Final Submit to Backend
  const handleFinalSubmit = async () => {
    if (!profile) return;
    setLoading(true);
    setSubmitError('');

    const nameParts = step0Data.nomeCognome.trim().split(/\s+/);
    const nome = nameParts[0] || '';
    const cognome = nameParts.slice(1).join(' ') || 'Lead';

    // Format quiz response payload
    const rispostePayload: Record<string, string> = {};
    QUIZ_STEPS.forEach((step) => {
      const val = selectedAnswers[step.id];
      const opt = step.options.find((o) => o.value === val);
      rispostePayload[step.question] = opt ? `${opt.value} - ${opt.label}` : '';
    });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL ?? ''}/api/faq-leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          nome,
          cognome,
          email: step0Data.email,
          azienda: step0Data.azienda,
          telefono: step0Data.telefono,
          provincia: step0Data.provincia,
          num_vitelli: step0Data.numVitelli,
          risposte: rispostePayload,
          profilo_risultato: profile.subtitle,
          modello_consigliato: recommendedModels,
          website: '', // honeypot
          _ts: ts,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        const msg = errData.message || 'Errore durante l\'invio. Riprova più tardi.';
        setSubmitError(msg);
        return;
      }

      setPhase('success');
    } catch (err) {
      setSubmitError('Impossibile stabilire una connessione con il server. Controlla la tua rete.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    'w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/40 transition-all text-sm font-mono';

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
          <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 shrink-0 border-b border-white/5 bg-slate-950/20 backdrop-blur-md">
            {/* Brand */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
                animate={{ boxShadow: ['0 0 8px rgba(0,200,160,0.3)', '0 0 20px rgba(0,200,160,0.6)', '0 0 8px rgba(0,200,160,0.3)'] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.347.347a3.75 3.75 0 01-1.04 2.575 3.75 3.75 0 01-5.465 0 3.75 3.75 0 01-1.04-2.575l-.347-.347z" />
                </svg>
              </motion.div>
              <div>
                <p className="text-xs font-mono text-slate-400 font-bold leading-none tracking-wider uppercase">Lupetta</p>
                <p className="text-xs font-mono text-cyan-400/80 leading-none mt-1">.percorso_guidato</p>
              </div>
            </motion.div>

            {/* Titolo centrale dell'esperienza */}
            <div className="hidden md:block">
              <span className="text-sm font-semibold text-slate-300 font-sans tracking-wide">
                Scopri come Lupetta può aiutare la tua stalla
              </span>
            </div>

            {/* Close */}
            <motion.button
              onClick={onClose}
              aria-label="Chiudi"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(0,200,160,0.5)' }}
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>

          {/* Area scrollabile */}
          <div
            className="relative z-10 flex-1 overflow-y-auto px-4 py-6 md:py-10"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <div className="flex justify-center min-h-full items-center">
              {/* Card Quiz */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-xl"
              >
                {/* Bagliore esterno */}
                <motion.div
                  className="absolute inset-0 rounded-3xl blur-3xl pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse, rgba(0,200,160,0.08), transparent 70%)', transform: 'scale(1.1)' }}
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    background: 'rgba(5, 12, 28, 0.93)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 0 0 1px rgba(0,200,160,0.04), 0 35px 70px rgba(0,0,0,0.85)',
                    backdropFilter: 'blur(30px)',
                  }}
                >
                  <HUDCorner position="tl" />
                  <HUDCorner position="tr" />
                  <HUDCorner position="bl" />
                  <HUDCorner position="br" />
                  <ScanLine />

                  {/* Bordo superiore luminoso */}
                  <motion.div
                    className="h-px w-full"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,160,0.5), transparent)' }}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  />

                  <div className="p-6 sm:p-10 relative z-10">
                    <AnimatePresence mode="wait" custom={direction}>
                      {/* BOOT PHASE */}
                      {phase === 'boot' && (
                        <BootPhase key="boot" onDone={handleBootDone} />
                      )}

                      {/* STEP 0 - REGISTER PHASE */}
                      {phase === 'step0' && (
                        <motion.div
                          key="step0"
                          initial="enter" animate="center" exit="exit"
                          custom={direction} variants={slideVariants}
                          transition={{ duration: 0.35 }}
                        >
                          <div className="text-center mb-8">
                            <span className="text-xs font-mono text-cyan-400/80 uppercase tracking-widest mb-1 block">// step_0_config</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Prima di iniziare, raccontaci chi sei</h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              Ti chiederemo alcune informazioni sulla tua stalla per costruire un percorso più utile e concreto. Al termine potrai inviare il risultato e sarai ricontattato da un operatore Lupetta.
                            </p>
                          </div>

                          <form onSubmit={handleStep0Submit} className="space-y-4">
                            <div>
                              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                                Nome e cognome <span className="text-cyan-400">*</span>
                              </label>
                              <input
                                type="text"
                                required
                                value={step0Data.nomeCognome}
                                onChange={(e) => setStep0Data((prev) => ({ ...prev, nomeCognome: e.target.value }))}
                                placeholder="Mario Rossi"
                                className={inputCls}
                              />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                                  Azienda agricola <span className="text-slate-600">(Facoltativo)</span>
                                </label>
                                <input
                                  type="text"
                                  value={step0Data.azienda}
                                  onChange={(e) => setStep0Data((prev) => ({ ...prev, azienda: e.target.value }))}
                                  placeholder="Azienda Agricola Rossi"
                                  className={inputCls}
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                                  Telefono <span className="text-cyan-400">*</span>
                                </label>
                                <input
                                  type="tel"
                                  required
                                  value={step0Data.telefono}
                                  onChange={(e) => setStep0Data((prev) => ({ ...prev, telefono: e.target.value }))}
                                  placeholder="+39 345 678901"
                                  className={inputCls}
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                                  Email <span className="text-cyan-400">*</span>
                                </label>
                                <input
                                  type="email"
                                  required
                                  value={step0Data.email}
                                  onChange={(e) => setStep0Data((prev) => ({ ...prev, email: e.target.value }))}
                                  placeholder="mario.rossi@stalla.it"
                                  className={inputCls}
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                                  Provincia <span className="text-cyan-400">*</span>
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={step0Data.provincia}
                                  onChange={(e) => setStep0Data((prev) => ({ ...prev, provincia: e.target.value }))}
                                  placeholder="Verona (VR)"
                                  className={inputCls}
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                                Numero indicativo di vitelli gestiti nella fase di allattamento <span className="text-cyan-400">*</span>
                              </label>
                              <input
                                type="number"
                                required
                                min="1"
                                step="1"
                                value={step0Data.numVitelli}
                                onChange={(e) => setStep0Data((prev) => ({ ...prev, numVitelli: e.target.value }))}
                                placeholder="Esempio: 25"
                                className={inputCls}
                              />
                            </div>

                            {/* Consenso Privacy */}
                            <div className="flex items-start gap-3 mt-2">
                              <input
                                id="privacy"
                                type="checkbox"
                                required
                                checked={step0Data.privacyConsent}
                                onChange={(e) => setStep0Data((prev) => ({ ...prev, privacyConsent: e.target.checked }))}
                                className="mt-1 w-4 h-4 rounded text-cyan-500 bg-slate-900 border-white/10 focus:ring-cyan-500 focus:ring-offset-slate-950 transition-colors"
                              />
                              <label htmlFor="privacy" className="text-xs text-slate-400 leading-snug cursor-pointer select-none">
                                Acconsento al trattamento dei dati personali per ricevere il percorso e la consulenza personalizzata Lupetta in conformità alle politiche sulla privacy. <span className="text-cyan-400">*</span>
                              </label>
                            </div>

                            {submitError && (
                              <p className="text-xs text-red-400 bg-red-500/10 rounded-xl px-4 py-2 border border-red-500/20 font-mono">{submitError}</p>
                            )}

                            <motion.button
                              type="submit"
                              whileHover={{ scale: 1.01, boxShadow: '0 0 30px rgba(0,200,160,0.3)' }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full mt-4 py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 relative overflow-hidden transition-all"
                              style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
                            >
                              Inizia il percorso
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </motion.button>
                          </form>
                        </motion.div>
                      )}

                      {/* QUIZ QUESTIONS PHASE */}
                      {phase === 'quiz' && (
                        <motion.div
                          key={`quiz-${currentStepIndex}`}
                          initial="enter" animate="center" exit="exit"
                          custom={direction} variants={slideVariants}
                          transition={{ duration: 0.35 }}
                        >
                          {/* Top indicator info */}
                          <div className="flex items-center justify-between mb-6">
                            <span className="text-xs font-mono text-slate-500">
                              <span className="text-cyan-400">{step0Data.nomeCognome.split(' ')[0]}</span> @ lupetta
                            </span>
                            <div className="flex items-center gap-3">
                              <div className="w-32 h-1 rounded-full bg-white/10 overflow-hidden">
                                <motion.div
                                  className="h-full rounded-full"
                                  style={{ background: 'linear-gradient(90deg, #006071, #00c8a0)' }}
                                  animate={{ width: `${((currentStepIndex + 1) / QUIZ_STEPS.length) * 100}%` }}
                                  transition={{ duration: 0.4 }}
                                />
                              </div>
                              <span className="text-xs font-mono text-slate-400 tabular-nums">
                                {currentStepIndex + 1}/{QUIZ_STEPS.length}
                              </span>
                            </div>
                          </div>

                          {/* Domanda */}
                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-mono text-cyan-400/70 uppercase tracking-widest block">Domanda {currentStepIndex + 1}</span>
                              <div className="flex-1 h-px bg-white/5" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                              {QUIZ_STEPS[currentStepIndex].question}
                            </h3>
                          </div>

                          {/* Opzioni */}
                          <div className="space-y-2.5">
                            {QUIZ_STEPS[currentStepIndex].options.map((opt, optIdx) => {
                              const isSelected = selectedAnswers[QUIZ_STEPS[currentStepIndex].id] === opt.value;
                              return (
                                <motion.button
                                  key={opt.value}
                                  onClick={() => handleQuizOptionClick(QUIZ_STEPS[currentStepIndex].id, opt.value)}
                                  whileHover={{ x: 4, backgroundColor: 'rgba(0,200,160,0.06)' }}
                                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-start gap-3 relative overflow-hidden ${
                                    isSelected
                                      ? 'border-cyan-500 bg-cyan-950/15 text-white'
                                      : 'border-white/5 bg-white/4 text-slate-300 hover:border-cyan-500/30'
                                  }`}
                                >
                                  {isSelected && (
                                    <motion.div
                                      layoutId="active-option-border"
                                      className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400"
                                      transition={{ duration: 0.2 }}
                                    />
                                  )}
                                  <span
                                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold font-mono shrink-0 transition-colors ${
                                      isSelected ? 'bg-cyan-500 text-black' : 'bg-white/5 text-slate-500'
                                    }`}
                                  >
                                    {opt.value}
                                  </span>
                                  <span className="font-sans text-sm font-medium leading-snug flex-1 pt-0.5">
                                    {opt.label}
                                  </span>
                                </motion.button>
                              );
                            })}
                          </div>

                          {/* Dynamic microfeedback (solo step 2, se selezionato) */}
                          {QUIZ_STEPS[currentStepIndex].id === 2 && selectedAnswers[2] && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-5 p-4 rounded-xl border border-cyan-500/25 bg-cyan-950/10 relative overflow-hidden"
                            >
                              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
                              <p className="text-xs text-slate-300 leading-relaxed pl-2 font-sans font-medium">
                                {QUIZ_STEPS[currentStepIndex].microFeedback?.[selectedAnswers[2]]}
                              </p>
                            </motion.div>
                          )}

                          {/* Controls bar */}
                          <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/5">
                            <button
                              onClick={handleQuizBack}
                              className="flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                              </svg>
                              Indietro
                            </button>

                            <button
                              onClick={handleQuizNext}
                              disabled={!selectedAnswers[QUIZ_STEPS[currentStepIndex].id]}
                              className="px-6 py-2.5 rounded-xl font-bold text-white text-sm flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed transition-all relative overflow-hidden"
                              style={{
                                background: selectedAnswers[QUIZ_STEPS[currentStepIndex].id]
                                  ? 'linear-gradient(135deg, #006071, #00c8a0)'
                                  : 'rgba(255,255,255,0.05)',
                                border: selectedAnswers[QUIZ_STEPS[currentStepIndex].id] ? 'none' : '1px solid rgba(255,255,255,0.05)',
                              }}
                            >
                              Avanti
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {/* PHASE RESULT */}
                      {phase === 'result' && profile && (
                        <motion.div
                          key="result"
                          initial="enter" animate="center" exit="exit"
                          custom={direction} variants={slideVariants}
                          transition={{ duration: 0.4 }}
                        >
                          <div className="text-center mb-6">
                            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">// profilo_elaborato</span>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">Profilo: "{profile.subtitle}"</p>
                            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">{profile.title}</h3>
                          </div>

                          {/* Profile explanation */}
                          <div className="rounded-2xl border border-white/5 bg-white/4 p-5 mb-5 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,160,0.35), transparent)' }} />
                            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line font-sans font-medium">
                              {profile.text}
                            </p>
                          </div>

                          {/* Model orientation recommendation */}
                          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-950/5 p-5 mb-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
                            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Modello orientativo consigliato:</h4>
                            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                              {recommendedModels}
                            </p>
                          </div>

                          {submitError && (
                            <p className="text-xs text-red-400 bg-red-500/10 rounded-xl px-4 py-2.5 mb-4 border border-red-500/20 font-mono">{submitError}</p>
                          )}

                          {/* Action CTA */}
                          <motion.button
                            onClick={handleFinalSubmit}
                            disabled={loading}
                            whileHover={{ scale: 1.01, boxShadow: '0 0 40px rgba(0,200,160,0.45)' }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                            style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)', boxShadow: '0 0 25px rgba(0,200,160,0.2)' }}
                          >
                            {loading ? (
                              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                              </svg>
                            ) : (
                              <span className="flex items-center gap-2">
                                Invia il tuo percorso
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            )}
                          </motion.button>
                          <p className="text-center text-xs text-slate-500 font-mono mt-3">
                            // Un operatore Lupetta ti contatterà per valutare la configurazione adatta
                          </p>
                        </motion.div>
                      )}

                      {/* PHASE SUCCESS */}
                      {phase === 'success' && (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                          className="text-center py-6"
                        >
                          <div className="relative inline-block mb-6">
                            <motion.div
                              className="inline-flex items-center justify-center w-16 h-16 rounded-full"
                              style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
                              animate={{
                                boxShadow: [
                                  '0 0 20px rgba(0,200,160,0.3)',
                                  '0 0 50px rgba(0,200,160,0.6)',
                                  '0 0 20px rgba(0,200,160,0.3)',
                                ],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </motion.div>
                          </div>

                          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">// invio_completato</p>
                          <h3 className="text-2xl font-bold text-white leading-snug mb-3">Percorso inviato correttamente</h3>
                          <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto mb-8 font-sans font-medium">
                            Grazie, abbiamo ricevuto le tue risposte. Un operatore Lupetta ti contatterà per approfondire le esigenze della tua stalla e aiutarti a individuare la configurazione più adatta.
                            <br /><br />
                            Ogni allevamento è diverso: il percorso che hai completato ci permette di partire da dati concreti e parlarti in modo più utile, senza proposte generiche.
                          </p>

                          <div className="space-y-3">
                            <motion.button
                              onClick={() => {
                                onClose();
                                navigate('/come-funziona');
                              }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full py-3.5 rounded-xl font-bold text-white text-sm relative overflow-hidden transition-all"
                              style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
                            >
                              Scopri di più sulle soluzioni Lupetta
                            </motion.button>
                            
                            <button
                              onClick={onClose}
                              className="text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors py-2 block w-full text-center"
                            >
                              Chiudi finestra
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bordo inferiore */}
                  <div
                    className="h-px w-full"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,200,160,0.2), transparent)' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}