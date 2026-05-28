import HeroSection from '../components/sections/ComeFunziona/HeroSection';
import ShootingSliderSection from '../components/sections/ComeFunziona/ShootingSliderSection';
import ProdottiSection from '../components/sections/ComeFunziona/ProdottiSection';
import ComparativaSection from '../components/sections/ComeFunziona/ComparativaSection';
import ContattiMain from '../components/sections/Contatti/ContattiMain';

export default function ComeFunziona() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <ShootingSliderSection />
      <ProdottiSection />
      <ComparativaSection />
      <ContattiMain />
    </div>
  );
}



