import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

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
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid #222' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>METAWORLD</div>
        <button 
          onClick={connectWallet} 
          style={{ padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}
        >
          {walletAddress ? `${walletAddress.substring(0, 6)}...` : "Connect Wallet"}
        </button>
      </nav>
      <main style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1 style={{ fontSize: '72px', fontWeight: '900' }}>THE FUTURE IS HERE.</h1>
        <button style={{ padding: '15px 40px', backgroundColor: '#9333ea', color: 'white', borderRadius: '10px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
          BUY USDX
        </button>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
