import React from "react";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsCard from "./components/NewsCard";
import { Routes, Route } from "react-router-dom";
import Market from "./pages/Market";
import News from "./pages/News";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/market" element={<Market />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
