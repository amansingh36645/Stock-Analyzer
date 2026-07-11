import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-linear-65 from-blue-950  to-blue-400 h-full">
      {/* navbar section */}
      <nav className="flex justify-between items-center p-4">
        <div className="logo">
          <img src="" alt="" />
          <Link to="/">
          <h1>LoGo</h1>
          </Link>
        </div>
        <div className="menu">
          <ul className="flex gap-10">
            <Link to="/stock">Stocks</Link>
            <Link to="/market">Markets</Link>
            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
        <div className="search bg-transparent">
          <input
            className="p-1 backdrop-blur-lg bg-white/20 border rounded "
            type="text"
            placeholder="Search Stocks ,ETF, MF..."
          />
        </div>
        <div className="login">
          <div className="btn flex gap-4">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
