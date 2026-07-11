import React from "react";

const Home = () => {
  return (
    <div>
      <div className="bg-linear-65 from-blue-950  to-blue-400  flex justify-around">
        {/* head area */}
        <div className=" flex flex-col gap-10 p-5">
          {/* head tag */}
          <div className="flex">
            <img width={50} src="/spark.png" alt="" />
            <h1 className="text-4xl font-bold text-white">
              Investing & Trading <br /> Platform for Stocks
            </h1>
          </div>
          {/* head para */}
          <div className="flex gap-10">
            <div className="flex gap-4 items-center">
              <img src="/SideBorder.png" alt="" />
              <div className="">
                <p className="text-gray-500 text-lg font-bold">built for</p>
                <h1 className="text-white text-2xl font-bold">Super Traders</h1>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img src="/SideBorder.png" alt="" />
              <div>
                <p className="text-gray-500 text-lg font-bold">built for</p>
                <h1 className="text-white text-2xl font-bold">
                  Long Term Investors
                </h1>
              </div>
            </div>
          </div>
          {/* additional details */}
          <div className="grid grid-cols-2 gap-5">
            {/* details 1 */}
            <div className="flex gap-4">
              <img
                src="https://stock-logos.dhan.co/static-openweb/homefold-1.svg"
                alt=""
              />
              <h1 className="text-white font-bold text-xl">No Calls</h1>
            </div>
            {/* details 2 */}
            <div className="flex gap-5 ">
              <img
                src="https://stock-logos.dhan.co/static-openweb/homefold-2.svg"
                alt=""
              />
              <h1 className="text-white font-bold text-xl">
                No Trading & Investing Advice
              </h1>
            </div>
            {/* details 3 */}
            <div className="flex gap-5">
              <img
                src="https://stock-logos.dhan.co/static-openweb/homefold-3.svg"
                alt=""
              />
              <h1 className="text-white font-bold text-xl">No SMS</h1>
            </div>
            {/* details 4 */}
            <div className="flex gap-5">
              <img
                src="https://stock-logos.dhan.co/static-openweb/homefold-5.svg"
                alt=""
              />
              <h1 className="text-white font-bold text-xl">No Spam</h1>
            </div>
            {/* details 5 */}
            <div className="flex gap-5">
              <img
                src="https://stock-logos.dhan.co/static-openweb/homefold-4.svg"
                alt=""
              />
              <h1 className="text-white font-bold text-xl">
                No Relationship Managers
              </h1>
            </div>
            {/* details 6 */}
            <div className="flex gap-5">
              <img
                src="https://stock-logos.dhan.co/static-openweb/homefold-6.svg"
                alt=""
              />
              <h1 className="text-white font-bold text-xl">No Data Sharing</h1>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full lg:relative">
          <div className=" lg:absolute">
            <img width={720} src="/home-img.png" alt="" />
          </div>
        </div>
      </div>
      {/* home page second  */}
      <div className="">
        {/* vertical div 1 */}
        <div className="text-center p-5">
          <h1 className="text-3xl font-bold text-gray-600">
            Building Awesome Investing & Trading Platforms
          </h1>
        </div>
        {/* vertical div 2 */}
        <div className="flex items-center justify-around ">
          <div className="flex flex-col w-1/2 gap-5">
            <h1 className="text-4xl font-bold">Stock Analysis</h1>
            <p className="w-3/4 text-gray-600 text-lg ">
              A modern stock analysis platform built to deliver real-time market
              insights, company information, interactive charts, and financial
              news—helping users make informed investment decisions with
              confidence.
            </p>
            <button className=" bg-amber-400 w-30 text-center text-xl rounded-lg">
              Explore
            </button>
          </div>
          <div className="">
            <img width={200} src="/iphone-ipad.png" alt="" />
          </div>
        </div>
      </div>
      {/* home page 3rd scene */}
      <div className="bg-linear-65 from-purple-950  to-blue-900 ">
        {/* div 1 */}
        <div className="p-5">
          <h1 className="text-center text-4xl font-bold text-white">Why Choose Stock Analysis</h1>
        </div>
        {/* div 2 */}
        <div className="grid grid-cols-3 gap-10 p-10 text-center">
          <div className="bg-linear-60 from-orange-200 to-white flex flex-col items-center gap-10 p-4 rounded-2xl">
            <img width={50} src="/stocks-1.png" alt="" />
            <h1 className="font-bold">
              Stay updated with accurate and live stock market information.
            </h1>
          </div>
          <div className="bg-linear-60 from-indigo-950 to-purple-950 flex flex-col items-center gap-10 p-4 rounded-2xl">
            <img width={50} src="/stock-2.png" alt="" />
            <h1 className="text-white font-bold ">Analyze price movements with clean and intuitive charts.</h1>
          </div>
          <div className="bg-linear-60 from-indigo-950 to-purple-950 flex flex-col items-center gap-10 p-4 rounded-2xl">
            <img width={50} src="/news-1.png" alt="" />
            <h1 className="text-white font-bold ">Never miss important financial news and market updates.</h1>
          </div>
          <div className="bg-linear-60 from-indigo-950 to-purple-950 flex flex-col items-center gap-10 p-4 rounded-2xl">
            <img width={50} src="/search-stock.png" alt="" />
            <h1 className="text-white font-bold ">Instantly find companies, prices, and key market insights.</h1>
          </div>
          <div className="bg-linear-60 from-indigo-950 to-purple-950 flex flex-col items-center gap-10 p-4 rounded-2xl">
            <img width={50} src="/news-1.png" alt="" />
            <h1 className="text-white font-bold ">Easy-to-understand tools designed for every investor.</h1>
          </div>
          <div className="bg-linear-60 from-indigo-950 to-purple-950 flex flex-col items-center gap-10 p-4 rounded-2xl">
            <img width={50} src="/stock-2.png" alt="" />
            <h1 className="text-white font-bold ">Built for speed, accuracy, and a seamless user experience.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
