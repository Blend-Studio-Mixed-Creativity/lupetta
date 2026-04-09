import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

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

const activeLinkClass = 'text-green-300 font-semibold';
const linkClass = 'text-white hover:text-green-300 transition-colors duration-200 text-sm font-medium';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-white text-xl font-bold tracking-tight">
              🐄 Lupetta
            </span>
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
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-md shadow-lg py-1 z-50">
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
              className="ml-2 px-4 py-2 bg-white text-green-800 rounded-md text-sm font-semibold hover:bg-green-100 transition-colors duration-200"
            >
              Contattaci
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-green-900 px-4 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `block py-2 text-sm font-medium border-b border-green-700 ${isActive ? 'text-green-300 font-semibold' : 'text-white hover:text-green-300'}`
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
                    `block py-2 pl-4 text-sm border-b border-green-700 ${isActive ? 'text-green-300 font-semibold' : 'text-green-200 hover:text-white'}`
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
    </nav>
  );
}
