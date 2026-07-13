import React from "react";
import StockCard from "../components/StockCard";

const Market = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6  p-6 bg-linear-to-br from-blue-950 to-blue-700 min-h-screen">
      {/* ================= LEFT SECTION (2/3) ================= */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        {/* Wishlist */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            ⭐ My Watchlist
          </h2>
          {/* mapping here */}
          <div
            // key={stock.symbol}
            className="flex justify-between items-center border rounded-xl p-4 hover:bg-gray-50 transition"
          >
            <div>
              <h1 className="font-bold">STATE BANK INDIA</h1>
              <p className="text-gray-500">SBIN</p>
            </div>

            <div className="text-center">
              <h2>$88</h2>
              <p className="text-green-600">4.5%</p>
            </div>

            <div className="text-right">
              <p>High: 99</p>
              <p>Low: 45</p>
            </div>
          </div>
        </div>

        {/* Stock Cards */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold text-blue-950">
              Market Overview
            </h2>

            <button className="text-blue-700 font-semibold hover:text-blue-900">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
            <StockCard />
            <StockCard />
            <StockCard />
            <StockCard />
          </div>
        </div>
      </div>

      {/* ================= RIGHT SECTION (1/3) ================= */}

      <div className="w-full lg:w-1/3 flex flex-col gap-6 ">
        {/* Top Gainers */}

        <div className="bg-white rounded-2xl shadow-xl p-6 h-1/2">
          <h2 className="text-xl font-bold text-green-600 mb-4">
            📈 Top Gainers
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span>NVDA</span>
              <span className="text-green-600 font-semibold">+5.42%</span>
            </div>

            <div className="flex justify-between">
              <span>TSLA</span>
              <span className="text-green-600 font-semibold">+4.87%</span>
            </div>

            <div className="flex justify-between">
              <span>AAPL</span>
              <span className="text-green-600 font-semibold">+3.12%</span>
            </div>
          </div>
        </div>

        {/* Top Losers */}

        <div className="bg-white rounded-2xl shadow-xl p-6 h-1/2">
          <h2 className="text-xl font-bold text-red-500 mb-4">📉 Top Losers</h2>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between ">
              <span>NFLX</span>
              <span className="text-red-500 font-semibold">-3.24%</span>
            </div>

            <div className="flex justify-between">
              <span>META</span>
              <span className="text-red-500 font-semibold">-2.74%</span>
            </div>

            <div className="flex justify-between">
              <span>AMD</span>
              <span className="text-red-500 font-semibold">-2.15%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
