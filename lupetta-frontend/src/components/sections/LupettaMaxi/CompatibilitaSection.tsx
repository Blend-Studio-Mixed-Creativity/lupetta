import { useState, useRef } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const MODULI = [
  { label: 'Lorem modulus A', job: 'Tipologia Gabbione 01', num: '01' },
  { label: 'Ipsum modulus B', job: 'Tipologia Gabbione 02', num: '02' },
  { label: 'Dolor modulus C', job: 'Tipologia Gabbione 03', num: '03' },
  { label: 'Amet modulus D', job: 'Tipologia Gabbione 04', num: '04' },
];

const DELAYS = [0.05, 0.18, 0.31, 0.44];

interface CardProps {
  mod: (typeof MODULI)[0];
  i: number;
  isVisible: boolean;
}

function ModuleCard({ mod, i, isVisible }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: -dy * 9, y: dx * 9 });
  }

  const delay = DELAYS[i];

  return (
    <div
      ref={cardRef}
      className={`flex flex-col items-center rounded-2xl overflow-hidden relative select-none ${isVisible ? 'sr-reveal-scale' : 'sr-hidden'}`}
      style={{
        background: '#006071',
        boxShadow: hovered
          ? '0 28px 64px rgba(0,96,113,0.55), 0 0 0 1.5px rgba(101,179,46,0.55), 0 0 32px rgba(101,179,46,0.2)'
          : '1px 5px 40px 0px rgba(0,96,113,0.35)',
        transform: hovered
          ? `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-12px) scale(1.04)`
          : 'perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)',
        transition: hovered
          ? 'box-shadow 0.2s ease, transform 0.1s ease'
          : 'box-shadow 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        animationDelay: `${delay}s`,
        willChange: 'transform',
        zIndex: hovered ? 10 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
    >
      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 pointer-events-none z-20 rounded-2xl"
        style={{
          background: 'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.09) 50%, transparent 80%)',
          backgroundSize: '300% 100%',
          backgroundPosition: hovered ? '0% 0' : '200% 0',
          transition: 'background-position 0.7s ease',
        }}
      />

      {/* Top accent bar — grows from 0 on scroll reveal */}
      <div
        style={{
          height: 7,
          background: 'linear-gradient(90deg, #65b32e 0%, #4fa028 100%)',
          width: isVisible ? '62%' : '0%',
          borderRadius: '0 0 10px 10px',
          transition: `width 0.8s cubic-bezier(0.16,1,0.3,1) ${delay + 0.3}s`,
          boxShadow: hovered ? '0 0 16px 3px rgba(101,179,46,0.65)' : '0 2px 8px rgba(101,179,46,0.25)',
        }}
      />

      {/* Number badge */}
      <span
        className="absolute top-3 right-4 text-xs font-semibold tracking-widest"
        style={{ color: 'rgba(101,179,46,0.4)' }}
      >
        {mod.num}
      </span>

      {/* Floating icon */}
      <div
        style={{
          width: 56,
          height: 56,
          marginTop: 24,
          background: 'linear-gradient(135deg, #65b32e 0%, #4fa028 100%)',
          borderRadius: 14,
          boxShadow: hovered
            ? '0 0 28px 8px rgba(101,179,46,0.55)'
            : '0 4px 16px rgba(101,179,46,0.28)',
          animation: isVisible
            ? `subtleFloat 3.5s ease-in-out ${delay + 0.7}s infinite`
            : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      />

      {/* Label */}
      <span className="font-semibold text-white text-center text-sm leading-tight mt-4 px-4 relative z-10">
        {mod.label}
      </span>

      {/* Subtitle */}
      <p className="text-white/40 text-xs text-center mt-1 px-4 relative z-10">{mod.job}</p>

      {/* Separator */}
      <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', width: 'calc(100% - 2.5rem)', margin: '14px 0 0' }} />

      {/* Button */}
      <button
        className="mt-4 mb-5 px-6 py-2 rounded-lg text-white text-xs font-semibold relative z-10"
        style={{
          background: 'linear-gradient(90deg, #65b32e, #4fa028)',
          transform: hovered ? 'scale(1.09)' : 'scale(1)',
          boxShadow: hovered ? '0 6px 22px rgba(101,179,46,0.5)' : '0 2px 8px rgba(101,179,46,0.22)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          letterSpacing: '0.05em',
        }}
      >
        Scopri
      </button>
    </div>
  );
}

export default function CompatibilitaSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        <div ref={ref} className="order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {MODULI.map((mod, i) => (
              <ModuleCard key={i} mod={mod} i={i} isVisible={isVisible} />
            ))}
          </div>
        </div>
        <div
          className={`order-1 lg:order-2 ${isVisible ? 'sr-reveal-right' : 'sr-hidden'}`}
          style={{ animationDelay: '0.12s' }}
        >
          <span className="text-[#006071] font-bold text-sm tracking-widest uppercase">Sezione 3</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-8">
            Compatibilità con gabbioni di <span className="montserrat-italic text-[#006071]">movimento e moduli aggiuntivi</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet est et sapien ullamcorper pharetra.
          </p>
        </div>
      </div>
    </section>
  );
}







