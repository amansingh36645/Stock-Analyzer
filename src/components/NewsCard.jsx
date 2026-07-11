import React from "react";

const NewsCard = ({layout,img,title,category,publish}) => {
  return (
    <div className="shrink-0 w-75 ">
      <div className={layout === "horizontal" ? "flex flex-col gap-4" : "flex gap-5" }  >
        <img className={layout === "vertical" ? "w-24 h-24 ":""}  width={375} height={250} src={img} alt="" />
        <div className="justify-center flex flex-col">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex gap-4">
            <h1 className="text-cyan-700 font-bold">{category}</h1>
            <p className="text-gray-700">{publish}</p>
          </div>
        </div>
        <div className={layout === "horizontal" ? "w-full h-0.5 bg-gray-300" : ""}></div>
      </div>
    </div>
  );
};

export default NewsCard;
