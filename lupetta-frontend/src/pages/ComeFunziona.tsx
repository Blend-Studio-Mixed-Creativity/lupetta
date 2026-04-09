import HeroSection from '../components/sections/ComeFunziona/HeroSection';
import ProdottiSection from '../components/sections/ComeFunziona/ProdottiSection';
import ComparativaSection from '../components/sections/ComeFunziona/ComparativaSection';
import TecnologiaSection from '../components/sections/ComeFunziona/TecnologiaSection';

export default function ComeFunziona() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroSection />
      <ProdottiSection />
      <ComparativaSection />
      <TecnologiaSection />
    </div>
  );
}



