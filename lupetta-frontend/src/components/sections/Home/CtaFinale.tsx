import { useState } from 'react';
import RevealSection from '../../RevealSection';

function InputField({
  label,
  type = 'text',
  name,
  required,
  value,
  onChange,
  dark = false,
}: {
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dark?: boolean;
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
          background: dark ? 'rgba(255,255,255,0.08)' : '#ffffff',
          color: dark ? '#ffffff' : '#0f172a',
          borderColor: focus
            ? dark ? '#65b32e' : '#006071'
            : dark ? 'rgba(255,255,255,0.18)' : '#e2e8f0',
        }}
      />
      <label
        className="absolute left-5 pointer-events-none transition-all duration-300 font-medium"
        style={{
          top: focus || filled ? '0.4rem' : '50%',
          transform: focus || filled ? 'translateY(0) scale(0.78)' : 'translateY(-50%)',
          transformOrigin: 'left',
          fontSize: focus || filled ? '0.7rem' : '0.95rem',
          color: focus
            ? dark ? '#a5d97a' : '#006071'
            : dark ? 'rgba(255,255,255,0.55)' : '#94a3b8',
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

function TextareaField({
  label,
  name,
  required,
  value,
  onChange,
  dark = false,
}: {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  dark?: boolean;
}) {
  const [focus, setFocus] = useState(false);
  const filled = value.length > 0;

  return (
    <div className="relative">
      <textarea
        name={name}
        required={required}
        rows={4}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full px-5 pt-6 pb-3 rounded-xl border-2 text-base outline-none resize-none transition-all duration-300"
        style={{
          background: dark ? 'rgba(255,255,255,0.08)' : '#ffffff',
          color: dark ? '#ffffff' : '#0f172a',
          borderColor: focus
            ? dark ? '#65b32e' : '#006071'
            : dark ? 'rgba(255,255,255,0.18)' : '#e2e8f0',
        }}
      />
      <label
        className="absolute left-5 pointer-events-none transition-all duration-300 font-medium"
        style={{
          top: focus || filled ? '0.4rem' : '1.3rem',
          fontSize: focus || filled ? '0.7rem' : '0.95rem',
          color: focus
            ? dark ? '#a5d97a' : '#006071'
            : dark ? 'rgba(255,255,255,0.55)' : '#94a3b8',
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

export default function CtaFinale() {
  const [fields, setFields] = useState({ nome: '', cognome: '', email: '', telefono: '', messaggio: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulazione invio (sostituire con fetch a /api/contact-leads quando pronto)
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <RevealSection
        className="relative rounded-3xl overflow-hidden text-white"
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

        <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 p-6 sm:p-10 md:p-14 lg:p-20">
          {/* ── Left: copy ── */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#a5d97a] mb-4 block">
              Contattaci
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 leading-tight text-balance">
              Vuoi saperne di più su <br />
              <span className="montserrat-italic text-[#a5d97a]">Lupetta?</span>
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
              Raccontaci la tua realtà: il team Lupetta ti supporterà nella scelta della soluzione più adatta al tuo allevamento.
            </p>

            <ul className="space-y-3">
              {[
                'Risposta entro 24 ore lavorative',
                'Consulenza dedicata e personalizzata',
                'Nessun impegno richiesto',
              ].map((item, i) => (
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
          </div>

          {/* ── Right: form ── */}
          <div>
            {sent ? (
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
                  className="mt-2 px-6 py-2.5 rounded-xl border-2 border-white/40 text-white font-semibold text-sm hover:bg-white hover:text-[#006071] transition-all duration-300"
                  onClick={() => { setSent(false); setFields({ nome: '', cognome: '', email: '', telefono: '', messaggio: '' }); }}
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <InputField dark label="Nome" name="nome" required value={fields.nome} onChange={onChange} />
                  <InputField dark label="Cognome" name="cognome" required value={fields.cognome} onChange={onChange} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <InputField dark label="Email" type="email" name="email" required value={fields.email} onChange={onChange} />
                  <InputField dark label="Telefono" type="tel" name="telefono" value={fields.telefono} onChange={onChange} />
                </div>
                <div className="mb-6">
                  <TextareaField dark label="Il tuo messaggio" name="messaggio" required value={fields.messaggio} onChange={onChange} />
                </div>

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
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Invio in corso…
                      </>
                    ) : (
                      <>
                        Invia il messaggio
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
            )}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
