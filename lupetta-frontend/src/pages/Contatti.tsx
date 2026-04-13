import HeroContatti from '../components/sections/Contatti/HeroContatti';
import ContattiMain from '../components/sections/Contatti/ContattiMain';

export default function Contatti() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      <HeroContatti />
      <ContattiMain />
    </div>
  );
}
