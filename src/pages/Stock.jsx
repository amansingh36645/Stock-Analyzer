import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import StockName, { StockDataName } from "../context/StockName";
import StockChart from "../components/StockChart";

const Stock = () => {
  const [stockName, setstockName] = useContext(StockDataName);

  const [companyInfo, setcompanyInfo] = useState(null);
  const [companyReport, setcompanyReport] = useState(null);
  const [chartData, setChartData] = useState([]);

  const fetchStock = async () => {
    try {
      let response = await axios.get(
        `https://financialmodelingprep.com/stable/profile?symbol=${stockName}&apikey=bGzyqCOSCkFOlgqBQLFQaPAf31LXog3G`,
      );

      let response_report = await axios.get(
        `https://financialmodelingprep.com/stable/income-statement?symbol=${stockName}&limit=1&apikey=bGzyqCOSCkFOlgqBQLFQaPAf31LXog3G`,
      );
      setcompanyInfo(response.data[0]);
      setcompanyReport(response_report.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchChart = async () => {
    try {
      let response_ohcl = await axios.get(
        `https://financialmodelingprep.com/stable/historical-price-eod/non-split-adjusted?symbol=${stockName}&apikey=bGzyqCOSCkFOlgqBQLFQaPAf31LXog3G`,
      );
      let data = response_ohcl.data;
      const deciMalValue = (number) => Math.trunc(number * 100) / 100;
      const mappedData = data.map((item) => ({
        x: new Date(item.date),
        y: [
          deciMalValue(item.adjOpen),
          deciMalValue(item.adjHigh),
          deciMalValue(item.adjLow),
          deciMalValue(item.adjClose),
        ],
      }));
      setChartData(mappedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStock();
    fetchChart();
  }, [stockName]);

  return (
    <div className="bg-[#F5F7FB] min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Header */}

      <div className="bg-linear-to-r from-blue-950 to-blue-700 rounded-3xl p-5 sm:p-6 lg:p-8 text-white shadow-xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex items-center gap-5">

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold wrap-break-word">
                {companyInfo?.companyName}
              </h1>

              <p className="text-blue-200 mt-2">
                NASDAQ : {companyInfo?.symbol}
              </p>
            </div>
          </div>

          <div className="text-left lg:text-right w-full lg:w-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              ${companyInfo?.price}
            </h1>
          </div>
        </div>
      </div>

      {/* Chart */}

      <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-6 mt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-950">
            Stock Performance
          </h1>
        </div>

        <div className="h-112.5 rounded-2xl border-2 border-dashed border-gray-300 mt-6 flex items-center justify-center">
          <StockChart chartMap={chartData} />
        </div>
      </div>

      {/* Quick Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">Market Cap</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            ${(companyInfo?.marketCap / 1000000000).toFixed(2)} B
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">Income Before Tax</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            ${(companyReport?.incomeBeforeTax / 1000000000).toFixed(2)} B
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">Operating Expenses</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            ${(companyReport?.operatingExpenses / 1000000000).toFixed(2)} B
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">Net Income</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            ${(companyReport?.netIncome / 1000000000).toFixed(2)}B
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">Cost Of Revenue</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            ${(companyReport?.costOfRevenue / 1000000000).toFixed(2)} B
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <p className="text-gray-500">Ebit</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            ${(companyReport?.ebit / 1000000000).toFixed(2)} B
          </h2>
        </div>
      </div>

      {/* About */}

      <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 lg:p-8 mt-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-5">
          About Company
        </h1>

        <p className="text-gray-600 leading-7 lg:leading-8">
          {companyInfo?.description}
        </p>
      </div>

      {/* Company Details */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 lg:p-8">
          <h1 className="text-2xl font-bold text-blue-950 mb-6">
            Company Information
          </h1>

          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <span>Address</span>
              <span className="font-semibold wrap-break-word">
                {companyInfo?.address}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <span>Sector</span>
              <span className="font-semibold wrap-break-word">
                {companyInfo?.sector}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <span>Industry</span>
              <span className="font-semibold wrap-break-word">
                {companyInfo?.industry}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <span>Official Site</span>
              <span className="font-semibold wrap-break-word">
                {companyInfo?.website}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <span>Average Volume</span>
              <span className="font-semibold wrap-break-word">
                {companyInfo?.averageVolume}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-5 sm:p-6 lg:p-8">
          <h1 className="text-2xl font-bold text-blue-950 mb-6">
            Financial Highlights
          </h1>

          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <span>Revenue</span>
              <span className="font-semibold wrap-break-word">
                ${(companyReport?.revenue / 1000000000).toFixed(2)} B
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <span>Last Dividend</span>
              <span className="font-semibold wrap-break-word">
                {companyInfo?.lastDividend}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <span>EPS</span>
              <span className="font-semibold wrap-break-word">
                {companyReport?.eps}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <span>Gross Profit</span>
              <span className="font-semibold wrap-break-word">
                ${(companyReport?.grossProfit / 1000000000).toFixed(2)} B
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <span>Ebitda</span>
              <span className="font-semibold wrap-break-word">
                ${(companyReport?.ebitda / 1000000000).toFixed(2)} B
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
