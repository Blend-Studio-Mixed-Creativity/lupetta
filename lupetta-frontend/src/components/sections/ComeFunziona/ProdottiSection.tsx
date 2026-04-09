import { Link } from 'react-router-dom';

interface ProductCardProps {
  to: string;
  accentColor: string;
  dotColor: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  ctaColor: string;
  animation: string;
}

function ProductCard({ to, accentColor, dotColor, label, title, description, features, ctaColor, animation }: ProductCardProps) {
  return (
    <Link to={to} className="group">
      <div className={`bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden card-hover ${animation}`}>
        <div className={`${accentColor} p-8 text-white`}>
          <span className="text-sm font-bold tracking-widest uppercase opacity-80">Versione</span>
          <h2 className="text-4xl mt-2 montserrat-italic">{title}</h2>
        </div>
        <div className="p-8">
          <p className="text-slate-500 leading-relaxed mb-6">{description}</p>
          <ul className="space-y-3 text-slate-600 mb-8">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${dotColor}`} />
                {f}
              </li>
            ))}
          </ul>
          <span className={`${ctaColor} font-bold group-hover:underline`}>{label} &rarr;</span>
        </div>
      </div>
    </Link>
  );
}

const PRODOTTI = [
  {
    to: '/come-funziona/mini',
    accentColor: 'bg-[#62bc46]',
    dotColor: 'bg-green-500',
    label: 'Lorem ipsum',
    title: 'MINI Wi-Fi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet ante.',
    features: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Pellentesque habitant morbi'],
    ctaColor: 'text-green-600',
    animation: 'animate-slide-left',
  },
  {
    to: '/come-funziona/maxi',
    accentColor: 'bg-[#006473]',
    dotColor: 'bg-blue-500',
    label: 'Lorem ipsum',
    title: 'MAXI Tech',
    description: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet.',
    features: ['Donec eu libero sit amet', 'Aenean ultricies mi vitae', 'Mauris placerat eleifend'],
    ctaColor: 'text-blue-600',
    animation: 'animate-slide-right',
  },
];

export default function ProdottiSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-28">
      <div className="grid md:grid-cols-2 gap-8">
        {PRODOTTI.map((p) => (
          <ProductCard key={p.to} {...p} />
        ))}
      </div>
    </section>
  );
}
