import { useEffect, useRef, useState, useCallback } from 'react';

const METRICS = [
  { label: 'Lorem Ipsum', value: 98.5, color: '#62bc46', accent: '#4da835' },
  { label: 'Dolor Amet',  value: 94.2, color: '#006473', accent: '#018a80' },
  { label: 'Consectetur', value: 87.8, color: '#62bc46', accent: '#4da835' },
];

const FEATURES = [
  'Pellentesque habitant morbi tristique senectus',
  'Netus et malesuada fames ac turpis egestas',
  'Vestibulum tortor quam feugiat vitae ultricies',
  'Donec eu libero sit amet quam egestas semper',
];

/* ── Animated percentage counter ── */
function AnimatedValue({ target, visible, delay = 0 }: { target: number; visible: boolean; delay?: number }) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    const timer = setTimeout(() => {
      started.current = true;
      const duration = 1400;
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += target / steps;
        if (current >= target) {
          setDisplay(target);
          clearInterval(interval);
        } else {
          setDisplay(current);
        }
      }, stepTime);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, target, delay]);

  return <>{display.toFixed(1)}%</>;
}

/* ── Single mega bar ── */
function MegaBar({ label, value, color, accent, index, visible }: {
  label: string; value: number; color: string; accent: string;
  index: number; visible: boolean;
}) {
  const delay = index * 180;
  const shimmerDelay = delay + 1500;

  return (
    <div
      className="relative group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-60px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {/* Label row */}
      <div className="flex items-end justify-between mb-3 px-1">
        <span
          className="text-slate-800 font-bold text-xl md:text-2xl lg:text-3xl tracking-tight"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: `opacity 0.6s ease ${delay + 100}ms, transform 0.6s ease ${delay + 100}ms`,
          }}
        >
          {label}
        </span>
        <span
          className="font-black text-3xl md:text-4xl lg:text-5xl montserrat-heading tabular-nums"
          style={{
            color,
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.6)',
            transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + 200}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + 200}ms`,
          }}
        >
          <AnimatedValue target={value} visible={visible} delay={delay + 300} />
        </span>
      </div>

      {/* Bar track */}
      <div className="relative h-5 md:h-6 lg:h-7 bg-slate-100 rounded-xl overflow-hidden">
        {/* Fill */}
        <div
          className="absolute inset-y-0 left-0 rounded-2xl"
          style={{
            width: visible ? `${value}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${accent})`,
            transition: `width 1.4s cubic-bezier(0.16,1,0.3,1) ${delay + 200}ms`,
            boxShadow: `0 0 30px 0px ${color}55`,
          }}
        >
          {/* Shimmer sweep */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
              animation: visible
                ? `shimmer 2.5s ease ${shimmerDelay}ms infinite`
                : 'none',
            }}
          />
          {/* Glow pulse */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              animation: visible
                ? `glowPulseGreen 3s ease ${shimmerDelay + 500}ms infinite`
                : 'none',
            }}
          />
        </div>

        {/* Percentage marker line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/60 pointer-events-none"
          style={{
            left: visible ? `${value}%` : '0%',
            transition: `left 1.4s cubic-bezier(0.16,1,0.3,1) ${delay + 200}ms`,
            boxShadow: '0 0 8px rgba(255,255,255,0.8)',
          }}
        />
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function FeatureHighlight() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const observe = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = observe();
    return cleanup;
  }, [observe]);

  return (
    <section ref={ref} className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">

        {/* ── Top: text + features ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left text */}
          <div>
            <span
              className="text-[#006473] font-bold text-sm tracking-widest uppercase block mb-4"
              style={{
                opacity: visible ? 1 : 0,
                letterSpacing: visible ? '0.32em' : '0.05em',
                transition: 'opacity 0.6s ease 0.1s, letter-spacing 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
              }}
            >
              Lorem Feature
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight mb-6 overflow-hidden"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                filter: visible ? 'blur(0)' : 'blur(6px)',
                transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, filter 0.7s ease 0.2s',
              }}
            >
              Consectetur{' '}
              <span className="montserrat-italic text-[#62bc46]">Adipiscing</span>{' '}
              Elit
            </h2>
            <p
              className="text-lg text-slate-500 leading-relaxed"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
              }}
            >
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
            </p>
          </div>

          {/* Right features */}
          <ul className="space-y-4 lg:pt-16">
            {FEATURES.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(32px)',
                  transition: `opacity 0.6s ease ${0.4 + i * 0.08}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.08}s`,
                }}
              >
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 bg-[#62bc46]/20 text-[#62bc46] rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                <span className="text-slate-600 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Bottom: mega bars ── */}
        <div className="space-y-10">
          {/* Section divider */}
          <div
            className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 1s cubic-bezier(0.16,1,0.3,1) 0.5s, opacity 0.5s ease 0.5s',
            }}
          />

          {METRICS.map((m, i) => (
            <MegaBar key={i} {...m} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}