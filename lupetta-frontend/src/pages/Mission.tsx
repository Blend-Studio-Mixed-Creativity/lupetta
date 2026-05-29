import CtaFinale from '../components/sections/Home/CtaFinale';

export default function Mission() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-8 sm:mb-12 tracking-tight">
          Mission
        </h1>
        <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-3xl shadow-sm border border-slate-100 inline-block w-full max-w-4xl min-h-[300px] sm:min-h-[400px]">
        </div>
      </div>
      <CtaFinale />
    </div>
  );
}


