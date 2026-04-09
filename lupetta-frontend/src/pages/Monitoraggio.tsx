import HeroSection from '../components/sections/Monitoraggio/HeroSection';
import DashboardOverview from '../components/sections/Monitoraggio/DashboardOverview';
import ProfiliSection from '../components/sections/Monitoraggio/ProfiliSection';
import ProgrammazioneSection from '../components/sections/Monitoraggio/ProgrammazioneSection';
import RealTimeSection from '../components/sections/Monitoraggio/RealTimeSection';
import CtaSection from '../components/sections/Monitoraggio/CtaSection';

export default function Monitoraggio() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <DashboardOverview />
      <ProfiliSection />
      <ProgrammazioneSection />
      <RealTimeSection />
      <CtaSection />
    </div>
  );
}


