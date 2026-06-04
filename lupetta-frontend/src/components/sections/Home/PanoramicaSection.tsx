import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const CARDS = [
  {
    num: '01',
    iconPath:
      'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
    title: 'Mantenimento del latte alla temperatura preimpostata',
    tag: 'Approccio',
    desc: 'Lupetta mantiene il latte alla temperatura definita dall’allevatore, così da garantire una somministrazione più costante e adatta alle esigenze del vitello.',
    subdesc: 'Questo aiuta a preservare la qualità del pasto e a rendere l’alimentazione quotidiana più regolare.',
    color: '#006071',
    accent: '#00a8c0',
    glow: 'rgba(0,168,192,0.45)',
    bgMesh:
      'radial-gradient(at 0% 0%, rgba(0,168,192,0.18) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0,96,113,0.22) 0px, transparent 50%)',
  },
  {
    num: '02',
    iconPath:
      'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
    title: 'Distribuzione programmata dei pasti durante la giornata',
    tag: 'Approccio',
    desc: 'Il sistema permette di distribuire i pasti in diversi momenti della giornata, evitando somministrazioni troppo concentrate.',
    subdesc: 'In questo modo il vitello può alimentarsi con maggiore continuità, seguendo un ritmo più naturale e controllato.',
    color: '#65b32e',
    accent: '#8fd44e',
    glow: 'rgba(143,212,78,0.45)',
    bgMesh:
      'radial-gradient(at 0% 0%, rgba(143,212,78,0.18) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(101,179,46,0.22) 0px, transparent 50%)',
  },
  {
    num: '03',
    iconPath:
      'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z',
    title: 'Monitoraggio costante dei parametri',
    tag: 'Approccio',
    desc: 'Lupetta consente di controllare in modo continuo i principali parametri della macchina, come temperatura del latte, livello disponibile e stato di funzionamento.',
    subdesc: 'L’allevatore può così verificare rapidamente che tutto proceda correttamente e intervenire in caso di anomalie.',
    color: '#006071',
    accent: '#00a8c0',
    glow: 'rgba(0,168,192,0.45)',
    bgMesh:
      'radial-gradient(at 0% 0%, rgba(0,168,192,0.18) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0,96,113,0.22) 0px, transparent 50%)',
  },
];

const total = CARDS.length;

const spring = { type: 'spring' as const, stiffness: 110, damping: 26, mass: 1.1, restDelta: 0.001 };

export default function PanoramicaSection() {
  const { ref: headerRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [active, setActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function prev() { setActive(a => Math.max(0, a - 1)); }
  function next() { setActive(a => Math.min(total - 1, a + 1)); }

  const c = CARDS[active];

  function cardTransform(pos: number) {
    // pos: -1, 0, 1 (clamped). Only the centered card is visible; siblings are fully hidden.
    const center = pos === 0;
    return {
      x: `${pos * 58}%`,
      scale: center ? 1 : 0.82,
      rotateY: pos * -22,
      z: center ? 0 : -180,
      opacity: center ? 1 : 0,
      zIndex: center ? 10 : 0,
    };
  }

  return (
    <section
      style={{
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background:
          'radial-gradient(ellipse at 10% 0%, rgba(0,168,192,0.06) 0%, transparent 50%), radial-gradient(ellipse at 90% 100%, rgba(101,179,46,0.05) 0%, transparent 50%), linear-gradient(170deg, #f8fafc 0%, #f0f7ff 100%)',
        padding: 'clamp(2rem, 5vw, 5rem) 0',
        overflow: 'hidden',
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-12 grid lg:grid-cols-2 gap-8 items-end ${isVisible ? 'sr-reveal-up' : 'sr-hidden'}`}
        >
          <div>
            <span
              style={{
                color: '#65b32e',
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 2,
                  background: 'linear-gradient(90deg, #65b32e, transparent)',
                  borderRadius: 2,
                }}
              />
              Panoramica
            </span>
            <h2 className="montserrat-heading text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.05]">
              Cosa posso fare con Lupetta?
            </h2>
          </div>
          <p className="text-slate-500 text-lg leading-relaxed lg:text-right">
            Pensata per adattarsi a diverse gestioni di allevamento, Lupetta<br className="hidden sm:inline" />
            è disponibile in più configurazioni, dalla versione per singola<br className="hidden sm:inline" />
            gabbia fino ai sistemi per la gestione di gruppi in box.
          </p>
        </div>

        {/* 3D Stage */}
        <div
          className="relative select-none"
          style={{
            height: 'clamp(340px, 46vw, 520px)',
            perspective: '1600px',
            perspectiveOrigin: '50% 50%',
          }}
        >
          {CARDS.map((card, i) => {
            const raw = i - active;
            const pos = Math.max(-1, Math.min(1, raw > total / 2 ? raw - total : raw < -total / 2 ? raw + total : raw));
            const t = cardTransform(pos);
            const isCenter = pos === 0;

            return (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  zIndex: t.zIndex,
                  pointerEvents: isCenter ? 'auto' : 'none',
                  willChange: 'transform, opacity',
                }}
                animate={t}
                transition={spring}
                drag={isCenter ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80 && active < total - 1) next();
                  else if (info.offset.x > 80 && active > 0) prev();
                }}
              >
                <motion.div
                  className="w-full h-full rounded-[28px] flex flex-col relative overflow-hidden cursor-pointer"
                  onClick={() => { if (isCenter) setIsModalOpen(true); }}
                  whileHover={isCenter ? { y: -6 } : undefined}
                  transition={spring}
                  style={{
                    background: `${card.bgMesh}, linear-gradient(150deg, #ffffff 0%, #f8fafc 100%)`,
                    border: `1px solid rgba(255,255,255,0.9)`,
                    boxShadow: isCenter
                      ? `0 50px 100px -20px ${card.glow}, 0 30px 60px -30px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,1)`
                      : '0 20px 40px rgba(15,23,42,0.12)',
                  }}
                >
                  {/* Gradient border ring */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: 28,
                      padding: 1.5,
                      background: `linear-gradient(135deg, ${card.color}55, transparent 40%, ${card.accent}33)`,
                      WebkitMask:
                        'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Floating blurred orb top-right */}
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      top: -80,
                      right: -80,
                      width: 280,
                      height: 280,
                      background: `radial-gradient(circle, ${card.accent}40 0%, transparent 70%)`,
                      pointerEvents: 'none',
                    }}
                  />
                  {/* Floating orb bottom-left */}
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      bottom: -60,
                      left: -60,
                      width: 220,
                      height: 220,
                      background: `radial-gradient(circle, ${card.color}28 0%, transparent 70%)`,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Top accent bar */}
                  <div
                    style={{
                      height: 3,
                      background: `linear-gradient(90deg, transparent, ${card.color}, ${card.accent}, ${card.color}, transparent)`,
                      boxShadow: `0 0 18px 2px ${card.glow}`,
                    }}
                  />

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 sm:p-9 md:p-11 lg:p-14 relative z-10">
                    <div className="flex items-start justify-between mb-6 sm:mb-10">
                      <div
                        style={{
                          width: 72,
                          height: 72,
                          borderRadius: 22,
                          background: `linear-gradient(135deg, ${card.color}, ${card.accent})`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 14px 30px -8px ${card.glow}, inset 0 1px 0 rgba(255,255,255,0.3)`,
                        }}
                      >
                        <svg
                          style={{ width: 34, height: 34, color: '#fff' }}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.6}
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={card.iconPath} />
                        </svg>
                      </div>
                      <span
                        className="montserrat-heading font-black tabular-nums"
                        style={{
                          fontSize: 'clamp(4rem, 7vw, 6rem)',
                          background: `linear-gradient(180deg, ${card.color}22 0%, ${card.color}05 100%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          lineHeight: 1,
                          letterSpacing: '-0.06em',
                        }}
                      >
                        {card.num}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: card.color,
                        marginBottom: '0.85rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: card.accent,
                          boxShadow: `0 0 8px ${card.glow}`,
                        }}
                      />
                      {card.tag}
                    </span>

                    <h3
                      className="montserrat-heading mb-6"
                      style={{
                        fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                        lineHeight: 1.1,
                        letterSpacing: '-0.025em',
                        color: '#0f172a',
                      }}
                    >
                      {card.title}
                    </h3>

                    <div className="hidden sm:block">
                      <p style={{ color: 'rgba(51,65,85,0.92)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                        {card.desc}
                      </p>
                      <p style={{ color: 'rgba(100,116,139,0.85)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                        {card.subdesc}
                      </p>
                    </div>
                    <div className="sm:hidden mt-2">
                      <span
                        className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${card.color}12, ${card.accent}12)`,
                          border: `1px solid ${card.color}33`,
                          color: card.color,
                        }}
                      >
                        Tocca per leggere
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </span>
                    </div>

                    <div
                      style={{
                        marginTop: 'auto',
                        paddingTop: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                      }}
                    >
                      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${card.color}44, transparent)` }} />
                      <span
                        style={{
                          color: card.color,
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {active + 1} / {total}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
          <button
            onClick={prev}
            disabled={active === 0}
            aria-label="Precedente"
            style={{
              width: 54,
              height: 54,
              borderRadius: '50%',
              border: '1.5px solid rgba(0,96,113,0.18)',
              background: 'rgba(255,255,255,0.9)',
              color: '#006071',
              cursor: active === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0,96,113,0.12)',
              opacity: active === 0 ? 0.35 : 1,
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              if (active > 0) {
                (e.currentTarget as HTMLButtonElement).style.background = '#006071';
                (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)';
              }
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.9)';
              (e.currentTarget as HTMLButtonElement).style.color = '#006071';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            }}
          >
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: 'clamp(160px, 32vw, 240px)',
                height: 4,
                borderRadius: 999,
                background: 'rgba(15,23,42,0.08)',
                overflow: 'hidden',
              }}
            >
              <motion.div
                animate={{ width: `${((active + 1) / total) * 100}%` }}
                transition={spring}
                style={{
                  height: '100%',
                  borderRadius: 999,
                  background: `linear-gradient(90deg, ${c.color}, ${c.accent})`,
                  boxShadow: `0 0 12px 2px ${c.glow}`,
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {CARDS.map((cd, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Vai alla slide ${i + 1}`}
                  style={{
                    width: i === active ? 34 : 10,
                    height: 10,
                    borderRadius: 999,
                    background: i === active ? `linear-gradient(90deg, ${cd.color}, ${cd.accent})` : 'rgba(15,23,42,0.18)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
                    boxShadow: i === active ? `0 0 12px 2px ${cd.glow}` : 'none',
                  }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={next}
            disabled={active === total - 1}
            aria-label="Successivo"
            style={{
              width: 54,
              height: 54,
              borderRadius: '50%',
              border: '1.5px solid rgba(0,96,113,0.18)',
              background: 'rgba(255,255,255,0.9)',
              color: '#006071',
              cursor: active === total - 1 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0,96,113,0.12)',
              opacity: active === total - 1 ? 0.35 : 1,
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              if (active < total - 1) {
                (e.currentTarget as HTMLButtonElement).style.background = '#006071';
                (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)';
              }
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.9)';
              (e.currentTarget as HTMLButtonElement).style.color = '#006071';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            }}
          >
            <svg width={20} height={20} fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal Mobile */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[999] p-5 flex items-center justify-center sm:hidden"
            onClick={() => setIsModalOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" />
            <motion.div
              className="relative w-full rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center overflow-hidden"
              style={{
                background: `${c.bgMesh}, linear-gradient(150deg, #ffffff 0%, #f8fafc 100%)`,
                border: `1px solid ${c.color}33`,
                boxShadow: `0 30px 80px ${c.glow}`,
              }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={spring}
              onClick={e => e.stopPropagation()}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, transparent, ${c.color}, ${c.accent}, ${c.color}, transparent)`,
                  boxShadow: `0 0 20px 4px ${c.glow}`,
                }}
              />
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 18,
                  background: `linear-gradient(135deg, ${c.color}, ${c.accent})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: `0 12px 28px -6px ${c.glow}`,
                }}
              >
                <svg style={{ width: 32, height: 32, color: '#fff' }} fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={c.iconPath} />
                </svg>
              </div>
              <h4 className="montserrat-heading text-slate-900 text-3xl mb-4">{c.title}</h4>
              <p style={{ color: 'rgba(51,65,85,0.92)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}>{c.desc}</p>
              <p style={{ color: 'rgba(100,116,139,0.8)', fontSize: '0.9rem', lineHeight: 1.5 }}>{c.subdesc}</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-8 text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all active:scale-95"
                style={{
                  color: '#fff',
                  background: `linear-gradient(135deg, ${c.color}, ${c.accent})`,
                  border: 'none',
                  boxShadow: `0 8px 20px -4px ${c.glow}`,
                }}
              >
                Chiudi
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
