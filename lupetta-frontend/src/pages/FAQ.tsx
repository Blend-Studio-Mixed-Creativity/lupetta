import HeroSection from '../components/sections/FAQ/HeroSection';
import AccordionSection from '../components/sections/FAQ/AccordionSection';
import ContattoSection from '../components/sections/FAQ/ContattoSection';

export default function FAQ() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <AccordionSection />
      <ContattoSection />
    </div>
  );
}
