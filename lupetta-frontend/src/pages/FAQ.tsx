import { useState } from 'react';
import heroImg from '../assets/images/header-pagine.jpg';

const faqs = [
  {
    category: "Acquisto e Setup",
    questions: [
      {
        q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        a: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.",
      },
      {
        q: "Donec eu libero sit amet quam egestas?",
        a: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    category: "Alimentazione e Latte",
    questions: [
      {
        q: "Aenean ultricies mi vitae est mauris placerat?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.",
      },
      {
        q: "Pellentesque habitant morbi tristique senectus?",
        a: "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi.",
      },
    ],
  },
  {
    category: "Compatibilità e Installazione",
    questions: [
      {
        q: "Quisque sit amet est et sapien ullamcorper pharetra?",
        a: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
      },
      {
        q: "Vestibulum erat wisi condimentum sed commodo?",
        a: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    category: "Gestione e Problemi",
    questions: [
      {
        q: "Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum?",
        a: "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.",
      },
    ],
  },
  {
    category: "Requisiti Tecnici",
    questions: [
      {
        q: "Donec eu libero sit amet quam egestas semper aenean?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam.",
      },
    ],
  },
  {
    category: "Assistenza e Garanzia",
    questions: [
      {
        q: "Aenean ultricies mi vitae est mauris placerat eleifend?",
        a: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
      },
      {
        q: "Pellentesque habitant morbi tristique senectus et netus?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra vestibulum erat wisi.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => setOpenIndex(openIndex === id ? null : id);

  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative text-white overflow-hidden" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#006473]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-36 text-center relative z-10">
          <span className="inline-block py-2 px-5 rounded-full bg-[#62bc46]/10 border border-[#62bc46]/40 text-[#62bc46] text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
            FAQ
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8 animate-slide-up montserrat-italic">
            Domande frequenti<br />
            <span className="text-[#62bc46]">sull&apos;allattamento automatizzato e Lupetta</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-stagger-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.
          </p>
        </div>
      </section>

      {/* ═══ FAQ ACCORDION ═══ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-28">
        <div className="space-y-12">
          {faqs.map((section, si) => (
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
                    <div key={qi} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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

      {/* ═══ CONTATTO ═══ */}
      <section className="bg-[#006473] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-scale-in">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-6">
            Lorem Ipsum <span className="montserrat-italic">Non Trovato?</span>
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat.
          </p>
          <button className="px-8 py-4 bg-[#62bc46] text-white font-bold rounded-2xl hover:bg-[#52a83d] transition-all shadow-xl text-lg">
            Lorem Contactus &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}

