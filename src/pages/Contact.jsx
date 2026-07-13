import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="bg-linear-to-t from-blue-800  to-blue-950 p-10 h-64 flex flex-col justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-200">
            Looking for a design partner? <br />
            You Found
          </p>
        </div>
        <div
          className="bg-gray-100 flex w-full p-5
        "
        >
          <div className="w-1/2 flex flex-col gap-5 justify-center">
            <h1 className="text-blue-950 text-4xl font-bold">
              What will be next step?
            </h1>
            <p className="font-semibold">
              You are one step closer to build your perfect product.
            </p>
            <div>
              <div className="mb-8">
                <h1 className="text-blue-950 font-bold text-xl">
                  1. Explore the Markets
                </h1>
                <p className="w-full lg:w-2/3 text-gray-600 mt-2">
                  Browse real-time stock prices, market trends, and company data
                  to stay updated with the latest movements.
                </p>
              </div>

              <div className="mb-8">
                <h1 className="text-blue-950 font-bold text-xl">
                  2. Analyze with Confidence
                </h1>
                <p className="w-full lg:w-2/3 text-gray-600 mt-2">
                  Use interactive charts, financial insights, and market news to
                  better understand every investment opportunity.
                </p>
              </div>

              <div>
                <h1 className="text-blue-950 font-bold text-xl">
                  3. Make Smarter Decisions
                </h1>
                <p className="w-full lg:w-2/3 text-gray-600 mt-2">
                  Turn reliable market information into informed decisions and
                  stay ahead with a platform designed for modern investors.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-linear-to-r from-blue-950 to-blue-700 text-white p-6">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="text-blue-100 mt-2">
                  We'll get back to you within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-5 p-8">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300 transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300 transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300 transition"
                  ></textarea>
                </div>

                <button className="bg-linear-to-r from-blue-950 to-blue-700 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] hover:shadow-xl transition duration-300 cursor-pointer">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
