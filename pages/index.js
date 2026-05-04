import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          METAWORLD
        </h1>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition">Ecosystem</a>
          <a href="#" className="hover:text-white transition">Governance</a>
          <a href="#" className="hover:text-white transition">Whitepaper</a>
        </div>
        <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-mono hover:bg-white/10 transition">
          0x6222...bd2a
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase">
          Next Gen DeFi
        </div>
        <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
          THE FUTURE <br /> <span className="text-blue-500">IS HERE.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
          MetaWorld is building the next generation of decentralized finance. 
          Fast, secure, and limitless protocol for the global economy.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-20">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            BUY USDX
          </button>
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition">
            View Chart
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-white/5 py-12">
          <div>
            <div className="text-4xl font-bold mb-1">1B+</div>
            <div className="text-gray-500 text-sm uppercase tracking-widest">Total Supply</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">0%</div>
            <div className="text-gray-500 text-sm uppercase tracking-widest">Buy/Sell Tax</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1 text-blue-400">BEP-20</div>
            <div className="text-gray-500 text-sm uppercase tracking-widest">Network</div>
          </div>
        </div>
      </main>

      <footer className="text-center py-10 text-gray-600 text-sm">
        © 2026 MetaWorld Protocol. Built for the future.
      </footer>
    </div>
  );
}

