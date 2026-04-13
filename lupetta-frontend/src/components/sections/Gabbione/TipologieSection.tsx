import { motion } from 'motion/react';
import { CardContainer, CardBody, CardItem } from '../../ui/3d-card';

const GABBIONI = [
  {
    glowColor: '#006071',
    iconPath: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
    title: 'Gabbione Standard',
    subtitle: 'Rete Metallica',
    desc: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
    features: ['Lorem ipsum dolor sit', 'Consectetur adipiscing', 'Pellentesque habitant'],
  },
  {
    glowColor: '#65b32e',
    iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    title: 'Gabbione Rinforzato',
    subtitle: 'Antiscivolo e Antiossidante',
    desc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.',
    features: ['Donec eu libero sit', 'Aenean ultricies mi', 'Mauris placerat eleifend'],
  },
  {
    glowColor: '#00c8a0',
    iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    title: 'Gabbione con Accessori',
    subtitle: 'Stimolazione Motoria',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.',
    features: ['Quisque sit amet est', 'Vestibulum erat wisi', 'Condimentum sed commodo'],
  },
];

export default function TipologieSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Subtle top line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #006071, #65b32e, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#65b32e' }}>Tipologie</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4">
            Tipologie di gabbioni <span className="montserrat-italic" style={{ color: '#006071' }}>disponibili</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Scegli la soluzione più adatta alle tue esigenze tra le nostre tipologie di gabbioni.
          </p>
        </motion.div>

        {/* 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GABBIONI.map((gab, i) => (
            <CardContainer key={i} containerClassName="w-full py-0" className="w-full">
              <CardBody className="w-full rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
                {/* Colored top strip */}
                <CardItem translateZ={20} className="w-full">
                  <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${gab.glowColor}, transparent)` }} />
                </CardItem>

                <div className="p-8 sm:p-10">
                  {/* Icon */}
                  <CardItem translateZ={40} className="mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${gab.glowColor}18` }}>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={gab.glowColor}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={gab.iconPath} />
                      </svg>
                    </div>
                  </CardItem>

                  {/* Text */}
                  <CardItem translateZ={30} className="w-full">
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: gab.glowColor }}>{gab.subtitle}</span>
                    <h3 className="text-2xl text-slate-900 mt-1 mb-3">{gab.title}</h3>
                    <p className="text-slate-500 text-base leading-relaxed mb-5">{gab.desc}</p>
                  </CardItem>

                  {/* Features */}
                  <CardItem translateZ={20} className="w-full">
                    <ul className="space-y-2.5">
                      {gab.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: gab.glowColor }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}










