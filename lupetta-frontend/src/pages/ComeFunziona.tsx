import { Link } from 'react-router-dom';

export default function ComeFunziona() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        Caratteristiche tecniche e varianti di Lupetta: MINI e MAXI Tech
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
      <p className="text-gray-500 leading-relaxed mb-10">
        Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
        Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/come-funziona/mini"
          className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition-colors"
        >
          Lupetta Mini Wi-Fi →
        </Link>
        <Link
          to="/come-funziona/maxi"
          className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition-colors"
        >
          Lupetta Maxi Tech →
        </Link>
      </div>
    </section>
  );
}
