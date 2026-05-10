{/* ========================= MASTER RESPONSIVE LAYOUT ========================= */}
{/* YE SECTION tumhare EXISTING code ke andar rahega — same states/functions use karega */}

<div className="hidden md:grid xl:grid-cols-[0.9fr_1.1fr_0.75fr] gap-6 items-start">

  {/* ================= LEFT PANEL ================= */}

  <div className="space-y-6">

    {/* HERO */}
    <div className="bg-[#090909] border border-white/10 rounded-[35px] p-8">

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">

        <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>

        <span className="text-xs uppercase tracking-[0.3em] text-violet-400 font-black">
          Live Ecosystem
        </span>

      </div>

      <h1 className="text-7xl font-black leading-[0.9] mb-6">

        Advanced
        <br />

        <span className="text-violet-500">
          USDX Swap
        </span>

      </h1>

      <p className="text-gray-400 text-lg leading-relaxed mb-8">
        Trade, swap and explore the future of decentralized finance
        inside the USDExchange ecosystem.
      </p>

      <div className="flex gap-4 mb-8">

        <a
          href="https://pancakeswap.finance/"
          target="_blank"
          rel="noreferrer"
          className="h-[54px] px-8 rounded-2xl bg-violet-600 hover:bg-violet-500 transition flex items-center font-black"
        >
          Launch App
        </a>

        <a
          href="https://dexscreener.com/"
          target="_blank"
          rel="noreferrer"
          className="h-[54px] px-8 rounded-2xl border border-white/10 hover:border-violet-500 transition flex items-center font-black"
        >
          View Chart
        </a>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-4 gap-3">

        {[
          ['$500K', 'Liquidity'],
          ['12K+', 'Holders'],
          ['$2.4M', 'Volume'],
          ['BEP20', 'Blockchain']
        ].map(([v, t]) => (

          <div
            key={t}
            className="bg-black border border-white/10 rounded-2xl p-4 text-center"
          >

            <h3 className="font-black text-lg text-violet-400">
              {v}
            </h3>

            <p className="text-gray-500 text-xs mt-2 uppercase">
              {t}
            </p>

          </div>

        ))}

      </div>

    </div>

    {/* TOKENOMICS */}
    <div className="bg-[#090909] border border-white/10 rounded-[35px] p-8">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-black">
          Tokenomics
        </h2>

        <span className="text-violet-400 text-2xl">
          ◈
        </span>

      </div>

      <div className="space-y-5">

        {[
          ['Liquidity', '40%'],
          ['Ecosystem', '30%'],
          ['Marketing', '20%'],
          ['Team', '10%']
        ].map(([name, value]) => (

          <div
            key={name}
            className="bg-black border border-white/10 rounded-2xl p-4"
          >

            <div className="flex justify-between mb-3">

              <span className="text-gray-400">
                {name}
              </span>

              <span className="font-black">
                {value}
              </span>

            </div>

            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

              <div
                className="h-full bg-violet-500 rounded-full"
                style={{ width: value }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

  {/* ================= CENTER PANEL ================= */}

  <div className="space-y-6">

    {/* CHART */}
    <div className="bg-[#090909] border border-white/10 rounded-[35px] p-6">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-3xl font-black">
            USDX / BNB
          </h2>

          <p className="text-gray-500 mt-2">
            Live Market Chart
          </p>

        </div>

        <span className="text-green-400 text-2xl font-black">
          +12.45%
        </span>

      </div>

      <div className="h-[540px] rounded-[30px] overflow-hidden border border-white/10">

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

    {/* ROADMAP */}
    <div className="bg-[#090909] border border-white/10 rounded-[35px] p-8">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-black">
          Roadmap
        </h2>

        <span className="text-violet-400 text-2xl">
          ⇄
        </span>

      </div>

      <div className="grid grid-cols-2 gap-4">

        {[
          ['Phase 1', 'Launch'],
          ['Phase 2', 'Community'],
          ['Phase 3', 'Listing'],
          ['Phase 4', 'Expansion']
        ].map(([phase, title]) => (

          <div
            key={phase}
            className="bg-black border border-white/10 rounded-2xl p-5"
          >

            <p className="text-violet-400 text-xs uppercase tracking-widest mb-3">
              {phase}
            </p>

            <h3 className="text-xl font-black">
              {title}
            </h3>

          </div>

        ))}

      </div>

    </div>

  </div>

  {/* ================= RIGHT PANEL ================= */}

  <div className="space-y-6 sticky top-[100px]">

    {/* SWAP */}
    <div className="bg-[#090909] border border-white/10 rounded-[35px] p-6">

      <div className="flex justify-between items-center mb-7">

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
          className="w-full h-[60px] rounded-[24px] bg-violet-600 hover:bg-violet-500 transition text-xl font-black"
        >

          {wallet
            ? `SWAP ${fromToken} → ${toToken}`
            : 'Connect Wallet'}

        </button>

      </div>

    </div>

    {/* GOVERNANCE */}
    <div className="bg-[#090909] border border-white/10 rounded-[35px] p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-black">
          Governance
        </h2>

        <span className="text-violet-400 text-xl">
          ⚡
        </span>

      </div>

      <div className="space-y-4">

        {[
          'Community proposals',
          'DAO governance',
          'Future voting systems',
          'Transparent ecosystem growth'
        ].map((item) => (

          <div
            key={item}
            className="flex items-center gap-3 bg-black border border-white/10 rounded-2xl px-4 py-4"
          >

            <div className="w-2 h-2 rounded-full bg-violet-500"></div>

            <span className="text-gray-300">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>

    {/* WHITEPAPER */}
    <div className="bg-violet-500/10 border border-violet-500/20 rounded-[35px] p-6">

      <h2 className="text-2xl font-black mb-4">
        Whitepaper
      </h2>

      <p className="text-gray-300 leading-relaxed mb-6">
        Explore the ecosystem vision, tokenomics,
        governance systems and future infrastructure.
      </p>

      <button className="w-full h-[54px] rounded-2xl bg-violet-600 hover:bg-violet-500 transition font-black">
        Read Whitepaper
      </button>

    </div>

  </div>

</div>

{/* ========================= MOBILE APP STYLE ========================= */}

<div className="md:hidden space-y-5 pb-28">

  {/* CHART CARD */}
  <div className="bg-[#090909] border border-white/10 rounded-[30px] p-4">

    <div className="flex justify-between items-center mb-4">

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

    <div className="h-[220px] rounded-[24px] overflow-hidden border border-white/10">

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

  {/* MOBILE SWAP */}
  <div className="bg-[#090909] border border-white/10 rounded-[30px] p-4">

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

      <div className="flex justify-between text-sm text-gray-500 mb-3">

        <span>From</span>

        <span>
          Balance: {wallet ? balance : '0'}
        </span>

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

      <div className="flex justify-between text-sm text-gray-500 mb-3">

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

</div>
