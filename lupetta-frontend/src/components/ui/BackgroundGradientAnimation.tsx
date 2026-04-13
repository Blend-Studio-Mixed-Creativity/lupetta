import { useEffect, useRef, useState } from 'react';

interface Props {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  interactive?: boolean;
}

export function BackgroundGradientAnimation({
  gradientBackgroundStart = 'rgb(0, 40, 50)',
  gradientBackgroundEnd = 'rgb(0, 20, 30)',
  firstColor = '0, 96, 113',
  secondColor = '101, 179, 46',
  thirdColor = '0, 200, 160',
  fourthColor = '0, 140, 80',
  fifthColor = '0, 80, 100',
  pointerColor = '101, 179, 46',
  size = '80%',
  blendingValue = 'hard-light',
  children,
  className = '',
  containerClassName = '',
  interactive = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty('--gradient-background-start', gradientBackgroundStart);
    el.style.setProperty('--gradient-background-end', gradientBackgroundEnd);
    el.style.setProperty('--first-color', firstColor);
    el.style.setProperty('--second-color', secondColor);
    el.style.setProperty('--third-color', thirdColor);
    el.style.setProperty('--fourth-color', fourthColor);
    el.style.setProperty('--fifth-color', fifthColor);
    el.style.setProperty('--pointer-color', pointerColor);
    el.style.setProperty('--size', size);
    el.style.setProperty('--blending-value', blendingValue);
  }, [firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue, gradientBackgroundStart, gradientBackgroundEnd]);

  useEffect(() => {
    let raf: number;
    const move = () => {
      setCurX(prev => prev + (tgX - prev) / 20);
      setCurY(prev => prev + (tgY - prev) / 20);
      const el = containerRef.current;
      if (el) {
        el.style.setProperty('--mouse-x', `${Math.round(curX)}px`);
        el.style.setProperty('--mouse-y', `${Math.round(curY)}px`);
      }
      raf = requestAnimationFrame(move);
    };
    raf = requestAnimationFrame(move);
    return () => cancelAnimationFrame(raf);
  }, [tgX, tgY, curX, curY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setTgX(e.clientX - rect.left);
    setTgY(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{
        background: 'linear-gradient(40deg, var(--gradient-background-start), var(--gradient-background-end))',
      }}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurme">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Animated orbs */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ filter: 'url(#blurme) blur(40px)' }}
      >
        {[
          { cls: 'animate-[var(--animate-first)]', color: 'var(--first-color)', top: 'calc(50% - var(--size) / 2)', left: 'calc(50% - var(--size) / 2)' },
          { cls: 'animate-[var(--animate-second)]', color: 'var(--second-color)', top: 'calc(50% - var(--size) / 2)', left: 'calc(50% - var(--size) / 2)', origin: 'calc(50% - 400px)' },
          { cls: 'animate-[var(--animate-third)]', color: 'var(--third-color)', top: 'calc(50% - var(--size) / 2 + 200px)', left: 'calc(50% - var(--size) / 2 - 500px)', origin: 'calc(50% + 400px)' },
          { cls: 'animate-[var(--animate-fourth)]', color: 'var(--fourth-color)', top: 'calc(50% - var(--size) / 2)', left: 'calc(50% - var(--size) / 2)', origin: 'calc(50% - 200px) calc(50% + 200px)' },
          { cls: 'animate-[var(--animate-fifth)]', color: 'var(--fifth-color)', top: 'calc(50% - var(--size) / 2 + 350px)', left: 'calc(50% - var(--size) / 2 - 350px)', origin: 'calc(50% - 800px) calc(50% + 200px)' },
        ].map((orb, i) => (
          <div
            key={i}
            className={`absolute ${orb.cls}`}
            style={{
              width: 'var(--size)',
              height: 'var(--size)',
              top: orb.top,
              left: orb.left,
              background: `radial-gradient(circle at center, rgba(${orb.color}, 0.8) 0%, rgba(${orb.color}, 0) 50%)`,
              mixBlendMode: blendingValue as React.CSSProperties['mixBlendMode'],
              transformOrigin: orb.origin ?? 'center center',
              opacity: 1,
            }}
          />
        ))}

        {/* Interactive pointer orb */}
        {interactive && (
          <div
            className="absolute"
            style={{
              width: 'var(--size)',
              height: 'var(--size)',
              top: 'var(--mouse-y, 50%)',
              left: 'var(--mouse-x, 50%)',
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle at center, rgba(${pointerColor}, 0.6) 0%, transparent 50%)`,
              mixBlendMode: blendingValue as React.CSSProperties['mixBlendMode'],
              opacity: 0.7,
              transition: 'opacity 0.3s ease',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}
