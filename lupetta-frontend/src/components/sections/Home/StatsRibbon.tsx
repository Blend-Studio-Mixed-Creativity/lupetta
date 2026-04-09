import { useScrollReveal, useCountUp } from '../../../hooks/useScrollReveal';

const STATS = [
  { num: 1200, format: 'it', suffix: '+', label: 'Lorem Ipsum' },
  { num: 98,   suffix: '%',               label: 'Dolor Amet' },
  { num: 0,    display: '24/7',           label: 'Sit Consectetur' },
  { num: 45,   suffix: '%',               label: 'Adipiscing Elit' },
];

function StatCard({
  num, suffix = '', format, display, label, delayClass,
}: {
  num: number; suffix?: string; format?: string; display?: string; label: string; delayClass: string;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const count = useCountUp(num, 2000, isVisible && !display);

  const formatted = display
    ? display
    : format === 'it' && count >= 1000
    ? `${Math.floor(count / 1000)}.${String(count % 1000).padStart(3, '0')}${suffix}`
    : `${count}${suffix}`;

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center card-hover
        ${isVisible ? `sr-reveal-scale ${delayClass}` : 'sr-hidden'}`}
    >
      <div
        className={`text-3xl font-extrabold text-[#62bc46] mb-1 montserrat-heading tabular-nums
          ${isVisible ? 'sr-counter-pop' : ''}`}
        style={{ animationDelay: '0.45s' }}
      >
        {formatted}
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </div>
  );
}

export default function StatsRibbon() {
  return (
    <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <StatCard key={i} {...stat} delayClass={`sr-delay-${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

