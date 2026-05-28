import HeroSection from '../components/sections/LupettaMini/HeroSection';
import DimensioniSection from '../components/sections/LupettaMini/DimensioniSection';
import MaterialiSection from '../components/sections/LupettaMini/MaterialiSection';
import ControlloRemotoSection from '../components/sections/LupettaMini/ControlloRemotoSection';
import UsoIdealeSection from '../components/sections/LupettaMini/UsoIdealeSection';
import PhotoBreakSection from '../components/sections/LupettaMini/PhotoBreakSection';
import photoBreak1 from '../assets/images/lupetta-mini-break-01.webp';
import photoBreak2 from '../assets/images/lupetta-mini-break-02.webp';
import photoBreak3 from '../assets/images/lupetta-mini-break-03.webp';

export default function LupettaMini() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <DimensioniSection />
      <PhotoBreakSection image={photoBreak1} alt="Lupetta Mini installata in stalla" position="center" />
      <MaterialiSection />
      <PhotoBreakSection image={photoBreak2} alt="Vitelli in ambiente di allevamento" position="center" />
      <ControlloRemotoSection />
      <PhotoBreakSection image={photoBreak3} alt="Dettaglio operativo della Lupetta Mini in allevamento" position="center" />
      <UsoIdealeSection />
    </div>
  );
}


