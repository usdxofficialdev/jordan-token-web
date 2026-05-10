import React from 'react'
import { ethers } from 'ethers'
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3Modal
} from '@web3modal/ethers/react'

/* =========================
   WEB3MODAL CONFIG
========================= */

const projectId = 'f523ce22bed6a9a2acc600cadd1473c5'

const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const bsc = {
  chainId: 56,
  name: 'Binance Smart Chain',
  currency: 'BNB',
  explorerUrl: 'https://bscscan.com',
  rpcUrl: 'https://bsc-dataseed.binance.org'
}

const metadata = {
  name: 'USDExchange',
  description: 'USDX Ecosystem',
  url: 'https://metaworld-official.vercel.app',
  icons: ['https://metaworld-official.vercel.app/logo.png']
}

createWeb3Modal({
  ethersConfig: defaultConfig({
    metadata
  }),
  chains: [mainnet, bsc],
  projectId,
  enableAnalytics: false
})

/* =========================
   MAIN
========================= */

export default function Home() {
  const { open } = useWeb3Modal()

  const [mounted, setMounted] = React.useState(false)

  const [wallet, setWallet] = React.useState('')
  const [balance, setBalance] = React.useState('0.0000')

  const [fromToken, setFromToken] = React.useState('BNB')
  const [toToken, setToToken] = React.useState('USDX')

  const [fromAmount, setFromAmount] = React.useState('')
  const [toAmount, setToAmount] = React.useState('')

  const [mobileMenu, setMobileMenu] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)

    if (typeof window !== 'undefined' && window.ethereum) {
      connectExistingWallet()
    }
  }, [])

  const connectExistingWallet = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum)

      const accounts = await provider.listAccounts()

      if (!accounts.length) return

      const address = accounts[0].address

      setWallet(address)

      const bal = await provider.getBalance(address)

      setBalance(
        parseFloat(ethers.formatEther(bal)).toFixed(4)
      )
    } catch (err) {
      console.log(err)
    }
  }

  const openWallet = async () => {
    try {
      await open()

      if (
        typeof window === 'undefined' ||
        !window.ethereum
      ) {
        alert('Wallet not detected')
        return
      }

      const provider = new ethers.BrowserProvider(
        window.ethereum
      )

      const accounts = await provider.send(
        'eth_requestAccounts',
        []
      )

      const account = accounts[0]

      setWallet(account)

      const bal = await provider.getBalance(account)

      setBalance(
        parseFloat(
          ethers.formatEther(bal)
        ).toFixed(4)
      )
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

  const executeSwap = async () => {
    if (!wallet) {
      await openWallet()
      return
    }

    alert(
      `Swap Submitted\n${fromAmount || 0} ${fromToken} → ${toToken}`
    )
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* BG */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top, rgba(124,58,237,0.35), transparent 50%)'
        }}
      />

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-2xl">

        <div className="max-w-[1700px] mx-auto px-4 lg:px-8 h-[78px] flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-300 flex items-center justify-center font-black text-xl">
              U
            </div>

            <div>

              <h1 className="font-black text-2xl">
                USDX
              </h1>

            </div>

          </div>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex items-center gap-8">

            <a href="#swap" className="text-sm text-white/80 hover:text-white">
              Trade
            </a>

            <a href="#chart" className="text-sm text-white/80 hover:text-white">
              Chart
            </a>

            <a href="#tokenomics" className="text-sm text-white/80 hover:text-white">
              Tokenomics
            </a>

            <a href="#roadmap" className="text-sm text-white/80 hover:text-white">
              Roadmap
            </a>

            <a href="#community" className="text-sm text-white/80 hover:text-white">
              Community
            </a>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            <button
              onClick={openWallet}
              className="h-[46px] px-6 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 font-bold text-sm hover:scale-[1.03] transition-all"
            >
              {wallet
                ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}`
                : 'Connect Wallet'}
            </button>

            <button
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
              className="xl:hidden w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center"
            >
              ☰
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="xl:hidden border-t border-white/10 bg-black px-6 py-6 flex flex-col gap-5">

            <a href="#swap">Trade</a>
            <a href="#chart">Chart</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#community">Community</a>

          </div>
        )}

      </nav>

      {/* =========================
          MAIN
      ========================= */}

      <main className="max-w-[1700px] mx-auto px-4 lg:px-8 py-8">

        {/* =========================
            DESKTOP
        ========================= */}

        <div className="hidden xl:grid xl:grid-cols-[0.9fr_1.1fr_0.75fr] gap-6 items-start">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="bg-[#090909] border border-white/10 rounded-[35px] p-8">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 mb-8">

                <div className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse"></div>

                <span className="text-xs uppercase tracking-[0.3em] text-[#8b5cf6] font-black">
                  Live Ecosystem
                </span>

              </div>

              <h1 className="text-7xl font-black leading-[0.9] mb-6">
                USDX
              </h1>

              <p className="text-4xl leading-tight mb-5">
                The Future of
                <br />
                Decentralized Finance
              </p>

              <p className="text-gray-500 mb-10">
                Built on BNB Smart Chain
              </p>

              <div className="flex gap-4 mb-10">

                <button className="h-[52px] px-8 rounded-xl bg-gradient-to-r from-purple-700 to-purple-500 font-bold">
                  Buy USDX
                </button>

                <button className="h-[52px] px-8 rounded-xl border border-white/10 bg-white/5">
                  Launch dApp
                </button>

              </div>

              <div className="grid grid-cols-4 gap-3">

                {[
                  ['Market Cap', '$1.2M+'],
                  ['Holders', '5,432+'],
                  ['Liquidity', '$320K+'],
                  ['Tax', '12.4%']
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-black/60 border border-white/10 p-4"
                  >

                    <h3 className="font-black text-lg mb-2">
                      {item[1]}
                    </h3>

                    <p className="text-[11px] uppercase text-gray-500">
                      {item[0]}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-2 gap-5">

              {[
                ['Roadmap', 'View our future plans and goals'],
                ['Tokenomics', 'Learn about our token structure'],
                ['Governance', 'Community powered future'],
                ['Community', 'Join our global community'],
                ['Whitepaper', 'Read our official docs']
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#090909] border border-white/10 rounded-[28px] p-6 hover:border-purple-500/30 transition-all"
                >

                  <div className="text-4xl mb-6">
                    ✦
                  </div>

                  <h3 className="text-2xl font-black mb-3">
                    {item[0]}
                  </h3>

                  <p className="text-gray-400 leading-7 mb-5">
                    {item[1]}
                  </p>

                  <button className="text-[#8b5cf6] font-bold">
                    View →
                  </button>

                </div>
              ))}

            </div>

          </div>

          {/* CENTER */}
          <div
            id="chart"
            className="bg-[#090909] border border-white/10 rounded-[35px] p-6"
          >

            <div className="flex justify-between items-center mb-8">

              <div>

                <h2 className="text-3xl font-black">
                  USDX / BNB
                </h2>

              </div>

              <div className="text-green-400 font-black text-2xl">
                +12.45%
              </div>

            </div>

            {/* CHART BUTTONS */}
            <div className="flex gap-3 mb-6">

              {['1m', '5m', '1h', '4h', '1D'].map((t, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-xl text-sm ${
                    t === '1D'
                      ? 'bg-purple-700'
                      : 'bg-white/5'
                  }`}
                >
                  {t}
                </button>
              ))}

            </div>

            {/* CHART */}
            <div className="h-[650px] rounded-[28px] overflow-hidden border border-white/10 bg-black">

              <iframe
                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=BINANCE:BTCUSDT&interval=15&hidesidetoolbar=1&theme=dark&style=1&timezone=Etc/UTC&withdateranges=1&hideideas=1"
                width="100%"
                height="100%"
                frameBorder="0"
                allowTransparency="true"
                scrolling="no"
                title="chart"
              />

            </div>

          </div>

          {/* RIGHT SWAP */}
          <div
            id="swap"
            className="bg-[#090909] border border-white/10 rounded-[35px] p-6 sticky top-[100px]"
          >

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-4xl font-black">
                Swap
              </h2>

              <button className="text-2xl">
                ⚙
              </button>

            </div>

            {/* FROM */}
            <div className="mb-4">

              <div className="flex justify-between mb-3">

                <p className="text-gray-400">
                  From
                </p>

                <p className="text-gray-500 text-sm">
                  Balance: {balance}
                </p>

              </div>

              <div className="bg-black border border-white/10 rounded-2xl p-5">

                <div className="flex items-center justify-between gap-4">

                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) =>
                      setFromAmount(e.target.value)
                    }
                    placeholder="0.0"
                    className="bg-transparent outline-none text-4xl font-black w-full"
                  />

                  <select
                    value={fromToken}
                    onChange={(e) =>
                      setFromToken(e.target.value)
                    }
                    className="bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 font-bold"
                  >

                    <option>BNB</option>
                    <option>USDT</option>
                    <option>USDC</option>
                    <option>USDX</option>

                  </select>

                </div>

              </div>

            </div>

            {/* SWITCH */}
            <div className="flex justify-center -my-2 relative z-10">

              <button
                onClick={switchTokens}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 font-black text-xl border-[5px] border-[#090909]"
              >
                ⇅
              </button>

            </div>

            {/* TO */}
            <div className="mb-6">

              <div className="flex justify-between mb-3">

                <p className="text-gray-400">
                  To
                </p>

                <p className="text-gray-500 text-sm">
                  Balance: 0
                </p>

              </div>

              <div className="bg-black border border-white/10 rounded-2xl p-5">

                <div className="flex items-center justify-between gap-4">

                  <input
                    type="number"
                    value={toAmount}
                    onChange={(e) =>
                      setToAmount(e.target.value)
                    }
                    placeholder="0.0"
                    className="bg-transparent outline-none text-4xl font-black w-full"
                  />

                  <select
                    value={toToken}
                    onChange={(e) =>
                      setToToken(e.target.value)
                    }
                    className="bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 font-bold"
                  >

                    <option>USDX</option>
                    <option>BNB</option>
                    <option>USDT</option>
                    <option>USDC</option>

                  </select>

                </div>

              </div>

            </div>

            <div className="flex justify-between items-center mb-8">

              <p className="text-gray-400">
                Slippage Tolerance
              </p>

              <p className="font-black">
                0.5%
              </p>

            </div>

            <button
              onClick={executeSwap}
              className="w-full h-[64px] rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 text-xl font-black hover:scale-[1.02] transition-all"
            >
              {wallet
                ? `SWAP ${fromToken} → ${toToken}`
                : 'CONNECT WALLET'}
            </button>

          </div>

        </div>

        {/* =========================
            MOBILE APP STYLE
        ========================= */}

        <div className="xl:hidden">

          <div className="bg-[#090909] border border-white/10 rounded-[32px] p-5 mb-5">

            <h1 className="text-5xl font-black mb-4">
              USDX
            </h1>

            <p className="text-gray-400 leading-7 mb-6">
              Decentralized Finance Ecosystem
            </p>

            <button
              onClick={openWallet}
              className="w-full h-[56px] rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 font-black"
            >
              {wallet
                ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}`
                : 'Connect Wallet'}
            </button>

          </div>

          {/* SWAP */}
          <div className="bg-[#090909] border border-white/10 rounded-[32px] p-5 mb-5">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-3xl font-black">
                Swap
              </h2>

              <span className="text-sm text-gray-400">
                0.5%
              </span>

            </div>

            <div className="bg-black border border-white/10 rounded-2xl p-4 mb-4">

              <div className="flex justify-between mb-3">

                <span className="text-gray-400">
                  From
                </span>

                <span className="text-gray-500 text-sm">
                  {balance}
                </span>

              </div>

              <div className="flex items-center justify-between gap-3">

                <input
                  type="number"
                  value={fromAmount}
                  onChange={(e) =>
                    setFromAmount(e.target.value)
                  }
                  placeholder="0.0"
                  className="bg-transparent outline-none text-3xl font-black w-full"
                />

                <select
                  value={fromToken}
                  onChange={(e) =>
                    setFromToken(e.target.value)
                  }
                  className="bg-[#1a1a1a] rounded-xl px-4 py-3"
                >

                  <option>BNB</option>
                  <option>USDT</option>
                  <option>USDC</option>
                  <option>USDX</option>

                </select>

              </div>

            </div>

            <div className="flex justify-center -my-2 relative z-10">

              <button
                onClick={switchTokens}
                className="w-12 h-12 rounded-full bg-purple-700 border-[5px] border-[#090909]"
              >
                ⇅
              </button>

            </div>

            <div className="bg-black border border-white/10 rounded-2xl p-4 mb-6">

              <div className="flex justify-between mb-3">

                <span className="text-gray-400">
                  To
                </span>

                <span className="text-gray-500 text-sm">
                  0
                </span>

              </div>

              <div className="flex items-center justify-between gap-3">

                <input
                  type="number"
                  value={toAmount}
                  onChange={(e) =>
                    setToAmount(e.target.value)
                  }
                  placeholder="0.0"
                  className="bg-transparent outline-none text-3xl font-black w-full"
                />

                <select
                  value={toToken}
                  onChange={(e) =>
                    setToToken(e.target.value)
                  }
                  className="bg-[#1a1a1a] rounded-xl px-4 py-3"
                >

                  <option>USDX</option>
                  <option>BNB</option>
                  <option>USDT</option>
                  <option>USDC</option>

                </select>

              </div>

            </div>

            <button
              onClick={executeSwap}
              className="w-full h-[58px] rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 font-black text-lg"
            >
              Swap Now
            </button>

          </div>

          {/* MOBILE CARDS */}
          <div className="grid grid-cols-2 gap-4 mb-6">

            {[
              'Roadmap',
              'Tokenomics',
              'Governance',
              'Whitepaper'
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#090909] border border-white/10 rounded-[24px] p-5"
              >

                <div className="text-3xl mb-4">
                  ✦
                </div>

                <h3 className="font-black text-xl mb-2">
                  {item}
                </h3>

                <p className="text-gray-500 text-sm">
                  USDX Ecosystem
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* =========================
            TOKENOMICS
        ========================= */}

        <section
          id="tokenomics"
          className="mt-20 mb-20"
        >

          <div className="text-center mb-12">

            <h2 className="text-5xl font-black mb-5">
              TOKENOMICS
            </h2>

            <p className="text-gray-400">
              USDX Token Distribution
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-5">

            {[
              ['Liquidity', '35%'],
              ['Staking', '20%'],
              ['Marketing', '15%'],
              ['Development', '30%']
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#090909] border border-white/10 rounded-[28px] p-8 text-center"
              >

                <h3 className="text-5xl font-black text-purple-400 mb-4">
                  {item[1]}
                </h3>

                <p className="text-xl font-bold">
                  {item[0]}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* =========================
            ROADMAP
        ========================= */}

        <section
          id="roadmap"
          className="mb-20"
        >

          <div className="text-center mb-12">

            <h2 className="text-5xl font-black mb-5">
              ROADMAP
            </h2>

            <p className="text-gray-400">
              Ecosystem Growth Plan
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-5">

            {[
              ['Phase 1', 'Launch Website & Token'],
              ['Phase 2', 'Community Growth'],
              ['Phase 3', 'DEX/CEX Listing'],
              ['Phase 4', 'Global Expansion']
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#090909] border border-white/10 rounded-[28px] p-8"
              >

                <p className="text-purple-400 uppercase text-xs tracking-[0.3em] mb-4">
                  {item[0]}
                </p>

                <h3 className="text-2xl font-black">
                  {item[1]}
                </h3>

              </div>
            ))}

          </div>

        </section>

        {/* =========================
            GOVERNANCE
        ========================= */}

        <section
          id="community"
          className="grid lg:grid-cols-2 gap-6 mb-20"
        >

          <div className="bg-[#090909] border border-white/10 rounded-[35px] p-10">

            <p className="text-purple-400 uppercase tracking-[0.3em] text-xs font-black mb-5">
              Governance
            </p>

            <h2 className="text-5xl font-black mb-6">
              Community Powered
            </h2>

            <p className="text-gray-400 leading-8 mb-8">
              USDX governance gives power to the community through voting systems and ecosystem proposals.
            </p>

            <ul className="space-y-4 text-gray-300">

              <li>✓ DAO Voting</li>
              <li>✓ Ecosystem Governance</li>
              <li>✓ Community Treasury</li>
              <li>✓ Web3 Expansion</li>

            </ul>

          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-[35px] p-10">

            <p className="text-purple-400 uppercase tracking-[0.3em] text-xs font-black mb-5">
              Whitepaper
            </p>

            <h2 className="text-5xl font-black mb-6">
              Ecosystem Docs
            </h2>

            <p className="text-gray-300 leading-8 mb-10">
              Explore the USDExchange vision, tokenomics, roadmap and decentralized infrastructure plans.
            </p>

            <div className="flex flex-wrap gap-4">

              <button className="h-[54px] px-8 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 font-black">
                Read Docs
              </button>

              <button className="h-[54px] px-8 rounded-2xl border border-white/10">
                Litepaper
              </button>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/60 py-12 text-center">

        <h2 className="text-4xl font-black mb-4">
          USDX
        </h2>

        <p className="text-gray-500 mb-8">
          Future of Decentralized Finance
        </p>

        <div className="text-gray-600 text-sm">
          © 2026 USDExchange. All Rights Reserved.
        </div>

      </footer>

    </div>
  )
}
