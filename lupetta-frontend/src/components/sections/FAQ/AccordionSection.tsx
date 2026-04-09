import { useState } from 'react';
import { FAQ_DATA } from './faqData';

export default function AccordionSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => setOpenIndex(openIndex === id ? null : id);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-12 sm:pb-16 lg:pb-12 sm:pb-16 lg:pb-28">
      <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/80 border border-slate-100 px-8 sm:px-10 lg:px-14 py-12 space-y-12">
        {FAQ_DATA.map((section, si) => (
          <div key={si} className={`animate-slide-up animate-stagger-${Math.min(si + 1, 6)}`}>
            <h2 className="text-2xl text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-[#62bc46] text-white rounded-lg flex items-center justify-center text-sm font-bold montserrat-heading">{si + 1}</span>
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.questions.map((faq, qi) => {
                const id = `${si}-${qi}`;
                const isOpen = openIndex === id;
                return (
                  <div key={qi} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-sm transition-shadow">
                    <button
                      onClick={() => toggle(id)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    >
                      <span className="text-slate-800 font-medium leading-snug">{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="px-6 pb-5 text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}







