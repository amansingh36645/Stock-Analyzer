const NewsPageSkeleton = () => {
  return (
    <div className="bg-linear-to-b from-slate-100 to-white animate-pulse">

      {/* Heading 1 */}
      <div className="flex justify-center p-4">
        <div className="h-10 w-40 bg-slate-300 rounded"></div>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col gap-10">

        {/* Horizontal Cards */}
        <div className="grid grid-cols-3 place-items-center">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="w-75 h-40 bg-slate-200 rounded-xl"
            ></div>
          ))}
        </div>

        {/* Vertical Cards */}
        <div className="grid grid-cols-3 place-items-center">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="w-75 h-72 bg-slate-200 rounded-xl"
            ></div>
          ))}
        </div>

      </div>

      {/* Heading 2 */}
      <div className="flex items-center p-4 mt-10">
        <div className="h-10 w-60 bg-slate-300 rounded"></div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col gap-10">

        {/* Horizontal Cards */}
        <div className="grid grid-cols-3 place-items-center">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="w-75 h-40 bg-slate-200 rounded-xl"
            ></div>
          ))}
        </div>

        {/* Vertical Cards */}
        <div className="grid grid-cols-3 place-items-center">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="w-75 h-72 bg-slate-200 rounded-xl"
            ></div>
          ))}
        </div>

      </div>

      {/* Trending News Heading */}
      <div className="p-4 mt-10">
        <div className="h-10 w-72 bg-slate-300 rounded"></div>
      </div>

      {/* Trending Cards */}
      <div className="flex gap-5 overflow-hidden p-5">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="min-w-75 h-40 bg-slate-200 rounded-xl"
          ></div>
        ))}
      </div>

    </div>
  );
};

export default NewsPageSkeleton;