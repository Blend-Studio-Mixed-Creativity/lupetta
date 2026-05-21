import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from '../../lightswind/3d-scroll-trigger';

// const STARS = (n: number) => (
//   <span className="text-amber-400 text-sm tracking-tight">
//     {'★'.repeat(n)}{'☆'.repeat(5 - n)}
//   </span>
// );

interface Testimonial {
  name: string;
  farm: string;
  product: string;
  quote: string;
  rating: number;
  initials: string;
  color: string;
}

const ROW_A: Testimonial[] = [
  {
    initials: 'MR',
    color: '#006071',
    name: 'Marco Rossi',
    farm: 'Azienda agricola Rossi',
    product: 'Lupetta MAXI tech',
    quote: 'Da quando usiamo Lupetta MAXI non dobbiamo più alzarci di notte. I vitelli crescono meglio e il risparmio di manodopera è evidente già dal primo mese.',
    rating: 5,
  },
  {
    initials: 'GF',
    color: '#65b32e',
    name: 'Giuseppe Ferrari',
    farm: 'Cascina Ferrari & Figli',
    product: 'Lupetta MINI Wi-Fi',
    quote: 'Il controllo da smartphone è comodissimo. Monitoro ogni razione in tempo reale anche quando sono fuori dall\'azienda. Non tornerei mai indietro.',
    rating: 5,
  },
  {
    initials: 'AT',
    color: '#006071',
    name: 'Anna Trentini',
    farm: 'Allevamento Trentini',
    product: 'Lupetta MAXI tech',
    quote: 'La mortalità neonatale si è ridotta drasticamente. La programmazione personalizzata per ogni vitello fa davvero la differenza sulla crescita uniforme del gruppo.',
    rating: 5,
  },
  {
    initials: 'LB',
    color: '#65b32e',
    name: 'Luca Bianchi',
    farm: 'Tenuta Bianchi',
    product: 'Lupetta MINI Wi-Fi',
    quote: 'Per un\'azienda piccola come la mia, la MINI è la soluzione perfetta. Compatta, silenziosa e precisa nelle dosi. L\'assistenza post-vendita è ottima.',
    rating: 5,
  },
  {
    initials: 'SF',
    color: '#006071',
    name: 'Sofia Franzoni',
    farm: 'Stalla Franzoni',
    product: 'Lupetta MAXI tech',
    quote: 'Il gabbione integrato e l\'allattatrice insieme sono un binomio vincente. Gestisco 40 vitelli senza stress. La qualità costruttiva è superiore a tutto ciò che ho provato.',
    rating: 5,
  },
];

const ROW_B: Testimonial[] = [
  {
    initials: 'PR',
    color: '#65b32e',
    name: 'Paolo Ricci',
    farm: 'Fattoria Ricci',
    product: 'Lupetta MAXI tech',
    quote: 'L\'incremento di peso medio è passato da 0,7 a 1,1 kg al giorno. Risultati concreti e misurabili già nelle prime settimane di utilizzo.',
    rating: 5,
  },
  {
    initials: 'CM',
    color: '#006071',
    name: 'Carla Merli',
    farm: 'Merli Bovini',
    product: 'Lupetta MINI Wi-Fi',
    quote: 'Finalmente un\'allattatrice che non mi dà problemi. Semplice da impostare, facile da pulire e i dati sul portale sono sempre aggiornati. Consiglio a tutti.',
    rating: 5,
  },
  {
    initials: 'DV',
    color: '#65b32e',
    name: 'Davide Vitali',
    farm: 'Azienda Vitali',
    product: 'Lupetta MAXI tech',
    quote: 'Il ritorno sull\'investimento è stato rapidissimo. Calcolando il costo della manodopera risparmiata e la riduzione delle perdite, il sistema si è ripagato in sei mesi.',
    rating: 5,
  },
  {
    initials: 'EP',
    color: '#006071',
    name: 'Elena Pasini',
    farm: 'Cascina Pasini',
    product: 'Lupetta MINI Wi-Fi',
    quote: 'I miei vitelli sono più tranquilli e si alimentano con regolarità. Ho notato meno stress al momento della poppata rispetto al metodo tradizionale.',
    rating: 4,
  },
  {
    initials: 'RG',
    color: '#65b32e',
    name: 'Roberto Gentile',
    farm: 'Allevamento Gentile',
    product: 'Lupetta MAXI tech',
    quote: 'L\'assistenza Lupetta è sempre disponibile e competente. Ogni problema è risolto in tempi rapidi. È raro trovare un\'azienda così attenta al cliente.',
    rating: 5,
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="shrink-0 w-80 sm:w-96 mx-3 relative group overflow-hidden rounded-3xl whitespace-normal"
    >
      {/* Glow sfondo card */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center, ${t.color}20 0%, transparent 70%)` }}
      />

      <div
        className="relative bg-white rounded-3xl border overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_16px_40px_rgb(0,0,0,0.10)]"
        style={{
          borderColor: `${t.color}18`,
          boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
        }}
      >
        {/* Accent top bar */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}60)` }} />

        <div className="p-6 flex flex-col min-h-[280px]">
          {/* Stars + badge product */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-amber-400 text-sm tracking-tight">
              {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
            </div>
            <span
              className="text-[10px] font-bold uppercase px-2 py-1 rounded-full max-w-[55%] truncate block"
              style={{ background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}25` }}
            >
              {t.product}
            </span>
          </div>

          {/* Quote */}
          <blockquote className="text-slate-600 text-sm leading-relaxed mb-5 italic flex-1">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-3 border-t pt-4" style={{ borderColor: `${t.color}15` }}>
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-xs font-black tracking-widest shrink-0 shadow-sm"
              style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)` }}
            >
              {t.initials}
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
              <div className="font-bold text-slate-900 text-sm truncate">{t.name}</div>
              <div className="text-xs text-slate-400 truncate">{t.farm}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DiconoSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-50 overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#006071]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#65b32e]/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#65b32e]/10 border border-[#65b32e]/20 text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: '#65b32e' }}>
          Testimonianze
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-2 font-bold">
          Dicono di noi gli{' '}
          <span className="montserrat-italic text-transparent bg-clip-text bg-gradient-to-r from-[#006071] to-[#65b32e]">allevatori</span>
        </h2>
        <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Centinaia di aziende agricole in Italia si affidano ogni giorno a Lupetta per nutrire i propri vitelli.
        </p>
      </div>

      {/* Scroll rows */}
      <ThreeDScrollTriggerContainer>
        <ThreeDScrollTriggerRow baseVelocity={3} direction={1} className="mb-6">
          {ROW_A.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </ThreeDScrollTriggerRow>

        <ThreeDScrollTriggerRow baseVelocity={3} direction={-1}>
          {ROW_B.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
    </section>
  );
}
