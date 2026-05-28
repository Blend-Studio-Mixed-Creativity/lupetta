import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

const galleryImages = Object.entries(
  import.meta.glob('../../../assets/images/shooting-slider/*.webp', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, 'it', { numeric: true }))
  .map(([, src]) => src as string);

function pickImages(order: number[]) {
  return order.map((index) => galleryImages[index - 1]).filter(Boolean);
}

const firstRow = pickImages([1, 10, 20, 5, 11, 26, 16, 4, 7, 14, 22, 18, 13]);
const secondRow = pickImages([3, 9, 21, 8, 12, 25, 17, 23, 6, 15, 2, 19, 24]);

function MarqueeRow({
  images,
  reverse = false,
  onSelect,
}: {
  images: string[];
  reverse?: boolean;
  onSelect: (src: string) => void;
}) {
  const repeatedImages = [...images, ...images];

  return (
    <div className="shooting-marquee">
      <div className="shooting-marquee-track" style={{ animationDirection: reverse ? 'reverse' : 'normal' }}>
        {repeatedImages.map((src, index) => (
          <div className="shooting-marquee-item" key={`${src}-${index}`}>
            <button
              type="button"
              className="shooting-marquee-button"
              onClick={() => onSelect(src)}
              aria-label="Apri foto Lupetta"
            >
              <img src={src} alt="" loading="lazy" decoding="async" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ShootingSliderSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(248,250,252,0.94) 0%, rgba(255,255,255,1) 32%, rgba(248,250,252,0.82) 100%)',
        }}
      />
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mb-10 sm:mb-12">
          <span className="text-primary font-bold text-sm tracking-[0.32em] uppercase block mb-4">
            Sul campo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight text-balance">
            Lupetta al lavoro, ogni giorno in stalla.
          </h2>
        </div>
      </div>

      <div className="relative space-y-5 sm:space-y-6">
        <MarqueeRow images={firstRow} onSelect={setSelectedImage} />
        <MarqueeRow images={secondRow} reverse onSelect={setSelectedImage} />
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-90 flex items-center justify-center px-4 py-6 sm:px-8"
          role="dialog"
          aria-modal="true"
          aria-label="Foto Lupetta ingrandita"
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/88 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
            aria-label="Chiudi foto"
          />
          <div className="relative z-10 w-full max-w-6xl">
            <button
              type="button"
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white border border-white/20 hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Chiudi foto"
              autoFocus
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <img
              src={selectedImage}
              alt="Foto Lupetta in stalla"
              className="max-h-[82vh] w-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <style>{`
        .shooting-marquee {
          width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 7%, #000 93%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 7%, #000 93%, transparent 100%);
        }

        .shooting-marquee-track {
          display: flex;
          gap: clamp(0.85rem, 1.7vw, 1.35rem);
          width: max-content;
          animation: shooting-marquee 54s linear infinite;
          will-change: transform;
        }

        .shooting-marquee:nth-of-type(2) .shooting-marquee-track {
          animation-duration: 62s;
        }

        .shooting-marquee-item {
          flex: 0 0 auto;
          width: clamp(17rem, 27vw, 29rem);
          aspect-ratio: 4 / 3;
          border-radius: 8px;
          overflow: hidden;
          background: #e2e8f0;
          box-shadow: 0 18px 45px -26px rgba(0, 96, 113, 0.45);
        }

        .shooting-marquee-button {
          width: 100%;
          height: 100%;
          display: block;
          cursor: zoom-in;
        }

        .shooting-marquee-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @keyframes shooting-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(calc(-50% - clamp(0.425rem, 0.85vw, 0.675rem)), 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shooting-marquee-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
