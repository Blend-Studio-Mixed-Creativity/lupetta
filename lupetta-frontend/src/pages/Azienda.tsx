import HeroAzienda from '../components/sections/Azienda/HeroAzienda';
import MissionSection from '../components/sections/Azienda/MissionSection';
import TimelineSection from '../components/sections/Azienda/TimelineSection';
import BasisSection from '../components/sections/Azienda/BasisSection';
import ClosingSection from '../components/sections/Azienda/ClosingSection';
import ContactSection from '../components/sections/Azienda/ContactSection';

export default function Azienda() {
  return (
    <div className="min-h-screen bg-white">
      <HeroAzienda />
      <MissionSection />
      <TimelineSection />
      <BasisSection />
      <ClosingSection />
      <ContactSection />
    </div>
  );
}
