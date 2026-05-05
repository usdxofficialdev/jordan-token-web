import React from 'react';

export default function Home() {
  // --- JAB COIN BAN JAYE, BAS YE NEECHE WALA ADDRESS BADAL DENA ---
  const contractAddress = "0x0000000000000000000000000000000000000000"; 

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
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
        <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-mono">
          {contractAddress.slice(0,6)}...{contractAddress.slice(-4)}
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
          Next Gen DeFi
        </div>
        
        <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tight uppercase">
          THE FUTURE <br /> <span className="text-blue-500 text-glow">IS HERE.</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-20">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            BUY USDX
          </button>
          <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">
            View Chart
          </button>
        </div>

        {/* --- DEDICATED CONTRACT COLUMN --- */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-1 bg-gradient-to-r from-transparent via-white/5 to-transparent">
            <div className="bg-[#0a0a0a] rounded-[14px] p-6">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mb-4 text-center md:text-left font-bold">
                Official Token Contract
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="bg-black/50 border border-white/5 p-4 rounded-xl flex-1 w-full overflow-hidden">
                  <code className="text-blue-400 font-mono text-sm md:text-base break-all block text-center md:text-left">
                    {contractAddress}
                  </code>
                </div>
                <button 
                  onClick={copyAddress}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold transition-all active:scale-95 whitespace-nowrap"
                >
                  COPY ADDRESS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-white/5 py-12">
          <div>
            <div className="text-4xl font-bold mb-1">1B+</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest">Total Supply</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1 text-blue-500">0%</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest">Buy/Sell Tax</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1 uppercase">BEP-20</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest">Network</div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-gray-600 text-xs tracking-widest uppercase border-t border-white/5 mt-10">
        © 2026 MetaWorld Protocol. Built for the future.
      </footer>
    </div>
  );
}
