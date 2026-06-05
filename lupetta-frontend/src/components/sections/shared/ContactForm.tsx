import { useMemo, useRef, useState } from 'react';
import RevealSection from '../../RevealSection';

/**
 * Dark-themed contact form, shared across all pages.
 *
 * Layout: rounded teal/green gradient panel with copy on the left and
 * a dark form on the right. Posts to `${VITE_API_URL}/api/contact-leads`
 * with honeypot + `_ts` anti-bot fields.
 */

interface ContactFormProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  bullets?: string[];
  /** Render without the outer rounded panel / RevealSection. */
  bare?: boolean;
  className?: string;
}

function DarkInput({
  label,
  type = 'text',
  name,
  required,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [focus, setFocus] = useState(false);
  const filled = value.length > 0;
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        autoComplete="off"
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full px-5 pt-6 pb-3 rounded-xl border-2 text-base outline-none transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.08)',
          color: '#ffffff',
          borderColor: focus ? '#65b32e' : 'rgba(255,255,255,0.18)',
        }}
      />
      <label
        className="absolute left-5 pointer-events-none transition-all duration-300 font-medium"
        style={{
          top: focus || filled ? '0.4rem' : '50%',
          transform: focus || filled ? 'translateY(0) scale(0.78)' : 'translateY(-50%)',
          transformOrigin: 'left',
          fontSize: focus || filled ? '0.7rem' : '0.95rem',
          color: focus ? '#a5d97a' : 'rgba(255,255,255,0.55)',
          letterSpacing: focus || filled ? '0.05em' : 0,
        }}
      >
        {label}{required ? ' *' : ''}
      </label>
      <div
        className="absolute bottom-0 left-5 right-5 h-0.5 rounded-full transition-all duration-500"
        style={{
          background: 'linear-gradient(90deg, #006071, #65b32e)',
          transform: focus ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
        }}
      />
    </div>
  );
}

function DarkTextarea({
  label,
  name,
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  const [focus, setFocus] = useState(false);
  const filled = value.length > 0;
  return (
    <div className="relative flex-1 flex flex-col">
      <textarea
        name={name}
        required={required}
        rows={4}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full flex-1 min-h-[10rem] px-5 pt-6 pb-3 rounded-xl border-2 text-base outline-none resize-none transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.08)',
          color: '#ffffff',
          borderColor: focus ? '#65b32e' : 'rgba(255,255,255,0.18)',
        }}
      />
      <label
        className="absolute left-5 pointer-events-none transition-all duration-300 font-medium"
        style={{
          top: focus || filled ? '0.4rem' : '1.3rem',
          fontSize: focus || filled ? '0.7rem' : '0.95rem',
          color: focus ? '#a5d97a' : 'rgba(255,255,255,0.55)',
          letterSpacing: focus || filled ? '0.05em' : 0,
        }}
      >
        {label}{required ? ' *' : ''}
      </label>
      <div
        className="absolute bottom-0 left-5 right-5 h-0.5 rounded-full transition-all duration-500"
        style={{
          background: 'linear-gradient(90deg, #006071, #65b32e)',
          transform: focus ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
        }}
      />
    </div>
  );
}

const DEFAULT_BULLETS = [
  'Risposta entro 24 ore lavorative',
  'Consulenza dedicata e personalizzata',
  'Nessun impegno richiesto',
];

export default function ContactForm({
  eyebrow = 'Contattaci',
  title,
  description = 'Raccontaci la tua realtà: il team Lupetta ti supporterà nella scelta della soluzione più adatta alla tua struttura.',
  bullets = DEFAULT_BULLETS,
  bare = false,
  className = '',
}: ContactFormProps) {
  const [fields, setFields] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    messaggio: '',
    website: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  // Timestamp creato al mount del form: usato dal backend come check anti-bot.
  const ts = useMemo(() => Date.now(), []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setError(null);
    setLoading(true);
    try {
      const apiBase = (import.meta.env.VITE_API_URL ?? '') as string;
      const res = await fetch(`${apiBase}/api/contact-leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...fields, _ts: ts }),
      });
      if (res.status === 429) {
        setError('Troppi invii. Riprova tra qualche minuto.');
        return;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = (data as { message?: string; errors?: Record<string, string[]> });
        const firstFieldError = msg.errors ? Object.values(msg.errors)[0]?.[0] : undefined;
        setError(firstFieldError ?? msg.message ?? 'Invio non riuscito. Riprova.');
        return;
      }
      setSent(true);
    } catch {
      setError('Impossibile contattare il server. Riprova più tardi.');
    } finally {
      setLoading(false);
    }
  };

  const formBlock = sent ? (
    <div className="flex flex-col items-center justify-center py-16 text-center gap-5 bg-white/5 rounded-2xl border border-white/10 px-6">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #65b32e, #4fa028)' }}
      >
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white">Messaggio inviato!</h3>
      <p className="text-white/70 max-w-sm">Ti risponderemo al più presto. Grazie per averci contattato.</p>
      <button
        type="button"
        className="mt-2 px-6 py-2.5 rounded-xl border-2 border-white/40 text-white font-semibold text-sm hover:bg-white hover:text-[#006071] transition-all duration-300"
        onClick={() => {
          setSent(false);
          setError(null);
          setFields({ nome: '', cognome: '', email: '', telefono: '', messaggio: '', website: '' });
        }}
      >
        Invia un altro messaggio
      </button>
    </div>
  ) : (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col h-full">
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <DarkInput label="Nome" name="nome" required value={fields.nome} onChange={onChange} />
        <DarkInput label="Cognome" name="cognome" required value={fields.cognome} onChange={onChange} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <DarkInput label="Email" type="email" name="email" required value={fields.email} onChange={onChange} />
        <DarkInput label="Telefono" type="tel" name="telefono" value={fields.telefono} onChange={onChange} />
      </div>
      <div className="mb-6 flex-1 flex flex-col">
        <DarkTextarea label="Il tuo messaggio" name="messaggio" required value={fields.messaggio} onChange={onChange} />
      </div>

      {/* Honeypot: invisibile agli utenti, riempito solo dai bot. */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
      >
        <label>
          Lascia vuoto questo campo
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={fields.website}
            onChange={onChange}
          />
        </label>
      </div>

      {error && (
        <div
          role="alert"
          className="mb-5 text-sm text-red-200 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl font-bold text-white text-lg relative overflow-hidden transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-70 group"
        style={{
          background: loading
            ? '#94a3b8'
            : 'linear-gradient(90deg, #65b32e 0%, #4fa028 100%)',
          boxShadow: loading ? 'none' : '0 14px 32px -8px rgba(101,179,46,0.55)',
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_20%,rgba(255,255,255,0.25)_50%,transparent_80%)] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
        <span className="relative z-10 flex items-center justify-center gap-3">
          {loading ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Invio in corso…
            </>
          ) : (
            <>
              Invia il messaggio
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </>
          )}
        </span>
      </button>

      <p className="text-center text-xs text-white/55 mt-4">
        I tuoi dati sono al sicuro. Non li condivideremo mai con terze parti.
      </p>
    </form>
  );

  const innerGrid = (
    <div className="relative grid min-[960px]:grid-cols-2 gap-10 min-[960px]:gap-10 lg:gap-16 p-6 sm:p-10 md:p-10 lg:p-20 items-stretch">
      {/* Left: copy */}
      <div className="flex flex-col justify-between">
        <div>
        {eyebrow && (
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#a5d97a] mb-6 block">
            {eyebrow}
          </span>
        )}
        {title && (
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-tight mb-8 leading-tight text-balance text-white">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-lg">{description}</p>
        )}

        {bullets.length > 0 && (
          <ul className="space-y-4">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/85">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #65b32e, #4fa028)',
                    boxShadow: '0 6px 16px -4px rgba(101,179,46,0.5)',
                  }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Company info */}
        <div className="mt-12 pt-10 border-t border-white/15 space-y-5">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#a5d97a]">Tredì Italia S.r.l.</p>
          <a href="tel:+390372434728" className="flex items-center gap-3 text-white/85 hover:text-[#a5d97a] transition-colors group">
            <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/8 border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            <span className="text-sm font-semibold">+39 0372 434728</span>
          </a>
          <a href="mailto:info@lupetta.it" className="flex items-center gap-3 text-white/85 hover:text-[#a5d97a] transition-colors group">
            <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/8 border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            <span className="text-sm font-semibold">info@lupetta.it</span>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Via+del+Commercio+2+26026+Pizzighettone+CR"
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 text-white/85 hover:text-[#a5d97a] transition-colors group"
          >
            <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/8 border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <span className="text-sm font-semibold leading-snug">
              Sede operativa:<br />
              Via del Commercio, 2 — 26026 Pizzighettone (CR)
            </span>
          </a>
          <p className="text-xs text-white/55 pt-1">Tredì Italia S.r.l. — C.F. e P.IVA 01383310198</p>
        </div>
        </div>
      </div>

      {/* Right: form */}
      <div className="flex flex-col">{formBlock}</div>
    </div>
  );

  if (bare) {
    return <div className={`text-white ${className}`}>{innerGrid}</div>;
  }

  return (
    <RevealSection
      className={`relative rounded-3xl overflow-hidden text-white ${className}`}
      animation="sr-reveal-scale"
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #006071 0%, #004a58 55%, #003540 100%)' }}
      />
      {/* Decorative orbs */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(101,179,46,0.35) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,168,192,0.25) 0%, transparent 70%)' }}
      />

      {innerGrid}
    </RevealSection>
  );
}
