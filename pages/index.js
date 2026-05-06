import React, { useState } from 'react';

export default function Home() {
  const contractAddress = "0x0000000000000000000000000000000000000000"; 
  const [walletAddress, setWalletAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = {
    telegram: "https://t.me/metaworld_token",
    twitter: "https://twitter.com/metaworld",
    discord: "#",
    instagram: "#",
    medium: "#",
    youtube: "#",
    whitepaper: "#",
    ecosystem: "#",
    governance: "#"
  };

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
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30 overflow-x-hidden relative">
      
      {/* Styles for Animation - Error Fix */}
      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 25s linear infinite;
        }
      `}</style>

      {/* Background Chart Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto backdrop-blur-md border-b border-white/5">
          <h1 className="text-2xl font-black tracking-tighter uppercase">METAWORLD</h1>
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <a href={links.ecosystem} className="hover:text-white transition">Ecosystem</a>
            <a href={links.governance} className="hover:text-white transition">Governance</a>
            <a href={links.whitepaper} className="hover:text-white transition">Whitepaper</a>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-[#ff5c00] hover:bg-[#e65200] text-white px-8 py-3 rounded-full text-xs font-black transition-all shadow-lg uppercase">
            {walletAddress ? `${walletAddress.slice(0,6)}...${walletAddress.slice(-4)}` : "CONNECT WALLET"}
          </button>
        </nav>

        {/* --- BONK STYLE WALLET MODAL --- */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4">
            <div className="bg-[#12141d] border border-white/10 p-8 rounded-[32px] max-w-sm w-full relative">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white text-xl">×</button>
              <h3 className="text-xl font-bold mb-8 text-center">Select your wallet</h3>
              <div className="flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
                <button onClick={connectWallet} className="flex items-center gap-4 p-5 hover:bg-white/5 transition border-b border-white/5">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" className="h-6 w-6" alt="" />
                  <span className="font-bold text-xs uppercase tracking-widest">MetaMask</span>
                </button>
                <button onClick={connectWallet} className="flex items-center gap-4 p-5 hover:bg-white/5 transition border-b border-white/5">
                  <img src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg" className="h-6 w-6" alt="" />
                  <span className="font-bold text-xs uppercase tracking-widest">Trust Wallet</span>
                </button>
                <button className="p-4 text-[10px] font-black uppercase text-gray-500 hover:text-[#ff5c00] tracking-widest text-center">More Wallet Options</button>
              </div>
              <div className="mt-8 text-center text-[10px] text-gray-500 px-4">
                By continuing you agree to our <br />
                <a href="#" className="text-gray-300 underline mx-1">Terms of Service</a> and <a href="#" className="text-gray-300 underline mx-1">Privacy Policy</a>
              </div>
            </div>
          </div>
        )}

        <main className="max-w-7xl mx-auto px-6 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
              Your gateway to the <br /> <span className="text-[#ff5c00]">digital economy</span>
            </h2>
            <button className="bg-white text-black px-10 py-4 rounded-2xl font-black uppercase text-sm hover:bg-gray-200 transition">Join the Pack</button>
          </div>

          {/* --- INFINITE LOGO SLIDER --- */}
          <div className="w-full overflow-hidden py-10 border-y border-white/5 relative bg-white/[0.01]">
            <div className="animate-infinite-scroll flex gap-16 items-center">
               {['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'].map((name, i) => (
                 <span key={i} className="text-2xl font-black text-gray-600 uppercase tracking-tighter hover:text-white transition">{name}</span>
               ))}
               {/* Loop Duplicate */}
               {['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'].map((name, i) => (
                 <span key={i + 10} className="text-2xl font-black text-gray-600 uppercase tracking-tighter hover:text-white transition">{name}</span>
               ))}
            </div>
          </div>

          {/* Endless Possibilities & USDX is for Everyone */}
          <div className="py-24 text-center">
            <h3 className="text-4xl md:text-6xl font-black uppercase mb-4">One Asset. Endless possibilities.</h3>
            <p className="text-[#ff5c00] font-black tracking-[0.3em] uppercase mb-20 text-sm">USDX IS FOR EVERYONE</p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { t: "Decentralized Finance", d: "Trade, earn, and unlock yield opportunities with USDX." },
                { t: "Global Sports", d: "USDX partners with sports organizations to bring fan experiences." },
                { t: "Art & Culture", d: "Supporting artists and creators through community initiatives." },
                { t: "Giving Back", d: "USDX has raised funds for causes the community believes in." },
                { t: "Consumer Applications", d: "Products built for everyday use, from onboarding to social apps." }
              ].map((card, i) => (
                <div key={i} className="bg-[#12141d] p-8 rounded-[32px] text-left border border-white/5 hover:border-[#ff5c00]/50 transition flex flex-col justify-between group">
                  <div><h4 className="font-black uppercase text-lg mb-4 leading-tight">{card.t}</h4><p className="text-gray-500 text-sm leading-relaxed">{card.d}</p></div>
                  <div className="mt-8 bg-[#ff5c00] w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition cursor-pointer">➜</div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-[#12141d] rounded-[40px] p-12 md:p-20 text-center my-20 border border-white/5">
            <h3 className="text-3xl md:text-5xl font-black uppercase mb-4">Subscribe to our newsletter to receive the latest from USDX.</h3>
            <div className="max-w-md mx-auto mt-10">
              <div className="flex flex-col md:flex-row gap-4">
                <input type="email" placeholder="Email Address*" className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none" />
                <button className="bg-[#ff5c00] text-white px-10 py-4 rounded-2xl font-black uppercase">Sign Up</button>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/5 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8 mb-16 text-gray-500 text-xs font-bold uppercase tracking-widest">
              {['Twitter', 'Discord', 'Instagram', 'Medium', 'Telegram'].map(s => <a key={s} href="#" className="hover:text-white">{s}</a>)}
            </div>
            <p className="max-w-3xl mx-auto text-[10px] text-gray-600 mb-10 leading-relaxed uppercase">
              USDX Foundation is not a registered investment adviser. Nothing on this website constitutes investment advice.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10 gap-6">
              <h1 className="text-xl font-black uppercase tracking-tighter">USDX</h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">© 2026 USDX. All rights reserved.</p>
              <div className="flex gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                <a href="#">Terms</a> <a href="#">Privacy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
