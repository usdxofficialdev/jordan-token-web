import React, { useState } from 'react';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const connectWallet = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
        setIsModalOpen(false);
      } catch (err) { console.error("Denied"); }
    } else { alert("Please use Trust Wallet or MetaMask!"); }
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-orange-500/30 overflow-x-hidden relative">
      
      {/* --- BONK STYLE BACKGROUND --- */}
      <div className="fixed inset-0 z-0 bg-[#050505]" style={{
        background: `radial-gradient(circle at top, #3d1b00 0%, #050505 65%)`
      }}></div>
      <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '45px 45px' }}>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 35s linear infinite;
        }
      `}</style>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-white/5 backdrop-blur-md">
          <h1 className="text-2xl font-black tracking-tighter uppercase">METAWORLD</h1>
          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-white transition">Ecosystem</a>
            <a href="#" className="hover:text-white transition">Governance</a>
            <a href="#" className="hover:text-white transition">Whitepaper</a>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-[#ff5c00] hover:bg-[#e65200] text-white px-8 py-3 rounded-full text-xs font-black transition-all shadow-lg uppercase">
            {walletAddress ? `${walletAddress.slice(0,6)}...${walletAddress.slice(-4)}` : "CONNECT WALLET"}
          </button>
        </nav>

        {/* --- WALLET MODAL (EXACT BONK LAYOUT) --- */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
            <div className="bg-[#12141d] border border-white/10 p-8 rounded-[35px] max-w-sm w-full relative shadow-2xl">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white bg-white/5 w-9 h-9 rounded-full flex items-center justify-center">×</button>
              <h3 className="text-xl font-bold mb-8 text-center uppercase tracking-tight">Select your wallet</h3>
              <div className="flex flex-col border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02]">
                <button onClick={connectWallet} className="flex items-center gap-4 p-5 hover:bg-white/5 transition border-b border-white/10 group text-left">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" className="h-7 w-7" alt="" />
                  <span className="font-bold text-xs uppercase tracking-widest">MetaMask</span>
                </button>
                <button onClick={connectWallet} className="flex items-center gap-4 p-5 hover:bg-white/5 transition border-b border-white/10 group text-left">
                  <img src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg" className="h-7 w-7" alt="" />
                  <span className="font-bold text-xs uppercase tracking-widest">Trust Wallet</span>
                </button>
                <button className="p-5 text-[10px] font-black uppercase text-gray-500 hover:text-[#ff5c00] transition tracking-[0.2em] bg-black/20 text-center">More Wallet Options</button>
              </div>
            </div>
          </div>
        )}

        <main className="max-w-7xl mx-auto px-6 pt-20">
          
          {/* --- TRADE PANEL (BRACKETED) --- */}
          <div className="mb-10 text-center">
             <div className="inline-block border border-white/10 rounded-[30px] p-2 bg-white/[0.02]">
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-6 py-4">
                  {[
                    { name: 'DexScreener', url: 'https://dexscreener.com' },
                    { name: 'DEXTools', url: 'https://www.dextools.io' },
                    { name: 'Birdeye', url: 'https://birdeye.so' },
                    { name: 'GeckoTerminal', url: 'https://www.geckoterminal.com' },
                    { name: 'Jupiter', url: 'https://jup.ag' }
                  ].map((item) => (
                    <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#ff5c00] transition border-r border-white/10 last:border-0 pr-4 md:pr-8 last:pr-0">{item.name}</a>
                  ))}
                </div>
             </div>
          </div>

          {/* --- SOCIALS (BRACKETED) --- */}
          <div className="mb-20 text-center">
             <div className="inline-block border border-[#ff5c00]/30 rounded-full px-10 py-3 bg-[#ff5c00]/5">
                <div className="flex justify-center gap-10">
                   {[
                     { name: 'Twitter', url: 'https://twitter.com' },
                     { name: 'Telegram', url: 'https://t.me' },
                     { name: 'Discord', url: 'https://discord.com' }
                   ].map((social) => (
                     <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-[11px] font-black uppercase tracking-[0.3em] text-white hover:text-[#ff5c00] transition">{social.name}</a>
                   ))}
                </div>
             </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-[110px] font-black mb-10 tracking-tighter uppercase leading-[0.82]">
              Your gateway to the <br /> <span className="text-[#ff5c00]">digital economy</span>
            </h2>
            <button className="bg-white text-black px-14 py-5 rounded-2xl font-black uppercase text-sm hover:scale-105 transition shadow-2xl tracking-widest">Join the Pack</button>
          </div>

          {/* Infinite Logo Slider */}
          <div className="w-full overflow-hidden py-16 border-y border-white/5 relative bg-black/40">
            <div className="animate-infinite-scroll flex gap-24 items-center">
               {['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'].map((name, i) => (
                 <span key={i} className="text-3xl font-black text-white/10 uppercase tracking-tighter hover:text-[#ff5c00] transition cursor-default">{name}</span>
               ))}
               {['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'].map((name, i) => (
                 <span key={i + 10} className="text-3xl font-black text-white/10 uppercase tracking-tighter hover:text-[#ff5c00] transition cursor-default">{name}</span>
               ))}
            </div>
          </div>

          {/* One Asset + USDX Bracket */}
          <div className="py-36 text-center flex flex-col items-center">
            <h3 className="text-4xl md:text-8xl font-black uppercase mb-10 tracking-tighter leading-none">One asset. <br className="md:hidden"/> Endless possibilities.</h3>
            <div className="inline-block border border-[#ff5c00]/60 rounded-full px-8 py-2 mb-24">
              <p className="text-[#ff5c00] font-black tracking-[0.4em] uppercase text-[11px]">USDX is for everyone</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 w-full">
              {[
                { t: "Decentralized Finance", d: "Trade, earn, and unlock yield opportunities with USDX." },
                { t: "Global Sports", d: "USDX partners with sports organizations for fan experiences." },
                { t: "Art & Culture", d: "Supporting artists and creators through community initiatives." },
                { t: "Giving Back", d: "USDX raised funds for causes the community believes in." },
                { t: "Consumer Applications", d: "Products built for everyday use, from onboarding to social." }
              ].map((card, i) => (
                <div key={i} className="bg-white/[0.04] p-10 rounded-[40px] text-left border border-white/5 hover:border-[#ff5c00]/40 transition-all flex flex-col justify-between group backdrop-blur-xl h-full">
                  <div><h4 className="font-black uppercase text-xl mb-5 leading-tight">{card.t}</h4><p className="text-gray-500 text-sm leading-relaxed">{card.d}</p></div>
                  <div className="mt-10 bg-[#ff5c00] w-12 h-12 rounded-full flex items-center justify-center group-hover:translate-x-3 transition cursor-pointer shadow-lg text-black font-black text-xl">➜</div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white/[0.02] rounded-[60px] p-16 md:p-28 text-center my-24 border border-white/5 backdrop-blur-2xl shadow-2xl">
            <h3 className="text-3xl md:text-6xl font-black uppercase mb-8 tracking-tighter leading-tight max-w-4xl mx-auto">Subscribe to our newsletter <br/> to receive the latest from USDX.</h3>
            <div className="max-w-lg mx-auto mt-14">
              <div className="flex flex-col md:flex-row gap-5">
                <input type="email" placeholder="Email Address*" className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 outline-none focus:border-[#ff5c00] transition" />
                <button className="bg-[#ff5c00] text-white px-12 py-5 rounded-2xl font-black uppercase shadow-xl hover:bg-white hover:text-black transition tracking-widest">Sign Up</button>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-black/60 pt-32 pb-16 border-t border-white/5 text-center backdrop-blur-3xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-12 mb-20 text-gray-500 text-[11px] font-black uppercase tracking-[0.3em]">
              {['Twitter', 'Discord', 'Instagram', 'Medium', 'Telegram'].map(s => <a key={s} href="#" className="hover:text-white transition">{s}</a>)}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-16 gap-10">
              <h1 className="text-3xl font-black uppercase tracking-tighter">USDX</h1>
              <p className="text-[11px] text-gray-500 uppercase tracking-widest font-black">© 2026 USDX. All rights reserved.</p>
              <div className="flex gap-10 text-[11px] text-gray-500 font-black uppercase tracking-widest">
                <a href="#" className="hover:text-white">Terms</a> <a href="#" className="hover:text-white">Privacy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
