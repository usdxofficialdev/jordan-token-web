import React, { useState } from 'react';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

// --- CONFIGURATION START ---
const projectId = 'f523ce22bed6a9a2acc600cadd1473c5';

const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
};

const metadata = {
  name: 'Metaworld',
  description: 'Metaworld Token Gateway',
  url: 'https://jordan-token-web.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/168449767?s=200&v=4']
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
  themeVariables: {
    '--w3m-accent': '#ff5c00', // Aapke orange theme se match karega
    '--w3m-border-radius-master': '2px'
  }
});
// --- CONFIGURATION END ---

export default function Home() {
  // Purani state ki ab zarurat nahi kyunki modal library handle karega
  
  return (
    <div className="min-h-screen text-white font-sans selection:bg-orange-500/30 overflow-x-hidden relative">
      
      {/* --- BACKGROUND (Wahi purana) --- */}
      <div className="fixed inset-0 z-0 bg-[#050505]" style={{
        background: `radial-gradient(circle at top, #3d1b00 0%, #050505 65%)`
      }}></div>
      <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '45px 45px' }}>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-infinite-scroll { display: flex; width: max-content; animation: infinite-scroll 35s linear infinite; }
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
          
          {/* MAGIC BUTTON: Ye apne aap saare wallets handle karega */}
          <w3m-button />
        </nav>

        <main className="max-w-7xl mx-auto px-6 pt-20">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-[110px] font-black mb-10 tracking-tighter uppercase leading-[0.82]">
              Your gateway to the <br /> <span className="text-[#ff5c00]">digital economy</span>
            </h2>
            <button className="bg-white text-black px-14 py-5 rounded-2xl font-black uppercase text-sm hover:scale-105 transition shadow-2xl tracking-widest">Join the Pack</button>
          </div>

          {/* DEX + SOCIALS Panel (Aapka Design) */}
          <div className="flex flex-col md:flex-row gap-6 mb-24 max-w-6xl mx-auto">
            <div className="flex-1 bg-white/[0.03] border border-[#ff5c00]/30 rounded-[40px] p-8 backdrop-blur-xl relative">
               <div className="absolute -top-3 left-10 bg-[#050505] border border-[#ff5c00]/40 px-4 py-1 rounded-full">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#ff5c00]">Live Markets</span>
               </div>
               <div className="grid grid-cols-2 gap-4 mt-2">
                 {[
                   { name: 'DexScreener', url: 'https://dexscreener.com' },
                   { name: 'DEXTools', url: 'https://www.dextools.io' },
                   { name: 'Birdeye', url: 'https://birdeye.so' },
                   { name: 'Jupiter', url: 'https://jup.ag' }
                 ].map((item) => (
                   <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" 
                      className="px-4 py-4 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase text-center tracking-widest hover:bg-[#ff5c00]/20 hover:border-[#ff5c00]/50 transition-all">
                     {item.name}
                   </a>
                 ))}
               </div>
            </div>

            <div className="flex-1 bg-[#ff5c00]/5 border border-[#ff5c00]/30 rounded-[40px] p-8 backdrop-blur-xl relative">
               <div className="absolute -top-3 left-10 bg-[#050505] border border-[#ff5c00]/40 px-4 py-1 rounded-full">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#ff5c00]">Community</span>
               </div>
               <div className="flex flex-col gap-3 mt-2">
                 {[
                   { name: 'Twitter / X', url: 'https://twitter.com' },
                   { name: 'Telegram', url: 'https://t.me' },
                   { name: 'Discord', url: 'https://discord.com' }
                 ].map((social) => (
                   <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" 
                      className="w-full py-4 bg-black/40 border border-white/10 rounded-2xl text-center text-xs font-black uppercase tracking-[0.3em] hover:bg-[#ff5c00] hover:text-white transition-all">
                     {social.name}
                   </a>
                 ))}
               </div>
            </div>
          </div>

          {/* Infinite Slider */}
          <div className="w-full overflow-hidden py-16 border-y border-white/5 relative bg-black/40 mb-20">
            <div className="animate-infinite-scroll flex gap-24 items-center">
               {['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'].map((name, i) => (
                 <span key={i} className="text-3xl font-black text-white/10 uppercase tracking-tighter hover:text-[#ff5c00] transition cursor-default">{name}</span>
               ))}
               {['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'].map((name, i) => (
                 <span key={i + 10} className="text-3xl font-black text-white/10 uppercase tracking-tighter hover:text-[#ff5c00] transition cursor-default">{name}</span>
               ))}
            </div>
          </div>

          {/* Asset Section */}
          <div className="py-20 text-center flex flex-col items-center">
            <h3 className="text-4xl md:text-8xl font-black uppercase mb-10 tracking-tighter leading-none">One asset. <br className="md:hidden"/> Endless possibilities.</h3>
            <div className="inline-block border border-[#ff5c00]/60 rounded-full px-8 py-2 mb-24 text-[#ff5c00] font-black tracking-[0.4em] uppercase text-[11px]">
              USDX is for everyone
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 w-full">
              {[
                { t: "Decentralized Finance", d: "Trade, earn, and unlock yield opportunities with USDX." },
                { t: "Global Sports", d: "USDX partners with sports organizations for fan experiences." },
                { t: "Art & Culture", d: "Supporting artists and creators through community initiatives." },
                { t: "Giving Back", d: "USDX raised funds for causes the community believes in." },
                { t: "Consumer Applications", d: "Products built for everyday use, from onboarding to social." }
              ].map((card, i) => (
                <div key={i} className="bg-white/[0.04] p-10 rounded-[40px] text-left border border-white/5 hover:border-[#ff5c00]/40 transition-all flex flex-col justify-between group backdrop-blur-xl">
                  <div><h4 className="font-black uppercase text-xl mb-5 leading-tight">{card.t}</h4><p className="text-gray-500 text-sm leading-relaxed">{card.d}</p></div>
                  <div className="mt-10 bg-[#ff5c00] w-12 h-12 rounded-full flex items-center justify-center group-hover:translate-x-3 transition cursor-pointer shadow-lg text-black font-black text-xl">➜</div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="bg-black/60 pt-32 pb-16 border-t border-white/5 text-center">
          <h1 className="text-3xl font-black uppercase tracking-tighter mb-4">USDX</h1>
          <p className="text-[11px] text-gray-400 uppercase tracking-widest font-black">© 2026 USDX. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
