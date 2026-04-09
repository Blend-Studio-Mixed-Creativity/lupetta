import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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
  useScrollRevealAll();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

