import React from 'react';
import ReactDOM from 'react-dom/client';
import { createWeb3Modal, defaultWagmiConfig, useWeb3Modal } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { mainnet, bsc } from 'wagmi/chains';

// 1. Project ID aur Config (Aapka ID use kiya hai)
const projectId = 'f523ce22bed6a9a2acc600cadd1473c5';

const metadata = {
  name: 'METAWORLD',
  description: 'The Future is Here',
  url: 'https://metaworld-official.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet, bsc];
const wagmiConfig = defaultWagmiConfig({ 
  chains, 
  projectId, 
  metadata,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true
});

// 2. Modal Initialize
createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains, 
  enableAnalytics: true, 
  themeMode: 'dark' 
});

// 3. Main App Component
function App() {
  const { open } = useWeb3Modal(); // Connect modal kholne ke liye hook

  const brands = ['Binance', 'Coinbase', 'Kraken', 'DEXTools', 'DexScreener', 'PancakeSwap', 'CoinGecko', 'Solana', 'Jupiter'];

  return (
    <WagmiConfig config={wagmiConfig}>
      <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
        
        {/* Navbar */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #222' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7' }}>METAWORLD</div>
          <w3m-button /> 
        </nav>

        {/* Hero Section */}
        <main style={{ textAlign: 'center', marginTop: '100px' }}>
          <h1 style={{ fontSize: '72px', fontWeight: '900', letterSpacing: '-2px' }}>
            THE FUTURE <br/> IS HERE.
          </h1>
          <p style={{ color: '#666', marginBottom: '40px' }}>Experience the next generation of digital assets.</p>
          
          {/* Sahi Connect Button */}
          <button 
            onClick={() => open()} 
            style={{ 
              padding: '15px 40px', 
              backgroundColor: '#9333ea', 
              color: 'white', 
              borderRadius: '10px', 
              fontWeight: 'bold', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: '18px' 
            }}
          > 
            BUY USDX 
          </button>
        </main>

        {/* Brand Loop (Fixing Syntax Error Here) */}
        <div style={{ marginTop: '100px', overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex', gap: '50px' }}>
          {brands.map((name, index) => (
            <span key={index} style={{ fontSize: '24px', fontWeight: '900', color: '#333' }}>
              {name}
            </span>
          ))}
        </div>

      </div>
    </WagmiConfig>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
