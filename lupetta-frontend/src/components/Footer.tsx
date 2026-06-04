import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logolupettaverdebianco.png';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#006071] via-[#005160] to-[#003c47] text-white/80 mt-auto border-t border-[#008ba0]/20 overflow-hidden">
      {/* Subtle brand color glow */}
      <div
        className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#65b32e]/5 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#65b32e]/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Column (Span 4) */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="mb-5">
                <Link to="/" className="inline-block -ml-16">
                  <img
                    src={logoImg}
                    alt="Lupetta"
                    className="block h-10 w-auto transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
              <p className="text-sm text-white/70 leading-relaxed max-w-sm mb-4 font-medium">
                L'allattatrice automatica brevettata per il massimo benessere dei vitelli e la semplificazione del lavoro quotidiano in allevamento.
              </p>
              <div className="text-xs text-white/50 space-y-1 font-mono">
                <p>Tredì Italia Srl</p>
                <p>C.F. e P.IVA 01383310198</p>
              </div>
            </div>

            {/* Certifications or Small Badges */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[10px] font-bold font-mono tracking-widest text-[#65b32e] border border-[#65b32e]/30 px-2.5 py-1 rounded bg-[#65b32e]/10 uppercase select-none">
                Brevettato
              </span>
              <span className="text-[10px] font-bold font-mono tracking-widest text-white/80 border border-white/20 px-2.5 py-1 rounded bg-white/5 uppercase select-none">
                Made in Italy
              </span>
            </div>
          </div>

          {/* Links: La Gamma (Span 2) */}
          <div>
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-[0.2em] text-[#65b32e]">
              La Gamma
            </h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: 'Lupetta Mini WiFi', to: '/come-funziona/mini' },
                { label: 'Lupetta Maxi Tech', to: '/come-funziona/maxi' },
                { label: 'Lupetta Smart Home', to: '/lupetta-smart-home' },
                { label: 'Linea latte', to: '/consumabile' },
              ].map((item) => (
                <li key={item.to} className="group">
                  <Link
                    to={item.to}
                    className="relative text-white/70 hover:text-white transition-all duration-300 flex items-center pl-0 hover:pl-5 font-medium"
                  >
                    <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-[#65b32e]">
                      ➔
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Navigazione (Span 3) */}
          <div>
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-[0.2em]">
              Esplora
            </h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: 'Come funziona', to: '/come-funziona' },
                { label: 'I benefici', to: '/benefici' },
                { label: 'L\'azienda', to: '/azienda' },
                { label: 'Domande frequenti (FAQ)', to: '/faq' },
                { label: 'Contattaci', to: '/contatti' },
              ].map((item) => (
                <li key={item.to} className="group">
                  <Link
                    to={item.to}
                    className="relative text-white/70 hover:text-white transition-all duration-300 flex items-center pl-0 hover:pl-5 font-medium"
                  >
                    <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-[#00a8c0]">
                      ➔
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Contatti (Span 3) */}
          <div>
            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-[0.2em] text-white/90">
              Contatti
            </h4>
            <ul className="space-y-4 text-sm">

              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-lg bg-white/10 text-white shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold leading-none mb-1">Commerciale</p>
                  <a href="mailto:mridenti@lupetta.it" className="text-white hover:text-[#65b32e] transition-colors duration-200 font-medium">
                    mridenti@lupetta.it
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-lg bg-[#65b32e]/20 text-[#65b32e] shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#65b32e] font-bold leading-none mb-1">Assistenza Tecnica</p>
                  <a href="mailto:lfulcini@lupetta.it" className="text-white hover:text-[#65b32e] transition-colors duration-200 font-medium">
                    lfulcini@lupetta.it
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-lg bg-white/10 text-white shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold leading-none mb-1">Amministrazione</p>
                  <a href="mailto:info@lupetta.it" className="text-white hover:text-[#65b32e] transition-colors duration-200 font-medium">
                    info@lupetta.it
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 border-t border-white/10 pt-4 mt-4">
                <span className="mt-0.5 w-5 h-5 flex items-center justify-center rounded-lg text-white/40 shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <p className="text-white/60 text-xs leading-relaxed font-medium">
                  Sede operativa: Via del Commercio, 2 <br /> 26026 Pizzighettone (CR)
                </p>
              </li>

            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Tredì Italia Srl. Tutti i diritti riservati.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono">
            <span className="hover:text-white select-none">Smart Feeding System®</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-white select-none">Lupetta®</span>


          </div>
        </div>
      </div>
    </footer>
  );
}
