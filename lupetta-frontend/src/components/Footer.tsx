import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#006071] text-white/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">Lupetta</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Smart Feeding System® per l'alimentazione automatizzata e il monitoraggio
              dei vitelli.
            </p>
            <p className="text-xs text-white/40 mt-3">
              Tredì Italia Srl — C.F. e P.IVA 01383310198
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Navigazione
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Come Funziona', to: '/come-funziona' },
                { label: 'Monitoraggio', to: '/monitoraggio' },
                { label: 'Lupetta Smart Home', to: '/lupetta-smart-home' },
                { label: 'Benefici', to: '/benefici' },
                { label: 'FAQ', to: '/faq' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Contatti
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <span className="font-medium text-white">Commerciale:</span>{' '}
                <a href="mailto:mridenti@lupetta.it" className="hover:text-white transition-colors">
                  mridenti@lupetta.it
                </a>
              </li>
              <li>
                <span className="font-medium text-white">Tecnico:</span>{' '}
                <a href="mailto:lfulcini@lupetta.it" className="hover:text-white transition-colors">
                  lfulcini@lupetta.it
                </a>
              </li>
              <li>
                <span className="font-medium text-white">Amministrazione:</span>{' '}
                <a href="mailto:info@lupetta.it" className="hover:text-white transition-colors">
                  info@lupetta.it
                </a>
              </li>
              <li className="mt-2 text-white/40 text-xs">
                Sede operativa: Via del Commercio, 2 - 26026 Pizzighettone (CR)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Tredì Italia Srl. Tutti i diritti riservati.
          Smart Feeding System® e Lupetta® sono marchi registrati.
        </div>
      </div>
    </footer>
  );
}
