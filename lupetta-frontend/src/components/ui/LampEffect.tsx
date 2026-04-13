import React from 'react';
import { motion } from 'motion/react';

export function LampContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-start lg:justify-center overflow-hidden w-full z-0 min-h-[100vh] lg:min-h-[120vh] pt-28 lg:pt-0 ${className}`}
      style={{ background: '#0b1a20' }}
    >
      <div className="relative flex w-full lg:flex-1 items-center justify-center isolate z-0 mt-8 lg:mt-0" style={{ transform: 'scaleY(1.25)' }}>
        {/* Left conic gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible"
          style={{
            backgroundImage: 'conic-gradient(from 70deg at center top, #65b32e, transparent, transparent)',
          }}
        >
          <div className="absolute w-full left-0 h-40 bottom-0 z-20" style={{ background: '#0b1a20', maskImage: 'linear-gradient(to top, white, transparent)' }} />
          <div className="absolute h-full left-0 bottom-0 z-20" style={{ width: '10rem', background: '#0b1a20', maskImage: 'linear-gradient(to right, white, transparent)' }} />
        </motion.div>

        {/* Right conic gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-auto left-1/2 h-56 overflow-visible"
          style={{
            backgroundImage: 'conic-gradient(from 290deg at center top, transparent, transparent, #006071)',
          }}
        >
          <div className="absolute h-full right-0 bottom-0 z-20" style={{ width: '10rem', background: '#0b1a20', maskImage: 'linear-gradient(to left, white, transparent)' }} />
          <div className="absolute w-full right-0 h-40 bottom-0 z-20" style={{ background: '#0b1a20', maskImage: 'linear-gradient(to top, white, transparent)' }} />
        </motion.div>

        {/* Background blur layer */}
        <div className="absolute top-1/2 h-48 w-full blur-2xl" style={{ transform: 'translateY(3rem) scaleX(1.5)', background: '#0b1a20' }} />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Glow orb */}
        <div className="absolute inset-auto z-50 h-36 rounded-full opacity-50 blur-3xl" style={{ width: '28rem', transform: 'translateY(-50%)', background: 'linear-gradient(135deg, #006071, #65b32e)' }} />

        {/* Animated glow line */}
        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '16rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-auto z-30 h-36 rounded-full blur-2xl"
          style={{ transform: 'translateY(-6rem)', background: 'linear-gradient(90deg, #65b32e, #006071)' }}
        />

        {/* Animated bright line */}
        <motion.div
          initial={{ width: '15rem' }}
          whileInView={{ width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-auto z-50"
          style={{ height: '2px', transform: 'translateY(-7rem)', background: 'linear-gradient(90deg, transparent, #65b32e, #006071, transparent)' }}
        />

        {/* Top dark cover */}
        <div className="absolute inset-auto z-40 h-44 w-full" style={{ transform: 'translateY(-12.5rem)', background: '#0b1a20' }} />
      </div>

      {/* Content */}
      <div className="relative z-50 flex flex-col items-center px-5 w-full mt-4 lg:-mt-32 pb-24">
        {children}
      </div>
    </div>
  );
}
