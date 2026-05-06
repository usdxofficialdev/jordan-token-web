import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { mainnet, bsc } from 'wagmi/chains';
const projectId = 'f523ce22bed6a9a2acc600cadd1473c5';

const metadata = {
  name: 'METAWORLD',
  description: 'The Future is Here',
  url: 'https://metaworld-official.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet, bsc];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });
function App() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
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
    <WagmiConfig config={wagmiConfig}>
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid #222' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7' }}>METAWORLD</div>
      <w3m-button />
      </nav>
      <main style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1 style={{ fontSize: '72px', fontWeight: '900', letterSpacing: '-2px' }}>THE FUTURE <br/> IS HERE.</h1>
        <p style={{ color: '#666', marginBottom: '40px' }}>Experience the next generation of digital assets.</p>
        <button style={{ padding: '15px 40px', backgroundColor: '#9333ea', color: 'white', borderRadius: '10px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '18px' }}>
          BUY USDX
        </button>
    </main>
      </div>
    </WagmiConfig>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
