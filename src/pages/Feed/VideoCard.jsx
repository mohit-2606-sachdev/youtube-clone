import React from "react";

const VideoCard = ({ item }) => {
  return (
    <div className="text-white bg-gray-950">
      <img
        src={item.snippet.thumbnails.medium.url}
        alt={item.snippet.title}
        className="h-[220px] w-[420px]"
      />
      <div className="p-2 ">
        <p>{item.snippet.title}</p>
        <p className="mt-2 text-xs text-slate-400">
          {item.snippet.channelTitle}{" "}
          <span className="rounded-full ms-1 text-[9px] text-slate-400 px-1 bg-slate-700">
            &#x2713;
          </span>
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
