import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
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
      <nav className="flex justify-between items-center px-8 py-6 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          METAWORLD
        </div>
        <button 
          onClick={connectWallet} 
          className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all"
        >
          {walletAddress ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : "Connect Wallet"}
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-24 text-center">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter">
          THE FUTURE <br /> 
          <span className="opacity-50">IS HERE.</span>
        </h1>
        <div className="mt-10">
          <button className="px-12 py-5 bg-purple-600 rounded-2xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20">
            BUY USDX
          </button>
        </div>
      </main>
    </div>
  );
}

// Render logic for Vite
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
