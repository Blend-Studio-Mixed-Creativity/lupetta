import HeroSection from '../components/sections/Gabbione/HeroSection';
import TipologieSection from '../components/sections/Gabbione/TipologieSection';
import MontaggioSection from '../components/sections/Gabbione/MontaggioSection';
import NormativeSection from '../components/sections/Gabbione/NormativeSection';
import CtaSection from '../components/sections/Gabbione/CtaSection';

export default function Gabbione() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <TipologieSection />
      <MontaggioSection />
      <NormativeSection />
      <CtaSection />
    </div>
  );
}


