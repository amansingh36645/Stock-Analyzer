import React from "react";

const Home = () => {
  return (
    <div>
      <div className="bg-linear-65 from-blue-950  to-blue-400  flex justify-around ">
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
        <div className="">
          <div className="">
            <img width={720} src="/home-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
