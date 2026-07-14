import React from "react";

const NewsCard = ({ layout, img, title, category, publish }) => {
  return (
    <div className="shrink-0 w-80 group cursor-pointer ">
      <div
        className={
          layout === "horizontal"
            ? "flex flex-col gap-4"
            : "flex gap-5 items-start"
        }
      >
        {/* Image */}
        <img
          src={img}
          alt={title}
          className={
            layout === "vertical"
              ? "w-28 h-28 rounded-xl object-cover group-hover:scale-105 transition duration-300"
              : "w-full h-52 rounded-2xl object-cover group-hover:scale-105 transition duration-300"
          }
        />

        {/* Content */}
        <div className="flex flex-col justify-between flex-1">
          {/* Category */}
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
            {category}
          </span>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mt-3 group-hover:text-blue-800 transition line-clamp-2">
            {title}
          </h3>

          {/* Author & Time */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <span>{publish}</span>
          </div>
        </div>

        {/* Divider only for horizontal layout */}
        {layout === "horizontal" && (
          <div className="w-full h-px bg-gray-200 mt-2"></div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
