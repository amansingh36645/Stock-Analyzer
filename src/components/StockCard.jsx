import React from "react";

const StockCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 border border-gray-200 hover:-translate-y-1">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://logo.clearbit.com/apple.com"
            alt=""
            className="w-12 h-12 rounded-full border"
          />

          <div>
            <h1 className="text-xl font-bold text-blue-950">Apple Inc.</h1>

            <p className="text-gray-500 text-sm">NASDAQ : AAPL</p>
          </div>
        </div>

        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
          +2.45%
        </span>
      </div>

      {/* Price */}

      <div className="mt-6">
        <h1 className="text-4xl font-bold text-blue-950">$213.45</h1>

        <p className="text-green-600 font-medium mt-1">▲ +5.12 Today</p>
      </div>

      {/* High Low */}

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-100 rounded-xl p-3">
          <p className="text-gray-500 text-sm">Day High</p>

          <h2 className="font-bold text-lg">$215.20</h2>
        </div>

        <div className="bg-gray-100 rounded-xl p-3">
          <p className="text-gray-500 text-sm">Day Low</p>

          <h2 className="font-bold text-lg">$210.85</h2>
        </div>
      </div>

      {/* Footer */}

      <div className="mt-6 flex justify-between items-center">
        <button className="bg-linear-to-r from-blue-950 to-blue-700 text-white px-5 py-2 rounded-xl hover:scale-105 transition">
          View Details
        </button>

        <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-xl hover:bg-blue-900 hover:text-white transition">
          ☆ Watchlist
        </button>
      </div>
    </div>
  );
};

export default StockCard;
