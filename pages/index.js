```jsx
<main className="relative z-10 max-w-7xl mx-auto px-6 pt-24">

  {/* HERO SECTION */}
  <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-24">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
        Advanced
        <br />
        <span className="text-[#ff5c00]">USDX Swap</span>
      </h2>

      <p className="max-w-xl text-gray-400 text-lg leading-relaxed mb-8">
        Trade, swap and explore the future of decentralized finance inside the USDExchange ecosystem.
      </p>

      <div className="flex flex-wrap gap-4">
        <button className="px-8 py-4 bg-[#ff5c00] rounded-2xl font-black uppercase hover:scale-105 transition-all">
          Launch App
        </button>

        <button className="px-8 py-4 border border-white/20 rounded-2xl font-black uppercase hover:border-[#ff5c00] transition-all">
          View Chart
        </button>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-6 backdrop-blur-xl">

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-black">USDX / BNB</h3>

        <span className="text-green-400 font-black">
          +12.45%
        </span>
      </div>

      {/* CHART */}
      <div className="h-[220px] rounded-3xl bg-black/40 border border-white/5 mb-6 flex items-end gap-2 p-4 overflow-hidden">
        {[40,70,55,90,60,120,85,140,100,170,130,190].map((h,i)=>(
          <div
            key={i}
            style={{height:`${h}px`}}
            className="flex-1 bg-gradient-to-t from-[#ff5c00] to-orange-300 rounded-t-xl"
          />
        ))}
      </div>

      {/* SWAP */}
      <div className="space-y-4">

        <div className="bg-black/40 rounded-2xl p-4 border border-white/5">
          <p className="text-xs text-gray-500 uppercase mb-2">
            From
          </p>

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
          <p className="text-xs text-gray-500 uppercase mb-2">
            To
          </p>

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

        <button className="w-full py-5 rounded-2xl bg-[#ff5c00] text-black font-black uppercase hover:scale-[1.02] transition-all">
          Swap Tokens
        </button>

      </div>

    </div>

  </section>

  {/* CONTRACT */}
  <section className="mb-24">
    <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-8 backdrop-blur-xl">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div>
          <p className="text-[#ff5c00] text-xs uppercase tracking-[0.3em] font-black mb-2">
            Contract Address
          </p>

          <code className="text-sm text-gray-300 break-all">
            0x0000000000000000000000000000000000000000
          </code>
        </div>

        <button
          onClick={() => {
            navigator.clipboard.writeText(
              '0x0000000000000000000000000000000000000000'
            );
            alert('Contract Copied');
          }}
          className="px-8 py-4 bg-[#ff5c00] rounded-2xl font-black uppercase"
        >
          Copy Address
        </button>
      </div>
    </div>
  </section>

  {/* STATS */}
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">

    <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-10 text-center">
      <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">
        Total Supply
      </p>

      <h3 className="text-4xl font-black">
        1B <span className="text-[#ff5c00]">USDX</span>
      </h3>
    </div>

    <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-10 text-center">
      <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">
        Trading Tax
      </p>

      <h3 className="text-4xl font-black">
        0% <span className="text-[#ff5c00]">Fee</span>
      </h3>
    </div>

    <div className="bg-white/[0.03] border border-white/10 rounded-[35px] p-10 text-center">
      <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">
        Blockchain
      </p>

      <h3 className="text-4xl font-black">
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
        USDX is the native token powering the USDExchange ecosystem including future swaps, staking systems, governance, rewards and decentralized tools.
      </p>
    </div>

  </section>

  {/* ROADMAP */}
  <section className="mb-24">

    <div className="flex items-center gap-4 mb-12">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#ff5c00]/40"></div>

      <div className="px-8 py-2 border border-[#ff5c00]/30 rounded-full text-[#ff5c00] text-xs uppercase tracking-[0.4em] font-black">
        Roadmap
      </div>

      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#ff5c00]/40"></div>
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
  <section className="max-w-6xl mx-auto mb-24">

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
      ].map((step,index)=>(
        <div
          key={index}
          className="bg-white/[0.03] border border-white/10 rounded-[30px] p-6"
        >
          <div className="w-12 h-12 rounded-full bg-[#ff5c00] flex items-center justify-center font-black mb-6">
            {index+1}
          </div>

          <p className="text-lg font-bold text-gray-200">
            {step}
          </p>
        </div>
      ))}

    </div>

  </section>
```
