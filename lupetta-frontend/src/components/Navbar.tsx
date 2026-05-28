import { useState, useCallback, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logolupettaverdebianco.png';
import navImg0 from '../assets/images/mucca.webp';
import navImg1 from '../assets/images/latte-per-vitelli-lupetta.webp';
import navImg2 from '../assets/images/vitello1-lupetta.jpg';
import navImg3 from '../assets/images/vitello-lupetta3.webp';
import navImg4 from '../assets/images/impianto latte.jpg';
import navImg5 from '../assets/images/vitellino.png';
import navImg6 from '../assets/images/vitello.jpg';
import navImg7 from '../assets/images/coselupetta.jpg';
import navImg8 from '../assets/images/allevamento-lupetta.jpg';

const NAV_IMAGES = [navImg0, navImg1, navImg2, navImg3, navImg4, navImg5, navImg6, navImg7, navImg8];

interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Azienda', to: '/azienda' },
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
  const [isOpen, setIsOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Scroll detection
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Parallax mouse tracking
  const onMove = useCallback((e: React.MouseEvent) => {
    setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
  }, []);

  const tx = (f: number) => mouse.x * f + 'px';
  const ty = (f: number) => mouse.y * f + 'px';

  return (
    <>
      {/* ═══ FIXED HEADER BAR ═══ */}
      <header
        className={[
          'fixed top-0 left-0 right-0 z-[110] transition-all duration-500',
          isOpen
            ? 'bg-transparent shadow-none'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="flex items-center justify-between pl-0 pr-1 sm:px-6 lg:px-12 h-20">
          {/* Logo — visible only in hero zone, fades out on scroll & menu open */}
          <Link
            to="/"
            className={[
              'relative z-[120] transition-all duration-500 -ml-10 sm:ml-0',
              isOpen || scrolled ? 'opacity-0 -translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0',
            ].join(' ')}
          >
            <img
              src={logoImg}
              alt="Lupetta"
              className="h-11 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Hamburger — white in hero, dark when scrolled, white when menu open */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="relative z-[120] w-14 h-14 flex flex-col items-center justify-center gap-[7px] group cursor-pointer"
            aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            <span
              className={[
                'block h-[2px] rounded-full transition-all duration-500 origin-center',
                isOpen
                  ? 'w-7 bg-white rotate-45 translate-y-[9px]'
                  : scrolled
                    ? 'w-7 bg-[#016573] group-hover:w-5 group-hover:translate-x-1'
                    : 'w-7 bg-white group-hover:w-5 group-hover:translate-x-1',
              ].join(' ')}
            />
            <span
              className={[
                'block w-7 h-[2px] rounded-full transition-all duration-300',
                isOpen ? 'opacity-0 scale-x-0' : 'opacity-100',
                isOpen ? 'bg-white' : scrolled ? 'bg-[#016573]' : 'bg-white',
              ].join(' ')}
            />
            <span
              className={[
                'block h-[2px] rounded-full transition-all duration-500 origin-center',
                isOpen
                  ? 'w-7 bg-white -rotate-45 -translate-y-[9px]'
                  : scrolled
                    ? 'w-7 bg-[#016573] group-hover:w-5 group-hover:-translate-x-1'
                    : 'w-7 bg-white group-hover:w-5 group-hover:-translate-x-1',
              ].join(' ')}
            />
          </button>
        </div>
      </header>

      {/* ═══ FULLSCREEN OVERLAY ═══ */}
      <div
        className={[
          'fixed inset-0 z-[100] transition-[clip-path] duration-[800ms] ease-[cubic-bezier(0.77,0,0.18,1)]',
          isOpen ? '' : 'pointer-events-none',
        ].join(' ')}
        style={{
          clipPath: isOpen
            ? 'circle(150% at calc(100% - 3.25rem) 2.5rem)'
            : 'circle(0% at calc(100% - 3.25rem) 2.5rem)',
        }}
        onMouseMove={onMove}
      >
        {/* Gradient BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#016573] via-[#018a80] to-[#013d47]" />

        {/* ── Hover Image Overlay ── */}
        {NAV_IMAGES.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{ opacity: hoveredIndex === i ? 1 : 0 }}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#013d47]/80" />
          </div>
        ))}

        {/* ── Parallax Orbs ── */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-3xl pointer-events-none transition-transform duration-[1500ms] ease-out"
          style={{ transform: 'translate(' + tx(40) + ',' + ty(40) + ')' }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#62bc46]/[0.08] blur-3xl pointer-events-none transition-transform duration-[2000ms] ease-out"
          style={{ transform: 'translate(' + tx(-25) + ',' + ty(-25) + ')' }}
        />
        <div
          className="absolute top-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-white/[0.03] blur-2xl pointer-events-none transition-transform duration-[2500ms] ease-out"
          style={{ transform: 'translate(' + tx(60) + ',' + ty(60) + ')' }}
        />

        {/* ── Subtle Grid ── */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
          <div className="absolute left-0 top-1/3 h-px w-full bg-white" />
          <div className="absolute left-0 top-2/3 h-px w-full bg-white" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 h-full overflow-y-auto">
          <div className="relative min-h-full flex flex-col justify-center px-4 sm:px-8 lg:px-16 xl:px-20 pt-20 lg:pt-24 pb-8 lg:pb-10">

            <div className="w-full max-w-4xl">
              {/* Nav Links */}
              <nav className="space-y-0">
              {NAV_ITEMS.map((item, i) => (
                <div key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={[
                      'group flex items-center gap-2 sm:gap-3 lg:gap-5 py-1 lg:py-1.5 px-4 rounded-xl transition-all',
                      isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16',
                      'duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]',
                      'hover:bg-white/10',
                    ].join(' ')}
                    style={{ transitionDelay: isOpen ? (200 + i * 70) + 'ms' : '0ms' }}
                  >
                    {({ isActive }) => (
                      <>
                        <span className="text-white/20 text-xs font-mono w-6 shrink-0 text-right tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={[
                            'text-xl sm:text-2xl lg:text-[2.1rem] xl:text-[2.4rem] font-bold tracking-tight transition-all duration-300 leading-tight montserrat-heading',
                            isActive ? 'text-[#65b32e]' : 'text-white group-hover:text-slate-300',
                          ].join(' ')}
                        >
                          {item.label}
                        </span>
                        <span className="hidden lg:block h-px flex-1 bg-white/0 group-hover:bg-white/10 transition-all duration-500 origin-left group-hover:scale-x-100 scale-x-0" />
                      </>
                    )}
                  </NavLink>

                  {/* Sub-items */}
                  {item.children && (
                    <div className="flex flex-col gap-0 pl-6 sm:pl-10 lg:pl-12 mb-0.5">
                      {item.children.map((child, j) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          onClick={() => setIsOpen(false)}
                          className={[
                            'group/sub flex items-center gap-3 py-1 transition-all',
                            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
                            'duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]',
                          ].join(' ')}
                          style={{ transitionDelay: isOpen ? (280 + i * 70 + j * 50) + 'ms' : '0ms' }}
                        >
                          {({ isActive }) => (
                            <>
                              <span
                                className={[
                                  'w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300',
                                  isActive ? 'bg-[#65b32e] scale-125' : 'bg-white/30 group-hover/sub:bg-slate-400',
                                ].join(' ')}
                              />
                              <span
                                className={[
                                  'text-base lg:text-lg font-medium transition-colors duration-300 montserrat-heading',
                                  isActive ? 'text-[#65b32e]' : 'text-white/50 group-hover/sub:text-slate-300',
                                ].join(' ')}
                              >
                                {child.label}
                              </span>
                            </>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              </nav>

              {/* Bottom — CTA + Secondary Links */}
              <div
                className={[
                  'mt-6 lg:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700',
                  isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
                ].join(' ')}
                style={{ transitionDelay: isOpen ? '850ms' : '0ms' }}
              >
                <Link
                  to="/contatti"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3.5 bg-[#62bc46] text-white font-semibold rounded-xl hover:bg-[#52a83d] transition-all duration-300 shadow-lg shadow-[#62bc46]/30 hover:shadow-xl hover:-translate-y-0.5 tracking-wide montserrat-heading"
                >
                  Contattaci
                </Link>
              </div>
            </div>

            {/* Brand — bottom right */}
            <div
              className={[
                'hidden lg:flex absolute right-0 bottom-12 flex-col items-end text-right pr-8 lg:pr-12 transition-all duration-700',
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              ].join(' ')}
              style={{ transitionDelay: isOpen ? '420ms' : '0ms' }}
            >
              <div className="flex flex-col items-end">
                <img
                  src={logoImg}
                  alt="Lupetta"
                  className="w-44 xl:w-52 2xl:w-56 mb-4 drop-shadow-2xl self-end"
                />
                <p className="text-white/35 text-xs xl:text-sm tracking-[0.18em] uppercase font-light whitespace-nowrap">
                  Allattatrice Intelligente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}