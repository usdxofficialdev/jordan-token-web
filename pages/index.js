import React from 'react';

export default function Home() {
  const copyAddress = () => {
    navigator.clipboard.writeText("0x6222...bd2a"); // Yahan apna asli address daal dena
    alert("Contract Address Copied!");
  };
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
        {/* Stats Section with Contract Address */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-y border-white/5 py-12">
  <div className="text-center md:text-left">
    <div className="text-4xl font-bold mb-1 text-white">1B+</div>
    <div className="text-gray-500 text-sm uppercase tracking-widest">Total Supply</div>
  </div>
  <div className="text-center md:text-left">
    <div className="text-4xl font-bold mb-1 text-white">0%</div>
    <div className="text-gray-500 text-sm uppercase tracking-widest">Buy/Sell Tax</div>
  </div>
  <div className="text-center md:text-left">
  <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
    <div className="text-xl font-mono font-bold text-white truncate max-w-[150px]">0x6222...bd2a</div>
    <button 
      onClick={copyAddress}
      className="p-1.5 bg-white/5 hover:bg-blue-500/20 border border-white/10 rounded-lg transition-all group"
      title="Copy Address"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d=" <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    </button>
  </div>
  <div className="text-gray-500 text-sm uppercase tracking-widest">Contract Address</div>
</div>
  <div className="text-center md:text-left">
    <div className="text-xl font-mono font-bold mb-1 text-white break-all">0x6222...bd2a</div>
    <div className="text-gray-500 text-sm uppercase tracking-widest">Contract Address</div>
  </div>
</div>
      </main>

      <footer className="text-center py-10 text-gray-600 text-sm">
        © 2026 MetaWorld Protocol. Built for the future.
      </footer>
    </div>
  );
}

