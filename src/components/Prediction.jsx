import axios from "axios";
import React, { useEffect, useState } from "react";
import { log } from "three";

const Prediction = () => {
  const [points, setPoints] = useState(1000);
  const [name, setName] = useState();
  const [accuracy, setAccuracy] = useState(0);
  const [streak, setStreak] = useState(0);
  const [prediction, setPrediction] = useState(0);
  const [predictUpDown, setpredictUpDown] = useState();
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [prevPrice, setprevPrice] = useState();
  const [price, setPrice] = useState();
  const [finalPrice, setfinalPrice] = useState();
  const [register, setRegister] = useState(false);

  const stkPrice = async () => {
    let response = await axios.get(
      `https://finnhub.io/api/v1/quote?symbol=${name}&token=cremcchr01qnd5cvr330cremcchr01qnd5cvr33g`,
    );

    let data = response.data["c"];
    setprevPrice(data);
  };

  useEffect(() => {
    let stkName = ["AAPL", "NVDA", "MSFT", "AMZN", "KO", "WMT"];
    let num = Math.floor((Math.random() * 12) / 2);
    let stockName = stkName[num];
    setName(stockName);
  }, []);

  useEffect(()=>{
    stkPrice();
  },[register])

  // prediction here
  const predictStock = (direction) => {
    let obj = {
      stock: `${name}`,
      prediction: `${direction}`,
      referencePrice: `${prevPrice}`,
      predictionDate: `${new Date().toLocaleTimeString()}`,
      status: "pending",
    };
    localStorage.setItem("data", JSON.stringify(obj));
    console.log(predictUpDown);
    
  };

  // window open resgister
  const registerPred = () => {
    setRegister(true);
    localStorage.setItem("Points", `${points}`);
  };

// will start from here tomorrow

  // let jsonData = localStorage.getItem("data")
  // let data = JSON.parse(jsonData)

  // console.log(data);
  

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      {register === true ? (
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

              <div className="space-y-5">
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
                  <p className="text-gray-500 text-sm">
                    Use your market analysis to predict whether this stock will
                    open higher or lower than its current price on the next
                    trading day.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <button
                    onClick={()=>{
                      predictStock("UP")
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
                    value="UP"
                  >
                    Predict UP
                  </button>

                  <button
                    onClick={()=>{
                      predictStock("DOWN")
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
                    value="DOWN"
                  >
                    Predict DOWN
                  </button>
                </div>
              </div>
            </div>

            {/* Ongoing Prediction */}
            <div className="bg-linear-to-br from-blue-950 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-6">Ongoing Prediction</h2>

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
              </div>
            </div>
          </div>
          {/* History */}
          {/* <div className="bg-blue-500 rounded-xl p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-6">Recent Predictions</h2>

            <table className="w-full">
              <thead className="text-gray-400 border-b border-zinc-700">
                <tr>
                  <th className="text-left py-3">Stock</th>
                  <th>Prediction</th>
                  <th>Points</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="py-4">AAPL</td>
                  <td className="text-center text-green-400">UP</td>
                  <td className="text-center text-green-400">+34</td>
                  <td className="text-center">✅ Won</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="py-4">TSLA</td>
                  <td className="text-center text-red-400">DOWN</td>
                  <td className="text-center text-red-400">-30</td>
                  <td className="text-center">❌ Lost</td>
                </tr>

                <tr>
                  <td className="py-4">MSFT</td>
                  <td className="text-center text-green-400">UP</td>
                  <td className="text-center text-green-400">+18</td>
                  <td className="text-center">✅ Won</td>
                </tr>
              </tbody>
            </table>
            
          </div> */}
          <button
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition mt-5"
            onClick={(e) => {
              setRegister(false);
            }}
          >
            Minimize
          </button>
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
