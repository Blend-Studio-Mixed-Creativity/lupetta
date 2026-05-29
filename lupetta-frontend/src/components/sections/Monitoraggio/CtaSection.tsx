import { BackgroundGradientAnimation } from '../../ui/BackgroundGradientAnimation';
import ContactForm from '../shared/ContactForm';

export default function CtaSection() {
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
                    href="https://www.google.com/maps/search/?api=1&query=Via+del+Commercio+2+26026+Pizzighettone"
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
                      <p className="font-semibold text-sm sm:text-base text-white">Sede operativa: Via del Commercio, 2 - 26026 Pizzighettone (CR)</p>
                    </div>
                  </a>


                </div>
              </div>
            </div>

            {/* Right Column: Google Maps Map Iframe */}
            <div className="lg:col-span-6 flex items-stretch">
              <div className="w-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl h-75 lg:h-auto min-h-75 relative">
                <iframe
                  src="https://maps.google.com/maps?q=Via%20del%20Commercio%2C%202%20-%2026026%20Pizzighettone%20(CR)&t=&z=14&ie=UTF8&iwloc=&output=embed"
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
        </div>

        {/* Shared dark contact form */}
        <div className="mt-10">
          <ContactForm
            eyebrow="Scrivici"
            title={
              <>
                Invia un <span className="montserrat-italic text-[#a5d97a]">messaggio</span>
              </>
            }
          />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
