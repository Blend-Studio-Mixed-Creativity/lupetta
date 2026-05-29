import { BackgroundGradientAnimation } from '../../ui/BackgroundGradientAnimation';
import ContactForm from '../shared/ContactForm';

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
      containerClassName="w-full py-16 sm:py-24 lg:py-32"
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl w-full mx-auto relative z-10 animate-fade-in-up">
        <ContactForm
          eyebrow="Scrivici"
          title={
            <>
              Invia un <span className="montserrat-italic text-[#a5d97a]">messaggio</span>
            </>
          }
        />
      </div>
    </BackgroundGradientAnimation>
  );
}
