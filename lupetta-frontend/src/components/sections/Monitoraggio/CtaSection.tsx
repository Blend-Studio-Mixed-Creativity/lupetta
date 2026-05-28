import { useState } from 'react';
import { BackgroundGradientAnimation } from '../../ui/BackgroundGradientAnimation';

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
        className="w-full px-5 pt-6 pb-3 rounded-xl bg-white/5 border border-white/15 text-white text-base outline-none transition-all duration-300 focus:bg-white/10 focus:border-accent"
      />
      <label
        className="absolute left-5 pointer-events-none transition-all duration-300 font-medium"
        style={{
          top: focus || filled ? '0.4rem' : '50%',
          transform: focus || filled ? 'translateY(0) scale(0.78)' : 'translateY(-50%)',
          transformOrigin: 'left',
          fontSize: focus || filled ? '0.7rem' : '0.95rem',
          color: focus ? '#65b32e' : 'rgba(255,255,255,0.55)',
          letterSpacing: focus || filled ? '0.05em' : 0,
        }}
      >
        {label}{required ? ' *' : ''}
      </label>
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
    <div className="relative">
      <textarea
        name={name}
        required={required}
        rows={5}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full px-5 pt-6 pb-3 rounded-xl bg-white/5 border border-white/15 text-white text-base outline-none resize-none transition-all duration-300 focus:bg-white/10 focus:border-accent"
      />
      <label
        className="absolute left-5 pointer-events-none transition-all duration-300 font-medium"
        style={{
          top: focus || filled ? '0.4rem' : '1.3rem',
          fontSize: focus || filled ? '0.7rem' : '0.95rem',
          color: focus ? '#65b32e' : 'rgba(255,255,255,0.55)',
          letterSpacing: focus || filled ? '0.05em' : 0,
        }}
      >
        {label}{required ? ' *' : ''}
      </label>
    </div>
  );
}

export default function CtaSection() {
  const [fields, setFields] = useState({ nome: '', cognome: '', email: '', telefono: '', messaggio: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(0, 30, 40)"
      gradientBackgroundEnd="rgb(0, 10, 20)"
      firstColor="0, 96, 113"
      secondColor="101, 179, 46"
      thirdColor="0, 200, 160"
      fourthColor="0, 130, 80"
      fifthColor="30, 60, 80"
      pointerColor="101, 179, 46"
      blendingValue="hard-light"
      containerClassName="w-full py-16 sm:py-24 lg:py-32"
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10 animate-fade-in-up">
        <div className="backdrop-blur-xl bg-slate-950/40 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Decorative glows inside the card */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
            {/* Left Column: Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-4 text-accent">
                  Contatti
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                  Tredi <span className="montserrat-italic text-accent">Italia S.R.L.</span>
                </h2>
                <p className="text-white/70 leading-relaxed mb-8 text-base">
                  Siamo a tua disposizione per supportarti nella scelta, installazione e gestione del tuo sistema di allattamento Lupetta. Contattaci o vieni a trovarci nella nostra sede.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <a
                    href="tel:+390372434728"
                    className="flex items-center gap-4 text-white/90 hover:text-accent transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-slate-300 group-hover:text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-0.5">Telefono</p>
                      <p className="font-semibold text-sm sm:text-base text-white">+39 0372 434728</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@lupetta.it"
                    className="flex items-center gap-4 text-white/90 hover:text-accent transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-slate-300 group-hover:text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-0.5">Email</p>
                      <p className="font-semibold text-sm sm:text-base text-white">info@lupetta.it</p>
                    </div>
                  </a>

                  {/* Address */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Tredi+Italia+S.r.l.+Via+Marcantonio+Ingegneri+4+26100+Cremona"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 text-white/90 hover:text-accent transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-slate-300 group-hover:text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-0.5">Indirizzo</p>
                      <p className="font-semibold text-sm sm:text-base text-white">Via Marcantonio Ingegneri, 4 — 26100 Cremona (CR)</p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-4 text-white/90">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-0.5">Orari</p>
                      <div className="text-sm leading-relaxed text-white/80">
                        Lun–Ven: 09:00–13:00, 15:00–19:30
                        <br />
                        Sab: 09:00–13:00, 15:30–19:30
                        <br />
                        Dom: Chiuso
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps Map Iframe */}
            <div className="lg:col-span-6 flex items-stretch">
              <div className="w-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl h-75 lg:h-auto min-h-75 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90134.99134345553!2d9.783594355438934!3d45.09150165077877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4780fe3dddbdc361%3A0x54168df7f2319bb3!2sTredi%20Italia%20S.R.L.!5e0!3m2!1sit!2sit!4v1779963624595!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tredi Italia Map"
                  className="absolute inset-0 w-full h-full grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 sm:my-14 h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />

          {/* Contact Form */}
          <div className="relative">
            <div className="mb-8 text-center">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-3 text-accent">
                Scrivici
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Invia un <span className="montserrat-italic text-accent">messaggio</span>
              </h3>
              <p className="text-white/60 text-sm mt-3">Risponderemo entro 24 ore lavorative.</p>
            </div>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-5">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #006071, #65b32e)' }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white">Messaggio inviato!</h4>
                <p className="text-white/70 max-w-sm">Ti risponderemo al più presto. Grazie per averci contattato.</p>
                <button
                  type="button"
                  className="mt-2 px-6 py-2.5 rounded-xl border-2 border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-white transition-all duration-300"
                  onClick={() => { setSent(false); setFields({ nome: '', cognome: '', email: '', telefono: '', messaggio: '' }); }}
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <DarkInput label="Nome" name="nome" required value={fields.nome} onChange={onChange} />
                  <DarkInput label="Cognome" name="cognome" required value={fields.cognome} onChange={onChange} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <DarkInput label="Email" type="email" name="email" required value={fields.email} onChange={onChange} />
                  <DarkInput label="Telefono" type="tel" name="telefono" value={fields.telefono} onChange={onChange} />
                </div>
                <div className="mb-8">
                  <DarkTextarea label="Il tuo messaggio" name="messaggio" required value={fields.messaggio} onChange={onChange} />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-white text-lg relative overflow-hidden transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-70 group"
                  style={{
                    background: loading ? '#475569' : 'linear-gradient(90deg, #006071 0%, #65b32e 100%)',
                    boxShadow: loading ? 'none' : '0 10px 30px -6px rgba(101,179,46,0.45)',
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
                <p className="text-center text-xs text-white/40 mt-4">
                  I tuoi dati sono al sicuro. Non li condivideremo mai con terze parti.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}








