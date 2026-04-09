import HeroSection from '../components/sections/Home/HeroSection';
import StatsRibbon from '../components/sections/Home/StatsRibbon';
import PanoramicaSection from '../components/sections/Home/PanoramicaSection';
import ComeFunzionaSteps from '../components/sections/Home/ComeFunzionaSteps';
import FeatureHighlight from '../components/sections/Home/FeatureHighlight';
import TestimonialSection from '../components/sections/Home/TestimonialSection';
import CtaFinale from '../components/sections/Home/CtaFinale';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <StatsRibbon />
      <PanoramicaSection />
      <ComeFunzionaSteps />
      <FeatureHighlight />
      <TestimonialSection />
      <CtaFinale />
    </div>
  );
}
