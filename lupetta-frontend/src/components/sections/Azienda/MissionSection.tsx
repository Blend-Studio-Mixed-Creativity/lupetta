import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function MissionSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className="text-[#006071] font-bold text-sm tracking-widest uppercase block mb-5"
          style={{
            opacity: isVisible ? 1 : 0,
            letterSpacing: isVisible ? '0.32em' : '0.05em',
            transition: 'opacity 0.6s ease 0.1s, letter-spacing 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        >
          La nostra missione
        </span>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight text-balance"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            filter: isVisible ? 'blur(0)' : 'blur(6px)',
            transition:
              'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s, filter 0.7s ease 0.2s',
          }}
        >
          Ridurre le <span className="text-[#65b32e] font-semibold">interazioni negative</span> nel successo zootecnico utilizzando{' '}
          <span className="montserrat-italic text-[#006071]">nuove tecnologie</span>.
        </h2>

        <span
          aria-hidden
          className="block mx-auto w-16 h-[3px] rounded-full mt-10"
          style={{
            background: 'linear-gradient(90deg, #65b32e, #006071)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.5s',
          }}
        />
      </div>
    </section>
  );
}
