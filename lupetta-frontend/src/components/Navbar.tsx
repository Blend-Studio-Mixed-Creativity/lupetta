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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* Top Bar */}
      <div className="bg-[#014f5c] py-1.5 px-4 text-xs flex justify-end items-center gap-6 sm:px-6 lg:px-8">
        <Link to="/mission" className="text-white/60 hover:text-white transition-colors tracking-wide">Mission</Link>
        <Link to="/risorse" className="text-white/60 hover:text-white transition-colors tracking-wide">Risorse</Link>
        <Link to="/approfondimenti" className="text-white/60 hover:text-white transition-colors tracking-wide">Approfondimenti</Link>
      </div>

      {/* Main Nav */}
      <nav className="bg-[#016573] shadow-lg shadow-[#016573]/30">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-[68px] gap-8">

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img src={logoImg} alt="Lupetta" className="h-11 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 flex-1">
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
                        [
                          'flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[14px] font-medium tracking-wide transition-all duration-200',
                          isActive ? 'text-white bg-white/15' : 'text-white/75 hover:text-white hover:bg-white/10',
                        ].join(' ')
                      }
                    >
                      {item.label}
                      <svg
                        className={['w-3 h-3 transition-transform duration-200', dropdownOpen ? 'rotate-180' : ''].join(' ')}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </NavLink>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 w-56 z-50 pt-2">
                        <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-slate-100 overflow-hidden py-1.5">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              className={({ isActive }) =>
                                [
                                  'flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150',
                                  isActive ? 'text-[#016573] font-semibold bg-[#016573]/5' : 'text-slate-600 hover:text-[#016573] hover:bg-[#016573]/5',
                                ].join(' ')
                              }
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#016573]/40 shrink-0" />
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
                      [
                        'px-3.5 py-2 rounded-lg text-[14px] font-medium tracking-wide transition-all duration-200',
                        isActive ? 'text-white bg-white/15' : 'text-white/75 hover:text-white hover:bg-white/10',
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}

              <Link
                to="/contatti"
                className="ml-auto px-5 py-2.5 bg-[#62bc46] text-white rounded-xl text-[14px] font-semibold tracking-wide hover:bg-[#52a83d] transition-all duration-200 shadow-md shadow-[#62bc46]/30 hover:shadow-lg hover:-translate-y-px"
              >
                Contattaci
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden ml-auto text-white/80 hover:text-white hover:bg-white/10 p-2.5 rounded-lg focus:outline-none transition-all"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Apri menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#016573] border-t border-white/10 shadow-xl">
          <div className="max-w-none mx-0 px-4 py-3 space-y-0.5">
            {NAV_ITEMS.map((item) => (
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    [
                      'block px-3 py-3 rounded-lg text-[15px] font-medium transition-all',
                      isActive ? 'text-white bg-white/15' : 'text-white/75 hover:text-white hover:bg-white/10',
                    ].join(' ')
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
                      [
                        'flex items-center gap-2 pl-7 pr-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                        isActive ? 'text-white bg-white/15' : 'text-white/60 hover:text-white hover:bg-white/10',
                      ].join(' ')
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="w-1 h-1 rounded-full bg-white/50" />
                    {child.label}
                  </NavLink>
                ))}
              </div>
            ))}
            <div className="pt-3 pb-1">
              <Link
                to="/contatti"
                className="flex items-center justify-center py-3 bg-[#62bc46] text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-[#52a83d] transition-all shadow-md"
                onClick={() => setMobileOpen(false)}
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}