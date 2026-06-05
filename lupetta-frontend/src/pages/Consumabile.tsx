import HeroSection from '../components/sections/Consumabile/HeroSection';
import ProdottiSection from '../components/sections/Consumabile/ProdottiSection';
import NutrizioneSection from '../components/sections/Consumabile/NutrizioneSection';
import DosaggioSection from '../components/sections/Consumabile/DosaggioSection';
import ConservazioneSection from '../components/sections/Consumabile/ConservazioneSection';
import CtaFinale from '../components/sections/Home/CtaFinale';

export default function Consumabile() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      <HeroSection />
      <ProdottiSection />
      <NutrizioneSection />
      <DosaggioSection />
      <ConservazioneSection />
      <CtaFinale />
    </div>
  );
}


