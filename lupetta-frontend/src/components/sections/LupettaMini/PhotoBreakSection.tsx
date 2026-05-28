type PhotoBreakSectionProps = {
  image: string;
  alt: string;
  position?: string;
};

export default function PhotoBreakSection({ image, alt, position = 'center' }: PhotoBreakSectionProps) {
  return (
    <section className="relative h-[42vh] sm:h-[48vh] lg:h-[56vh] min-h-80 overflow-hidden bg-[#0b1a20]">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
        loading="lazy"
        decoding="async"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,26,32,0.24) 0%, rgba(11,26,32,0.02) 42%, rgba(11,26,32,0.42) 100%)',
        }}
      />
    </section>
  );
}
