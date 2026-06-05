import ContactForm from '../shared/ContactForm';

export default function CtaFinale() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-16 sm:py-20 md:py-20 lg:py-32">
      <ContactForm
        eyebrow="Contattaci"
        title={
          <>
            <span className="lg:whitespace-nowrap">Vuoi saperne di più su</span>
            <br />
            <span className="montserrat-italic text-[#a5d97a]">Lupetta?</span>
          </>
        }
      />
    </section>
  );
}
