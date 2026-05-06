import React, { useState } from 'react';

export default function Home() {
  const contractAddress = "0x0000000000000000000000000000000000000000"; 
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
      
      {/* --- BONK STYLE BACKGROUND START --- */}
      {/* 1. Base Gradient Layer */}
      <div className="fixed inset-0 z-0 bg-[#050505]" style={{
        background: `radial-gradient(circle at top, #3d1b00 0%, #050505 60%)`
      }}></div>

      {/* 2. Grid Pattern (Subtle) */}
      <div className="fixed inset-0 z-0 opacity-[0.07] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
      </div>

      {/* 3. Glowing Orbs (Floating feel) */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ff5c00]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[40%] h-[40%] bg-[#ff5c00]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      {/* --- BONK STYLE BACKGROUND END --- */}

      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-white/5 backdrop-blur-sm">
          <h1 className="text-2xl font-black tracking-tighter uppercase">METAWORLD</h1>
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition">Ecosystem</a>
            <a href="#" className="hover:text-white transition">Governance</a>
            <a href="#" className="hover:text-white transition">Whitepaper</a>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-[#ff5c00] hover:bg-[#e65200] text-white px-8 py-3 rounded-full text-xs font-black transition-all shadow-[0_0_20px_rgba(255,92,0,0.3)] uppercase">
            {walletAddress ? `${walletAddress.slice(0,6)}...${walletAddress.slice(-4)}` : "CONNECT WALLET"}
          </button>
        </nav>

        {/* Wallet Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <div className="bg-[#12141d] border border-white/10 p-8 rounded-[32px] max-w-sm w-full relative shadow-2xl">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white text-xl">×</button>
              <h3 className="text-xl font-bold mb-8 text-center uppercase tracking-tight">Select your wallet</h3>
              <div className="flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
                <button onClick={connectWallet} className="flex items-center gap-4 p-5 hover:bg-white/5 transition border-b border-white/5">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" className="h-6 w-6" alt="" />
                  <span className="font-bold text-xs uppercase tracking-widest">MetaMask</span>
                </button>
                <button onClick={connectWallet} className="flex items-center gap-4 p-5 hover:bg-white/5 transition">
                  <img src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg" className="h-6 w-6" alt="" />
                  <span className="font-bold text-xs uppercase tracking-widest">Trust Wallet</span>
                </button>
              </div>
              <div className="mt-8 text-center text-[10px] text-gray-500 px-4 leading-relaxed font-bold uppercase tracking-widest">
                By continuing you agree to our <br />
                <a href="#" className="text-gray-300 underline mx-1 hover:text-[#ff5c00]">Terms of Service</a> and <a href="#" className="text-gray-300 underline mx-1 hover:text-[#ff5c00]">Privacy Policy</a>
              </div>
            </div>
          </div>
        )}

        <main className="max-w-7xl mx-auto px-6 pt-28">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-[100px] font-black mb-8 tracking-tighter uppercase leading-[0.85]">
              Your gateway to the <br /> <span className="text-[#ff5c00]">digital economy</span>
            </h2>
            <button className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase text-sm hover:scale-105 transition shadow-xl">Join the Pack</button>
          </div>

          {/* Logo Slider */}
          <div className="w-full overflow-hidden py-14 border-y border-white/5 relative bg-black/20">
            <div className="animate-infinite-scroll flex gap-20 items-center">
               {['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'].map((name, i) => (
                 <span key={i} className="text-2xl font-black text-white/20 uppercase tracking-tighter hover:text-[#ff5c00] transition cursor-default">{name}</span>
               ))}
               {['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'].map((name, i) => (
                 <span key={i + 10} className="text-2xl font-black text-white/20 uppercase tracking-tighter hover:text-[#ff5c00] transition cursor-default">{name}</span>
               ))}
            </div>
          </div>

          {/* USDX Section */}
          <div className="py-32 text-center">
            <h3 className="text-4xl md:text-7xl font-black uppercase mb-6 tracking-tighter">One Asset. <br className="md:hidden"/> Endless possibilities.</h3>
            <p className="text-[#ff5c00] font-black tracking-[0.4em] uppercase mb-20 text-xs">USDX IS FOR EVERYONE</p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { t: "Decentralized Finance", d: "Trade, earn, and unlock yield opportunities with USDX." },
                { t: "Global Sports", d: "USDX partners with sports organizations for fan experiences." },
                { t: "Art & Culture", d: "Supporting artists and creators through community initiatives." },
                { t: "Giving Back", d: "USDX raised funds for causes the community believes in." },
                { t: "Consumer Apps", d: "Products built for everyday use, from onboarding to social." }
              ].map((card, i) => (
                <div key={i} className="bg-white/[0.03] p-8 rounded-[32px] text-left border border-white/5 hover:border-[#ff5c00]/40 transition-all flex flex-col justify-between group backdrop-blur-sm">
                  <div><h4 className="font-black uppercase text-lg mb-4 leading-tight">{card.t}</h4><p className="text-gray-500 text-sm leading-relaxed">{card.d}</p></div>
                  <div className="mt-8 bg-[#ff5c00] w-10 h-10 rounded-full flex items-center justify-center group-hover:translate-x-2 transition cursor-pointer">➜</div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white/[0.03] rounded-[50px] p-12 md:p-24 text-center my-20 border border-white/5 backdrop-blur-md">
            <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tighter">Subscribe to our newsletter <br/> to receive the latest from USDX.</h3>
            <div className="max-w-md mx-auto mt-12">
              <div className="flex flex-col md:flex-row gap-4">
                <input type="email" placeholder="Email Address*" className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#ff5c00]" />
                <button className="bg-[#ff5c00] text-white px-10 py-4 rounded-2xl font-black uppercase shadow-lg hover:bg-white hover:text-black transition">Sign Up</button>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-black/40 pt-24 pb-12 border-t border-white/5 text-center backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-10 mb-16 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              {['Twitter', 'Discord', 'Instagram', 'Medium', 'Telegram'].map(s => <a key={s} href="#" className="hover:text-white transition">{s}</a>)}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-8">
              <h1 className="text-2xl font-black uppercase tracking-tighter">USDX</h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">© 2026 USDX. All rights reserved.</p>
              <div className="flex gap-8 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-white">Terms</a> <a href="#" className="hover:text-white">Privacy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
