import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-700 flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        {/* Error Code */}
        <h1 className="text-[140px] md:text-[220px] font-extrabold text-white/10 leading-none">
          404
        </h1>

        {/* Main Content */}
        <div className="-mt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stock Not Found 📉
          </h2>

          <p className="text-lg text-blue-100 max-w-xl mx-auto leading-8">
            The page you're looking for seems to have crashed harder than a bad
            trading day. Don't worry, the market is still open.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
            <Link
              to="/"
              className="px-8 py-4 bg-white text-blue-950 font-bold rounded-xl hover:scale-105 transition"
            >
              Back to Home
            </Link>

            <Link
              to="/stock"
              className="px-8 py-4 border border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-950 transition"
            >
              Explore Stocks
            </Link>
          </div>

          {/* Fake Stock Card */}
          <div className="mt-16 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex justify-between">
              <h3 className="text-white font-bold text-xl">PAGE404</h3>

              <span className="text-red-400 font-bold">-100%</span>
            </div>

            <p className="text-gray-300 mt-2">
              Requested page delisted from the exchange.
            </p>

            <div className="mt-4 h-2 bg-red-500 rounded-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
