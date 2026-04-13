import HeroSection from '../components/sections/FAQ/HeroSection';
import AccordionSection from '../components/sections/FAQ/AccordionSection';
import InteractiveFAQSection from '../components/sections/FAQ/InteractiveFAQSection';
import ContattoSection from '../components/sections/FAQ/ContattoSection';

export default function FAQ() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <AccordionSection />
      <InteractiveFAQSection />
      <ContattoSection />
    </div>
  );
}


