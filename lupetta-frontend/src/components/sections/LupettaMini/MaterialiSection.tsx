import { useRef, useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const ITEMS = [
  {
    iconPath:
      'M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z',
    title: 'Lorem Materialis',
    subtitle: 'Resistenza',
    desc: 'Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante.',
    color: '#65b32e',
    glow: 'rgba(101,179,46,0.45)',
  },
  {
    iconPath:
      'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z',
    title: 'Ipsum Hygienia',
    subtitle: 'Igiene',
    desc: 'Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est.',
    color: '#006071',
    glow: 'rgba(0,96,113,0.45)',
  },
  {
    iconPath:
      'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
    title: 'Dolor Aquaticus',
    subtitle: 'Impermeabilità',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames.',
    color: '#65b32e',
    glow: 'rgba(101,179,46,0.45)',
  },
];

type ItemProps = (typeof ITEMS)[number] & { index: number; parentVisible: boolean };

function MaterialCard({ iconPath, title, subtitle, desc, color, glow, index, parentVisible }: ItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: -dy * 8, y: dx * 8 });
  }

  return (
    <div
      className={parentVisible ? 'sr-reveal-scale' : 'sr-hidden'}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setHovered(false);
          setTilt({ x: 0, y: 0 });
        }}
        style={{
          background: 'white',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          border: hovered ? `1.5px solid ${color}44` : '1.5px solid #f1f5f9',
          boxShadow: hovered
            ? `0 24px 60px ${glow.replace('0.45', '0.15')}, 0 2px 8px rgba(0,0,0,0.06)`
            : '0 2px 12px rgba(0,0,0,0.05)',
          transform: hovered
            ? `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px) scale(1.02)`
            : 'perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)',
          transition: hovered
            ? 'box-shadow 0.2s ease, border-color 0.2s ease, transform 0.1s ease'
            : 'box-shadow 0.5s ease, border-color 0.5s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1)',
          willChange: 'transform',
          cursor: 'default',
        }}
      >
        {/* Header banner */}
        <div
          style={{
            height: 120,
            background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />
          <div
            style={{ position: 'absolute', top: -16, right: -16, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}
          />
          <div
            style={{ position: 'absolute', bottom: -20, left: -8, width: 96, height: 96, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }}
          />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg
              width={44}
              height={44}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.3}
              stroke="white"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem 1.75rem 2rem' }}>
          <span
            style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color }}
          >
            {subtitle}
          </span>
          <h3 className="montserrat-heading text-2xl text-slate-900 mt-2 mb-4">{title}</h3>
          <p className="text-slate-500 text-base leading-relaxed">{desc}</p>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            height: 2,
            background: `linear-gradient(90deg, transparent, ${color}66, transparent)`,
          }}
        />
      </div>
    </div>
  );
}

export default function MaterialiSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div ref={ref} className={`text-center mb-12 sm:mb-16 lg:mb-20 ${isVisible ? 'sr-reveal-up' : 'sr-hidden'}`}>
          <span
            style={{
              color: '#65b32e',
              fontWeight: 800,
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Sezione 2
          </span>
          <h2 className="montserrat-heading text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight mt-4">
            Materiali e Design <span className="montserrat-italic text-accent">Costruttivo</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ITEMS.map((item, i) => (
            <MaterialCard key={i} {...item} index={i} parentVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}







