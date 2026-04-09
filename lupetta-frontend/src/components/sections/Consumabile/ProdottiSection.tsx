import RevealSection from '../../RevealSection';

const PRODOTTI = [
  {
    icon: '🥛',
    title: 'Lorem Lacteum Premium',
    desc: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.',
    specs: ['Lorem 26% ipsum', 'Dolor 18% sit', 'Amet 0.5% consectetur'],
  },
  {
    icon: '🧪',
    title: 'Ipsum Integratum Plus',
    desc: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.',
    specs: ['Lorem vitamine A-D-E', 'Dolor minerali essent.', 'Amet probiotici select.'],
  },
  {
    icon: '💊',
    title: 'Dolor Supplementum',
    desc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor.',
    specs: ['Lorem elettroliti', 'Dolor aminoacidi', 'Amet antiossidanti'],
  },
];

export default function ProdottiSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-12 sm:pb-16 lg:pb-12 sm:pb-16 lg:pb-24">
      <div className="grid md:grid-cols-3 gap-8">
        {PRODOTTI.map((prod, i) => (
          <RevealSection key={i} className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden card-hover" animation="sr-reveal-scale" delay={`sr-delay-${(i + 1) * 2}`}>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 text-center">
              <span className="text-5xl block mb-3">{prod.icon}</span>
              <h3 className="text-2xl text-slate-900">{prod.title}</h3>
            </div>
            <div className="p-8">
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{prod.desc}</p>
              <ul className="space-y-2">
                {prod.specs.map((s, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006473]" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}







