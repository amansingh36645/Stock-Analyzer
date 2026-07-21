import axios from "axios";
import React, { useEffect, useState } from "react";

import StockChart from "../components/StockChart";

const Stock = () => {
  const [name, setName] = useState();
  const [symbol, setSymbol] = useState();
  const [exchange, setExchange] = useState();
  const [price, setPrice] = useState();
  const [weekHigh, setweekHigh] = useState();
  const [weekLow, setweekLow] = useState();
  const [dividend, setDividend] = useState();
  const [trailingPE, settrailingPE] = useState();
  const [desc, setDesc] = useState();
  const [marketCap, setmarketCap] = useState();
  const [peRatio, setpeRatio] = useState();
  const [sector, setSector] = useState();
  const [industry, setIndustry] = useState();
  const [officialSite, setofficialSite] = useState();
  const [assetType, setassetType] = useState();
  const [address, setAddress] = useState();
  const [revenueTTM, setrevenueTTM] = useState();
  const [eps, setEps] = useState();
  const [roe, setRoe] = useState();
  const [profitMargin, setprofitMargin] = useState();
  const [shareFloat, setshareFloat] = useState();

  const fetchStock = async () => {
  let response = await axios.get(
    "https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=XT8UR9G69J2A9HDE",
  );

  let data = response.data;
  setName(data.Name);
  setSymbol(data.Symbol);
  setExchange(data.Exchange);
  setPrice(data.AnalystTargetPrice);
  setweekHigh(data["52WeekHigh"]);
  setweekLow(data["52WeekLow"]);
  setDesc(data.Description);
  setmarketCap((data.MarketCapitalization / 1000000000).toFixed(2));
  setpeRatio(data.PERatio);
  setSector(data.Sector);
  setIndustry(data.Industry);
  setofficialSite(data.OfficialSite);
  setassetType(data.AssetType);
  setAddress(data.Address);
  setrevenueTTM((data.RevenueTTM / 100000000).toFixed(2));
  setEps(data.EPS);
  setRoe(data.ReturnOnEquityTTM);
  setprofitMargin(data.ProfitMargin);
  setshareFloat(data.SharesFloat);
  setDividend(data.DividendPerShare);
  settrailingPE(data.TrailingPE);
  console.log(data);

  };

  // useEffect(() => {
  //   fetchStock();
  // }, []);

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
              <h1 className="text-4xl font-bold">{name}</h1>

              <p className="text-blue-200 mt-2">NASDAQ : {symbol}</p>
            </div>
          </div>

          <div className="text-right">
            <h1 className="text-5xl font-bold">${price}</h1>

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
          <StockChart />
        </div>
      </div>

      {/* Quick Stats */}

      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">Market Cap</p>
          <h2 className="text-3xl font-bold mt-2">${marketCap}B</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">P/E Ratio</p>
          <h2 className="text-3xl font-bold mt-2">{peRatio}</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">Dividned</p>
          <h2 className="text-3xl font-bold mt-2">{dividend}</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">52W High</p>
          <h2 className="text-3xl font-bold mt-2">${weekHigh}</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">52W Low</p>
          <h2 className="text-3xl font-bold mt-2">${weekLow}</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">TraIling PE</p>
          <h2 className="text-3xl font-bold mt-2">{trailingPE}</h2>
        </div>
      </div>

      {/* About */}

      <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
        <h1 className="text-3xl font-bold text-blue-950 mb-5">About Company</h1>

        <p className="text-gray-600 leading-8">{desc}</p>
      </div>

      {/* Company Details */}

      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-blue-950 mb-6">
            Company Information
          </h1>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span>Address</span>
              <span className="font-semibold">{address}</span>
            </div>

            <div className="flex justify-between">
              <span>Sector</span>
              <span className="font-semibold">{sector}</span>
            </div>

            <div className="flex justify-between">
              <span>Industry</span>
              <span className="font-semibold">{industry}</span>
            </div>

            <div className="flex justify-between">
              <span>Official Site</span>
              <span className="font-semibold">{officialSite}</span>
            </div>

            <div className="flex justify-between">
              <span>Asset Type</span>
              <span className="font-semibold">{assetType}</span>
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
              <span className="font-semibold">{revenueTTM}B</span>
            </div>

            <div className="flex justify-between">
              <span>Share Float</span>
              <span className="font-semibold">{shareFloat}</span>
            </div>

            <div className="flex justify-between">
              <span>EPS</span>
              <span className="font-semibold">{eps}</span>
            </div>

            <div className="flex justify-between">
              <span>ROE</span>
              <span className="font-semibold">{roe}%</span>
            </div>

            <div className="flex justify-between">
              <span>Profit Margin</span>
              <span className="font-semibold">{profitMargin}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
