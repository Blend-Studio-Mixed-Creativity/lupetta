import { useScrollReveal, useCountUp } from '../../../hooks/useScrollReveal';

function StatCard({ value, suffix = '', label, delay, idx }: { value: number; suffix?: string; label: string; delay: string; idx: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const count = useCountUp(value, 1800, isVisible);
  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center card-hover
        ${isVisible ? `sr-reveal-scale ${delay}` : 'sr-hidden'}`}
    >
      <div className={`text-3xl font-semibold text-[#006071] mb-1 montserrat-heading tabular-nums ${isVisible ? 'sr-counter-pop' : ''}`} style={{ animationDelay: `${0.3 + idx * 0.15}s` }}>
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-500 font-medium">{label}</div>
    </div>
  );
}

export default function StatisticheSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: 150, suffix: "+", label: "Lorem installati" },
          { value: 98, suffix: "%", label: "Ipsum soddisfatti" },
          { value: 35, suffix: "%", label: "Dolor Riduzione" },
          { value: 12, suffix: "", label: "Amet Regioni" },
        ].map((stat, i) => (
          <StatCard key={i} value={stat.value} suffix={stat.suffix} label={stat.label} delay={`sr-delay-${i + 1}`} idx={i} />
        ))}
      </div>
    </section>
  );
}







