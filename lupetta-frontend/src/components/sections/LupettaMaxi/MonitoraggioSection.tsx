import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { LampContainer } from '../../ui/LampEffect';

const ITEMS = [
  { iconPath: 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.566 14.587-5.566 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z', title: 'Lorem Sensorem', desc: 'Vestibulum tortor quam feugiat vitae ultricies.', color: '#006071' },
  { iconPath: 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z', title: 'Ipsum Visio', desc: 'Donec eu libero sit amet quam egestas semper.', color: '#65b32e' },
  { iconPath: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z', title: 'Dolor Temperatura', desc: 'Aenean ultricies mi vitae est mauris placerat.', color: '#006071' },
  { iconPath: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z', title: 'Amet Securitas', desc: 'Pellentesque habitant morbi tristique senectus.', color: '#65b32e' },
];

type TiltCardProps = (typeof ITEMS)[number] & { index: number };

function TiltCard({ iconPath, title, desc, color, index }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [cardStyle, setCardStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease',
    transformStyle: 'preserve-3d',
  });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rX = (0.5 - y) * 22;
    const rY = (x - 0.5) * 22;
    setCardStyle({
      transform: `perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.06,1.06,1.06)`,
      transition: 'transform 0.08s linear, box-shadow 0.08s linear',
      transformStyle: 'preserve-3d',
      boxShadow: `${rY * -2}px ${rX * 2}px 50px -8px ${color}66, 0 25px 70px -15px rgba(0,0,0,0.3)`,
    });
    setGlare({ x: x * 100, y: y * 100, opacity: 0.3 });
  };

  const onLeave = () => {
    setCardStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
      transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.7s ease',
      transformStyle: 'preserve-3d',
    });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 35, rotateY: index % 2 === 0 ? -15 : 15, y: 80, scale: 0.85 }}
      whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0, scale: 1 }}
      transition={{ delay: index * 0.15, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ perspective: '1200px' }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ ...cardStyle, background: 'rgba(11, 26, 32, 0.85)', backdropFilter: 'blur(16px)' }}
        className="relative flex flex-col rounded-2xl shadow-lg cursor-default border border-white/10 overflow-hidden"
      >
        {/* Animated border glow */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 hover:opacity-100 pointer-events-none z-30"
          style={{
            transition: 'opacity 0.5s ease',
            background: `linear-gradient(135deg, ${color}44, transparent 40%, transparent 60%, ${color}44)`,
          }}
        />

        {/* Glare overlay */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-20 overflow-hidden"
          style={{ opacity: glare.opacity, transition: 'opacity 0.3s ease' }}
        >
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.55) 0%, transparent 65%)` }}
          />
        </div>

        {/* Floating banner */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.4, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative mx-4 -mt-6 h-36 overflow-hidden rounded-xl group"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, ${color}bb 100%)`,
            boxShadow: `0 16px 32px -8px ${color}55`,
            transform: 'translateZ(40px)',
          }}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:18px_18px]" />
          {/* Decorative blobs */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute -bottom-8 -left-4 w-32 h-32 rounded-full bg-white/5" />
          {/* Icon with 3D float */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.svg
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.15 + 0.6, duration: 0.7, type: 'spring', stiffness: 200, damping: 15 }}
              viewport={{ once: true }}
              className="w-16 h-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.3}
              stroke="currentColor"
              style={{ filter: 'drop-shadow(0 4px 14px rgba(0,0,0,0.35))' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
            </motion.svg>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 pb-8"
          style={{ transform: 'translateZ(20px)' }}
        >
          <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{title}</h3>
          <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
        </motion.div>

        {/* Bottom accent line with pulse */}
        <div
          className="absolute bottom-0 left-6 right-6 h-px rounded-full"
          style={{ background: `linear-gradient(90deg, transparent, ${color}88, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function MonitoraggioSection() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <span className="font-bold text-sm tracking-widest uppercase" style={{ color: '#65b32e' }}>Sezione 2</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight mt-3" style={{ color: '#fff' }}>
            Tecnologie avanzate di <span className="montserrat-italic" style={{ color: '#65b32e' }}>monitoraggio e sicurezza</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {ITEMS.map((item, i) => (
            <TiltCard key={i} {...item} index={i} />
          ))}
        </div>
      </motion.div>
    </LampContainer>
  );
}







