import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

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

  const [chart, setChart] = useState({
    series: [
      {
        name: "candle",
        type: "candlestick",
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33],
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65],
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24],
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47],
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31],
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02],
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02],
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01],
          },
          {
            x: new Date(1538794800000),
            y: [6604.5, 6614.4, 6602.26, 6608.02],
          },
          {
            x: new Date(1538796600000),
            y: [6608.02, 6610.68, 6601.99, 6608.91],
          },
          {
            x: new Date(1538798400000),
            y: [6608.91, 6618.99, 6608.01, 6612],
          },
          {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6612],
          },
          {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95],
          },
          {
            x: new Date(1538803800000),
            y: [6623.91, 6623.91, 6615, 6615.67],
          },
          {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4],
          },
          {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9],
          },
          {
            x: new Date(1538809200000),
            y: [6614.9, 6626.2, 6613.33, 6623.45],
          },
          {
            x: new Date(1538811000000),
            y: [6623.48, 6627, 6618.38, 6620.35],
          },
          {
            x: new Date(1538812800000),
            y: [6619.43, 6620.35, 6610.05, 6615.53],
          },
          {
            x: new Date(1538814600000),
            y: [6615.53, 6617.93, 6610, 6615.19],
          },
          {
            x: new Date(1538816400000),
            y: [6615.19, 6621.6, 6608.2, 6620],
          },
          {
            x: new Date(1538818200000),
            y: [6619.54, 6625.17, 6614.15, 6620],
          },
          {
            x: new Date(1538820000000),
            y: [6620.33, 6634.15, 6617.24, 6624.61],
          },
          {
            x: new Date(1538821800000),
            y: [6625.95, 6626, 6611.66, 6617.58],
          },
          {
            x: new Date(1538823600000),
            y: [6619, 6625.97, 6595.27, 6598.86],
          },
          {
            x: new Date(1538825400000),
            y: [6598.86, 6598.88, 6570, 6587.16],
          },
          {
            x: new Date(1538827200000),
            y: [6588.86, 6600, 6580, 6593.4],
          },
          {
            x: new Date(1538829000000),
            y: [6593.99, 6598.89, 6585, 6587.81],
          },
          {
            x: new Date(1538830800000),
            y: [6587.81, 6592.73, 6567.14, 6578],
          },
          {
            x: new Date(1538832600000),
            y: [6578.35, 6581.72, 6567.39, 6579],
          },
          {
            x: new Date(1538834400000),
            y: [6579.38, 6580.92, 6566.77, 6575.96],
          },
          {
            x: new Date(1538836200000),
            y: [6575.96, 6589, 6571.77, 6588.92],
          },
          {
            x: new Date(1538838000000),
            y: [6588.92, 6594, 6577.55, 6589.22],
          },
          {
            x: new Date(1538839800000),
            y: [6589.3, 6598.89, 6589.1, 6596.08],
          },
          {
            x: new Date(1538841600000),
            y: [6597.5, 6600, 6588.39, 6596.25],
          },
          {
            x: new Date(1538843400000),
            y: [6598.03, 6600, 6588.73, 6595.97],
          },
          {
            x: new Date(1538845200000),
            y: [6595.97, 6602.01, 6588.17, 6602],
          },
          {
            x: new Date(1538847000000),
            y: [6602, 6607, 6596.51, 6599.95],
          },
          {
            x: new Date(1538848800000),
            y: [6600.63, 6601.21, 6590.39, 6591.02],
          },
          {
            x: new Date(1538850600000),
            y: [6591.02, 6603.08, 6591, 6591],
          },
          {
            x: new Date(1538852400000),
            y: [6591, 6601.32, 6585, 6592],
          },
          {
            x: new Date(1538854200000),
            y: [6593.13, 6596.01, 6590, 6593.34],
          },
          {
            x: new Date(1538856000000),
            y: [6593.34, 6604.76, 6582.63, 6593.86],
          },
          {
            x: new Date(1538857800000),
            y: [6593.86, 6604.28, 6586.57, 6600.01],
          },
          {
            x: new Date(1538859600000),
            y: [6601.81, 6603.21, 6592.78, 6596.25],
          },
          {
            x: new Date(1538861400000),
            y: [6596.25, 6604.2, 6590, 6602.99],
          },
          {
            x: new Date(1538863200000),
            y: [6602.99, 6606, 6584.99, 6587.81],
          },
          {
            x: new Date(1538865000000),
            y: [6587.81, 6595, 6583.27, 6591.96],
          },
          {
            x: new Date(1538866800000),
            y: [6591.97, 6596.07, 6585, 6588.39],
          },
          {
            x: new Date(1538868600000),
            y: [6587.6, 6598.21, 6587.6, 6594.27],
          },
          {
            x: new Date(1538870400000),
            y: [6596.44, 6601, 6590, 6596.55],
          },
          {
            x: new Date(1538872200000),
            y: [6598.91, 6605, 6596.61, 6600.02],
          },
          {
            x: new Date(1538874000000),
            y: [6600.55, 6605, 6589.14, 6593.01],
          },
          {
            x: new Date(1538875800000),
            y: [6593.15, 6605, 6592, 6603.06],
          },
          {
            x: new Date(1538877600000),
            y: [6603.07, 6604.5, 6599.09, 6603.89],
          },
          {
            x: new Date(1538879400000),
            y: [6604.44, 6604.44, 6600, 6603.5],
          },
          {
            x: new Date(1538881200000),
            y: [6603.5, 6603.99, 6597.5, 6603.86],
          },
          {
            x: new Date(1538883000000),
            y: [6603.85, 6605, 6600, 6604.07],
          },
          {
            x: new Date(1538884800000),
            y: [6604.98, 6606, 6604.07, 6606],
          },
        ],
      },
    ],
    options: {
      tooltip: {
        shared: true,
        custom: [
          function ({ seriesIndex, dataPointIndex, w }) {
            return w.globals.series[seriesIndex][dataPointIndex];
          },
          function ({ seriesIndex, dataPointIndex, w }) {
            let o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
            let h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
            let l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
            let c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
            return (
              '<div class="apexcharts-tooltip-candlestick">' +
              '<div>Open: <span class="value">' +
              o +
              "</span></div>" +
              '<div>High: <span class="value">' +
              h +
              "</span></div>" +
              '<div>Low: <span class="value">' +
              l +
              "</span></div>" +
              '<div>Close: <span class="value">' +
              c +
              "</span></div>" +
              "</div>"
            );
          },
        ],
      },
      xaxis: {
        type: "datetime",
      },
    },
  });

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
  };

  useEffect(() => {
    fetchStock();
  }, []);

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
          <ReactApexChart
            options={chart.options}
            series={chart.series}
            type="line"
            height={350}
            width={1350}
          />
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
