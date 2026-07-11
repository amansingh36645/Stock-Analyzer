import React from "react";
import NewsCard from "../components/NewsCard";

const News = () => {
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
          <NewsCard
            layout="horizontal"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="horizontal"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="horizontal"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
        </div>
        {/* section 1.1 */}
        <div className="grid grid-cols-3 place-items-center">
          <NewsCard
            layout="vertical"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="vertical"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="vertical"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
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
          <NewsCard
            layout="horizontal"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="horizontal"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="horizontal"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
        </div>
        {/* section 2.1 */}
        <div className="grid grid-cols-3 place-items-center">
          <NewsCard
            layout="vertical"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="vertical"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="vertical"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
        </div>
      </div>


      {/* horizontal scrolling cards */}
        <h1 className=" text-4xl font-bold p-4">Trending News</h1>
      <div className="flex gap-5 overflow-x-auto scroll-smooth p-5 horizontal-scroll mb-8">
          <NewsCard
            layout="horizontal"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="horizontal"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="horizontal"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="horizontal"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="horizontal"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          <NewsCard
            layout="horizontal"
            img={
              "https://images.unsplash.com/photo-1783657542205-d027329527d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Title will be here"}
            category={"Banking"}
            publish={"40m ago"}
          />
          
      </div>
    </div>
  );
};

export default News;
