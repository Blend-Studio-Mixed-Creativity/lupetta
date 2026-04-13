import { useState, useRef } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import TiltCard3D from '../../ui/TiltCard3D';

const INFO = [
  {
    iconPath: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
    label: 'Telefono',
    value: '+39 0123 456789',
    link: 'tel:+390123456789',
    color: '#006071',
  },
  {
    iconPath: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
    label: 'Email',
    value: 'info@lupetta.it',
    link: 'mailto:info@lupetta.it',
    color: '#65b32e',
  },
  {
    iconPath: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
    label: 'Indirizzo',
    value: 'Via Lorem, 12 — 00100 Roma (RM)',
    link: 'https://maps.google.com',
    color: '#006071',
  },
  {
    iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
    label: 'Orari',
    value: 'Lun–Ven: 08:30–17:30',
    link: null,
    color: '#65b32e',
  },
];

const SOCIALS = [
  { name: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
  { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  { name: 'Instagram', href: '#', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01 M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z' },
];

function InputField({
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
        className="w-full px-5 pt-6 pb-3 rounded-xl border-2 bg-white text-slate-900 text-base outline-none transition-all duration-300 peer"
        style={{ borderColor: focus ? '#006071' : '#e2e8f0' }}
      />
      <label
        className="absolute left-5 pointer-events-none transition-all duration-300 font-medium"
        style={{
          top: focus || filled ? '0.4rem' : '50%',
          transform: focus || filled ? 'translateY(0) scale(0.78)' : 'translateY(-50%)',
          transformOrigin: 'left',
          fontSize: focus || filled ? '0.7rem' : '0.95rem',
          color: focus ? '#006071' : '#94a3b8',
          letterSpacing: focus || filled ? '0.05em' : 0,
        }}
      >
        {label}{required ? ' *' : ''}
      </label>
      {/* bottom accent line */}
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
    <div className="relative">
      <textarea
        name={name}
        required={required}
        rows={5}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full px-5 pt-6 pb-3 rounded-xl border-2 bg-white text-slate-900 text-base outline-none resize-none transition-all duration-300 peer"
        style={{ borderColor: focus ? '#006071' : '#e2e8f0' }}
      />
      <label
        className="absolute left-5 pointer-events-none transition-all duration-300 font-medium"
        style={{
          top: focus || filled ? '0.4rem' : '1.3rem',
          fontSize: focus || filled ? '0.7rem' : '0.95rem',
          color: focus ? '#006071' : '#94a3b8',
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

export default function ContattiMain() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  const [fields, setFields] = useState({ nome: '', cognome: '', email: '', telefono: '', messaggio: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  return (
    <section ref={ref} className="bg-slate-50 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 xl:gap-20 items-start">

          {/* ── Left: Info + Socials ── */}
          <div className={`lg:col-span-2 ${isVisible ? 'sr-reveal-left' : 'sr-hidden'}`}>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#006071] mb-3 block">Dove siamo</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Siamo a tua <span className="text-[#006071]">disposizione</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-10">
              Il team Lupetta è disponibile per supportarti nella scelta, installazione e gestione del tuo sistema di allattamento. Scrivici o chiamaci.
            </p>

            <div className="space-y-4">
              {INFO.map((item, i) => (
                <TiltCard3D key={i} className="rounded-2xl" maxAngle={5}>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-100 hover:border-[#006071]/30 transition-colors group"
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ background: `${item.color}18` }}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke={item.color}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-0.5">{item.label}</p>
                        <p className="text-slate-800 font-semibold text-sm">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-100">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.color}18` }}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke={item.color}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-0.5">{item.label}</p>
                        <p className="text-slate-800 font-semibold text-sm">{item.value}</p>
                      </div>
                    </div>
                  )}
                </TiltCard3D>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Seguici</p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="w-11 h-11 rounded-xl bg-white border border-slate-100 flex items-center justify-center hover:bg-[#006071] hover:border-[#006071] transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <svg className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className={`lg:col-span-3 ${isVisible ? 'sr-reveal-right' : 'sr-hidden'}`} style={{ animationDelay: '0.1s' }}>
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-5 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#65b32e]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#006071]/5 rounded-full blur-3xl pointer-events-none" />

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-5 relative z-10">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center animate-scale-in"
                    style={{ background: 'linear-gradient(135deg, #006071, #65b32e)' }}
                  >
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Messaggio inviato!</h3>
                  <p className="text-slate-500 max-w-sm">Ti risponderemo al più presto. Grazie per averci contattato.</p>
                  <button
                    className="mt-2 px-6 py-2.5 rounded-xl border-2 border-[#006071] text-[#006071] font-semibold text-sm hover:bg-[#006071] hover:text-white transition-all duration-300"
                    onClick={() => { setSent(false); setFields({ nome: '', cognome: '', email: '', telefono: '', messaggio: '' }); }}
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Invia un messaggio</h3>
                    <p className="text-slate-400 text-sm mt-1">Risponderemo entro 24 ore lavorative.</p>
                  </div>

                  {/* Top gradient accent */}
                  <div
                    className="h-1 w-full rounded-full mb-8 -mt-2"
                    style={{ background: 'linear-gradient(90deg, #006071 0%, #65b32e 60%, #00c8a0 100%)' }}
                  />

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <InputField label="Nome" name="nome" required value={fields.nome} onChange={onChange} />
                    <InputField label="Cognome" name="cognome" required value={fields.cognome} onChange={onChange} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <InputField label="Email" type="email" name="email" required value={fields.email} onChange={onChange} />
                    <InputField label="Telefono" type="tel" name="telefono" value={fields.telefono} onChange={onChange} />
                  </div>
                  <div className="mb-8">
                    <TextareaField label="Il tuo messaggio" name="messaggio" required value={fields.messaggio} onChange={onChange} />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-white text-lg relative overflow-hidden transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-70 group"
                    style={{
                      background: loading
                        ? '#94a3b8'
                        : 'linear-gradient(90deg, #006071 0%, #65b32e 100%)',
                      boxShadow: loading ? 'none' : '0 10px 30px -6px rgba(0,96,113,0.4)',
                    }}
                  >
                    {/* Shimmer */}
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

                  <p className="text-center text-xs text-slate-400 mt-4">
                    I tuoi dati sono al sicuro. Non li condivideremo mai con terze parti.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Mappa placeholder ── */}
        <div className={`mt-16 sm:mt-24 rounded-3xl overflow-hidden h-80 sm:h-96 relative ${isVisible ? 'sr-reveal-up' : 'sr-hidden'}`} style={{ animationDelay: '0.2s' }}>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            style={{ background: 'linear-gradient(135deg, #006071 0%, #004a58 50%, #003540 100%)' }}
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
              <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <p className="text-white font-semibold text-lg">Via Lorem, 12 — 00100 Roma (RM)</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 bg-[#65b32e] text-white rounded-xl font-semibold text-sm hover:bg-[#4fa028] transition-colors"
            >
              Apri in Google Maps
            </a>
            {/* Decorative grid lines */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              {[10, 20, 30, 40, 50, 60, 70, 80, 90].map(p => (
                <div key={`v${p}`} className="absolute top-0 h-full w-px bg-white" style={{ left: `${p}%` }} />
              ))}
              {[20, 40, 60, 80].map(p => (
                <div key={`h${p}`} className="absolute left-0 w-full h-px bg-white" style={{ top: `${p}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
