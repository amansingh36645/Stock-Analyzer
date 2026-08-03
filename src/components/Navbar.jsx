import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { StockDataName } from "../context/StockName";

const Navbar = () => {
  const [stockName, setstockName] = useContext(StockDataName);
  const [inputValue, setinputValue] = useState("IBM");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setstockName(inputValue);
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <header className="bg-linear-to-r from-blue-950 to-blue-700 shadow-lg sticky top-0 z-50 w-full">
      <nav className="flex items-center justify-between px-6 lg:px-8 py-5">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center">
            <span className="text-blue-900 font-bold text-xl">S</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">Market Pulse</h1>

            <p className="text-blue-200 text-xs">Stock Analysis Platform</p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-10 font-medium text-white">
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

        {/* Desktop Search */}

        <div className="hidden lg:block relative">
          <input
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
            type="text"
            placeholder="Search Stocks..."
            className="w-80 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-gray-300 px-5 py-3 outline-none focus:border-blue-300"
          />
        </div>

        {/* Mobile Hamburger */}

        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={30} />
        </button>
      </nav>

      {/* Overlay */}

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Mobile Sidebar */}

      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-blue-950 z-50 shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}

        <div className="flex justify-end p-5">
          <button onClick={() => setMenuOpen(false)}>
            <X size={30} className="text-white" />
          </button>
        </div>

        {/* Links */}

        <div className="flex flex-col gap-6 px-6 text-white text-lg font-medium">
          <Link onClick={() => setMenuOpen(false)} to="/stock">
            Stocks
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/market">
            Markets
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/news">
            News
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/contact">
            Contact
          </Link>

          {/* Search */}

          <div className="pt-4 border-t border-white/20">
            <input
              value={inputValue}
              onChange={(e) => setinputValue(e.target.value)}
              type="text"
              placeholder="Search Stocks..."
              className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-300 px-4 py-3 outline-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
