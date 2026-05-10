import React from 'react';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';
import { ethers } from 'ethers';

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

  const [wallet, setWallet] = React.useState(null)
  const [balance, setBalance] = React.useState('0')
  const [fromToken, setFromToken] = React.useState('BNB')
const [toToken, setToToken] = React.useState('USDX')

const [fromAmount, setFromAmount] = React.useState('')
const [toAmount, setToAmount] = React.useState('')

  const openWallet = async () => {
    
    if (!window.ethereum) {
  alert('MetaMask not detected')
  return
}
    
    try {

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })

      const account = accounts[0]

      setWallet(account)

      const provider = new ethers.BrowserProvider(window.ethereum)

      const balanceWei = await provider.getBalance(account)

      const balanceEth = ethers.formatEther(balanceWei)

      setBalance(parseFloat(balanceEth).toFixed(4))

    } catch (err) {
      console.log(err)
    }
  }
const switchTokens = () => {

  const oldFrom = fromToken
  const oldTo = toToken

  const oldFromAmount = fromAmount
  const oldToAmount = toAmount

  setFromToken(oldTo)
  setToToken(oldFrom)

  setFromAmount(oldToAmount)
  setToAmount(oldFromAmount)
}
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

         <img
  src="/logo.png"
  alt="USDExchange Logo"
  className="w-16 h-16 object-contain drop-shadow-[0_0_20px_rgba(255,92,0,0.5)]"
/>

          <div>
           <h1 className="text-3xl font-black tracking-tight">
  USD<span className="lowercase">exchange</span>
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
        <button
  onClick={openWallet}
  className="px-6 py-3 bg-[#ff5c00] rounded-2xl font-black uppercase text-black hover:scale-105 transition-all"
>
  {wallet
    ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}`
    : 'Connect Wallet'}
</button>

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

            <h2 className="text-3xl md:text-3xl md:text-7xl font-black uppercase leading-none mb-8">
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
          <div className="bg-white/[0.03] border border-white/10 rounded-[24px] p-3 backdrop-blur-xl">

            <div className="flex justify-between items-center mb-6">

              <h3 className="text-lg font-black">
                USDX / BNB
              </h3>

              <span className="text-green-400 font-black">
                +12.45%
              </span>

            </div>

    <div className="h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-black/40">

  <iframe
    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=BINANCE:BTCUSDT&interval=15&hidesidetoolbar=1&theme=dark&style=1&timezone=Etc/UTC&withdateranges=1&hideideas=1"
    width="100%"
    height="100%"
    frameBorder="0"
    allowTransparency="true"
    scrolling="no"
  ></iframe>

</div>

  {/* ADVANCED BSC SWAP */}
<div className="mt-6 bg-[#0b0b0b] border border-white/10 rounded-[24px] p-3 backdrop-blur-2xl shadow-2xl">

  {/* TOP */}
  <div className="flex items-center justify-between mb-7">

    <div>

      <h2 className="text-3xl font-black">
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
  <div className="bg-black border border-white/10 rounded-[24px] p-4">

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
        className="bg-transparent outline-none text-3xl font-black w-full text-white"
      />

      <select
        value={fromToken}
        onChange={(e) => setFromToken(e.target.value)}
        className="bg-[#ff5c00] text-black px-5 py-4 rounded-2xl font-black outline-none cursor-pointer"
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
      className="w-14 h-14 rounded-full bg-[#ff5c00]
      text-black text-lg font-black
      border-[5px] border-black
      hover:rotate-180 transition-all duration-500"
    >
      ⇅
    </button>

  </div>

  {/* TO */}
  <div className="bg-black border border-white/10 rounded-[24px] p-4">

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
        className="bg-transparent outline-none text-3xl font-black w-full text-white"
      />

      <select
        value={toToken}
        onChange={(e) => setToToken(e.target.value)}
        className="bg-[#ff5c00] text-black px-5 py-4 rounded-2xl font-black outline-none cursor-pointer"
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

  {/* BUTTON */}
  <div className="mt-6">

    {wallet ? (

      <button
        className="w-full h-[58px]
        rounded-[24px]
        bg-[#ff5c00]
        text-black
        font-black
        text-2xl
        hover:scale-[1.01]
        transition-all"
      >
        SWAP {fromToken} → {toToken}
      </button>

    ) : (

      <button
        onClick={openWallet}
        className="w-full h-[58px]
        rounded-[24px]
        bg-[#ff5c00]
        text-black
        font-black
        text-2xl"
      >
        CONNECT WALLET
      </button>

    )}

  </div>

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

            <h3 className="text-2xl font-black mb-6">
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

            <h3 className="text-2xl font-black mb-6">
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

              <h3 className="text-3xl font-black mb-6">
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

            <h2 className="text-3xl font-black uppercase mb-4">
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

                <h4 className="text-lg font-black mb-3">
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

            <h2 className="text-3xl font-black uppercase mb-4">
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

            <h3 className="text-3xl font-black mb-6">
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

            <h2 className="text-3xl font-black uppercase mb-4">
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

            <h2 className="text-3xl font-black uppercase mb-4">
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

              <h3 className="text-lg font-black mb-3">
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

              <h3 className="text-lg font-black mb-3">
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

              <h3 className="text-lg font-black mb-3">
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

              <h3 className="text-lg font-black mb-3 text-[#ff5c00]">
                Whitepaper
              </h3>

              <p className="text-gray-300">
                Explore USDX ecosystem vision.
              </p>

            </a>

          </div>

        </section>
   <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">

  <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-8 hover:border-[#ff5c00]/40 transition-all backdrop-blur-xl">
    
    <div className="mb-5">
      <span className="text-[#ff5c00] text-xs uppercase tracking-[0.3em] font-black">
        Governance
      </span>
    </div>

    <h3 className="text-3xl font-black mb-6">
      Community Governance
    </h3>

    <p className="text-gray-400 leading-relaxed mb-6">
      USDExchange aims to build a community-driven ecosystem where future
      decisions and ecosystem expansion may involve community participation.
    </p>

    <ul className="space-y-4 text-gray-300">
      <li>• Future ecosystem proposals</li>
      <li>• Community participation</li>
      <li>• Ecosystem growth ideas</li>
      <li>• Governance-based expansion</li>
      <li>• Transparent development vision</li>
    </ul>

  </div>

  <div className="bg-[#ff5c00]/10 border border-[#ff5c00]/30 rounded-[35px] p-8 hover:border-[#ff5c00] transition-all backdrop-blur-xl">

    <div className="mb-5">
      <span className="text-[#ff5c00] text-xs uppercase tracking-[0.3em] font-black">
        Community
      </span>
    </div>

    <h3 className="text-3xl font-black mb-6">
      Build USDExchange Together
    </h3>

    <p className="text-gray-300 leading-relaxed mb-6">
      USDExchange is an early ecosystem project focused on future decentralized
      technologies and community-driven expansion.
    </p>

    <p className="text-gray-400 leading-relaxed">
      We invite developers, creators, supporters and Web3 enthusiasts to join
      the ecosystem journey and help shape the future of USDExchange.
    </p>

    <button className="mt-8 px-8 py-4 bg-[#ff5c00] rounded-2xl font-black uppercase hover:scale-105 transition-all">
      Join Community
    </button>

  </div>

</section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16 text-center relative z-10 bg-black/40">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-3xl font-black uppercase tracking-tight mb-4">
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
