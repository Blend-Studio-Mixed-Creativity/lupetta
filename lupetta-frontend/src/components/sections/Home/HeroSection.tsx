import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import Player from '@vimeo/player';
import heroImg from '../../../assets/images/vitello1-lupetta.jpg';
import heroPoster from '../../../assets/images/shooting-slider/shooting-24.webp';
import { Spotlight } from '../../ui/spotlight-new';

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const bgIframeRef = useRef<HTMLIFrameElement | null>(null);

  // Force play background video via Vimeo Player API as soon as the iframe is ready.
  // NOTE: do NOT call player.destroy() in cleanup — it removes the iframe from the DOM,
  // which breaks the component on React StrictMode remounts.
  useEffect(() => {
    if (!bgIframeRef.current) return;
    const player = new Player(bgIframeRef.current);
    const handlePlaying = () => setIsVideoPlaying(true);
    player.on('playing', handlePlaying);
    player.ready().then(async () => {
      try {
        await player.setMuted(true);
        await player.setLoop(true);
        await player.setVolume(0);
        await player.play();
      } catch (err) {
        console.warn('[HeroSection] Vimeo autoplay failed:', err);
      }
    });
    return () => {
      player.off('playing', handlePlaying);
    };
  }, []);

  // Lock body scroll when modal is open + close on ESC
  useEffect(() => {
    if (!isVideoOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVideoOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isVideoOpen]);



  return (
    <section
      className="relative isolate overflow-hidden text-white min-h-screen sm:min-h-[80vh] md:min-h-[90vh] flex items-center justify-start"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Background Vimeo video (muted/looping) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          ref={bgIframeRef}
          src="https://player.vimeo.com/video/1196603172?background=1&autoplay=1&loop=1&muted=1&autopause=0&controls=0&badge=0&playsinline=1&dnt=1&app_id=58479&transparent=1"
          title="lupetta smart video"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          loading="eager"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto"
          style={{ border: 0, aspectRatio: '16/9' }}
        />
      </div>

      {/* Poster image shown until the Vimeo video actually starts playing */}
      <img
        src={heroPoster}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,10,15,0.55) 0%, rgba(0,60,75,0.35) 100%)' }} />

      {/* Spotlight Aceternity */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(185, 100%, 37%, .18) 0, hsla(154, 62%, 44%, .06) 50%, transparent 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(185, 100%, 37%, .12) 0, hsla(154, 62%, 44%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(154, 62%, 44%, .08) 0, transparent 80%)"
        translateY={-200} width={700} height={1200} smallWidth={300} duration={8} xOffset={120}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:py-32 md:py-40 lg:py-56 text-left relative z-10">
        <span className="inline-block py-2.5 px-6 rounded-2xl sm:rounded-full bg-[#65b32e]/10 border border-[#65b32e]/30 text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8 lg:mb-12 shadow-2xl backdrop-blur-md text-left leading-relaxed">
          <span className="bg-gradient-to-r from-emerald-300 to-[#65b32e] bg-clip-text text-transparent inline-block animate-pulse">Tecnologia</span><br className="sm:hidden" /> al servizio della tua stalla
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-5 sm:mb-6 md:mb-8 montserrat-italic text-balance text-left">
          <span className="block text-white">
            Con Lupetta migliori crescita, <br className="hidden sm:inline" />
            salute e performance dei tuoi animali.
          </span>
        </h1>
        <p className="text-[0.95rem] sm:text-lg md:text-xl text-white/80 max-w-5xl leading-relaxed mb-8 sm:mb-10 md:mb-14 text-left">
          Lupetta è l’allattatrice automatica progettata per garantire il massimo benessere dei vitelli<br className="hidden sm:inline" /> e semplificare la gestione quotidiana in azienda agricola.
        </p>
        <div className="w-full flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-3.5 sm:gap-6">
          <Link
            to="/come-funziona"
            className="group relative flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 bg-gradient-to-b from-[#65b32e] to-[#4fa028] text-white font-bold rounded-2xl shadow-[0_0_40px_rgba(101,179,46,0.5)] transition-all duration-500 sm:hover:scale-105 sm:hover:-translate-y-2 active:scale-95 sm:hover:shadow-[0_20px_60px_rgba(101,179,46,0.7)] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl overflow-hidden text-center"
          >
            <span className="relative z-10 flex items-center justify-center">
              Sistema brevettato Lupetta®
              <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </span>
          </Link>
          <Link
            to="/monitoraggio"
            className="group relative flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-500 sm:hover:scale-105 sm:hover:-translate-y-2 active:scale-95 sm:hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
            <span className="relative z-10 flex items-center justify-center">Casi studio reali</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="group relative flex sm:hidden items-center justify-center w-full px-6 py-3.5 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-500 active:scale-95 overflow-hidden text-center text-sm"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-[#65b32e]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Guarda il video
            </span>
          </button>
        </div>
      </div>

      {/* Play full video button (bottom-right) */}
      <button
        type="button"
        onClick={() => setIsVideoOpen(true)}
        aria-label="Guarda il video completo"
        className="group absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10 z-20 hidden sm:flex items-center gap-3 pl-4 pr-5 sm:pl-5 sm:pr-6 py-3 sm:py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/25 text-white font-semibold shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:bg-white/20 hover:border-white/50 sm:hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-[#65b32e] to-[#4fa028] shadow-[0_0_20px_rgba(101,179,46,0.6)]">
          <span className="absolute inset-0 rounded-full bg-[#65b32e]/40 animate-ping" />
          <svg className="relative w-5 h-5 sm:w-6 sm:h-6 translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="hidden sm:inline text-sm lg:text-base">Guarda il video</span>
      </button>

      {/* Full video modal */}
      {isVideoOpen && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setIsVideoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Video completo Lupetta"
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Chiudi video"
              className="absolute -top-12 right-0 sm:-top-14 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://player.vimeo.com/video/1196603422?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479"
                title="Lupetta Corporate V1"
                frameBorder={0}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}







