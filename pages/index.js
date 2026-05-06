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
      
      {/* Background Chart Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto backdrop-blur-md">
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
            <div className="bg-[#12141d] border border-white/10 p-8 rounded-[32px] max-w-sm w-full relative animate-in zoom-in duration-200">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white text-xl bg-white/5 w-8 h-8 rounded-full">×</button>
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
                <button className="p-4 text-[10px] font-black uppercase text-gray-500 hover:text-[#ff5c00] tracking-widest">More Wallet Options</button>
              </div>
              <div className="mt-8 text-center text-[10px] text-gray-500 px-4 leading-relaxed">
                By continuing you agree to our <br />
                <a href="#" className="text-gray-300 underline mx-1">Terms of Service</a> and <a href="#" className="text-gray-300 underline mx-1">Privacy Policy</a>
              </div>
            </div>
          </div>
        )}

        <main className="max-w-7xl mx-auto px-6 pt-24">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
              Your gateway to the <br /> <span className="text-[#ff5c00]">digital economy</span>
            </h2>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-black px-10 py-4 rounded-2xl font-black uppercase text-sm hover:bg-gray-200 transition">Join the Pack</button>
            </div>
          </div>

          {/* --- INFINITE LOGO SLIDER --- */}
          <div className="w-full overflow-hidden py-10 border-y border-white/5 relative">
            <div className="flex gap-16 animate-infinite-scroll whitespace-nowrap items-center">
               {['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'].map((name) => (
                 <span key={name} className="text-2xl font-black text-gray-600 uppercase tracking-tighter hover:text-white transition cursor-default">{name}</span>
               ))}
               {/* Repeat for seamless loop */}
               {['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'].map((name) => (
                 <span key={name + "2"} className="text-2xl font-black text-gray-600
