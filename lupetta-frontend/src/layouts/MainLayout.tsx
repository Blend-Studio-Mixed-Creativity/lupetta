import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ANIM_SELECTOR = [
  '.animate-slide-up',
  '.animate-slide-left',
  '.animate-slide-right',
  '.animate-scale-in',
  '.animate-fade-in',
  '.animate-pop-in',
].join(', ');

function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
}

function useScrollRevealAll() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait one frame so React has finished rendering
    const raf = requestAnimationFrame(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(ANIM_SELECTOR));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.remove('sr-await');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (!isInView) {
          el.classList.add('sr-await');
        }
        observer.observe(el);
      });

      return () => observer.disconnect();
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);
}

/**
 * Rileva i dispositivi a bassa potenza e applica la classe `low-power` su <html>.
 * Combina due segnali:
 *  1) Hardware hints (core CPU e RAM) — degradazione immediata, prima del paint.
 *  2) Sonda FPS reale sui primi ~1.2s — se il device fa fatica davvero, degrada.
 * In `low-power` il CSS disattiva effetti continui, blur decorativi e backdrop-blur,
 * rendendo le animazioni fluide anche su telefoni/tablet datati.
 */
function useLowPowerMode() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains('low-power')) return;

    // 1) Hardware hints
    const cores = navigator.hardwareConcurrency ?? 8;
    // deviceMemory è non-standard: tipizzazione locale per evitare any.
    const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    const coarsePointer = window.matchMedia?.('(pointer: coarse)').matches ?? false;

    // iPhone 7 = 2 core, 2GB RAM, touch. Soglia deliberatamente generosa.
    if (cores <= 4 || mem <= 2 || (coarsePointer && cores <= 6)) {
      root.classList.add('low-power');
      return;
    }

    // 2) Sonda FPS: conta i frame per ~1.2s; se la media < 45fps → low-power.
    let frames = 0;
    let raf = 0;
    const start = performance.now();
    const sample = (now: number) => {
      frames++;
      const elapsed = now - start;
      if (elapsed >= 1200) {
        const fps = (frames / elapsed) * 1000;
        if (fps < 50) root.classList.add('low-power');
        return;
      }
      raf = requestAnimationFrame(sample);
    };
    raf = requestAnimationFrame(sample);
    return () => cancelAnimationFrame(raf);
  }, []);
}

export default function MainLayout() {
  useScrollToTop();
  useScrollRevealAll();
  useLowPowerMode();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isHomeHeroInViewport, setIsHomeHeroInViewport] = useState(
    () => typeof window === 'undefined' || window.scrollY < 200,
  );
  const isHomeHeroActive = pathname === '/' && isHomeHeroInViewport;

  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      setIsHomeHeroInViewport(window.scrollY < 200);
    };

    const initialFrame = requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(initialFrame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <button
        onClick={() => navigate(pathname === '/faq' ? '/faq?openGame=1' : '/faq?openGame=1')}
        title="Percorso guidato FAQ"
        className={`group fixed z-50 flex items-center gap-0 overflow-hidden rounded-full shadow-xl transition-all duration-500 hover:gap-2 hover:pr-5 hover:shadow-2xl cursor-pointer ${isHomeHeroActive
          ? 'bottom-3 sm:top-24 sm:bottom-auto lg:top-auto lg:bottom-32 right-3 sm:right-8 lg:right-10'
          : 'bottom-3 sm:bottom-8 lg:bottom-10 right-3 sm:right-8 lg:right-10'
          }`}
        style={{
          background: 'linear-gradient(135deg, #006071, #00c8a0)',
          marginRight: isHomeHeroActive ? 'calc(100vw - 100%)' : '0px'
        }}
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-white transition-all duration-300 group-hover:max-w-xs">
          Percorso guidato
        </span>
      </button>
    </div>
  );
}

