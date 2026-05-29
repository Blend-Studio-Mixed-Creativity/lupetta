import { useScrollReveal } from '../../../hooks/useScrollReveal';
import vitelloImg from '../../../assets/images/shooting-slider/shooting-04.webp';


export default function BasisSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="basis-section"
      ref={ref}
      className="py-10 sm:py-12 lg:py-16 bg-white overflow-hidden"
      style={{ minHeight: 'auto' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-center">

          {/* Image */}
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 0.9s ease 0.2s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s',
            }}
          >
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] -z-10"
              style={{ background: 'linear-gradient(135deg, rgba(101,179,46,0.18), rgba(0,96,113,0.15))' }}
            />
            <img
              src={vitelloImg}
              alt="Vitello allattato dalla madre"
              className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 0.9s ease 0.35s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s',
            }}
          >
            <span className="text-[#006071] font-bold text-sm tracking-[0.32em] uppercase block mb-5">
              Le basi del progetto
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mb-8 leading-tight text-balance">
              Nelle prime fasi di vita, ogni animale ha bisogno di pasti{' '}
              <span className="montserrat-italic text-accent">frequenti e moderati</span>.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Da questa semplice osservazione del comportamento naturale del vitello nasce Lupetta: un sistema pensato per riprodurre, con la precisione della tecnologia, quello che la natura fa da sempre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
