import HeroSection from '../components/sections/Benefici/HeroSection';
import BeneficiSection from '../components/sections/Benefici/BeneficiSection';
import TestimonianzeSection from '../components/sections/Benefici/TestimonianzeSection';
import ContattiMain from '../components/sections/Contatti/ContattiMain';

export default function Benefici() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <BeneficiSection />
      <TestimonianzeSection />
      <ContattiMain />
    </div>
  );
}


