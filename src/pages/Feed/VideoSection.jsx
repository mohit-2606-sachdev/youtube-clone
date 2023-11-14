import React, { useEffect, useState } from "react";
import { fetchApiCall } from "../../utils/constants/fetchApiCall";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const VideoSection = ({ catgeory }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const handleApiCall = async () => {
      const { data, error } = await fetchApiCall(catgeory);
      if (data) {
        setVideos(data.items);
        console.log(data.items);
      } else {
        console.error(error);
      }
    };

    handleApiCall();
  }, [catgeory]);

  return (
    <div className="p-2">
      <div>
        <span className="text-white text-xl font-semibold">{catgeory}</span>
        <span className="text-red-500 text-xl font-semibold ms-2">videos</span>
      </div>
      <div className="grid grid-cols-3 p-2 gap-10 w-[85vw]">
        {videos.map((ele, index) => {
          return (
            <div key={index}>
              {ele.id.videoId && <VideoCard item={ele} />}
              {ele.id.channelId && <ChannelCard item={ele} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoSection;
