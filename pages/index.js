import React from 'react';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';
import { ethers } from 'ethers';
import { useWeb3Modal } from '@web3modal/ethers/react';

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

  const { open } = useWeb3Modal();

  const [wallet, setWallet] = React.useState(null);
  const [balance, setBalance] = React.useState('0');

  const [fromToken, setFromToken] = React.useState('BNB');
  const [toToken, setToToken] = React.useState('USDX');

  const [fromAmount, setFromAmount] = React.useState('');
  const [toAmount, setToAmount] = React.useState('');

  const openWallet = async () => {
    try {
      await open();

      if (!window.ethereum) return;

      const provider = new ethers.BrowserProvider(window.ethereum);

      const accounts = await provider.send('eth_requestAccounts', []);

      const account = accounts[0];

      setWallet(account);

      const balanceWei = await provider.getBalance(account);

      const balanceEth = ethers.formatEther(balanceWei);

      setBalance(parseFloat(balanceEth).toFixed(4));

    } catch (err) {
      console.log(err);
    }
  };

  const switchTokens = () => {

    const oldFrom = fromToken;
    const oldTo = toToken;

    const oldFromAmount = fromAmount;
    const oldToAmount = toAmount;

    setFromToken(oldTo);
    setToToken(oldFrom);

    setFromAmount(oldToAmount);
    setToAmount(oldFromAmount);
  };

  const executeSwap = async () => {

    if (!wallet) {
      openWallet();
      return;
    }

    alert(`Swapping ${fromAmount} ${fromToken} to ${toToken}`);
  };

  return (

    <div
      id="top"
      className="min-h-screen bg-black text-white scroll-smooth overflow-x-hidden overflow-y-auto"
    >

      <div
        className="fixed inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(circle at top, rgba(255,92,0,0.25), transparent 60%)'
        }}
      />

      {/* NAVBAR */}
      <nav className="relative z-50 flex justify-between items-center px-4 md:px-8 py-4 border-b border-white/10 bg-black/80 backdrop-blur-2xl sticky top-0">

        <div className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="logo"
            className="w-14 h-14 object-contain"
          />

          <div>

            <h1 className="text-2xl font-black">
              USD<span className="lowercase">exchange</span>
            </h1>

            <p className="text-[#ff5c00] text-[10px] tracking-[0.35em] uppercase">
              Digital Economy
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <a
            href="#governance"
            className="hidden md:block text-sm text-gray-400 hover:text-[#ff5c00]"
          >
            Governance
          </a>

          <a
            href="#whitepaper"
            className="hidden md:block text-sm text-gray-400 hover:text-[#ff5c00]"
          >
            Whitepaper
          </a>

          <button
            onClick={openWallet}
            className="px-5 py-3 rounded-2xl bg-[#ff5c00] text-black font-black uppercase hover:scale-105 transition-all"
          >
            {wallet
              ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}`
              : 'Connect Wallet'}
          </button>

        </div>

      </nav>

      <main className="relative z-10 max-w-[1700px] mx-auto px-3 md:px-8 pt-4 md:pt-10">

        {/* HERO + SWAP */}
        <section className="grid xl:grid-cols-[1.1fr_0.9fr] gap-6 items-start mb-16">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff5c00]/30 bg-[#ff5c00]/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#ff5c00] animate-pulse"></div>

              <span className="text-xs uppercase tracking-[0.3em] text-[#ff5c00] font-black">
                Live Ecosystem
              </span>
            </div>

            <h2 className="text-[42px] md:text-7xl font-black uppercase leading-[0.9] mb-5">

              Advanced
              <br />

              <span className="text-[#ff5c00]">
                USDX Swap
              </span>

            </h2>

            <p className="max-w-2xl text-gray-400 text-[15px] leading-8 mb-8">

              Trade, swap and explore the future of decentralized finance inside the USDExchange ecosystem.

            </p>

            <div className="flex flex-wrap gap-4 mb-10">

              <a
                href="https://pancakeswap.finance/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-[#ff5c00] rounded-2xl font-black uppercase text-black hover:scale-105 transition-all"
              >
                Launch App
              </a>

              <a
                href="https://dexscreener.com/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-white/20 rounded-2xl font-black uppercase hover:border-[#ff5c00]"
              >
                View Chart
              </a>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {[
                ['Liquidity', '$500K'],
                ['Holders', '12K+'],
                ['Volume', '$2.4M'],
                ['Blockchain', 'BEP20']
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-white/[0.03] border border-white/10 rounded-[28px] p-5 text-center"
                >

                  <p className="text-gray-500 uppercase text-xs tracking-widest mb-3">
                    {item[0]}
                  </p>

                  <h3 className="text-xl font-black text-[#ff5c00]">
                    {item[1]}
                  </h3>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-[#111111] border border-white/10 rounded-[34px] p-4 md:p-5 shadow-[0_0_40px_rgba(255,92,0,0.08)] sticky top-[100px]">

            <div className="flex justify-between items-center mb-6">

              <h3 className="text-lg font-black">
                USDX / BNB
              </h3>

              <span className="text-green-400 font-black">
                +12.45%
              </span>

            </div>

            <div className="h-[260px] md:h-[360px] rounded-[24px] overflow-hidden border border-white/10 bg-black/40">

              <iframe
                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=BINANCE:BTCUSDT&interval=15&hidesidetoolbar=1&theme=dark&style=1&timezone=Etc/UTC&withdateranges=1&hideideas=1"
                width="100%"
                height="100%"
                frameBorder="0"
                allowTransparency="true"
                scrolling="no"
                title="chart"
              ></iframe>

            </div>

            {/* SWAP */}
            <div
              id="swap"
              className="mt-6 bg-[#0b0b0b] border border-white/10 rounded-[20px] p-4 md:p-5"
            >

              <div className="flex justify-between items-center mb-6">

                <div>

                  <h2 className="text-2xl font-black">
                    Swap
                  </h2>

                  <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">

                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>

                    <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">
                      BNB Smart Chain
                    </span>

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    Slippage
                  </p>

                  <h3 className="text-xl font-black">
                    0.5%
                  </h3>

                </div>

              </div>

              {/* FROM */}
              <div className="bg-black border border-white/10 rounded-[18px] p-4">

                <div className="flex justify-between items-center mb-4">

                  <p className="text-gray-500 uppercase tracking-[0.25em] text-sm">
                    From
                  </p>

                  <p className="text-gray-500 text-sm">
                    Balance: {wallet ? balance : '0'}
                  </p>

                </div>

                <div className="flex items-center justify-between gap-4">

                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    placeholder="0.0"
                    className="bg-transparent outline-none text-2xl font-black w-full"
                  />

                  <select
                    value={fromToken}
                    onChange={(e) => setFromToken(e.target.value)}
                    className="bg-[#ff5c00] text-black px-3 py-2 rounded-2xl font-black"
                  >

                    <option>BNB</option>
                    <option>WBNB</option>
                    <option>USDT</option>
                    <option>USDC</option>
                    <option>DAI</option>
                    <option>USDX</option>

                  </select>

                </div>

              </div>

              {/* SWITCH */}
              <div className="flex justify-center -my-2 relative z-10">

                <button
                  onClick={switchTokens}
                  className="w-10 h-10 rounded-full bg-[#ff5c00] text-black font-black border-[5px] border-black hover:rotate-180 transition-all duration-500"
                >
                  ⇅
                </button>

              </div>

              {/* TO */}
              <div className="bg-black border border-white/10 rounded-[18px] p-4">

                <div className="flex justify-between items-center mb-4">

                  <p className="text-gray-500 uppercase tracking-[0.25em] text-sm">
                    To
                  </p>

                  <p className="text-gray-500 text-sm">
                    Estimated Receive
                  </p>

                </div>

                <div className="flex items-center justify-between gap-4">

                  <input
                    type="number"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                    placeholder="0.0"
                    className="bg-transparent outline-none text-2xl font-black w-full"
                  />

                  <select
                    value={toToken}
                    onChange={(e) => setToToken(e.target.value)}
                    className="bg-[#ff5c00] text-black px-3 py-2 rounded-2xl font-black"
                  >

                    <option>USDX</option>
                    <option>USDT</option>
                    <option>USDC</option>
                    <option>DAI</option>
                    <option>WBNB</option>
                    <option>BNB</option>

                  </select>

                </div>

              </div>

              {/* INFO */}
              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-black/40 border border-white/10 rounded-2xl p-4">

                  <p className="text-gray-500 text-xs uppercase mb-2">
                    Network Fee
                  </p>

                  <h3 className="text-lg font-black">
                    ~$0.12
                  </h3>

                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-4">

                  <p className="text-gray-500 text-xs uppercase mb-2">
                    Price Impact
                  </p>

                  <h3 className="text-lg font-black text-green-400">
                    Low
                  </h3>

                </div>

              </div>

              <button
                onClick={executeSwap}
                className="w-full h-[52px] mt-6 rounded-[24px] bg-[#ff5c00] text-black font-black text-xl hover:scale-[1.01] transition-all"
              >
                SWAP {fromToken} → {toToken}
              </button>

            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section className="grid md:grid-cols-2 gap-6 mb-20">

          <div className="bg-white/[0.03] border border-white/10 rounded-[30px] p-8">

            <p className="text-[#ff5c00] uppercase tracking-[0.3em] text-xs font-black mb-4">
              What Is USDExchange
            </p>

            <h3 className="text-3xl font-black mb-5">
              Future Web3 Ecosystem
            </h3>

            <p className="text-gray-400 leading-8">
              USDExchange is building a decentralized ecosystem focused on swaps, Web3 utilities and future financial infrastructure powered by USDX.
            </p>

          </div>

          <div className="bg-[#ff5c00]/10 border border-[#ff5c00]/30 rounded-[30px] p-8">

            <p className="text-[#ff5c00] uppercase tracking-[0.3em] text-xs font-black mb-4">
              What Is USDX
            </p>

            <h3 className="text-3xl font-black mb-5">
              Ecosystem Utility Token
            </h3>

            <p className="text-gray-300 leading-8">
              USDX powers swaps, governance systems, ecosystem utilities and future decentralized financial tools.
            </p>

          </div>

        </section>

        {/* ROADMAP */}
        <section className="mb-24">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-black uppercase mb-4">
              Roadmap
            </h2>

            <p className="text-gray-400">
              Building the ecosystem step by step.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-5">

            {[
              {
                phase: 'Phase 1',
                title: 'Launch',
                desc: 'Website and token deployment'
              },
              {
                phase: 'Phase 2',
                title: 'Community',
                desc: 'Marketing and ecosystem growth'
              },
              {
                phase: 'Phase 3',
                title: 'Listing',
                desc: 'CMC and CoinGecko expansion'
              },
              {
                phase: 'Phase 4',
                title: 'Expansion',
                desc: 'Swap and DApp ecosystem'
              }
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-[26px] p-6 hover:border-[#ff5c00]/40 transition-all"
              >

                <p className="text-[#ff5c00] text-xs uppercase tracking-widest font-black mb-3">
                  {item.phase}
                </p>

                <h4 className="text-xl font-black mb-4">
                  {item.title}
                </h4>

                <p className="text-gray-400 leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* GOVERNANCE */}
        <section
          id="governance"
          className="grid md:grid-cols-2 gap-6 mb-24"
        >

          <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-8">

            <span className="text-[#ff5c00] text-xs uppercase tracking-[0.3em] font-black">
              Governance
            </span>

            <h3 className="text-3xl font-black mt-5 mb-6">
              Community Governance
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              USDExchange aims to build a community-driven ecosystem powered by decentralized governance systems.
            </p>

            <ul className="space-y-4 text-gray-300">

              <li>• Community Proposals</li>
              <li>• Ecosystem Voting</li>
              <li>• Governance Expansion</li>
              <li>• Decentralized Participation</li>

            </ul>

          </div>

          <div className="bg-[#ff5c00]/10 border border-[#ff5c00]/30 rounded-[35px] p-8">

            <span className="text-[#ff5c00] text-xs uppercase tracking-[0.3em] font-black">
              Community
            </span>

            <h3 className="text-3xl font-black mt-5 mb-6">
              Build USDExchange Together
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              Join the ecosystem and help shape the future decentralized infrastructure.
            </p>

            <button className="px-8 py-4 bg-[#ff5c00] rounded-2xl text-black font-black uppercase">
              Join Community
            </button>

          </div>

        </section>

        {/* WHITEPAPER */}
        <section
          id="whitepaper"
          className="mb-24"
        >

          <div className="bg-[#ff5c00]/10 border border-[#ff5c00]/30 rounded-[35px] p-10 text-center">

            <h3 className="text-4xl font-black mb-6">
              USDExchange Whitepaper
            </h3>

            <p className="max-w-3xl mx-auto text-gray-300 leading-8 mb-10">
              Explore the USDExchange ecosystem vision, governance systems and decentralized future infrastructure.
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

      </main>

      {/* MOBILE NAV */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/95 backdrop-blur-2xl">

        <div className="grid grid-cols-4 py-3">

          <a href="#top" className="flex flex-col items-center text-[#ff5c00] text-xs font-bold">
            <span>⌂</span>
            <span>Home</span>
          </a>

          <a href="#swap" className="flex flex-col items-center text-gray-400 text-xs">
            <span>⇄</span>
            <span>Swap</span>
          </a>

          <a href="#governance" className="flex flex-col items-center text-gray-400 text-xs">
            <span>◉</span>
            <span>Earn</span>
          </a>

          <a href="#whitepaper" className="flex flex-col items-center text-gray-400 text-xs">
            <span>☰</span>
            <span>Menu</span>
          </a>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 text-center bg-black/40 pb-32 md:pb-16">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-3xl font-black uppercase mb-4">
            USDX
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-10">
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

          <div className="text-gray-600 text-xs uppercase tracking-widest">
            © 2026 USDExchange. All rights reserved.
          </div>

        </div>

      </footer>

    </div>
  );
}
