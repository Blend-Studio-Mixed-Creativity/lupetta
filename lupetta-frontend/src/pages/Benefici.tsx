import HeroSection from '../components/sections/Benefici/HeroSection';
import NutrizioneSection from '../components/sections/Benefici/NutrizioneSection';
import VantaggiTecnologiaSection from '../components/sections/Benefici/VantaggiTecnologiaSection';
import ManutenzioneSection from '../components/sections/Benefici/ManutenzioneSection';

export default function Benefici() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <NutrizioneSection />
      <VantaggiTecnologiaSection />
      <ManutenzioneSection />
    </div>
  );
}


