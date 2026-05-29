import { useScrollReveal } from '../../../hooks/useScrollReveal';
import ContactForm from '../shared/ContactForm';

export default function ContattiMain() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section ref={ref} className="bg-slate-50 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={isVisible ? 'sr-reveal-up' : 'sr-hidden'}>
          <ContactForm
            eyebrow="Contattaci"
            title={
              <>
                Siamo a tua <span className="montserrat-italic text-[#a5d97a]">disposizione</span>
              </>
            }
            description="Il team Lupetta è disponibile per supportarti nella scelta, installazione e gestione del tuo sistema di allattamento. Scrivici o chiamaci."
          />
        </div>

        {/* ── Mappa Google Maps ── */}
        <div
          className={`mt-16 sm:mt-24 rounded-3xl overflow-hidden h-80 sm:h-96 relative border border-slate-200/50 shadow-lg ${
            isVisible ? 'sr-reveal-up' : 'sr-hidden'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          <iframe
            title="Mappa Tredì Italia"
            src="https://maps.google.com/maps?q=Via%20del%20Commercio%2C%202%20-%2026026%20Pizzighettone%20(CR)&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
