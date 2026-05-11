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
  name: 'USDExchange',
  description: 'USDX Exchange',
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

  return (

    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top, rgba(124,58,237,0.35), transparent 60%)'
        }}
      />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-2xl">

        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-[80px] flex items-center justify-between">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="logo"
              className="w-11 h-11 rounded-full"
            />

            <h1 className="text-2xl font-black">
              USDX
            </h1>

          </div>

          <div className="hidden md:flex items-center gap-10">

            {[
              ['Trade', '#'],
              ['Chart', '#'],
              ['Tokenomics', '/tokenomics'],
              ['Roadmap', '/roadmap'],
              ['Community', '/community']
            ].map(([name, link]) => (

              <a
                key={name}
                href={link}
                className="text-gray-300 hover:text-white transition"
              >
                {name}
              </a>

            ))}

          </div>

          <div className="flex items-center gap-4">

            <button
              onClick={openWallet}
              className="bg-violet-600 hover:bg-violet-500 transition px-6 h-[50px] rounded-2xl font-black"
            >
              {wallet
                ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}`
                : 'Connect Wallet'}
            </button>

            <button className="text-3xl">
              ☰
            </button>

          </div>

        </div>

      </nav>

      {/* MAIN */}
      <main className="max-w-[1600px] mx-auto px-4 md:px-8 pt-6 pb-24">

        {/* HERO */}
        <section className="grid xl:grid-cols-[0.8fr_1fr_0.72fr] gap-6">

          {/* LEFT */}
          <div className="border border-white/10 rounded-[35px] bg-[#090909] p-8">

            <h1 className="text-7xl font-black mb-6">
              USDX
            </h1>

            <h2 className="text-5xl font-black leading-tight mb-6">
              The Future of
              <br />
              Decentralized Finance
            </h2>

            <p className="text-gray-400 text-lg mb-10">
              Built on BNB Smart Chain
            </p>

            <div className="flex gap-4 mb-10">

              <button className="bg-violet-600 h-[56px] px-8 rounded-2xl font-black">
                Buy USDX
              </button>

              <button className="border border-white/10 h-[56px] px-8 rounded-2xl font-black">
                Launch dApp
              </button>

            </div>

            <div className="grid grid-cols-2 gap-4">

              {[
                ['$1.2M+', 'Market Cap'],
                ['5,432+', 'Holders'],
                ['$320K+', 'Liquidity'],
                ['12.4%', 'APY']
              ].map(([value, title]) => (

                <div
                  key={title}
                  className="border border-white/10 rounded-[24px] bg-black p-6"
                >

                  <h3 className="text-4xl font-black mb-3">
                    {value}
                  </h3>

                  <p className="text-gray-500">
                    {title}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* CHART */}
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
                src="https://s.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=15&theme=dark&style=1"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>

            </div>

          </div>

          {/* SWAP */}
          <div className="border border-white/10 rounded-[35px] bg-[#090909] p-6">

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

            <button
              onClick={openWallet}
              className="w-full h-[60px] rounded-[22px] bg-violet-600 hover:bg-violet-500 transition text-xl font-black mt-8"
            >
              {wallet ? 'Start Swap' : 'Connect Wallet'}
            </button>

          </div>

        </section>

        {/* FEATURES */}
        <section className="grid md:grid-cols-5 gap-5 mt-8">

          {[
            ['Roadmap', '/roadmap'],
            ['Tokenomics', '/tokenomics'],
            ['Governance', '/governance'],
            ['Community', '/community'],
            ['Whitepaper', '/whitepaper']
          ].map(([title, link]) => (

            <a
              key={title}
              href={link}
              className="border border-white/10 rounded-[30px] bg-[#090909] p-6 hover:border-violet-500 transition block"
            >

              <h3 className="text-2xl font-black mb-4">
                {title}
              </h3>

              <p className="text-gray-400 mb-6">
                Open {title} page
              </p>

              <span className="text-violet-400 font-black">
                View →
              </span>

            </a>

          ))}

        </section>

        {/* TOKENOMICS */}
        <section className="mt-24">

          <div className="text-center mb-14">

            <h2 className="text-5xl font-black mb-4">
              Tokenomics
            </h2>

            <p className="text-gray-400">
              USDX ecosystem token allocation.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              ['35%', 'Liquidity'],
              ['25%', 'Staking'],
              ['20%', 'Marketing'],
              ['20%', 'Development']
            ].map(([value, title]) => (

              <div
                key={title}
                className="border border-white/10 rounded-[35px] bg-[#090909] p-8 text-center"
              >

                <div className="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center mx-auto mb-6">

                  <span className="text-3xl font-black text-orange-500">
                    {value}
                  </span>

                </div>

                <h3 className="text-2xl font-black mb-2">
                  {title}
                </h3>

                <p className="text-gray-400">
                  USDX Allocation
                </p>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>

  );

}
