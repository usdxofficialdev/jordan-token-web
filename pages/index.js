# Updated `pages/index.js`

```jsx
import React from 'react';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

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
  description: 'USDX - The Utility Token Powering the USDExchange Ecosystem',
  url: 'https://metaworld-official.vercel.app',
  icons: ['https://metaworld-official.vercel.app/logo-usdx.png']
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, bsc],
  projectId,
  themeVariables: {
    '--w3m-accent': '#ff5c00',
    '--w3m-border-radius-master': '10px'
  }
});

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-orange-500/30 overflow-x-hidden relative bg-[#050505]">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at top, #3d1b00 0%, #050505 65%)'
        }}
      ></div>

      <div
        className="fixed inset-0 z-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '45px 45px'
        }}
      ></div>

      

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-white/5 backdrop-blur-md">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
              <div className="absolute inset-0 border-2 border-[#ff5c00] rounded-full animate-pulse opacity-50"></div>

              <div className="absolute inset-1 bg-gradient-to-br from-[#ff5c00] to-[#b34100] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,92,0,0.4)]">
                <span className="text-white font-black text-lg tracking-tight">
                  USDX
                </span>
              </div>
            </div>

            <div className="flex flex-col leading-none">
              <span className="font-black text-2xl md:text-3xl uppercase italic tracking-tight">
                USD
              </span>

              <span className="text-[#ff5c00] text-[10px] tracking-[0.35em] uppercase">
                Exchange
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-gray-300 font-semibold">
            <a href="#about" className="hover:text-[#ff5c00] transition">
              About
            </a>

            <a href="#tokenomics" className="hover:text-[#ff5c00] transition">
              Tokenomics
            </a>

            <a href="#roadmap" className="hover:text-[#ff5c00] transition">
              Roadmap
            </a>
          </div>

          <w3m-button />
        </nav>

        {/* Main */}
        <main className="max-w-7xl mx-auto px-6 pt-20 relative z-10">
          {/* Hero */}
          <section className="text-center mb-28">
            <div className="inline-flex items-center gap-2 border border-[#ff5c00]/30 bg-[#ff5c00]/5 rounded-full px-6 py-2 mb-8 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-[#ff5c00] animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#ff5c00]">
                Future USDExchange Ecosystem
              </span>
            </div>

            <h1 className="text-5xl md:text-[100px] font-black uppercase leading-[0.85] tracking-tighter mb-8">
              The Utility Token <br />
              <span className="text-[#ff5c00]">Powering USDExchange</span>
            </h1>

            <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-lg leading-relaxed mb-12">
              USDX is building a next-generation crypto ecosystem focused on
              swaps, decentralized utilities, community growth and the future of
              digital finance.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
              <button className="bg-[#ff5c00] hover:bg-[#ff7b2f] text-white px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all shadow-[0_0_30px_rgba(255,92,0,0.25)] hover:scale-105">
                Join Community
              </button>

              <button className="border border-white/10 bg-white/5 hover:border-[#ff5c00]/50 hover:bg-[#ff5c00]/10 px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all">
                View Roadmap
              </button>
            </div>

            {/* Contract */}
            <div className="w-full max-w-3xl mx-auto px-4">
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-2 flex flex-col md:flex-row items-center gap-4 backdrop-blur-xl hover:border-[#ff5c00]/30 transition-all">
                <div className="flex-1 flex items-center gap-3 px-6 py-3 overflow-hidden w-full">
                  <span className="text-[#ff5c00] text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                    Contract
                  </span>

                  <code className="text-[10px] md:text-xs font-mono text-gray-400 truncate tracking-wider">
                    0x0000000000000000000000000000000000000000
                  </code>
                </div>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      '0x0000000000000000000000000000000000000000'
                    );
                    alert('USDX Contract Copied');
                  }}
                  className="w-full md:w-auto bg-[#ff5c00] hover:bg-[#ff7b2f] text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all"
                >
                  Copy Address
                </button>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="mb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="border border-[#ff5c00]/30 rounded-full px-6 py-2 text-[#ff5c00] text-[10px] font-black tracking-[0.3em] uppercase inline-block mb-6 bg-[#ff5c00]/5">
                  About USDExchange
                </div>

                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
                  Building the Future of the USDX Ecosystem
                </h2>

                <p className="text-gray-400 leading-relaxed mb-6">
                  USDExchange is a long-term ecosystem project focused on
                  decentralized finance, community-powered growth and future swap
                  utilities. USDX is designed as the core utility token powering
                  the platform.
                </p>

                <p className="text-gray-500 leading-relaxed">
                  The vision includes future staking, ecosystem rewards,
                  decentralized tools and an advanced swap platform for the next
                  generation of users.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Swap Ecosystem',
                    'Community Driven',
                    'Future Staking',
                    'Web3 Utilities'
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center hover:border-[#ff5c00]/40 transition-all"
                    >
                      <span className="text-sm uppercase tracking-widest font-black text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tokenomics */}
          <section id="tokenomics" className="mb-28">
            <div className="mb-12 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#ff5c00]/40"></div>

              <div className="border border-[#ff5c00]/30 rounded-full px-8 py-2 text-[#ff5c00] text-[11px] font-black tracking-[0.4em] uppercase bg-[#ff5c00]/5 backdrop-blur-sm">
                USDX Tokenomics
              </div>

              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#ff5c00]/40"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[35px] text-center hover:border-[#ff5c00]/50 transition-all backdrop-blur-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4">
                  Total Supply
                </p>

                <h3 className="text-4xl font-black text-white">
                  1B <span className="text-[#ff5c00]">USDX</span>
                </h3>
              </div>

              <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[35px] text-center hover:border-[#ff5c00]/50 transition-all backdrop-blur-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4">
                  Network
                </p>

                <h3 className="text-4xl font-black text-white italic tracking-tighter">
                  BEP-20
                </h3>
              </div>

              <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[35px] text-center hover:border-[#ff5c00]/50 transition-all backdrop-blur-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4">
                  Trading Tax
                </p>

                <h3 className="text-4xl font-black text-white">
                  0%
                </h3>
              </div>

              <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[35px] text-center hover:border-[#ff5c00]/50 transition-all backdrop-blur-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4">
                  Utility
                </p>

                <h3 className="text-3xl font-black text-white">
                  Ecosystem
                </h3>
              </div>
            </div>
          </section>

          {/* Utility */}
          <section className="mb-28">
            <div className="mb-12 text-center">
              <div className="border border-[#ff5c00]/30 rounded-full px-8 py-2 text-[#ff5c00] text-[11px] font-black tracking-[0.4em] uppercase bg-[#ff5c00]/5 backdrop-blur-sm inline-block mb-6">
                USDX Utility
              </div>

              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                Ecosystem Features
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: 'Swap',
                  desc: 'Future decentralized swap ecosystem'
                },
                {
                  title: 'Staking',
                  desc: 'Reward system for long-term holders'
                },
                {
                  title: 'Governance',
                  desc: 'Community-powered ecosystem decisions'
                },
                {
                  title: 'Rewards',
                  desc: 'Future ecosystem utility & benefits'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] border border-white/10 rounded-[35px] p-8 hover:border-[#ff5c00]/40 transition-all backdrop-blur-xl"
                >
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section id="roadmap" className="mb-28">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#ff5c00]/40"></div>

              <div className="border border-[#ff5c00]/30 rounded-full px-8 py-2 text-[#ff5c00] text-[11px] font-black tracking-[0.4em] uppercase bg-[#ff5c00]/5 backdrop-blur-sm">
                USDX Roadmap
              </div>

              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#ff5c00]/40"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Launch',
                  desc: 'Website, branding & token deployment'
                },
                {
                  phase: 'Phase 2',
                  title: 'Community',
                  desc: 'Community growth & ecosystem awareness'
                },
                {
                  phase: 'Phase 3',
                  title: 'Development',
                  desc: 'Future DApp & staking development'
                },
                {
                  phase: 'Phase 4',
                  title: 'Expansion',
                  desc: 'USDExchange swap ecosystem expansion'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] border border-white/10 rounded-[35px] p-8 hover:border-[#ff5c00]/40 transition-all backdrop-blur-xl"
                >
                  <span className="text-[#ff5c00] text-[10px] font-black tracking-[0.2em] uppercase">
                    {item.phase}
                  </span>

                  <h3 className="text-2xl font-black mt-4 mb-3 uppercase tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Community */}
          <section className="mb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/[0.03] border border-[#ff5c00]/30 rounded-[40px] p-8 backdrop-blur-xl relative">
                <div className="absolute -top-3 left-10 bg-[#050505] border border-[#ff5c00]/40 px-4 py-1 rounded-full">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#ff5c00]">
                    Live Markets
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[
                    {
                      name: 'DexScreener',
                      url: 'https://dexscreener.com'
                    },
                    {
                      name: 'DEXTools',
                      url: 'https://www.dextools.io'
                    },
                    {
                      name: 'CoinGecko',
                      url: 'https://www.coingecko.com'
                    },
                    {
                      name: 'PancakeSwap',
                      url: 'https://pancakeswap.finance'
                    }
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-4 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase text-center tracking-widest hover:bg-[#ff5c00]/20 hover:border-[#ff5c00]/50 transition-all"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#ff5c00]/5 border border-[#ff5c00]/30 rounded-[40px] p-8 backdrop-blur-xl relative">
                <div className="absolute -top-3 left-10 bg-[#050505] border border-[#ff5c00]/40 px-4 py-1 rounded-full">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#ff5c00]">
                    Community
                  </span>
                </div>

                <div className="flex flex-col gap-4 mt-4">
                  {[
                    {
                      name: 'Twitter / X',
                      url: 'https://twitter.com'
                    },
                    {
                      name: 'Telegram',
                      url: 'https://t.me'
                    },
                    {
                      name: 'Discord',
                      url: 'https://discord.com'
                    }
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-black/40 border border-white/10 rounded-2xl text-center text-xs font-black uppercase tracking-[0.3em] hover:bg-[#ff5c00] hover:text-white transition-all"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Ticker */}
          <div className="w-full overflow-hidden py-16 border-y border-white/5 relative bg-black/40 mb-20">
            <div className="flex gap-24 items-center animate-pulse">
              {[
                'Binance',
                'Coinbase',
                'Kraken',
                'DEXTools',
                'DexScreener',
                'PancakeSwap',
                'CoinGecko',
                'Web3',
                'USDX'
              ].map((name, i) => (
                <span
                  key={i}
                  className="text-3xl font-black text-white/10 uppercase tracking-tighter hover:text-[#ff5c00] transition cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black/60 pt-24 pb-16 border-t border-white/5 text-center">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">
            USDX
          </h1>

          <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] mb-6">
            The Utility Token of USDExchange
          </p>

          <div className="flex justify-center gap-6 text-sm text-gray-400 mb-8">
            <a href="#" className="hover:text-[#ff5c00] transition">
              Telegram
            </a>

            <a href="#" className="hover:text-[#ff5c00] transition">
              Twitter
            </a>

            <a href="#" className="hover:text-[#ff5c00] transition">
              GitHub
            </a>
          </div>

          <p className="text-[11px] text-gray-500 uppercase tracking-widest font-black">
            © 2026 USDExchange. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
...
