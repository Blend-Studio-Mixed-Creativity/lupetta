import { useScrollReveal } from '../../../hooks/useScrollReveal';

interface TechItem {
  iconPath: string;
  title: string;
  desc: string;
}

const TECH_ITEMS: TechItem[] = [
  { iconPath: 'M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z', title: 'Lorem Hardware', desc: 'Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero.' },
  { iconPath: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418', title: 'Ipsum Software', desc: 'Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et sapien.' },
  { iconPath: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z', title: 'Dolor Securitas', desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
  { iconPath: 'M3 13.5v6a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75zm6-8v14a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-14a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75zm6 4v10a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-10a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75z', title: 'Amet Analytics', desc: 'Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est mauris placerat.' },
  { iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', title: 'Consectetur Energia', desc: 'Quisque sit amet est et sapien ullamcorper pharetra vestibulum erat wisi condimentum sed.' },
  { iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', title: 'Adipiscing Protectio', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.' },
];

export default function TecnologiaSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section style={{ background: '#f8fafc', padding: '10rem 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Spline Model */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.45 }}>
        <div dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/1YxZ7K-Ej56DSFPG/scene.splinecode"></spline-viewer>' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'sr-reveal-up' : 'sr-hidden'}`}>
          <span style={{ color: '#006071', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem' }}>
            Technologia
          </span>
          <h2 className="montserrat-heading mt-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Lorem Ipsum <span className="montserrat-italic" style={{ color: '#006071' }}>Dolor</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TECH_ITEMS.map((tech, i) => (
            <div
              key={i}
              className={`${isVisible ? 'sr-reveal-scale' : 'sr-hidden'} ${'sr-delay-' + ((i % 3) + 1)}`}
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(20px)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05), inset 0 2px 0 rgba(255,255,255,1)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 20px 50px -10px rgba(0,96,113,0.15), inset 0 2px 0 rgba(255,255,255,1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(0,0,0,0.05), inset 0 2px 0 rgba(255,255,255,1)';
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  background: 'rgba(0,96,113,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <svg width={22} height={22} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#006071">
                  <path strokeLinecap="round" strokeLinejoin="round" d={tech.iconPath} />
                </svg>
              </div>
              <h3 className="montserrat-heading" style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.75rem' }}>
                {tech.title}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







