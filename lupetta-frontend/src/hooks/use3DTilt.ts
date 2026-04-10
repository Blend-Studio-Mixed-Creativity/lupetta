import { useRef, useState } from 'react';

export function use3DTilt(maxAngle = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
    transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1), box-shadow 0.7s ease',
  });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rX = (0.5 - y) * maxAngle;
    const rY = (x - 0.5) * maxAngle;
    setTiltStyle({
      transform: `perspective(900px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.04,1.04,1.04)`,
      transition: 'transform 0.1s linear, box-shadow 0.1s linear',
    });
    setGlare({ x: x * 100, y: y * 100, opacity: 0.16 });
  };

  const onMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
      transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1), box-shadow 0.7s ease',
    });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return { ref, tiltStyle, glare, onMouseMove, onMouseLeave };
}
