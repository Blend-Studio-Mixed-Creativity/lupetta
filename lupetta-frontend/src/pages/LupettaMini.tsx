import HeroSection from '../components/sections/LupettaMini/HeroSection';
import DimensioniSection from '../components/sections/LupettaMini/DimensioniSection';
import MaterialiSection from '../components/sections/LupettaMini/MaterialiSection';
import ControlloRemotoSection from '../components/sections/LupettaMini/ControlloRemotoSection';
import UsoIdealeSection from '../components/sections/LupettaMini/UsoIdealeSection';

export default function LupettaMini() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <DimensioniSection />
      <MaterialiSection />
      <ControlloRemotoSection />
      <UsoIdealeSection />
    </div>
  );
}
