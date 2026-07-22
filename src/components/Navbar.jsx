import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StockDataName } from "../context/StockName";

const Navbar = () => {
  const [stockName, setstockName] = useContext(StockDataName);

  const [inputValue, setinputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setstockName(inputValue);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  console.log(stockName);

  return (
    <header className="bg-linear-to-r from-blue-950 to-blue-700 shadow-lg">
      <nav className="  flex items-center justify-between px-8 py-5">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
            <span className="text-blue-900 font-bold text-xl">S</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">StockerHub</h1>

            <p className="text-blue-200 text-xs">Stock Analysis Platform</p>
          </div>
        </Link>

        {/* Menu */}

        <div className="flex items-center gap-10 font-medium text-white">
          <Link className="hover:text-blue-200 transition" to="/stock">
            Stocks
          </Link>

          <Link className="hover:text-blue-200 transition" to="/market">
            Markets
          </Link>

          <Link className="hover:text-blue-200 transition" to="/news">
            News
          </Link>

          <Link className="hover:text-blue-200 transition" to="/contact">
            Contact
          </Link>
        </div>

        {/* Search */}

        <div className="relative">
          <input
            value={inputValue}
            onChange={(e) => {
              setinputValue(e.target.value);
            }}
            type="text"
            placeholder="Search Stocks..."
            className="w-80 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-gray-300 px-5 py-3 outline-none focus:border-blue-300"
          />
        </div>

        {/* Buttons */}

        <div className="flex gap-4">
          <button className="text-white border border-white px-5 py-2 rounded-xl hover:bg-white hover:text-blue-900 transition">
            Login
          </button>

          <button className="bg-white text-blue-900 px-5 py-2 rounded-xl font-semibold hover:bg-blue-100 transition">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
