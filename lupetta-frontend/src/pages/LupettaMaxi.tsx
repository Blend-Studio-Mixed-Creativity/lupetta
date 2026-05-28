import HeroSection from '../components/sections/LupettaMaxi/HeroSection';
import CapacitaSection from '../components/sections/LupettaMaxi/CapacitaSection';
import PostSpecsBlocksSection from '../components/sections/LupettaMaxi/PostSpecsBlocksSection';
import ContattiMain from '../components/sections/Contatti/ContattiMain';

export default function LupettaMaxi() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <CapacitaSection />
      <PostSpecsBlocksSection />
      <ContattiMain />
    </div>
  );
}


