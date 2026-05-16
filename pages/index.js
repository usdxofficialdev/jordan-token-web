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
       <section className="grid xl:grid-cols-[1.65fr_0.55fr] gap-5 items-start">

         
          {/* CHART */}
         <div className="border border-white/10 rounded-[35px] bg-[#090909] p-6 min-h-[760px]">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-black">
                USDX / BNB
              </h2>

              <span className="text-green-400 font-black text-xl">
                +12.45%
              </span>

            </div>

            <div className="h-[680px] rounded-[28px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(124,58,237,0.15)]">

              <iframe
                src="https://s.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=15&theme=dark&style=1"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>

            </div>

          </div>

          {/* SWAP */}
          <div className="border border-cyan-500/10 rounded-[22px] bg-[#050816]/95 backdrop-blur-xl p-4 max-w-[420px] mx-auto shadow-[0_0_40px_rgba(34,211,238,0.08)] sticky top-[95px]">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-lg font-black tracking-[2px] text-cyan-400">
                TRADE
              </h2>

              <button>
                ⚙️
              </button>

            </div>


            {/* FROM */}
            <div className="bg-black border border-white/10 rounded-[16px] p-4">

              <div className="flex justify-between text-[11px] text-cyan-400/70 uppercase tracking-[2px] mb-3 font-bold">

                <span>From</span>

                <span>
                  Balance: {wallet ? balance : '0'}
                </span>

              </div>

              <div className="flex items-center justify-between gap-3">

                <input
                  type="number"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  placeholder="0.0"
                  className="bg-transparent outline-none text-3xl font-black tracking-tight w-full"
                />

                <select
                  value={fromToken}
                  onChange={(e) => setFromToken(e.target.value)}
                  className="bg-[#0f172a] border border-cyan-500/10 rounded-[14px] px-3 py-2 min-w-[95px]  outline-none text-sm font-bold"
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
                className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/20 text-lg backdrop-blur-md hover:scale-105 transition"
              >
                ⇅
              </button>

            </div>

            {/* TO */}
            <div className="bg-black border border-white/10 rounded-[16px] p-4">

              <div className="flex justify-between text-[11px] text-cyan-400/70 uppercase tracking-[2px] mb-3 font-bold">

                <span>To</span>

                <span>Estimated</span>

              </div>

              <div className="flex items-center justify-between gap-3">

                <input
                  type="number"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  placeholder="0.0"
                  className="bg-transparent outline-none text-3xl font-black tracking-tight w-full"
                />

                <select
                  value={toToken}
                  onChange={(e) => setToToken(e.target.value)}
                  className="bg-[#0f172a] border border-cyan-500/10 rounded-[14px] px-3 py-2 min-w-[95px]  outline-none text-sm font-bold"
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
              className="w-full h-[52px] rounded-[16px] bg-cyan-500 text-black hover:bg-cyan-400 transition text-sm font-black tracking-[2px] mt-4 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            >
              {wallet ? 'Start TRADE' : 'Connect Wallet'}

            </button>

         {/* OPEN POSITIONS */}

<div className="mt-4 border border-white/10 rounded-[18px] bg-[#050816] p-5">

  <div className="flex items-center justify-between mb-5">

    <h3 className="text-sm font-black tracking-[2px] text-cyan-400">
      OPEN POSITIONS
    </h3>

    <span className="text-green-400 text-sm">
      Live
    </span>

  </div>

  <div className="space-y-4">

    {/* POSITION 1 */}
    <div className="border border-white/10 rounded-[14px] p-3 bg-[#0b1120] border border-cyan-500/10">

      <div className="flex justify-between mb-2">

        <span className="text-xs font-black tracking-wide text-green-400">
          BUY USDX
        </span>

        <span className="text-green-400 text-sm font-black">
          +12.45%
        </span>

      </div>

      <div className="flex justify-between text-[11px] text-gray-500 tracking-wide">

        <span>
          Entry: 0.0084
        </span>

        <span>
          Size: 250 USD
        </span>

      </div>

    </div>

    {/* POSITION 2 */}
    <div className="border border-white/10 rounded-[14px] p-3 bg-[#0b1120] border border-cyan-500/10">

      <div className="flex justify-between mb-2">

        <span className="text-xs font-black tracking-wide text-red-400">
          SELL BNB
        </span>

        <span className="text-red-400 text-sm font-black">
          -2.14%
        </span>

      </div>

      <div className="flex justify-between text-[11px] text-gray-500 tracking-wide">

        <span>
          Entry: 602
        </span>

        <span>
          Size: 120 USD
        </span>

      </div>

    </div>

  </div>

</div>


          </div>

        </section>

        {/* FEATURES */}
        <section className="grid md:grid-cols-5 gap-5 mt-4">
       
   {[
 ['Roadmap', '/info#roadmap'],
['Tokenomics', '/info#tokenomics'],
['Governance', '/info#governance'],
['Community', '/info#community'],
['Whitepaper', '/info#whitepaper']
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

       
      </main>

    </div>

  );

}
