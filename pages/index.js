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
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <Head><title>MetaWorld | USDX Token</title></Head>
      <div className="relative z-10">
        <nav className="flex justify-between items-center px-8 py-6 bg-black/40 backdrop-blur-xl border-b border-white/5">
          <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">METAWORLD</div>
          <button onClick={connectWallet} className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full">
            {walletAddress ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : "Connect Wallet"}
          </button>
        </nav>
        <main className="max-w-7xl mx-auto px-8 pt-24 text-center">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter">THE FUTURE <br /> <span className="opacity-50">IS HERE.</span></h1>
          <div className="mt-10"><button className="px-12 py-5 bg-purple-600 rounded-2xl font-bold">BUY USDX</button></div>
        </main>
      </div>
    </div>
  );
}
