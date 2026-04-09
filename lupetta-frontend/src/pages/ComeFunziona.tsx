import { Link } from 'react-router-dom';
import heroImg from '../assets/images/coselupetta.jpg';

export default function ComeFunziona() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative text-white overflow-hidden" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#006473]/80" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-36 text-center relative z-10">
          <span className="inline-block py-2 px-5 rounded-full bg-[#62bc46]/10 border border-[#62bc46]/30 text-[#62bc46] text-sm font-semibold tracking-widest uppercase mb-8 animate-fade-in">
            Lorem Ipsum
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8 animate-slide-up montserrat-italic">
            Caratteristiche tecniche e varianti<br />
            <span className="text-[#62bc46]">di Lupetta: MINI e MAXI Tech</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-stagger-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </section>

      {/* ═══ CONFRONTO PRODOTTI ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-28">
        <div className="grid md:grid-cols-2 gap-8">

          {/* MINI */}
          <Link to="/come-funziona/mini" className="group">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden card-hover animate-slide-left">
              <div className="bg-[#62bc46] p-8 text-white">
                <span className="text-sm font-bold tracking-widest uppercase opacity-80">Versione</span>
                <h2 className="text-4xl mt-2 montserrat-italic">MINI Wi-Fi</h2>
              </div>
              <div className="p-8">
                <p className="text-slate-500 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet ante.
                </p>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-500" /> Lorem ipsum dolor sit amet</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-500" /> Consectetur adipiscing elit</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-500" /> Pellentesque habitant morbi</li>
                </ul>
                <span className="text-green-600 font-bold group-hover:underline">Lorem ipsum &rarr;</span>
              </div>
            </div>
          </Link>

          {/* MAXI */}
          <Link to="/come-funziona/maxi" className="group">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden card-hover animate-slide-right">
              <div className="bg-[#006473] p-8 text-white">
                <span className="text-sm font-bold tracking-widest uppercase opacity-80">Versione</span>
                <h2 className="text-4xl mt-2 montserrat-italic">MAXI Tech</h2>
              </div>
              <div className="p-8">
                <p className="text-slate-500 leading-relaxed mb-6">
                  Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo quisque sit amet.
                </p>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500" /> Donec eu libero sit amet</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500" /> Aenean ultricies mi vitae</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500" /> Mauris placerat eleifend</li>
                </ul>
                <span className="text-blue-600 font-bold group-hover:underline">Lorem ipsum &rarr;</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ═══ TABELLA COMPARATIVA ═══ */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14 animate-slide-up">
            <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Comparatio</span>
            <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mt-3">
              Lorem <span className="montserrat-italic text-[#006473]">vs</span> Ipsum
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 animate-scale-in">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Caratteristica</th>
                  <th className="px-6 py-4 text-sm font-bold text-[#62bc46] uppercase tracking-wider text-center">MINI</th>
                  <th className="px-6 py-4 text-sm font-bold text-[#006473] uppercase tracking-wider text-center">MAXI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Lorem Ipsum Dolor", "✓", "✓"],
                  ["Consectetur Adipiscing", "—", "✓"],
                  ["Pellentesque Habitant", "✓", "✓"],
                  ["Vestibulum Tortor", "—", "✓"],
                  ["Donec Eu Libero", "✓", "✓"],
                  ["Aenean Ultricies", "—", "✓"],
                ].map(([feature, mini, maxi], i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 text-slate-700 font-medium">{feature}</td>
                    <td className="px-6 py-4 text-center text-lg">{mini}</td>
                    <td className="px-6 py-4 text-center text-lg">{maxi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ TECNOLOGIA ═══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-[#006473] font-bold text-sm tracking-widest uppercase">Technologia</span>
          <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mt-3">
            Lorem Ipsum <span className="montserrat-italic text-[#006473]">Dolor</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "⚙️", title: "Lorem Hardware", desc: "Vestibulum tortor quam feugiat vitae ultricies eget tempor sit amet ante donec eu libero." },
            { icon: "🌐", title: "Ipsum Software", desc: "Aenean ultricies mi vitae est mauris placerat eleifend leo quisque sit amet est et sapien." },
            { icon: "🔒", title: "Dolor Securitas", desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
            { icon: "📊", title: "Amet Analytics", desc: "Donec eu libero sit amet quam egestas semper aenean ultricies mi vitae est mauris placerat." },
            { icon: "🔋", title: "Consectetur Energia", desc: "Quisque sit amet est et sapien ullamcorper pharetra vestibulum erat wisi condimentum sed." },
            { icon: "🛡️", title: "Adipiscing Protectio", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique." },
          ].map((tech, i) => (
            <div key={i} className={`p-8 rounded-2xl border border-slate-100 hover:border-[#006473]/20 hover:shadow-lg transition-all animate-slide-up animate-stagger-${(i % 3) + 1} group bg-white`}>
              <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform">{tech.icon}</span>
              <h3 className="text-xl text-slate-900 mb-2">{tech.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

