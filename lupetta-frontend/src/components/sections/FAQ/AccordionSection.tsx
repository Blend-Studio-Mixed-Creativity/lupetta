import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from './faqData';

/* ─────────────────────────────────────────────
   Icona domanda
───────────────────────────────────────────── */
function IconQuestion() {
  return (
    <svg width="26" height="26" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Icona risposta
───────────────────────────────────────────── */
function IconAnswer() {
  return (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

const iconCircle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #006071, #00c8a0)',
  boxShadow: '0 4px 16px rgba(0,96,113,0.35)',
};

/* ─────────────────────────────────────────────
   Singola FAQ con animazione in-view
───────────────────────────────────────────── */
function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hoverQ, setHoverQ] = useState(false);
  const [hoverA, setHoverA] = useState(false);

  const fromLeft = index % 2 === 0;
  // riduce lo spostamento orizzontale su mobile per evitare overflow
  const xAmount = typeof window !== 'undefined' && window.innerWidth < 640 ? 24 : 60;

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -xAmount : xAmount }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      {/* Riga domanda */}
      <motion.div
        className="flex flex-row items-stretch mb-2"
        onHoverStart={() => setHoverQ(true)}
        onHoverEnd={() => setHoverQ(false)}
      >
        <motion.div
          className="hidden sm:flex items-center justify-center p-3 mr-4 rounded-full border-4 border-white shrink-0 self-center"
          style={iconCircle}
          animate={hoverQ ? { scale: 1.15, rotate: 15, boxShadow: '0 0 28px rgba(0,200,160,0.6)' } : { scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
          <IconQuestion />
        </motion.div>
        <motion.div
          className="px-4 sm:px-7 py-4 sm:py-5 w-full flex items-center rounded-2xl cursor-default relative overflow-hidden"
          style={{ background: 'rgb(241,245,249)' }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          {/* shimmer */}
          <AnimatePresence>
            {hoverQ && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,200,160,0.08) 50%, transparent 100%)' }}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            )}
          </AnimatePresence>
          <motion.h4
            className="text-sm sm:text-base leading-6 font-semibold text-slate-800 relative z-10"
            animate={hoverQ ? { x: 4, color: '#006071' } : { x: 0, color: '#1e293b' }}
            transition={{ duration: 0.2 }}
          >
            {faq.q}
          </motion.h4>
        </motion.div>
      </motion.div>

      {/* Riga risposta */}
      <motion.div
        className="flex flex-row items-stretch"
        onHoverStart={() => setHoverA(true)}
        onHoverEnd={() => setHoverA(false)}
      >
        <motion.div
          className="px-4 sm:px-7 py-4 sm:py-5 w-full flex items-start rounded-2xl relative overflow-hidden cursor-default"
          style={{ background: 'rgba(0,200,160,0.07)', border: '1px solid rgba(0,200,160,0.18)' }}
          whileHover={{ scale: 1.01, borderColor: 'rgba(0,200,160,0.4)', boxShadow: '0 8px 32px rgba(0,200,160,0.12)' }}
          transition={{ duration: 0.25 }}
        >
          {/* accent bar sinistra */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
            style={{ background: 'linear-gradient(to bottom, #006071, #00c8a0)' }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
          />
          <motion.p
            className="text-slate-600 text-sm leading-relaxed"
            animate={hoverA ? { x: 4 } : { x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {faq.a}
          </motion.p>
        </motion.div>
        <motion.div
          className="hidden sm:flex items-center justify-center p-3 ml-4 rounded-full border-4 border-white shrink-0 self-center"
          style={iconCircle}
          animate={hoverA ? { scale: 1.15, rotate: -15, boxShadow: '0 0 28px rgba(0,200,160,0.6)' } : { scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
          <IconAnswer />
        </motion.div>
      </motion.div>
    </motion.li>
  );
}

/* ─────────────────────────────────────────────
   Header categoria con linea animata
───────────────────────────────────────────── */
function CategoryHeader({ category, index, number }: { category: string; index: number; number: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-4 mb-10"
      initial={{ opacity: 0, y: -24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.05 }}
    >
      <motion.span
        className="w-10 h-10 text-white rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
        style={iconCircle}
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: index * 0.05 + 0.15 }}
      >
        {number}
      </motion.span>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">{category}</h2>
      <div className="flex-1 h-px bg-slate-200 overflow-hidden">
        <motion.div
          className="h-full"
          style={{ background: 'linear-gradient(90deg, #006071, #00c8a0)' }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.05 + 0.3 }}
        />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Componente principale
───────────────────────────────────────────── */
export default function AccordionSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section ref={containerRef} className="w-full px-3 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 relative overflow-hidden bg-linear-to-b from-white to-slate-50">
      {/* Orb parallax di sfondo */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(0,200,160,0.3), transparent)', y: bgY }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(0,96,113,0.35), transparent)', y: bgY }}
      />

      <div className="max-w-4xl mx-auto space-y-14 sm:space-y-20 relative z-10">
        {FAQ_DATA.map((section, si) => (
          <div key={si}>
            <CategoryHeader category={section.category} index={si} number={si + 1} />
            <ul className="space-y-8">
              {section.questions.map((faq, qi) => (
                <FaqItem key={qi} faq={faq} index={qi} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

