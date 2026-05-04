import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <Head>
        <title>MetaWorld | USDX Token</title>
        <meta name="description" content="The New Standard of Digital Currency" />
      </Head>

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <nav className="flex justify-between items-center px-8 py-6 sticky top-0 bg-black/40 backdrop-blur-xl border-b border-white/5 z-50">
          <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            METAWORLD
          </div>
          <button onClick={connectWallet} className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full transition-all active:scale-95">
            {walletAddress ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : "Connect Wallet"}
          </button>
        </nav>

        <main className="max-w-7xl mx-auto px-8 pt-24 pb-32 text-center">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9]">
            THE FUTURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">IS HERE.</span>
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-gray-400 text-lg">
            MetaWorld is building the next generation of decentralized finance.
          </p>
          <div className="flex gap-6 justify-center pt-10">
            <button className="px-12 py-5 bg-purple-600 rounded-2xl font-bold hover:scale-105 transition-all">BUY USDX</button>
          </div>
        </main>
      </div>
    </div>
  );
}
