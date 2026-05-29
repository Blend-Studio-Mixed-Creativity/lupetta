import ContactForm from '../shared/ContactForm';

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <ContactForm
        eyebrow="Contattaci"
        title={
          <>
            Parla con il <br />
            <span className="montserrat-italic text-[#a5d97a]">team Lupetta</span>
          </>
        }
      />
    </section>
  );
}
