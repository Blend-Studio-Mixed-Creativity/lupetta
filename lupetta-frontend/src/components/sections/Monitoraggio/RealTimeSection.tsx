import { useScrollReveal } from '../../../hooks/useScrollReveal';

const COLUMNS = [
  { label: 'Lun', low: 20, high: 75, open: 35, close: 62 },
  { label: 'Mar', low: 30, high: 90, open: 55, close: 40 },
  { label: 'Mer', low: 15, high: 80, open: 40, close: 72 },
  { label: 'Gio', low: 40, high: 95, open: 70, close: 50 },
  { label: 'Ven', low: 25, high: 85, open: 45, close: 78 },
  { label: 'Sab', low: 10, high: 65, open: 30, close: 55 },
  { label: 'Dom', low: 35, high: 88, open: 60, close: 42 },
];

const CHART_H = 140; // px canvas height

function CandleChart({ visible }: { visible: boolean }) {
  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-1 sm:gap-2" style={{ height: CHART_H }}>
        {COLUMNS.map((col, i) => {
          const bullish = col.close >= col.open;
          const color = bullish ? '#65b32e' : '#4fa028';
          const bodyTop = Math.min(col.open, col.close);
          const bodyH = Math.abs(col.close - col.open);
          const range = col.high - col.low;

          // Normalize everything relative to CHART_H
          const wickTopPct   = ((100 - col.high) / 100) * CHART_H;
          const bodyTopPct   = ((100 - bodyTop - bodyH) / 100) * CHART_H;
          const bodyHeightPx = (bodyH / 100) * CHART_H;
          const wickHeight   = (range / 100) * CHART_H;

          return (
            <div
              key={i}
              className="flex-1 flex flex-col items-center relative"
              style={{ height: CHART_H }}
            >
              {/* Wick */}
              <div
                className="w-px absolute left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  background: color,
                  top: wickTopPct,
                  height: visible ? wickHeight : 0,
                  opacity: visible ? 0.6 : 0,
                  transition: `height 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s, opacity 0.5s ease ${i * 0.07}s`,
                }}
              />
              {/* Body */}
              <div
                className="absolute left-1 right-1 rounded-sm"
                style={{
                  background: color,
                  top: bodyTopPct,
                  height: visible ? bodyHeightPx : 0,
                  opacity: visible ? 1 : 0,
                  transition: `height 0.6s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.07}s, opacity 0.4s ease ${0.15 + i * 0.07}s`,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* X labels */}
      <div className="flex justify-between mt-2 gap-1 sm:gap-2">
        {COLUMNS.map((col, i) => (
          <span key={i} className="flex-1 text-center text-[10px] text-white/40 font-medium">
            {col.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#65b32e] opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#65b32e]" />
    </span>
  );
}

export default function RealTimeSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

        {/* Chart card */}
        <div ref={ref} className={`order-2 lg:order-1 ${isVisible ? 'sr-reveal-left' : 'sr-hidden'}`}>
          <div className="bg-[#006071] rounded-3xl p-7 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#65b32e]/8 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-1 relative z-10">
              <h3 className="text-xl font-semibold text-white">Consumo Settimanale</h3>
              <LiveDot />
            </div>
            <p className="text-white/40 text-sm mb-8 relative z-10">Litri somministrati per giorno</p>

            {/* Y-axis labels + chart */}
            <div className="flex gap-2 relative z-10">
              <div className="flex flex-col justify-between text-[10px] text-white/30 pr-1" style={{ height: CHART_H }}>
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>
              <div className="flex-1">
                {/* Grid lines */}
                <div className="relative" style={{ height: CHART_H }}>
                  {[0, 25, 50, 75, 100].map((pct) => (
                    <div
                      key={pct}
                      className="absolute left-0 right-0 border-t border-white/5"
                      style={{ top: `${100 - pct}%` }}
                    />
                  ))}
                  <div className="absolute inset-0">
                    <CandleChart visible={isVisible} />
                  </div>
                </div>
                {/* X labels rendered inside CandleChart */}
                <div className="flex justify-between mt-2 gap-1 sm:gap-2">
                  {COLUMNS.map((col, i) => (
                    <span key={i} className="flex-1 text-center text-[10px] text-white/40 font-medium">
                      {col.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#65b32e] inline-block" />
                <span className="text-xs text-white/50">Rialzo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#4fa028] inline-block opacity-70" />
                <span className="text-xs text-white/50">Calo</span>
              </div>
              <span className="ml-auto text-xs text-white/30">Settimana 14 — 2026</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className={`order-1 lg:order-2 ${isVisible ? 'sr-reveal-right' : 'sr-hidden'}`}>
          <span className="text-[#006071] font-semibold text-sm tracking-widest uppercase">Real-Time</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4 mb-8">
            Monitoraggio in Tempo Reale della <span className="montserrat-italic text-[#006071]">Somministrazione</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
          </p>
          <h3 className="text-xl text-slate-800">Visualizzazione Consumi</h3>
          <p className="text-slate-500 leading-relaxed mb-5">
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend.
          </p>
          <h3 className="text-xl text-slate-800">Comportamenti Alimentari</h3>
          <p className="text-slate-500 leading-relaxed">
            Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero sit amet quam.
          </p>
        </div>
      </div>
    </section>
  );
}








