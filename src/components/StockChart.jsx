import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const StockChart = () => {
  const [stock, setStock] = useState("RELIANCE")
  const [candle, setCandle] = useState([]);
  const [chart, setChart] = useState({
    series: [
      {
        name: "candle",
        type: "candlestick",
        data: [],
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


  const fetchChart = async () => {
    try {
      let response_ohcl = await axios.get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&apikey=XT8UR9G69J2A9HDE",
      );
      let data = response_ohcl.data["Time Series (Daily)"];

      const truncateToTwoDecimals = (number) => Math.trunc(number * 100) / 100;
      const mappedData = Object.keys(data).map((datetime) => ({
        x: new Date(datetime),
        y: [
          truncateToTwoDecimals(parseFloat(data[datetime]["1. open"])),
          truncateToTwoDecimals(parseFloat(data[datetime]["2. high"])),
          truncateToTwoDecimals(parseFloat(data[datetime]["3. low"])),
          truncateToTwoDecimals(parseFloat(data[datetime]["4. close"])),
        ],
      }));
      setCandle((prev) => ({
        ...prev,
        series: [
          {
            data: mappedData,
          },
        ],
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchChart();
  }, []);

  return (
    <div>
      <ReactApexChart
        options={chart.options}
        series={chart.series}
        type="line"
        height={450}
        width={1350}
      />
    </div>
  );
};

export default StockChart;
