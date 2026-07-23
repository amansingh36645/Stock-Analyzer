import React, { useState, useEffect } from "react";
import axios from "axios";

const Market = () => {
  const [gainer, setGainer] = useState();
  const [loser, setLosers] = useState();
  const stkGainLose = async () => {
    try {
      let response = await axios.get(
        "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=XT8UR9G69J2A9HDE",
      );
      let gainerData = response.data.top_gainers;
      let loserData = response.data.top_losers;
      settopGainer(gainerData);
      settopLosers(loserData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    stkGainLose();
  }, []);

  return (
    <div className="bg-slate-100 min-h-screen p-8 pt-30">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">Market Dashboard</h1>
        <p className="text-slate-500 mt-2">
          Track market trends, signals, and global indices.
        </p>
      </div>

      {/* Top Gainers & Losers */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Gainers */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-bold mb-5 text-slate-800">Top Gainers</h2>
      {/* here i have to fix the mapping will do tomorrow */}
          <div className="space-y-4">
            {gainer.slice(0, 5).map((e) => {
              return (
                <div className="flex justify-between">
                  <span>{e.name}</span>
                  <span className="text-green-600 font-semibold">+{(e.gainer).toFixed(2)}%</span>
                </div>
              );
            })}

            <div className="flex justify-between">
              <span>TCS</span>
              <span className="text-green-600 font-semibold">+3.87%</span>
            </div>

            <div className="flex justify-between">
              <span>INFY</span>
              <span className="text-green-600 font-semibold">+3.41%</span>
            </div>

            <div className="flex justify-between">
              <span>HDFCBANK</span>
              <span className="text-green-600 font-semibold">+2.92%</span>
            </div>
          </div>
        </div>

        {/* Losers */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-bold mb-5 text-slate-800">Top Losers</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>WIPRO</span>
              <span className="text-red-600 font-semibold">-2.45%</span>
            </div>

            <div className="flex justify-between">
              <span>LTIM</span>
              <span className="text-red-600 font-semibold">-2.31%</span>
            </div>

            <div className="flex justify-between">
              <span>BPCL</span>
              <span className="text-red-600 font-semibold">-1.88%</span>
            </div>

            <div className="flex justify-between">
              <span>SBIN</span>
              <span className="text-red-600 font-semibold">-1.52%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Global Markets */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
        <h2 className="text-xl font-bold mb-6 text-slate-800">
          Global Markets
        </h2>

        <div className="grid grid-cols-5 gap-5">
          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-slate-500">S&P 500</p>
            <h3 className="font-bold text-lg">6,432</h3>
            <p className="text-green-600">+0.65%</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-slate-500">NASDAQ</p>
            <h3 className="font-bold text-lg">21,420</h3>
            <p className="text-green-600">+1.12%</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-slate-500">Dow Jones</p>
            <h3 className="font-bold text-lg">44,852</h3>
            <p className="text-red-600">-0.22%</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-slate-500">Nikkei 225</p>
            <h3 className="font-bold text-lg">40,110</h3>
            <p className="text-green-600">+0.91%</p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4">
            <p className="text-slate-500">FTSE 100</p>
            <h3 className="font-bold text-lg">9,203</h3>
            <p className="text-green-600">+0.34%</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Market Signal */}
        <div className="bg-linear-to-r from-blue-950 to-blue-700 text-white rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">Market Signal</h2>

          <div className="space-y-4">
            <div>
              <p className="text-slate-300">Stock</p>
              <h3 className="text-xl font-semibold">RELIANCE</h3>
            </div>

            <div>
              <p className="text-slate-300">Current Price</p>
              <h3 className="text-xl font-semibold">₹2,850</h3>
            </div>

            <div>
              <p className="text-slate-300">Volume / OI Ratio</p>
              <h3 className="text-xl font-semibold">1.78</h3>
            </div>

            <div>
              <p className="text-slate-300">Signal</p>
              <h3 className="text-green-400 font-semibold">Bullish Momentum</h3>
            </div>

            <div>
              <p className="text-slate-300">Confidence</p>
              <h3 className="font-semibold">Medium</h3>
            </div>
          </div>
        </div>

        {/* User Predictions */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">
            User Predictions
          </h2>

          <div className="space-y-5">
            <div className="border-b pb-3">
              <h3 className="font-semibold">RELIANCE</h3>
              <p className="text-slate-500">Prediction: Above ₹2900</p>
            </div>

            <div className="border-b pb-3">
              <h3 className="font-semibold">INFY</h3>
              <p className="text-slate-500">Prediction: Below ₹1600</p>
            </div>

            <div>
              <h3 className="font-semibold">TCS</h3>
              <p className="text-slate-500">Prediction: Above ₹4200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
