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

    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top, rgba(124,58,237,0.35), transparent 60%)'
        }}
      />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-2xl">

        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-[78px] flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="logo"
              className="w-12 h-12 object-contain"
            />

            <div className="flex items-center gap-2">

              <h1 className="text-xl md:text-2xl font-black">
                USDX
              </h1>

            </div>

          </div>

          {/* CENTER */}
          <div className="hidden md:flex items-center gap-10">

            {[
              'Trade',
              'Chart',
              'Tokenomics',
              'Roadmap',
              'Community'
            ].map((item) => (

              <a
                key={item}
                href="#"
                className="text-sm text-gray-300 hover:text-white transition"
              >
                {item}
              </a>

            ))}

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <button
              onClick={openWallet}
              className="hidden md:flex h-[48px] px-6 rounded-2xl bg-violet-600 hover:bg-violet-500 transition items-center justify-center font-bold"
            >
              {wallet
                ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}`
                : 'Connect Wallet'}
            </button>

            <button className="text-2xl">
              ☰
            </button>

          </div>

        </div>

      </nav>

      {/* MAIN */}
      <main className="max-w-[1600px] mx-auto px-3 md:px-8 pt-4 md:pt-10 pb-32">

        {/* ================= MOBILE APP STYLE ================= */}
        <div className="md:hidden">

          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-5">

            <button className="text-2xl">
              ☰
            </button>

            <div className="flex items-center gap-2">

              <img
                src="/logo.png"
                alt="logo"
                className="w-9 h-9"
              />

              <h1 className="font-black text-xl">
                USDX
              </h1>

            </div>

            <button className="text-xl">
              🔔
            </button>

          </div>

          {/* CHART CARD */}
          <div className="rounded-[28px] border border-white/10 bg-[#090909] p-4 mb-5 shadow-2xl">

            <div className="flex justify-between mb-3">

              <div>

                <p className="text-gray-400 text-sm">
                  USDX / BNB
                </p>

                <h2 className="text-4xl font-black mt-2">
                  $0.009842
                </h2>

              </div>

              <span className="text-green-400 font-black">
                +12.45%
              </span>

            </div>

            <div className="h-[180px] rounded-[20px] overflow-hidden border border-white/10 bg-black/40">

              <iframe
                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=BINANCE:BTCUSDT&interval=15&hidesidetoolbar=1&theme=dark&style=1&timezone=Etc/UTC&withdateranges=1&hideideas=1"
                width="100%"
                height="100%"
                frameBorder="0"
                allowTransparency="true"
                scrolling="no"
              ></iframe>

            </div>

            <div className="flex justify-center gap-4 mt-4 text-xs">

              {['1m', '5m', '1h', '1D', '1W'].map((t) => (

                <button
                  key={t}
                  className={`px-4 py-2 rounded-xl ${
                    t === '1D'
                      ? 'bg-violet-700'
                      : 'bg-white/5'
                  }`}
                >
                  {t}
                </button>

              ))}

            </div>

          </div>

          {/* SWAP */}
          <div className="rounded-[28px] border border-white/10 bg-[#090909] p-4 shadow-2xl">

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl font-black">
                Swap
              </h2>

              <button>
                ⚙️
              </button>

            </div>

            {/* FROM */}
            <div className="bg-black border border-white/10 rounded-[20px] p-4">

              <div className="flex justify-between mb-3 text-sm text-gray-500">
                <span>From</span>
                <span>Balance: {wallet ? balance : '0'}</span>
              </div>

              <div className="flex items-center justify-between gap-3">

                <input
                  type="number"
                  placeholder="0.0"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="bg-transparent text-3xl font-black outline-none w-full"
                />

                <select
                  value={fromToken}
                  onChange={(e) => setFromToken(e.target.value)}
                  className="bg-[#141414] border border-white/10 rounded-2xl px-4 py-3 outline-none"
                >
                  <option>BNB</option>
                  <option>USDT</option>
                  <option>USDC</option>
                  <option>USDX</option>
                </select>

              </div>

            </div>

            {/* SWITCH */}
            <div className="flex justify-center -my-2 z-20 relative">

              <button
                onClick={switchTokens}
                className="w-12 h-12 rounded-full bg-violet-700 border-[5px] border-black text-xl"
              >
                ⇅
              </button>

            </div>

            {/* TO */}
            <div className="bg-black border border-white/10 rounded-[20px] p-4">

              <div className="flex justify-between mb-3 text-sm text-gray-500">
                <span>To</span>
                <span>Estimated</span>
              </div>

              <div className="flex items-center justify-between gap-3">

                <input
                  type="number"
                  placeholder="0.0"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  className="bg-transparent text-3xl font-black outline-none w-full"
                />

                <select
                  value={toToken}
                  onChange={(e) => setToToken(e.target.value)}
                  className="bg-[#141414] border border-white/10 rounded-2xl px-4 py-3 outline-none"
                >
                  <option>USDX</option>
                  <option>USDT</option>
                  <option>USDC</option>
                  <option>BNB</option>
                </select>

              </div>

            </div>

            <div className="mt-6">

              <button
                onClick={executeSwap}
                className="w-full h-[58px] rounded-[20px] bg-violet-600 hover:bg-violet-500 transition font-black text-lg"
              >
                {wallet
                  ? `SWAP ${fromToken} → ${toToken}`
                  : 'Connect Wallet'}
              </button>

            </div>

          </div>

          {/* MOBILE NAV */}
          <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/90 backdrop-blur-2xl">

            <div className="grid grid-cols-5 py-3">

              {[
                ['⌂', 'Home'],
                ['⇄', 'Swap'],
                ['◉', 'Earn'],
                ['◈', 'Portfolio'],
                ['☰', 'More']
              ].map(([icon, label], i) => (

                <button
                  key={label}
                  className={`flex flex-col items-center text-xs ${
                    i === 0
                      ? 'text-green-400'
                      : 'text-gray-400'
                  }`}
                >

                  <span className="text-lg">
                    {icon}
                  </span>

                  <span className="mt-1">
                    {label}
                  </span>

                </button>

              ))}

            </div>

          </div>

        </div>

        {/* ================= DESKTOP EXCHANGE STYLE ================= */}
        <div className="hidden md:block">

          {/* HERO GRID */}
          <section className="grid xl:grid-cols-[0.85fr_1.1fr_0.75fr] gap-6 items-start">

            {/* LEFT */}
            <div className="border border-white/10 rounded-[35px] bg-[#090909] p-8 min-h-[650px]">

              <h1 className="text-7xl font-black mb-8">
                USDX
              </h1>

              <h2 className="text-5xl font-bold leading-tight mb-6">
                The Future of
                <br />
                Decentralized Finance
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Built on BNB Smart Chain
              </p>

              <div className="flex gap-4 mb-10">

                <button className="h-[52px] px-8 rounded-2xl bg-violet-600 font-bold">
                  Buy USDX
                </button>

                <button className="h-[52px] px-8 rounded-2xl border border-white/10 font-bold">
                  Launch dApp
                </button>

              </div>

              <div className="grid grid-cols-4 gap-3">

                {[
                  ['$1.2M+', 'Market Cap'],
                  ['5,432+', 'Holders'],
                  ['$320K+', 'Liquidity'],
                  ['12.4%', 'Tax']
                ].map(([v, t]) => (

                  <div
                    key={t}
                    className="bg-black border border-white/10 rounded-2xl p-4 text-center"
                  >

                    <h3 className="font-black text-lg">
                      {v}
                    </h3>

                    <p className="text-gray-500 text-xs mt-1">
                      {t}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* CENTER CHART */}
            <div className="border border-white/10 rounded-[35px] bg-[#090909] p-6">

              <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-black">
                  USDX / BNB
                </h2>

                <span className="text-green-400 font-black text-xl">
                  +12.45%
                </span>

              </div>

              <div className="h-[520px] rounded-[28px] overflow-hidden border border-white/10">

                <iframe
                  src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=BINANCE:BTCUSDT&interval=15&hidesidetoolbar=1&theme=dark&style=1&timezone=Etc/UTC&withdateranges=1&hideideas=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowTransparency="true"
                  scrolling="no"
                ></iframe>

              </div>

            </div>

            {/* RIGHT SWAP */}
            <div className="border border-white/10 rounded-[35px] bg-[#090909] p-6 sticky top-[110px]">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl font-black">
                  Swap
                </h2>

                <button>
                  ⚙️
                </button>

              </div>

              {/* FROM */}
              <div className="bg-black border border-white/10 rounded-[24px] p-5">

                <div className="flex justify-between text-sm text-gray-500 mb-4">

                  <span>From</span>

                  <span>
                    Balance: {wallet ? balance : '0'}
                  </span>

                </div>

                <div className="flex items-center justify-between gap-4">

                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    placeholder="0.0"
                    className="bg-transparent outline-none text-5xl font-black w-full"
                  />

                  <select
                    value={fromToken}
                    onChange={(e) => setFromToken(e.target.value)}
                    className="bg-[#141414] border border-white/10 rounded-2xl px-4 py-3 outline-none"
                  >
                    <option>BNB</option>
                    <option>USDT</option>
                    <option>USDC</option>
                    <option>USDX</option>
                  </select>

                </div>

              </div>

              {/* SWITCH */}
              <div className="flex justify-center -my-3 relative z-20">

                <button
                  onClick={switchTokens}
                  className="w-14 h-14 rounded-full bg-violet-700 border-[6px] border-black text-2xl"
                >
                  ⇅
                </button>

              </div>

              {/* TO */}
              <div className="bg-black border border-white/10 rounded-[24px] p-5">

                <div className="flex justify-between text-sm text-gray-500 mb-4">

                  <span>To</span>

                  <span>Estimated</span>

                </div>

                <div className="flex items-center justify-between gap-4">

                  <input
                    type="number"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                    placeholder="0.0"
                    className="bg-transparent outline-none text-5xl font-black w-full"
                  />

                  <select
                    value={toToken}
                    onChange={(e) => setToToken(e.target.value)}
                    className="bg-[#141414] border border-white/10 rounded-2xl px-4 py-3 outline-none"
                  >
                    <option>USDX</option>
                    <option>USDT</option>
                    <option>USDC</option>
                    <option>BNB</option>
                  </select>

                </div>

              </div>

              <div className="mt-8">

                <button
                  onClick={executeSwap}
                  className="w-full h-[60px] rounded-[22px] bg-violet-600 hover:bg-violet-500 transition text-xl font-black"
                >
                  {wallet
                    ? `SWAP ${fromToken} → ${toToken}`
                    : 'Connect Wallet'}
                </button>

              </div>

            </div>

          </section>

          {/* FEATURE CARDS */}
          <section className="grid grid-cols-5 gap-5 mt-8">

            {[
              ['Roadmap', 'View our future plans and goals'],
              ['Tokenomics', 'Learn about token structure'],
              ['Governance', 'Community powered future'],
              ['Community', 'Join our global community'],
              ['Whitepaper', 'Read official documentation']
            ].map(([title, desc]) => (

              <div
                key={title}
                className="border border-white/10 rounded-[30px] bg-[#090909] p-6 hover:border-violet-500 transition"
              >

                <h3 className="text-2xl font-black mb-4">
                  {title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {desc}
                </p>

                <button className="text-violet-400 font-bold">
                  View →
                </button>

              </div>

            ))}

          </section>
            {/* TOKENOMICS */}
<section className="mb-24">

  <div className="text-center mb-14">

    <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
      Tokenomics
    </h2>

    <p className="text-gray-400 text-sm md:text-base">
      USDX ecosystem token allocation.
    </p>

  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

    {[
      {
        title: 'Liquidity',
        value: '35%',
      },
      {
        title: 'Staking',
        value: '25%',
      },
      {
        title: 'Marketing',
        value: '20%',
      },
      {
        title: 'Development',
        value: '20%',
      }
    ].map((item, index) => (

      <div
        key={index}
        className="bg-white/[0.03] border border-white/10 rounded-[25px] md:rounded-[35px] p-5 md:p-8 text-center hover:border-[#ff5c00]/40 transition-all"
      >

        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-[#ff5c00] flex items-center justify-center mx-auto mb-5">

          <span className="text-xl md:text-2xl font-black text-[#ff5c00]">
            {item.value}
          </span>

        </div>

        <h3 className="text-lg md:text-2xl font-black mb-2">
          {item.title}
        </h3>

        <p className="text-gray-400 text-xs md:text-sm">
          USDX Allocation
        </p>

      </div>

    ))}

  </div>

</section>

        </div>

      </main>

    </div>

  );

}
