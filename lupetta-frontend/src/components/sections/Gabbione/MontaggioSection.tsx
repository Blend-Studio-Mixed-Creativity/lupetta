import { Timeline } from '../../ui/timeline';
import type { TimelineEntry } from '../../ui/timeline';
import { Wrench, Package, Settings, CheckCircle } from 'lucide-react';

const STEPS: TimelineEntry[] = [
  {
    title: 'Step 1',
    content: (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#006071]/20 flex-shrink-0">
            <Package className="w-5 h-5 text-[#006071]" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#65b32e]">Preparazione strutturale</span>
            <h4 className="text-lg font-semibold text-white">Lorem ipsum preparatio</h4>
          </div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet est.</p>
      </div>
    ),
  },
  {
    title: 'Step 2',
    content: (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#65b32e]/20 flex-shrink-0">
            <Wrench className="w-5 h-5 text-[#65b32e]" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#65b32e]">Montaggio principale</span>
            <h4 className="text-lg font-semibold text-white">Dolor sit montaggio structurale</h4>
          </div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Pellentesque habitant morbi tristique senectus.</p>
      </div>
    ),
  },
  {
    title: 'Step 3',
    content: (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#006071]/20 flex-shrink-0">
            <Settings className="w-5 h-5 text-[#006071]" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#65b32e]">Integrazione</span>
            <h4 className="text-lg font-semibold text-white">Consectetur integrazione sistema</h4>
          </div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam.</p>
      </div>
    ),
  },
  {
    title: 'Step 4',
    content: (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#65b32e]/20 flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-[#65b32e]" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#65b32e]">Verifica finale</span>
            <h4 className="text-lg font-semibold text-white">Adipiscing verificatio finalis</h4>
          </div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra vestibulum.</p>
      </div>
    ),
  },
];

export default function MontaggioSection() {
  return (
    <section className="dark w-full relative overflow-hidden" style={{ background: '#0d1f26' }}>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      {/* Central radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #006071 0%, #65b32e 100%)' }} />

      <div className="relative z-10 pt-16 sm:pt-24">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-10 mb-0">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#65b32e]">Processo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-4">
            Montaggio e <span className="montserrat-italic" style={{ color: '#65b32e' }}>Configurazione</span>
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl leading-relaxed">
            Segui i passaggi per un'installazione strutturale perfetta
          </p>
        </div>

        <Timeline data={STEPS} />
      </div>
    </section>
  );
}








