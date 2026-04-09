import HeroSection from '../components/sections/CaseHistory/HeroSection';
import StatisticheSection from '../components/sections/CaseHistory/StatisticheSection';
import FeedbackSection from '../components/sections/CaseHistory/FeedbackSection';
import RisultatiSection from '../components/sections/CaseHistory/RisultatiSection';
import ComparativaSection from '../components/sections/CaseHistory/ComparativaSection';
import TecnologieSection from '../components/sections/CaseHistory/TecnologieSection';
import CtaSection from '../components/sections/CaseHistory/CtaSection';

export default function CaseHistory() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <StatisticheSection />
      <FeedbackSection />
      <RisultatiSection />
      <ComparativaSection />
      <TecnologieSection />
      <CtaSection />
    </div>
  );
}




