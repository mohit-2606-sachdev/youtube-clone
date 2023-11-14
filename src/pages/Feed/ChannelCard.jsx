import React from "react";

const ChannelCard = ({ item }) => {
  return (
    <div className="text-white">
      <div className="flex justify-center items-center">
        <img
          src={item.snippet.thumbnails.medium.url}
          alt={item.snippet.title}
          className="h-[200px] w-[200px] rounded-full mt-5"
        />
      </div>
      <div className="p-2 text-center">
        <p className="mt-2 text-white">
          {item.snippet.channelTitle}{" "}
          <span className="rounded-full ms-1 text-[9px] text-slate-400 px-1 bg-slate-700">
            &#x2713;
          </span>
        </p>
      </div>
    </div>
  );
};

export default ChannelCard;
