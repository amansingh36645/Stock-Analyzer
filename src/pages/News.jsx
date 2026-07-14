import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState();

  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=675abaf9746748c399017b75b522fa1a`;

  const numberIs = () => {
    let randomNum = Math.floor(Math.random() * 5);
    let arr = ["business", "general", "science", "technology", "entertainment"];
    setCategory(arr[randomNum]);    
  };

  const fetchData = async () => {
    try {
      numberIs();
      let response = await axios.get(apiUrl);
      let data = response.data.articles;
      setNews(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div>
      {/* heading 1 */}
      <div className=" ">
        <h1 className="text-center text-4xl font-bold p-4">News</h1>
      </div>
      {/* news section 1 */}
      <div className="flex flex-col gap-10">
        {/* section 1 */}
        <div className="grid grid-cols-3 place-items-center">
          {news.slice(0, 3).map((e, idx) => {
            return (
              <div key={idx}>
                <NewsCard
                  layout="horizontal"
                  img={e.urlToImage}
                  title={e.title}
                  category={e.source.name}
                  publish={e.publishedAt}
                />
              </div>
            );
          })}
        </div>

        {/* section 1.1 */}
        <div className="grid grid-cols-3 place-items-center">
          {news.slice(3, 6).map((e, idx) => {
            return (
              <div key={idx}>
                <NewsCard
                  layout="vertical"
                  img={e.urlToImage}
                  title={e.title}
                  category={e.source.name}
                  publish={e.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* heading 2 */}
      <div className=" ">
        <h1 className=" text-4xl font-bold p-4">Global Market</h1>
      </div>
      {/* news section 2 */}

      <div className="flex flex-col gap-10">
        {/* section 2 */}
        <div className="grid grid-cols-3 place-items-center">
          {news.slice(6, 9).map((e, idx) => {
            return (
              <div key={idx}>
                <NewsCard
                  layout="horizontal"
                  img={e.urlToImage}
                  title={e.title}
                  category={e.source.name}
                  publish={e.publishedAt}
                />
              </div>
            );
          })}
        </div>
        {/* section 2.1 */}
        <div className="grid grid-cols-3 place-items-center">
          {news.slice(9, 12).map((e, idx) => {
            return (
              <div key={idx}>
                <NewsCard
                  layout="vertical"
                  img={e.urlToImage}
                  title={e.title}
                  category={e.source.name}
                  publish={e.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* horizontal scrolling cards */}
      <h1 className=" text-4xl font-bold p-4">Trending News</h1>
      <div className="flex gap-5 overflow-x-auto scroll-smooth p-5 horizontal-scroll mb-8">
        {news.slice(12, 24).map((e, idx) => {
          return (
            <div key={idx}>
              <NewsCard
                layout="horizontal"
                img={e.urlToImage}
                title={e.title}
                category={e.source.name}
                publish={e.publishedAt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
