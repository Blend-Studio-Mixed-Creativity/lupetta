import HeroSection from '../components/sections/LupettaMaxi/HeroSection';
import CapacitaSection from '../components/sections/LupettaMaxi/CapacitaSection';
import MonitoraggioSection from '../components/sections/LupettaMaxi/MonitoraggioSection';
import CompatibilitaSection from '../components/sections/LupettaMaxi/CompatibilitaSection';
import VantaggiSection from '../components/sections/LupettaMaxi/VantaggiSection';

export default function LupettaMaxi() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <CapacitaSection />
      <MonitoraggioSection />
      <CompatibilitaSection />
      <VantaggiSection />
    </div>
  );
}


