import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../assets/images/logolupettaverdebianco.png';

interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Come Funziona',
    to: '/come-funziona',
    children: [
      { label: 'Lupetta Mini Wi-Fi', to: '/come-funziona/mini' },
      { label: 'Lupetta Maxi Tech', to: '/come-funziona/maxi' },
    ],
  },
  { label: 'Monitoraggio', to: '/monitoraggio' },
  { label: 'Gabbione', to: '/gabbione' },
  { label: 'Consumabile', to: '/consumabile' },
  { label: 'Benefici', to: '/benefici' },
  { label: 'Case History', to: '/case-history' },
  { label: 'FAQ', to: '/faq' },
];

const activeLinkClass = 'text-green-700 bg-green-50 rounded-lg px-3 py-1.5 font-semibold transition-colors duration-200';
const linkClass = 'text-slate-500 hover:text-green-700 hover:bg-slate-50 transition-colors duration-200 text-[15px] font-medium px-3 py-1.5 rounded-lg';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Menu Strip */}
      <div className="bg-slate-900 text-white py-1 px-4 text-xs flex justify-end gap-6 sm:px-6 lg:px-8">
        <Link to="/mission" className="hover:text-green-400 transition-colors">Mission</Link>
        <Link to="/risorse" className="hover:text-green-400 transition-colors">Risorse</Link>
        <Link to="/approfondimenti" className="hover:text-green-400 transition-colors">Approfondimenti</Link>
      </div>

      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={logoImg} alt="Lupetta" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `${linkClass} ${isActive ? activeLinkClass : ''} flex items-center gap-1`
                    }
                  >
                    {item.label}
                    <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </NavLink>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 w-52 z-50 pt-1">
                    <div className="bg-white rounded-md shadow-lg py-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 ${isActive ? 'text-green-700 font-semibold bg-green-50' : ''}`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeLinkClass : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <Link
              to="/contatti"
              className="ml-2 px-5 py-2.5 bg-green-600 text-white rounded-xl text-[15px] font-semibold hover:bg-green-700 shadow-sm shadow-green-600/20 transition-all duration-300"
            >
              Contattaci
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-slate-500 hover:bg-slate-50 p-2 rounded-lg focus:outline-none transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Apri menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 space-y-1 shadow-lg border-t border-slate-100">
          {NAV_ITEMS.map((item) => (
            <div key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `block py-3 text-[15px] font-medium border-b border-slate-100 ${isActive ? 'text-green-700 font-bold' : 'text-slate-600 hover:text-green-700 hover:bg-slate-50'}`
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
              {item.children?.map((child) => (
                <NavLink
                  key={child.to}
                  to={child.to}
                  className={({ isActive }) =>
                    `block py-3 pl-4 text-sm border-b border-slate-100 ${isActive ? 'text-green-700 font-bold' : 'text-slate-500 hover:text-green-700 hover:bg-slate-50'}`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  └ {child.label}
                </NavLink>
              ))}
            </div>
          ))}
          <Link
            to="/contatti"
            className="block mt-2 px-4 py-2 bg-white text-green-800 rounded-md text-sm font-semibold text-center"
            onClick={() => setMobileOpen(false)}
          >
            Contattaci
          </Link>
        </div>
      )}
    </div>
  );
}
