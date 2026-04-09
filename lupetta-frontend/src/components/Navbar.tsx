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

const activeLinkClass = 'text-white bg-white/20 rounded-lg px-3 py-1.5 font-semibold transition-colors duration-200';
const linkClass = 'text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 text-[15px] font-medium px-3 py-1.5 rounded-lg';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Menu Strip */}
      <div className="bg-[#016573] text-white py-1 px-4 text-xs flex justify-end gap-6 sm:px-6 lg:px-8">
        <Link to="/mission" className="hover:text-white/70 transition-colors">Mission</Link>
        <Link to="/risorse" className="hover:text-white/70 transition-colors">Risorse</Link>
        <Link to="/approfondimenti" className="hover:text-white/70 transition-colors">Approfondimenti</Link>
      </div>

      <nav className="bg-[#016573] text-white shadow-sm border-b border-[#016573]/20 transition-all duration-300">
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
                            `block px-4 py-2 text-sm text-gray-700 hover:bg-[#016573]/10 hover:text-[#016573] ${isActive ? 'text-[#016573] font-semibold bg-[#016573]/10' : ''}`
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
              className="ml-2 px-5 py-2.5 bg-white text-[#016573] rounded-xl text-[15px] font-semibold hover:bg-slate-100 shadow-sm shadow-white/20 transition-all duration-300"
            >
              Contattaci
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white/80 hover:bg-white/10 p-2 rounded-lg focus:outline-none transition-colors"
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
        <div className="lg:hidden bg-[#016573] px-4 pb-4 space-y-1 shadow-lg border-t border-[#016573]/20">
          {NAV_ITEMS.map((item) => (
            <div key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `block py-3 text-[15px] font-medium border-b border-[#016573]/20 ${isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white hover:bg-white/10'}`
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
                    `block py-3 pl-4 text-sm border-b border-[#016573]/20 ${isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white hover:bg-white/10'}`
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
            className="block mt-2 px-4 py-2 bg-white text-[#016573] rounded-md text-sm font-semibold text-center"
            onClick={() => setMobileOpen(false)}
          >
            Contattaci
          </Link>
        </div>
      )}
    </div>
  );
}
