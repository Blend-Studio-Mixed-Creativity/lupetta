import HeroSection from '../components/sections/Gabbione/HeroSection';
import VantaggiSection from '../components/sections/Gabbione/VantaggiSection';
import RenderShowcaseSection from '../components/sections/Gabbione/RenderShowcaseSection';
import MontaggioSection from '../components/sections/Gabbione/MontaggioSection';
import CtaFinale from '../components/sections/Home/CtaFinale';

export default function Gabbione() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      <HeroSection />
      <VantaggiSection />
      <RenderShowcaseSection />
      <MontaggioSection />
      <CtaFinale />
    </div>
  );
}


