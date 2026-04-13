import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from '../../lightswind/3d-scroll-trigger';

const STARS = (n: number) => (
  <span className="text-amber-400 text-sm tracking-tight">
    {'★'.repeat(n)}{'☆'.repeat(5 - n)}
  </span>
);

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
      className="shrink-0 w-72 sm:w-80 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mx-3"
      style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}
    >
      {/* Stars */}
      <div className="mb-3">{STARS(t.rating)}</div>

      {/* Quote */}
      <blockquote className="text-slate-600 text-sm leading-relaxed mb-5 italic">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black tracking-widest shrink-0"
          style={{ background: t.color }}
        >
          {t.initials}
        </div>
        <div className="min-w-0">
          <div className="font-bold text-slate-900 text-sm truncate">{t.name}</div>
          <div className="text-xs text-slate-400 truncate">{t.farm}</div>
          <span
            className="inline-block text-[10px] font-bold tracking-widest uppercase mt-0.5 px-1.5 py-0.5 rounded"
            style={{ background: `${t.color}18`, color: t.color }}
          >
            {t.product}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function DiconoSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-50 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#65b32e' }}>
          Testimonianze
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-4">
          Dicono di noi gli{' '}
          <span className="montserrat-italic" style={{ color: '#006071' }}>allevatori</span>
        </h2>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Centinaia di aziende agricole in Italia si affidano ogni giorno a Lupetta per nutrire i propri vitelli.
        </p>
      </div>

      {/* Scroll rows */}
      <ThreeDScrollTriggerContainer>
        <ThreeDScrollTriggerRow baseVelocity={3} direction={1} className="mb-4">
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
