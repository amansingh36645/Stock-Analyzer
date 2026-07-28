import axios from "axios";
import React, { useEffect, useState } from "react";

const Prediction = () => {
  const [points, setPoints] = useState(localStorage.getItem("Points"));
  const [name, setName] = useState();
  const [accuracy, setAccuracy] = useState(0);
  const [streak, setStreak] = useState(0);
  const [prediction, setPrediction] = useState(0);
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [prevPrice, setprevPrice] = useState();
  const [price, setPrice] = useState(); // this state will use for tomorrow price
  // const [finalPrice, setfinalPrice] = useState();
  const [register, setRegister] = useState(false);
  const [predictData, setpredictData] = useState();

  // window open resgister
  const registerPred = () => {
    localStorage.setItem("Registeration", "true");
    localStorage.setItem("Points", `1000`);
  };

  useEffect(() => {
    let stkName = ["AAPL", "NVDA", "MSFT", "AMZN", "IBM", "WMT"];
    let num = Math.floor((Math.random() * 12) / 2);
    let stockName = stkName[num];
    setName(stockName);
    let isRegistered = localStorage.getItem("Registeration");
  }, []);

  const fetchStockPrice = async () => {
    try {
      let response = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${name}&token=cremcchr01qnd5cvr330cremcchr01qnd5cvr33g`,
      );
      let data = response.data["c"];
      setprevPrice(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (predictData?.status === "pending") {
      console.log("prediction is going on");
    } else {
      fetchStockPrice();
    }
  }, [register]);

  // prediction here
  const predictStock = (direction) => {
    let obj = {
      stock: `${name}`,
      prediction: `${direction}`,
      referencePrice: prevPrice,
      predictionDate: `${new Date().toLocaleString()}`,
      status: "pending",
    };

    localStorage.setItem("data", JSON.stringify(obj));
  };

  useEffect(() => {
    let predictionData = JSON.parse(localStorage.getItem("data"));
    if (predictionData) {
      setpredictData(predictionData);
    }
  }, []);

  const checkResult = async () => {
    try {
      let response = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${predictData["stock"]}&token=cremcchr01qnd5cvr330cremcchr01qnd5cvr33g`,
      );
      let data = response.data["o"];
      let chngPercentage = response.data["dp"];
      setPrice(data);
      if (price > predictData["referencePrice"]) {
        let result = chngPercentage * 10;
        let pointsValue = JSON.parse(localStorage.getItem("Points"));
        let finalValue = Math.floor(pointsValue + result);
        localStorage.setItem("Points", JSON.stringify(finalValue));
        let points_value = JSON.parse(localStorage.getItem("Points"));
        setPoints(points_value);
      } else {
        let pointsValue = JSON.parse(localStorage.getItem("Points"));
        let finalValue = Math.floor(pointsValue - 20);
        localStorage.setItem("Points", JSON.stringify(finalValue));
        let points_value = JSON.parse(localStorage.getItem("Points"));
        setPoints(points_value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   let points_value = JSON.parse(localStorage.getItem("Points"));
  //   setPoints(points_value.toFixed(2));
  // }, [points]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      {localStorage.getItem("Registeration") === "true" ? (
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Prediction League</h1>
              <p className="text-gray-400">
                Predict tomorrow's movement and earn virtual points.
              </p>
            </div>

            <div className="bg-green-500/20 text-green-400 px-5 py-3 rounded-xl font-semibold">
              ⭐ {points} Points
            </div>
          </div>
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-5 mb-8">
            <div className="bg-gray-400 rounded-xl p-5">
              <p className="text-gray-700 text-sm">Accuracy</p>
              <h2 className="text-3xl font-bold mt-2">{accuracy}%</h2>
            </div>

            <div className="bg-gray-400 rounded-xl p-5">
              <p className="text-gray-700 text-sm">Current Streak</p>
              <h2 className="text-3xl font-bold mt-2 text-orange-400">
                {streak} Wins
              </h2>
            </div>

            <div className="bg-gray-400 rounded-xl p-5">
              <p className="text-gray-700 text-sm">Predictions</p>
              <h2 className="text-3xl font-bold mt-2">{prediction}</h2>
            </div>

            <div className="bg-gray-400 rounded-xl p-5">
              <p className="text-gray-700 text-sm">Win Rate</p>
              <h2 className="text-3xl font-bold mt-2">
                {win}W / {lose}L
              </h2>
            </div>
          </div>
          {/* Prediction Card */}
          <div className="grid grid-cols-2 gap-6">
            {/* Prediction Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Make Prediction
              </h2>

              <div className="space-y-12">
                <div>
                  <p className="text-gray-500 text-sm">Stock</p>
                  <h3 className="text-2xl font-bold">{name}.</h3>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Current Price</p>
                  <h2 className="text-3xl font-bold text-blue-900">
                    ${prevPrice}
                  </h2>
                </div>

                <div>
                  <p className="text-gray-500 text-md">
                    Use your market analysis to predict whether this stock will
                    open higher or lower than its current price on the next
                    trading day.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <button
                    onClick={() => {
                      predictStock("UP");
                    }}
                    className={
                      "bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition cursor-pointer disabled:cursor-not-allowed"
                    }
                    value="UP"
                    disabled={predictData?.status === "pending"}
                  >
                    Predict UP
                  </button>

                  <button
                    onClick={() => {
                      predictStock("DOWN");
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition cursor-pointer disabled:cursor-not-allowed"
                    value="DOWN"
                    disabled={predictData?.status === "pending"}
                  >
                    Predict DOWN
                  </button>
                </div>
              </div>
            </div>

            {/* Ongoing Prediction */}
            <div className="bg-linear-to-br from-blue-950 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-6">Ongoing Prediction</h2>
              {predictData ? (
                <div className="space-y-5">
                  <div>
                    <p className="text-blue-200 text-sm">Stock</p>

                    <h3 className="text-2xl font-bold">
                      {predictData["stock"]}.
                    </h3>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p className="text-blue-200 text-sm">Prediction</p>

                      <h3 className="text-green-400 font-bold text-xl">
                        {predictData["prediction"]}
                      </h3>
                    </div>

                    <div>
                      <p className="text-blue-200 text-sm">Reference Price</p>

                      <h3 className="font-bold text-xl">
                        ${predictData["referencePrice"]}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <p className="text-blue-200 text-sm">Submitted</p>

                    <h3 className="font-semibold">
                      {predictData["predictionDate"]}
                    </h3>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-blue-200 text-sm">Status</p>

                    <h2 className="text-yellow-300 font-bold text-lg">
                      {predictData["status"].toUpperCase()}
                    </h2>
                  </div>
                  <button
                    onClick={checkResult}
                    className="bg-cyan-500 hover:bg-cyan-700 text-white px-2 py-3 rounded-xl font-semibold transition"
                    value="DOWN"
                  >
                    Check Result
                  </button>
                </div>
              ) : (
                // default page when nothing in ongoing prediction
                <div className="space-y-5">
                  <div>
                    <p className="text-blue-200 text-sm">Stock</p>

                    <h3 className="text-2xl font-bold">Apple Inc.</h3>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <p className="text-blue-200 text-sm">Prediction</p>

                      <h3 className="text-green-400 font-bold text-xl">UP</h3>
                    </div>

                    <div>
                      <p className="text-blue-200 text-sm">Target Price</p>

                      <h3 className="font-bold text-xl">$205</h3>
                    </div>
                  </div>

                  <div>
                    <p className="text-blue-200 text-sm">Submitted</p>

                    <h3 className="font-semibold">Today • 11:24 AM</h3>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-blue-200 text-sm">Status</p>

                    <h2 className="text-yellow-300 font-bold text-lg">
                      Waiting for Market Close...
                    </h2>
                  </div>
                  <button
                    className="bg-gray-500 hover:bg-red-600 text-white px-2 py-3 rounded-xl font-semibold transition"
                    value="DOWN"
                  >
                    Claim Points
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center font-bold">
            Click Below Button To Start Prediction
          </h1>

          <button
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition w-1/2"
            onClick={registerPred}
          >
            Start
          </button>
        </div>
      )}
    </div>
  );
};

export default Prediction;
