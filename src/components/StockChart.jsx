import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const StockChart = ({ chartMap }) => {
  const [chart, setChart] = useState({
    series: [
      {
        name: "",
        type: "",
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

  useEffect(() => {
    setChart((prev) => ({
      ...prev,
      series: [
        {
          name: "candle",
          type: "candlestick",
          data: chartMap || [],
        },
      ],
    }));
  }, [chartMap]);

  return (
    <div>
      <ReactApexChart
        options={chart.options}
        series={chart.series}
        type="line"
        height={425}
        width={1350}
      />
    </div>
  );
};

export default StockChart;
