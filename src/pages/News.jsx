import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import NewsPageSkeleton from "../components/NewsPageSkeleton";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(false);

  const randomCategory = () => {
    let randomNum = Math.floor(Math.random() * 5);
    let arr = ["forex", "general", "crypto", "merger"];
    setCategory(arr[randomNum]);
  };

  const apiUrl = `https://finnhub.io/api/v1/news?category=${category}&token=cremcchr01qnd5cvr330cremcchr01qnd5cvr33g`;

  const fetchData = async () => {
    try {
      setLoading(true);
      let response = await axios.get(apiUrl);
      let data = response.data;
    
      setNews(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    randomCategory();
  }, []);

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="">
      {loading ? (
        <NewsPageSkeleton />
      ) : (
        <div className="bg-linear-to-b from-slate-100 to-white px-4 sm:px-6 lg:px-8 py-4">
          {/* heading 1 */}
          <div className=" ">
            <h1 className="text-center text-3xl sm:text-4xl font-bold py-4">
              News
            </h1>
          </div>
          {/* news section 1 */}
          <div className="flex flex-col gap-10">
            {/* section 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
              {news.slice(0, 3).map((e) => {
                return (
                  <div key={e.id}>
                    <NewsCard
                      layout="horizontal"
                      img={e.image}
                      title={e.headline}
                      category={e.source}
                      publish={e.datetime}
                    />
                  </div>
                );
              })}
            </div>

            {/* section 1.1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
              {news.slice(3, 6).map((e) => {
                return (
                  <div key={e.id}>
                    <NewsCard
                      layout="vertical"
                      img={e.image}
                      title={e.headline}
                      category={e.source}
                      publish={e.datetime}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* heading 2 */}
          <div className=" ">
            <h1 className="text-3xl sm:text-4xl font-bold py-4">
              Global Market
            </h1>
          </div>
          {/* news section 2 */}

          <div className="flex flex-col gap-10">
            {/* section 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
              {news.slice(6, 9).map((e, idx) => {
                return (
                  <div key={idx}>
                    <NewsCard
                      layout="horizontal"
                      img={e.image}
                      title={e.headline}
                      category={e.source}
                      publish={e.datetime}
                    />
                  </div>
                );
              })}
            </div>
            {/* section 2.1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
              {news.slice(9, 12).map((e, idx) => {
                return (
                  <div key={idx}>
                    <NewsCard
                      layout="vertical"
                      img={e.image}
                      title={e.headline}
                      category={e.source}
                      publish={e.datetime}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* horizontal scrolling cards */}
          <h1 className="text-3xl sm:text-4xl font-bold py-4">Trending News</h1>
          <div className="flex gap-5 overflow-x-auto scroll-smooth py-5 horizontal-scroll mb-8">
            {news.slice(12, 24).map((e) => {
              return (
                <div key={e.id} className="w-full flex justify-center">
                  <NewsCard
                    layout="horizontal"
                    img={e.image}
                    title={e.headline}
                    category={e.source}
                    publish={e.datetime}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
