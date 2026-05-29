import HeroSection from '../components/sections/Benefici/HeroSection';
import BeneficiSection from '../components/sections/Benefici/BeneficiSection';
import TestimonianzeSection from '../components/sections/Benefici/TestimonianzeSection';
import CtaFinale from '../components/sections/Home/CtaFinale';

export default function Benefici() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <BeneficiSection />
      <TestimonianzeSection />
      <CtaFinale />
    </div>
  );
}


