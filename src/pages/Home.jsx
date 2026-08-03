import React from "react";
import { Link } from "react-router-dom";
import Particles from "../design/Particles";

const Home = () => {
  return (
    <div className="">
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 h-full w-full"
          
        >
          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        {/* ================= HERO SECTION ================= */}

        <section className="relative z-10 min-h-screen flex items-center lg:items-center pt-28 pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-10 sm:py-14 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left */}

            <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-6 text-center lg:text-left items-center lg:items-start">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <img src="/spark.png" className="w-10 lg:w-14" alt="" />

                <p className="uppercase tracking-widest text-blue-200 font-semibold text-xs sm:text-sm">
                  Smart Investing Platform
                </p>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Analyze Stocks
                <br />
                Like a Professional.
              </h1>

              <p className="text-blue-100 text-base lg:text-lg leading-7 lg:leading-8 w-full lg:w-4/5">
                Discover market trends, analyze company fundamentals, explore
                financial news, and make better investment decisions—all from
                one modern dashboard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/stock"
                  className="bg-yellow-400 px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition text-center"
                >
                  Explore Stocks
                </Link>

                <Link
                  to="/market"
                  className="border border-white px-8 py-4 rounded-xl text-white hover:bg-white hover:text-blue-900 transition text-center"
                >
                  View Markets
                </Link>
              </div>

              {/* Built For */}

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 mt-4 w-full">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 lg:p-5 flex items-center gap-4 flex-1">
                  <img src="/SideBorder.png" className="h-10 lg:h-12" />

                  <div>
                    <p className="text-blue-200 text-xs lg:text-sm">
                      Built for
                    </p>

                    <h1 className="text-white font-bold text-lg lg:text-xl">
                      Active Traders
                    </h1>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 lg:p-5 flex items-center gap-4 flex-1">
                  <img src="/SideBorder.png" className="h-10 lg:h-12" />

                  <div>
                    <p className="text-blue-200 text-xs lg:text-sm">
                      Built for
                    </p>

                    <h1 className="text-white font-bold text-lg lg:text-xl">
                      Investors & Traders
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/laptop-phone.png"
                className="w-full max-w-70 sm:max-w-md lg:max-w-2xl"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#F5F7FB] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            <div className="bg-white rounded-3xl shadow-lg p-6 lg:p-8 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900">
                500+
              </h1>

              <p className="text-gray-500 mt-3 text-sm lg:text-base">
                Stocks Covered
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 lg:p-8 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900">
                1000+
              </h1>

              <p className="text-gray-500 mt-3 text-sm lg:text-base">
                Daily News
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 lg:p-8 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900">
                24/7
              </h1>

              <p className="text-gray-500 mt-3 text-sm lg:text-base">
                Market Updates
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 lg:p-8 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900">
                99.9%
              </h1>

              <p className="text-gray-500 mt-3 text-sm lg:text-base">
                Reliable Data
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FEATURE SECTION ================= */}

      <section className="bg-[#F7F9FC] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-0">
          <div className="text-center mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950">
              Everything You Need For Smarter Investing
            </h1>

            <p className="text-gray-500 text-base lg:text-xl mt-5">
              Powerful tools built for traders and long-term investors.
            </p>
          </div>

          {/* Feature 1 */}

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 mb-20 lg:mb-28">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/iphone-ipad.png"
                className="w-64 sm:w-80 lg:w-[320px] mx-auto"
                alt=""
              />
            </div>

            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold mb-4">
                Stock Analysis
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mt-3">
                Analyze Stocks Like a Professional
              </h1>

              <p className="text-gray-600 leading-7 lg:leading-8 text-base lg:text-lg">
                Get company fundamentals, financial ratios, historical
                performance, price movements, and interactive charts in one
                place.
              </p>

              <Link
                to="/stock"
                className="bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
              >
                Explore Stocks
              </Link>
            </div>
          </div>

          {/* Feature 2 */}

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0">
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
                Financial News
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mt-5">
                Stay Updated With Live Market News
              </h1>

              <p className="text-gray-600 leading-7 lg:leading-8 text-base lg:text-lg">
                Read the latest financial news, earnings reports, market
                updates, and global events affecting your favorite stocks.
              </p>

              <Link
                to="/news"
                className="bg-orange-400 text-white px-8 py-4 rounded-xl hover:bg-orange-500 transition"
              >
                Explore News
              </Link>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/news-laptop.png"
                className="w-full max-w-xs sm:max-w-md lg:max-w-xl"
                alt="Laptop Mockup Success - Marketing@pngkey.com"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-linear-to-b from-blue-950 to-blue-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-0">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Why Choose Stock Analysis
            </h1>

            <p className="text-blue-100 text-base lg:text-xl mt-6">
              Built with simplicity, speed and accuracy in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-14 lg:mt-20">
            {/* Card */}

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all">
              <img src="/stocks-1.png" className="w-16" alt="" />

              <h1 className="text-2xl font-bold text-blue-950 mt-6">
                Live Market Data
              </h1>

              <p className="text-gray-600 mt-4 leading-7">
                Access real-time stock prices and market movements instantly.
              </p>
            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all">
              <img src="/stock-2.png" className="w-16" alt="" />

              <h1 className="text-2xl font-bold text-blue-950 mt-6">
                Interactive Charts
              </h1>

              <p className="text-gray-600 mt-4 leading-7">
                Visualize historical trends and analyze market performance
                effortlessly.
              </p>
            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all">
              <img src="/news-1.png" className="w-16" alt="" />

              <h1 className="text-2xl font-bold text-blue-950 mt-6">
                Latest News
              </h1>

              <p className="text-gray-600 mt-4 leading-7">
                Stay informed with breaking financial news and company
                announcements.
              </p>
            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/light-on--v1.png"
                alt="light-on--v1"
              />

              <h1 className="text-2xl font-bold text-blue-950 mt-6">
                Smart Search
              </h1>

              <p className="text-gray-600 mt-4 leading-7">
                Quickly search companies, ETFs, indices and market sectors.
              </p>
            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all">
              <img src="/newbie.png" className="w-16" alt="" />

              <h1 className="text-2xl font-bold text-blue-950 mt-6">
                Beginner Friendly
              </h1>

              <p className="text-gray-600 mt-4 leading-7">
                Clean interface designed for both beginners and experienced
                investors.
              </p>
            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all">
              <img src="/speedometer.png" className="w-16" alt="" />

              <h1 className="text-2xl font-bold text-blue-950 mt-6">
                Fast Performance
              </h1>

              <p className="text-gray-600 mt-4 leading-7">
                Optimized for speed, responsiveness, and a seamless user
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="bg-linear-to-r from-blue-950 via-blue-900 to-blue-700 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 py-10 lg:py-16 gap-10 lg:gap-0">
              {/* Left */}

              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold">
                  Start Today
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mt-6 leading-tight">
                  Smarter Investing
                  <br />
                  Starts Here.
                </h1>

                <p className="text-gray-600 text-base lg:text-lg leading-7 lg:leading-8 mt-6 w-full lg:w-4/5">
                  Explore stocks, analyze market trends, follow financial news,
                  and make informed investment decisions with our modern stock
                  analysis platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 justify-center lg:justify-start">
                  <Link
                    to="/stock"
                    className="bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition duration-300 text-center"
                  >
                    Explore Stocks
                  </Link>

                  <Link
                    to="/news"
                    className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-xl hover:bg-blue-900 hover:text-white transition duration-300 text-center"
                  >
                    Latest News
                  </Link>
                </div>
              </div>

              {/* Right */}

              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="/iphone-1.png"
                  className="w-48 sm:w-56 lg:w-50"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}

      <section className="bg-[#071B4A] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto text-center px-5 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Ready to Take Control of Your Investments?
          </h1>

          <p className="text-blue-200 text-base lg:text-lg mt-6 mb-8 w-full lg:w-2/3 mx-auto leading-7 lg:leading-8">
            Discover real-time stock analysis, market insights, financial news,
            and powerful tools designed to help you invest with confidence.
          </p>

          <Link className="inline-block bg-yellow-400 text-blue-950 font-bold px-8 lg:px-10 py-4 rounded-xl hover:scale-105 transition duration-300">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
