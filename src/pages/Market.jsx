import React, { useState, useEffect } from "react";
import axios from "axios";
import Prediction from "../components/Prediction";

const Market = () => {
  const [gainer, setGainer] = useState();
  const [marketStatus, setmarketStatus] = useState();
  const [loser, setLosers] = useState();
  const stkGainLose = async () => {
    try {
      let response = await axios.get(
        "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=XT8UR9G69J2A9HDE",
      );

      let response_mktStatus = await axios.get(
        "https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=XT8UR9G69J2A9HDE",
      );
      let gainerData = response.data.top_gainers;
      let loserData = response.data.top_losers;
      let marketData = response_mktStatus.data.markets;
      setGainer(gainerData);
      setLosers(loserData);
      setmarketStatus(marketData);
      console.log(marketData);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   stkGainLose();
  // }, []);

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
            {gainer ? (
              gainer.slice(1, 6).map((e) => {
                return (
                  <div className="flex justify-between">
                    <span>{e.ticker}</span>
                    <span className="text-green-600 font-semibold">
                      +{e.change_percentage}
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="flex justify-between">
                <span>API LIMIT REACHED TRY LATER</span>
              </div>
            )}
          </div>
        </div>

        {/* Losers */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-bold mb-5 text-slate-800">Top Losers</h2>

          <div className="space-y-4">
            {loser ? (
              loser.slice(1, 6).map((e) => {
                return (
                  <div className="flex justify-between">
                    <span>{e.ticker}</span>
                    <span className="text-red-600 font-semibold">
                      {e.change_percentage}
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="flex justify-between">
                <span>API LIMIT REACHED TRY LATER</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Global Markets */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
        <h2 className="text-xl font-bold mb-6 text-slate-800">
          Global Markets
        </h2>

        <div className="grid grid-cols-5 gap-5">
          {marketStatus ? (
            marketStatus.slice(0, 5).map((e) => {
              return (
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-slate-500">{e.market_type}</p>
                  <h3 className="font-bold text-lg">{e.primary_exchanges}</h3>
                  <p className="text-green-600">{e.current_status}</p>
                </div>
              );
            })
          ) : (
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-slate-500">S&P 500</p>
              <h3 className="font-bold text-lg">6,432</h3>
              <p className="text-green-600">+0.65%</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" gap-6">
        {/* User Predictions */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <Prediction />
        </div>
      </div>
    </div>
  );
};

export default Market;
