import React from 'react';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

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
  description: 'USDX Digital Asset Ecosystem',
  url: 'https://metaworld-official.vercel.app',
  icons: ['https://metaworld-official.vercel.app/logo.png']
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, bsc],
  projectId,
  enableAnalytics: false
});

export default function Home() {

  const chartBars = [40, 70, 55, 90, 60, 120, 85, 140, 100, 170, 130, 190];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      <div
        className="fixed inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(circle at top, rgba(255,92,0,0.25), transparent 60%)'
        }}
      />

      {/* NAVBAR */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-6 border-b border-white/10 backdrop-blur-md">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-[#ff5c00] flex items-center justify-center text-white font-black text-lg shadow-[0_0_30px_rgba(255,92,0,0.5)]">
            USDX
          </div>

          <div>
            <h1 className="text-3xl font-black tracking-tight uppercase">
              USDExchange
            </h1>

            <p className="text-[#ff5c00] text-xs tracking-[0.4em] uppercase">
              Digital Economy
            </p>
          </div>

        </div>

        <div className="flex items-center gap-4">

          <a
            href="#governance"
            className="hidden md:block text-sm uppercase text-gray-400 hover:text-[#ff5c00] transition"
          >
            Governance
          </a>

          <a
            href="#whitepaper"
            className="hidden md:block text-sm uppercase text-gray-400 hover:text-[#ff5c00] transition"
          >
            Whitepaper
          </a>

          <w3m-button />

        </div>

      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20">

        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-24">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff5c00]/30 bg-[#ff5c00]/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#ff5c00] animate-pulse"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#ff5c00] font-black">
                Live Ecosystem
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
              Advanced
              <br />
              <span className="text-[#ff5c00]">
                USDX Swap
              </span>
            </h2>

            <p className="max-w-xl text-gray-400 text-lg leading-relaxed mb-8">
              Trade, swap and explore the future of decentralized finance inside the USDExchange ecosystem.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://pancakeswap.finance/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-[#ff5c00] rounded-2xl font-black uppercase hover:scale-105 transition-all"
              >
                Launch App
              </a>

              <a
                href="https://dexscreener.com/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-white/20 rounded-2xl font-black uppercase hover:border-[#ff5c00] transition-all"
              >
                View Chart
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-6 backdrop-blur-xl">

            <div className="flex justify-between items-center mb-6">

              <h3 className="text-2xl font-black">
                USDX / BNB
              </h3>

              <span className="text-green-400 font-black">
                +12.45%
              </span>

            </div>

            {/* CHART */}
            <div className="h-[220px] rounded-3xl bg-black/40 border border-white/5 mb-6 flex items-end gap-2 p-4 overflow-hidden">

              {chartBars.map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}px` }}
                  className="flex-1 bg-gradient-to-t from-[#ff5c00] to-orange-300 rounded-t-xl"
                />
              ))}

            </div>

            {/* SWAP */}
            <div className="space-y-4">

              <div className="bg-black/40 rounded-2xl p-4 border border-white/5">

                <div className="flex justify-between mb-2">
                  <p className="text-xs text-gray-500 uppercase">
                    From
                  </p>

                  <p className="text-xs text-gray-500">
                    Balance: 0.00
                  </p>
                </div>

                <div className="flex justify-between items-center">

                  <input
                    placeholder="0.0"
                    className="bg-transparent outline-none text-2xl font-black w-full"
                  />

                  <button className="bg-[#ff5c00] px-4 py-2 rounded-xl font-black">
                    BNB
                  </button>

                </div>

              </div>

              <div className="bg-black/40 rounded-2xl p-4 border border-white/5">

                <div className="flex justify-between mb-2">
                  <p className="text-xs text-gray-500 uppercase">
                    To
                  </p>

                  <p className="text-xs text-gray-500">
                    Balance: 0.00
                  </p>
                </div>

                <div className="flex justify-between items-center">

                  <input
                    placeholder="0.0"
                    className="bg-transparent outline-none text-2xl font-black w-full"
                  />

                  <button className="bg-[#ff5c00] px-4 py-2 rounded-xl font-black">
                    USDX
                  </button>

                </div>

              </div>

              <div className="flex justify-between text-sm text-gray-500 px-1">

                <span>Slippage: 0.5%</span>
                <span>Gas Fee: ~$0.12</span>

              </div>

              <button className="w-full py-5 rounded-2xl bg-[#ff5c00] text-black font-black uppercase hover:scale-[1.02] transition-all">
                Swap Tokens
              </button>

            </div>

          </div>

        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">

          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-8 text-center">
            <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">
              Liquidity
            </p>

            <h3 className="text-3xl font-black text-[#ff5c00]">
              $500K
            </h3>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-8 text-center">
            <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">
              Holders
            </p>

            <h3 className="text-3xl font-black text-[#ff5c00]">
              12K+
            </h3>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-8 text-center">
            <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">
              Volume
            </p>

            <h3 className="text-3xl font-black text-[#ff5c00]">
              $2.4M
            </h3>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-8 text-center">
            <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">
              Blockchain
            </p>

            <h3 className="text-3xl font-black text-[#ff5c00]">
              BEP20
            </h3>
          </div>

        </section>

        {/* ABOUT */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-8">

            <p className="text-[#ff5c00] uppercase tracking-[0.3em] text-xs font-black mb-4">
              What Is USDExchange
            </p>

            <h3 className="text-4xl font-black mb-6">
              A Future Web3 Ecosystem
            </h3>

            <p className="text-gray-400 leading-relaxed">
              USDExchange is building a decentralized ecosystem focused on swapping, digital assets, Web3 utilities and future financial infrastructure powered by USDX.
            </p>

          </div>

          <div className="bg-[#ff5c00]/10 border border-[#ff5c00]/30 rounded-[35px] p-8">

            <p className="text-[#ff5c00] uppercase tracking-[0.3em] text-xs font-black mb-4">
              What Is USDX
            </p>

            <h3 className="text-4xl font-black mb-6">
              Ecosystem Utility Token
            </h3>

            <p className="text-gray-300 leading-relaxed">
              USDX powers swaps, staking, governance systems, future ecosystem utilities and decentralized financial tools.
            </p>

          </div>

        </section>

        {/* GOVERNANCE */}
        <section
          id="governance"
          className="mb-24"
        >

          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-10">

            <div className="max-w-3xl">

              <p className="text-[#ff5c00] uppercase tracking-[0.3em] text-xs font-black mb-4">
                Governance
              </p>

              <h3 className="text-5xl font-black mb-6">
                Community Powered Decisions
              </h3>

              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                USDX governance will allow the community to participate in ecosystem decisions, future proposals, utility upgrades and decentralized development expansion.
              </p>

              <button className="px-8 py-4 bg-[#ff5c00] rounded-2xl font-black uppercase">
                Governance Portal
              </button>

            </div>

          </div>

        </section>

        {/* ROADMAP */}
        <section className="mb-24">

          <div className="text-center mb-14">

            <h2 className="text-5xl font-black uppercase mb-4">
              Roadmap
            </h2>

            <p className="text-gray-400">
              Building the future ecosystem step by step.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {[
              {
                phase: 'Phase 1',
                title: 'Launch',
                desc: 'Website and Token Deployment'
              },
              {
                phase: 'Phase 2',
                title: 'Community',
                desc: 'Marketing and Community Growth'
              },
              {
                phase: 'Phase 3',
                title: 'Listing',
                desc: 'CoinMarketCap and CoinGecko'
              },
              {
                phase: 'Phase 4',
                title: 'Expansion',
                desc: 'Swap, DApp and Ecosystem Growth'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-[30px] p-6 hover:border-[#ff5c00]/40 transition-all"
              >

                <p className="text-[#ff5c00] text-xs uppercase tracking-widest font-black mb-2">
                  {item.phase}
                </p>

                <h4 className="text-2xl font-black mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* HOW TO BUY */}
        <section className="mb-24">

          <div className="text-center mb-14">

            <h2 className="text-5xl font-black uppercase mb-4">
              How To Buy USDX
            </h2>

            <p className="text-gray-400">
              Buy USDX easily through decentralized exchanges.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {[
              'Install Trust Wallet or MetaMask',
              'Add BNB Smart Chain',
              'Get BNB in your wallet',
              'Swap BNB to USDX'
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-[30px] p-6"
              >

                <div className="w-12 h-12 rounded-full bg-[#ff5c00] flex items-center justify-center font-black mb-6">
                  {index + 1}
                </div>

                <p className="text-lg font-bold text-gray-200">
                  {step}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* WHITEPAPER */}
        <section
          id="whitepaper"
          className="mb-24"
        >

          <div className="bg-[#ff5c00]/10 border border-[#ff5c00]/30 rounded-[35px] p-10 text-center">

            <h3 className="text-5xl font-black mb-6">
              USDExchange Whitepaper
            </h3>

            <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-10">
              Explore the USDExchange ecosystem vision, governance systems, utility roadmap and future decentralized infrastructure.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="#"
                className="px-8 py-4 bg-[#ff5c00] text-black rounded-2xl font-black uppercase"
              >
                Read Whitepaper
              </a>

              <a
                href="#"
                className="px-8 py-4 border border-white/20 rounded-2xl font-black uppercase"
              >
                Ecosystem Docs
              </a>

            </div>

          </div>

        </section>

        {/* POWERED BY */}
        <section className="mb-24">

          <div className="text-center mb-14">

            <h2 className="text-5xl font-black uppercase mb-4">
              Powered By
            </h2>

            <p className="text-gray-400">
              Trusted Web3 technologies powering the ecosystem.
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

            {[
              'BNB Chain',
              'MetaMask',
              'Trust Wallet',
              'Web3Modal',
              'DEX Ecosystem'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-[30px] p-6 text-center"
              >

                <p className="text-lg font-black text-gray-300">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* SOCIALS */}
        <section className="mb-24">

          <div className="text-center mb-14">

            <h2 className="text-5xl font-black uppercase mb-4">
              Join Community
            </h2>

            <p className="text-gray-400">
              Connect with the USDExchange ecosystem.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="bg-white/[0.03] border border-white/10 rounded-[30px] p-8 text-center hover:border-[#ff5c00]/40 transition-all"
            >

              <h3 className="text-2xl font-black mb-3">
                Twitter / X
              </h3>

              <p className="text-gray-400">
                Latest ecosystem updates.
              </p>

            </a>

            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="bg-white/[0.03] border border-white/10 rounded-[30px] p-8 text-center hover:border-[#ff5c00]/40 transition-all"
            >

              <h3 className="text-2xl font-black mb-3">
                Telegram
              </h3>

              <p className="text-gray-400">
                Join the community chat.
              </p>

            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="bg-white/[0.03] border border-white/10 rounded-[30px] p-8 text-center hover:border-[#ff5c00]/40 transition-all"
            >

              <h3 className="text-2xl font-black mb-3">
                GitHub
              </h3>

              <p className="text-gray-400">
                Open ecosystem development.
              </p>

            </a>

            <a
              href="#whitepaper"
              className="bg-[#ff5c00]/10 border border-[#ff5c00]/30 rounded-[30px] p-8 text-center hover:scale-[1.02] transition-all"
            >

              <h3 className="text-2xl font-black mb-3 text-[#ff5c00]">
                Whitepaper
              </h3>

              <p className="text-gray-300">
                Explore USDX ecosystem vision.
              </p>

            </a>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16 text-center relative z-10 bg-black/40">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl font-black uppercase tracking-tight mb-4">
            USDX
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            USDExchange is building the next generation decentralized ecosystem focused on swapping, Web3 utilities and future digital finance infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">

            <a
              href="https://pancakeswap.finance/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#ff5c00] rounded-2xl font-black uppercase text-black"
            >
              Launch App
            </a>

            <a
              href="#whitepaper"
              className="px-6 py-3 border border-white/20 rounded-2xl font-black uppercase"
            >
              Whitepaper
            </a>

          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 uppercase tracking-widest">

            <span>BEP20</span>
            <span>Web3</span>
            <span>USDX</span>
            <span>Governance</span>
            <span>DEX Ecosystem</span>

          </div>

          <div className="mt-10 text-gray-600 text-xs uppercase tracking-widest">
            © 2026 USDExchange. All rights reserved.
          </div>

        </div>

      </footer>

    </div>
  );
}
