import React from 'react';
import { createWeb3Modal, defaultWagmiConfig, useWeb3Modal } from '@web3modal/wagmi/react';
import { WagmiProvider, useAccount } from 'wagmi';
import { mainnet, bsc } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// --- SETUP (Isse design nahi bigdega) ---
const queryClient = new QueryClient();
const projectId = 'f523ce22bed6a9a2acc600cadd1473c5';
const metadata = {
  name: 'METAWORLD',
  description: 'Metaworld Web3 Connection',
  url: 'https://metaworld-official.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};
const chains = [mainnet, bsc];
const config = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ 
  wagmiConfig: config, 
  projectId, 
  chains, 
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#ff5c00',
    '--w3m-border-radius-master': '10px'
  }
});

// --- AAPKA ORIGINAL UI COMPONENT ---
function MetaworldUI() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  const brands = ['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'];

  return (
    <div className="min-h-screen text-white font-sans bg-[#050505] overflow-x-hidden relative">
      {/* Background - Your Design */}
      <div className="fixed inset-0 z-0 bg-[#050505]" style={{ background: `radial-gradient(circle at top, #3d1b00 0%, #050505 65%)` }}></div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-white/5">
          <h1 className="text-2xl font-black tracking-tighter uppercase">METAWORLD</h1>
          <button 
            onClick={() => open()} 
            className="bg-[#ff5c00] hover:bg-[#e65200] text-white px-8 py-3 rounded-full text-xs font-black transition-all shadow-lg uppercase"
          >
            {isConnected ? `${address.slice(0, 6)}...${address.slice(-4)}` : "CONNECT WALLET"}
          </button>
        </nav>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-6 pt-20 text-center">
          <h2 className="text-5xl md:text-[110px] font-black mb-10 tracking-tighter uppercase leading-[0.82]">
            Your gateway to the <br /> <span className="text-[#ff5c00]">digital economy</span>
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => open()}
              className="bg-white text-black px-14 py-5 rounded-2xl font-black uppercase text-sm hover:scale-105 transition shadow-2xl tracking-widest"
            >
              Join the Pack
            </button>
          </div>

          {/* Brands Loop - Fixed Syntax */}
          <div className="mt-32 overflow-hidden whitespace-nowrap flex gap-12 opacity-30">
            {brands.map((name) => (
              <span key={name} className="text-2xl font-black text-gray-600 uppercase italic">
                {name}
              </span>
            ))}
            {brands.map((name) => (
              <span key={name + "-loop"} className="text-2xl font-black text-gray-600 uppercase italic">
                {name}
              </span>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

// --- FINAL EXPORT ---
export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <MetaworldUI />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
