import React, { useState, useEffect } from 'react';
import { createWeb3Modal, defaultConfig, useWeb3Modal } from '@web3modal/ethers/react';

// --- CONFIGURATION ---
const projectId = 'f523ce22bed6a9a2acc600cadd1473c5';

const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
};

const bsc = {
  chainId: 56,
  name: 'Binance Smart Chain',
  currency: 'BNB',
  explorerUrl: 'https://bscscan.com',
  rpcUrl: 'https://bsc-dataseed.binance.org'
};

const metadata = {
  name: 'USDExchange | USDX',
  description: 'USDExchange (USDX) - The Premier Digital Asset for the Global Ecosystem',
  url: 'https://metaworld-official.vercel.app', // Isse bhi future mein domain se replace karein
  icons: ['YOUR_NEW_LOGO_URL']
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, bsc],
  projectId,
  themeVariables: {
    '--w3m-accent': '#ff5c00',
    '--w3m-border-radius-master': '2px'
  }
});

export default function Home() {
  const { open } = useWeb3Modal();

  return (
    <div className="min-h-screen text-white font-sans selection:bg-orange-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 bg-[#050505]" style={{ background: `radial-gradient(circle at top, #3d1b00 0%, #050505 65%)` }}></div>
      <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '45px 45px' }}></div>

      <style jsx>{`
        @keyframes infinite-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-infinite-scroll { display: flex; width: max-content; animation: infinite-scroll 35s linear infinite; }
      `}</style>

      <div className="relative z-10">
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-white/5 backdrop-blur-md">
     <div className="flex items-center gap-3 group cursor-pointer">
            {/* Logo Circle - Updated to USDX */}
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
              <div className="absolute inset-0 border-2 border-[#ff5c00] rounded-full animate-[pulse_3s_infinite] opacity-50"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-[#ff5c00] to-[#b34100] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,92,0,0.4)]">
                <span className="text-white font-[1000] text-lg md:text-xl tracking-tighter">USDX</span>
              </div>
            </div>

            {/* Brand Text - Updated to USD EXCHANGE */}
            <div className="flex flex-col leading-none">
              <span className="font-[1000] text-2xl md:text-3xl text-white tracking-tighter uppercase italic">USD</span>
              <span className="font-medium text-[#ff5c00] text-[10px] md:text-[11px] tracking-[0.4em] uppercase opacity-90">Exchange</span>
            </div>
          </div>
          <w3m-button />
        </nav>
<main className="max-w-7xl mx-auto px-6 pt-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-[110px] font-black mb-10 tracking-tighter uppercase leading-[0.82]">
            Your gateway to the <br /> <span className="text-[#ff5c00]">digital economy</span>
          </h2>
          
          <div className="flex flex-col items-center w-full">
            {/* 1. JOIN THE PACK BUTTON */}
            <button className="bg-white text-black px-14 py-5 rounded-2xl font-black uppercase text-sm hover:scale-105 transition shadow-2xl tracking-widest mb-16">
              Join the Community
            </button>
       {/* CONTRACT ADDRESS SECTION */}
            <div className="w-full max-w-2xl mx-auto mb-16 px-4">
              <div className="bg-white/[0.03] border border-white/10 p-1 rounded-2xl flex flex-col md:flex-row items-center gap-4 backdrop-blur-xl group hover:border-[#ff5c00]/30 transition-all">
                <div className="flex-1 flex items-center gap-3 px-6 py-3 overflow-hidden w-full">
                  <span className="text-[#ff5c00] text-[10px] font-black uppercase tracking-widest whitespace-nowrap">CA:</span>
                  <code className="text-[10px] md:text-xs font-mono text-gray-400 truncate tracking-wider">
                    0x0000000000000000000000000000000000000000
                  </code>
                </div>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('0x0000000000000000000000000000000000000000');
                    alert('USDX Address Copied!');
                  }}
                  className="w-full md:w-auto bg-[#ff5c00] hover:bg-[#ff8c40] text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(255,92,0,0.2)]"
                >
                  Copy Address
                </button>
              </div>
              <p className="text-center mt-3 text-[9px] text-gray-500 font-medium uppercase tracking-[0.3em]">
                Click to copy the official <span className="text-[#ff5c00]">USDX</span> contract
              </p>
            </div>  
        {/* 4. TOKENOMICS SECTION */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-28 relative z-10">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#ff5c00]/40"></div>
            <div className="border border-[#ff5c00]/30 rounded-full px-8 py-2 text-[#ff5c00] text-[11px] font-black tracking-[0.4em] uppercase bg-[#ff5c00]/5 backdrop-blur-sm">
              USDX Tokenomics
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#ff5c00]/40"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[35px] text-center hover:border-[#ff5c00]/50 transition-all group backdrop-blur-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 group-hover:text-orange-400 transition-colors">Total Supply</p>
              <h3 className="text-4xl font-black text-white">1B <span className="text-[#ff5c00]">USDX</span></h3>
            </div>
            <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[35px] text-center hover:border-[#ff5c00]/50 transition-all group backdrop-blur-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 group-hover:text-orange-400 transition-colors">Trading Fee</p>
              <h3 className="text-4xl font-black text-white">0% <span className="text-[#ff5c00]">Tax</span></h3>
            </div>
            <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[35px] text-center hover:border-[#ff5c00]/50 transition-all group backdrop-blur-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4 group-hover:text-orange-400 transition-colors">Network</p>
              <h3 className="text-4xl font-black text-white italic tracking-tighter">BEP-20</h3>
            </div>
          </div>
        </div>
    <div className="flex flex-col md:flex-row gap-8 mb-24 max-w-6xl mx-auto px-4 relative z-10">
            <div className="flex-1 bg-white/[0.03] border border-[#ff5c00]/30 rounded-[40px] p-8 backdrop-blur-xl relative">
               <div className="absolute -top-3 left-10 bg-[#050505] border border-[#ff5c00]/40 px-4 py-1 rounded-full">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#ff5c00]">Live Markets</span>
               </div>
               <div className="grid grid-cols-2 gap-4 mt-2">
                 {[{ name: 'DexScreener', url: 'https://dexscreener.com' }, { name: 'DEXTools', url: 'https://www.dextools.io' }, { name: 'Birdeye', url: 'https://birdeye.so' }, { name: 'Jupiter', url: 'https://jup.ag' }].map((item) => (
                   <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="px-4 py-4 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase text-center tracking-widest hover:bg-[#ff5c00]/20 hover:border-[#ff5c00]/50 transition-all">{item.name}</a>
                 ))}
               </div>
            </div>
            <div className="flex-1 bg-[#ff5c00]/5 border border-[#ff5c00]/30 rounded-[40px] p-8 backdrop-blur-xl relative">
               <div className="absolute -top-3 left-10 bg-[#050505] border border-[#ff5c00]/40 px-4 py-1 rounded-full">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#ff5c00]">Community</span>
               </div>
               <div className="flex flex-col gap-3 mt-2">
                 {[{ name: 'Twitter / X', url: 'https://twitter.com' }, { name: 'Telegram', url: 'https://t.me' }, { name: 'Discord', url: 'https://discord.com' }].map((social) => (
                   <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-black/40 border border-white/10 rounded-2xl text-center text-xs font-black uppercase tracking-[0.3em] hover:bg-[#ff5c00] hover:text-white transition-all">{social.name}</a>
                 ))}
               </div>
            </div>
          </div>
          {/* Roadmap Section */}
<div className="max-w-6xl mx-auto px-4 mb-24 relative z-10">
  <div className="flex items-center gap-4 mb-12">
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#ff5c00]/40"></div>
    <div className="border border-[#ff5c00]/30 rounded-full px-8 py-2 text-[#ff5c00] text-[11px] font-black tracking-[0.4em] uppercase bg-[#ff5c00]/5 backdrop-blur-sm">
      USDX Roadmap
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#ff5c00]/40"></div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {[
      { phase: 'Phase 1', title: 'Launch', desc: 'Website & Token Deployment' },
      { phase: 'Phase 2', title: 'Marketing', desc: 'Community Growth & Ads' },
      { phase: 'Phase 3', title: 'Listing', desc: 'CMC & CoinGecko' },
      { phase: 'Phase 4', title: 'Moon', desc: 'Tier 1 CEX Listings' }
    ].map((item, index) => (
      <div key={index} className="p-6 bg-white/[0.02] border border-white/10 rounded-[30px] hover:border-[#ff5c00]/40 transition-all">
        <span className="text-[#ff5c00] text-[10px] font-black tracking-widest uppercase">{item.phase}</span>
        <h4 className="text-xl font-bold text-white mt-2 mb-2">{item.title}</h4>
        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
      </div>
    ))}
  </div>
</div>
          <div className="w-full overflow-hidden py-16 border-y border-white/5 relative bg-black/40 mb-20">
            <div className="animate-infinite-scroll flex gap-24 items-center">
               {['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'].map((name, i) => (
                 <span key={i} className="text-3xl font-black text-white/10 uppercase tracking-tighter hover:text-[#ff5c00] transition cursor-default">{name}</span>
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
