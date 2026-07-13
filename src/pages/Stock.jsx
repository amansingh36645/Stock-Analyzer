import React from "react";

const Stock = () => {
  return (
    <div className="bg-[#F5F7FB] min-h-screen p-8">
      {/* Header */}

      <div className="bg-linear-to-r from-blue-950 to-blue-700 rounded-3xl p-8 text-white shadow-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <img
              className="w-18 h-18 rounded-full border-2 border-white"
              src="https://logo.clearbit.com/apple.com"
              alt=""
            />

            <div>
              <h1 className="text-4xl font-bold">Apple Inc.</h1>

              <p className="text-blue-200 mt-2">NASDAQ : AAPL</p>
            </div>
          </div>

          <div className="text-right">
            <h1 className="text-5xl font-bold">$213.45</h1>

            <p className="text-green-400 font-semibold text-xl">▲ +2.34%</p>
          </div>
        </div>
      </div>

      {/* Chart */}

      <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-950">
            Stock Performance
          </h1>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-blue-950 text-white">
              1D
            </button>

            <button className="px-4 py-2 rounded-xl bg-gray-100">1W</button>

            <button className="px-4 py-2 rounded-xl bg-gray-100">1M</button>

            <button className="px-4 py-2 rounded-xl bg-gray-100">1Y</button>

            <button className="px-4 py-2 rounded-xl bg-gray-100">ALL</button>
          </div>
        </div>

        <div className="h-112.5 rounded-2xl border-2 border-dashed border-gray-300 mt-6 flex items-center justify-center">
          Chart will come here
        </div>
      </div>

      {/* Quick Stats */}

      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">Market Cap</p>
          <h2 className="text-3xl font-bold mt-2">$3.45T</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">P/E Ratio</p>
          <h2 className="text-3xl font-bold mt-2">34.21</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">Volume</p>
          <h2 className="text-3xl font-bold mt-2">65.4M</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">52W High</p>
          <h2 className="text-3xl font-bold mt-2">$214.88</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">52W Low</p>
          <h2 className="text-3xl font-bold mt-2">$164.07</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">Dividend</p>
          <h2 className="text-3xl font-bold mt-2">0.53%</h2>
        </div>
      </div>

      {/* About */}

      <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
        <h1 className="text-3xl font-bold text-blue-950 mb-5">About Company</h1>

        <p className="text-gray-600 leading-8">
          Apple Inc. designs, manufactures, and markets smartphones, computers,
          wearables, software, cloud services, and digital content. The company
          is one of the world's largest technology organizations and continues
          to innovate across consumer electronics and services.
        </p>
      </div>

      {/* Company Details */}

      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-blue-950 mb-6">
            Company Information
          </h1>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span>CEO</span>
              <span className="font-semibold">Tim Cook</span>
            </div>

            <div className="flex justify-between">
              <span>Sector</span>
              <span className="font-semibold">Technology</span>
            </div>

            <div className="flex justify-between">
              <span>Industry</span>
              <span className="font-semibold">Consumer Electronics</span>
            </div>

            <div className="flex justify-between">
              <span>Employees</span>
              <span className="font-semibold">164,000</span>
            </div>

            <div className="flex justify-between">
              <span>Headquarters</span>
              <span className="font-semibold">California</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-blue-950 mb-6">
            Financial Highlights
          </h1>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span>Revenue</span>
              <span className="font-semibold">$391B</span>
            </div>

            <div className="flex justify-between">
              <span>Net Income</span>
              <span className="font-semibold">$97B</span>
            </div>

            <div className="flex justify-between">
              <span>EPS</span>
              <span className="font-semibold">6.13</span>
            </div>

            <div className="flex justify-between">
              <span>ROE</span>
              <span className="font-semibold">150%</span>
            </div>

            <div className="flex justify-between">
              <span>Beta</span>
              <span className="font-semibold">1.18</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
