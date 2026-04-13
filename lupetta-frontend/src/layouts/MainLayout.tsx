import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
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

export default function MainLayout() {
  useScrollToTop();
  useScrollRevealAll();

  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* FAB — Percorso guidato FAQ */}
      <Link
        to={pathname === '/faq' ? '#percorso-interattivo' : '/faq#percorso-interattivo'}
        title="Percorso guidato FAQ"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-0 overflow-hidden rounded-full shadow-xl transition-all duration-300 hover:gap-2 hover:pr-5 hover:shadow-2xl"
        style={{ background: 'linear-gradient(135deg, #006071, #00c8a0)' }}
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-white transition-all duration-300 group-hover:max-w-xs">
          Percorso guidato
        </span>
      </Link>
    </div>
  );
}

