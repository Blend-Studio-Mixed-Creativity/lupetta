import { BackgroundGradientAnimation } from '../../ui/BackgroundGradientAnimation';

export default function CtaSection() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(0, 30, 40)"
      gradientBackgroundEnd="rgb(0, 10, 20)"
      firstColor="0, 96, 113"
      secondColor="101, 179, 46"
      thirdColor="0, 200, 160"
      fourthColor="0, 130, 80"
      fifthColor="30, 60, 80"
      pointerColor="101, 179, 46"
      blendingValue="hard-light"
      containerClassName="w-full py-28 sm:py-36 lg:py-44"
      className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ color: '#65b32e' }}>
          Pronto a iniziare?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-8 text-white leading-[1.1]">
          Lorem ipsum <span className="montserrat-italic" style={{ color: '#ffffff' }}>dolor sit?</span>
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="group relative px-10 py-5 rounded-2xl font-bold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(101,179,46,0.5)]"
            style={{ background: 'linear-gradient(135deg, #65b32e, #50992a)' }}
          >
            <span className="relative z-10">Lorem Ipsum &rarr;</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #50992a, #65b32e)' }} />
          </button>
          <button className="px-10 py-5 rounded-2xl font-bold text-white/80 text-lg border border-white/20 backdrop-blur-sm hover:border-white/40 hover:text-white transition-all duration-300 hover:scale-105">
            Scopri di più
          </button>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}







