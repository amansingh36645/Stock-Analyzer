import axios from "axios";
import React, { useEffect, useState } from "react";

const Prediction = () => {
  const [points, setPoints] = useState(
    JSON.parse(localStorage.getItem("Points")),
  );
  const [name, setName] = useState();
  const [accuracy, setAccuracy] = useState(0);
  const [streak, setStreak] = useState(
    JSON.parse(localStorage.getItem("streak")),
  );
  const [prediction, setPrediction] = useState(
    JSON.parse(localStorage.getItem("predictionCount")),
  );
  const [win, setWin] = useState(JSON.parse(localStorage.getItem("win")));
  const [lose, setLose] = useState(JSON.parse(localStorage.getItem("loss")));
  const [prevPrice, setprevPrice] = useState();
  const [chngPrice, setchngPrice] = useState();
  const [price, setPrice] = useState();
  const [register, setRegister] = useState(false);
  const [predictData, setpredictData] = useState();
  const [isPrection, setisPrection] = useState();
  const [isresultData, setisresultData] = useState();
  const [isRewardPoint, setisRewardPoint] = useState();


  //when component first load 
  useEffect(() => {
    const prediction = JSON.parse(localStorage.getItem("data"));
    const result = JSON.parse(localStorage.getItem("resultObj"));
    const rewardPoint = JSON.parse(localStorage.getItem("rewardPoint"));

    
    if (rewardPoint) setisRewardPoint(rewardPoint);

    if (prediction) setpredictData(prediction);
    if (result) setisresultData(result);
}, []);

  // prediction start page and default settings
  const registerPred = () => {
    localStorage.setItem("Registeration", "true");
    localStorage.setItem("Points", JSON.stringify(1000));
    localStorage.setItem("predictionCount", 0);

    localStorage.setItem("streak", 0);
    localStorage.setItem("win", 0);
    localStorage.setItem("loss", 0);
    setRegister(true);
    setPoints(1000);
    setPrediction(0);
    setAccuracy(0);
    setStreak(0);
    setWin(0);
    setLose(0);
  };

  //random stock symbol generate to fetch random stock name
  useEffect(() => {
    let stkName = ["AAPL", "NVDA", "MSFT", "AMZN", "IBM", "WMT"];
    let num = Math.floor((Math.random() * 12) / 2);
    let stockName = stkName[num];
    setName(stockName);
  }, []);

  //caculate accuracy
  useEffect(() => {
    if (win === 0) return;
    let accuracyPercentage = ((win / prediction) * 100).toFixed(2);
    setAccuracy(accuracyPercentage);
  }, [win, prediction]);

  //fetch stock price open high low close
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

  //condition
  useEffect(() => {
    if (!name) return;
    fetchStockPrice();
  }, [name]);

  // prediction function here to store ongoing prediction in local storage
  const predictStock = (direction) => {
    localStorage.removeItem("data");
    let obj = {
      stock: `${name}`,
      prediction: `${direction}`,
      referencePrice: prevPrice,
      predictionDate: `${new Date().toISOString()}`,
      status: "pending",
    };
    localStorage.setItem("data", JSON.stringify(obj));
    setpredictData(obj)
    //setting obj for prediction count

    let count = JSON.parse(localStorage.getItem("predictionCount"));
    let finalCount = count + 1;
    localStorage.setItem("predictionCount", finalCount);
    setPrediction(finalCount);
  };


  const checkResult = async () => {
    try {
      let response = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${predictData["stock"]}&token=cremcchr01qnd5cvr330cremcchr01qnd5cvr33g`,
      );

      let data = response.data["o"];
      let chngPercentage = response.data["dp"];
      setPrice(data);
      setchngPrice(chngPercentage);

      // store result in local storage

      let obj = {
        stock: `${predictData.stock}`,
        prediction: `${predictData.prediction}`,
        referencePrice: `${predictData.referencePrice}`,
        submittedDate: `${new Date().toISOString()}`,
        status: "completed",
        pointsAwarded: true,
        currentPrice: `${data.toFixed(2)}`,
        percentage: `${chngPercentage.toFixed(2)}`,
      };

      localStorage.setItem("resultObj", JSON.stringify(obj));
      setisresultData(obj)
      //calculation for prediction points and reward

      let pointsValue = JSON.parse(localStorage.getItem("Points"));

      if (
        data > predictData.referencePrice &&
        predictData.prediction === "UP"
      ) {
        let result = chngPercentage * 10;
        let finalValue = Math.floor(pointsValue + result);
        localStorage.setItem("Points", JSON.stringify(finalValue));
        localStorage.setItem("rewardPoint", result);
        setisRewardPoint(result)
        setPoints(finalValue);
        setisPrection("Correct");
        //setting win
        let win = JSON.parse(localStorage.getItem("win"));
        let winCount = win + 1;
        localStorage.setItem("win", winCount);
        setWin(winCount);
        //setting streak
        let streak = JSON.parse(localStorage.getItem("streak"));
        let streakCount = streak + 1;
        localStorage.setItem("streak", streakCount);
        setStreak(streakCount);
      } else if (
        data < predictData.referencePrice &&
        predictData.prediction === "DOWN"
      ) {
        let result = Math.abs(chngPercentage) * 10;
        let finalValue = Math.floor(pointsValue + result);
        localStorage.setItem("Points", JSON.stringify(finalValue));
        localStorage.setItem("rewardPoint", result);
        setisRewardPoint(result)
        setPoints(finalValue);
        setisPrection("Correct");
        //setting win
        let win = JSON.parse(localStorage.getItem("win"));
        let winCount = win + 1;
        localStorage.setItem("win", winCount);
        setWin(winCount);
        //setting streak
        let streak = JSON.parse(localStorage.getItem("streak"));
        let streakCount = streak + 1;
        localStorage.setItem("streak", streakCount);
        setStreak(streakCount);
      } else {
        let result = Math.abs(chngPercentage * 10);
        let finalValue = Math.floor(pointsValue - result);
        localStorage.setItem("Points", JSON.stringify(finalValue));
        localStorage.setItem("rewardPoint", result);
        setisRewardPoint(result)
        setPoints(finalValue);
        setisPrection("Wrong");
        //resetting streak back to 0
        localStorage.setItem("streak", 0);
        setStreak(0);
        //setting loss
        let loss = JSON.parse(localStorage.getItem("loss"));
        let lossCount = loss + 1;
        localStorage.setItem("loss", lossCount);
        setLose(lossCount);
      }

      //updating ui using state

    } catch (error) {
      console.error(error);
    }
  };

  //button condition for valid result check
  const isResultAvailable = () => {
    if (!predictData) return false;

    const now = new Date();
    const predictionDate = new Date(predictData.predictionDate);

    // Market opens at 9:20 AM
    const marketOpen = new Date(predictionDate);
    marketOpen.setDate(marketOpen.getDate() + 1);
    marketOpen.setHours(9, 35, 0, 0);
    return now >= marketOpen;
  };

  //reset prediction function
  const resetPrediction = () => {
    localStorage.removeItem("rewardPoint");
    localStorage.removeItem("resultObj");
    localStorage.removeItem("data");
    setpredictData(null);
    setisresultData(null);
    setisRewardPoint(null)
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      {/* Header */}
      {register === true || localStorage.getItem("Registeration") === "true" ? (
        <div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Prediction League
              </h1>
              <p className="text-gray-400 mt-1">
                Predict tomorrow's movement and earn virtual points.
              </p>
            </div>

            <div className="bg-green-500/20 text-green-400 px-5 py-3 rounded-xl font-semibold w-fit">
              ⭐ {points} Points
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-gray-400 rounded-xl p-5">
              <p className="text-gray-700 text-sm">Accuracy</p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                {accuracy}%
              </h2>
            </div>

            <div className="bg-gray-400 rounded-xl p-5">
              <p className="text-gray-700 text-sm">Current Streak</p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-orange-400">
                {streak} Wins
              </h2>
            </div>

            <div className="bg-gray-400 rounded-xl p-5">
              <p className="text-gray-700 text-sm">Predictions</p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                {prediction}
              </h2>
            </div>

            <div className="bg-gray-400 rounded-xl p-5">
              <p className="text-gray-700 text-sm">Win Rate</p>

              <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                {win}W / {lose}L
              </h2>
            </div>
          </div>
          {/* Prediction Card */}
          <div className="grid gap-6">
            {/* Prediction Card */}

            {
              <div
                className={
                  predictData
                    ? "hidden"
                    : "bg-slate-800 border-slate-700 rounded-2xl shadow-lg border p-5 sm:p-6"
                }
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-6">
                  Make Prediction
                </h2>

                <div className="space-y-8 sm:space-y-12">
                  <div>
                    <p className="text-gray-500 text-sm">Stock</p>
                    <h3 className="text-blue-400 text-xl sm:text-2xl font-bold break-all">
                      {name}.
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Current Price</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-400">
                      ${prevPrice}
                    </h2>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm sm:text-base leading-7">
                      Use your market analysis to predict whether this stock
                      will open higher or lower than its current price on the
                      next trading day.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <button
                      onClick={() => {
                        predictStock("UP");
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition cursor-pointer"
                      value="UP"
                    >
                      Predict UP
                    </button>

                    <button
                      onClick={() => {
                        predictStock("DOWN");
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition cursor-pointer"
                      value="DOWN"
                    >
                      Predict DOWN
                    </button>
                  </div>
                </div>
              </div>
            }
            {/* //result will display here */}

            {isresultData && (
              <div className="bg-slate-900 rounded-2xl border border-slate-700 p-4 sm:p-6 w-full mx-auto shadow-xl">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      Prediction Result
                    </h2>

                    <p className="text-gray-400 text-sm break-all">
                      {isresultData["stock"]}.
                    </p>
                  </div>

                  <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-semibold w-fit">
                    {isPrection} Prediction
                  </div>
                </div>

                {/* Comparison */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-slate-800 rounded-xl p-5">
                    <p className="text-gray-400 text-sm mb-2">
                      Reference Price
                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      ₹{isresultData["referencePrice"]}
                    </h2>

                    <p className="text-gray-500 mt-2 text-sm sm:text-base">
                      Price when prediction was submitted
                    </p>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-5">
                    <p className="text-gray-400 text-sm mb-2">Latest Price</p>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      ₹{isresultData["currentPrice"]}
                    </h2>

                    <p className="text-gray-500 mt-2 text-sm sm:text-base">
                      Current market price
                    </p>
                  </div>
                </div>

                {/* Stats */}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-slate-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-sm">Prediction</p>

                    <h3 className="text-green-400 text-lg sm:text-xl font-bold mt-2">
                      {isresultData["prediction"]}
                    </h3>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-sm">Percentage Change</p>

                    <h3 className="text-green-400 text-lg sm:text-xl font-bold mt-2">
                      {isresultData["percentage"]}%
                    </h3>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-sm">League Points</p>

                    <h3 className="text-green-400 text-lg sm:text-xl font-bold mt-2">
                      {Math.floor(isRewardPoint)}
                    </h3>
                  </div>
                </div>

                {/* Footer */}

                <div className="mt-8 bg-green-500/10 border border-green-500 rounded-xl p-5 flex flex-col sm:flex-row justify-between sm:items-center gap-5">
                  <div>
                    <p className="text-gray-400 text-sm">Updated Balance</p>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {points} Points
                    </h2>
                  </div>

                  <button
                    onClick={resetPrediction}
                    className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition w-full sm:w-auto"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Ongoing Prediction */}
            {predictData && (
              <div
                className={
                  isresultData?.status === "completed"
                    ? "hidden"
                    : "bg-linear-to-br from-blue-950 to-blue-700 rounded-2xl shadow-lg p-5 sm:p-6 text-white"
                }
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">
                    Ongoing Prediction
                  </h2>

                  <div className="space-y-5">
                    {/* Stock */}
                    <div>
                      <p className="text-blue-200 text-sm">Stock</p>

                      <h3 className="text-xl sm:text-2xl font-bold break-all">
                        {predictData["stock"]}.
                      </h3>
                    </div>

                    {/* Prediction & Price */}

                    <div className="flex flex-col sm:flex-row justify-between gap-5">
                      <div>
                        <p className="text-blue-200 text-sm">Prediction</p>

                        <h3 className="text-green-400 font-bold text-lg sm:text-xl">
                          {predictData["prediction"]}
                        </h3>
                      </div>

                      <div>
                        <p className="text-blue-200 text-sm">Reference Price</p>

                        <h3 className="font-bold text-lg sm:text-xl">
                          ${predictData["referencePrice"]}
                        </h3>
                      </div>
                    </div>

                    {/* Submitted */}

                    <div>
                      <p className="text-blue-200 text-sm">Submitted</p>

                      <h3 className="font-semibold wrap-break-word">
                        {predictData["predictionDate"]}
                      </h3>
                    </div>

                    {/* Status */}

                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-blue-200 text-sm">Status</p>

                      <h2 className="text-yellow-300 font-bold text-lg">
                        {predictData["status"].toUpperCase()}
                      </h2>
                    </div>

                    {/* Button */}

                    <button
                      onClick={checkResult}
                      className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold transition ${
                        isResultAvailable()
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-gray-500 cursor-not-allowed text-gray-300"
                      }`}
                      value="DOWN"
                      disabled={!isResultAvailable()}
                    >
                      Check Result
                    </button>

                    <p className="text-gray-300 text-sm">
                      (Check result after 9:35 AM)
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center shadow-lg mx-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-6h13M9 17l-4-4m4 4l-4 4"
              />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prediction League
          </h2>

          <p className="text-slate-300 max-w-md leading-7 text-sm sm:text-base mb-8">
            Join the Prediction League and forecast whether a stock will move
            higher or lower in the next trading session. Build your accuracy,
            earn league points, and climb the rankings.
          </p>

          <button
            onClick={registerPred}
            className="w-full sm:w-auto min-w-55 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-blue-500/30"
          >
            Start Prediction
          </button>
        </div>
      )}
    </div>
  );
};

export default Prediction;
