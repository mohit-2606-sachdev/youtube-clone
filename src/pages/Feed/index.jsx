import React, { useState } from "react";
import Sidebar from "./Sidebar";
import VideoSection from "./VideoSection";

const Feed = () => {
  const [catgeory, setCatgeory] = useState("New");

  return (
    <div className="flex">
      <Sidebar setCatgeory={setCatgeory} catgeory={catgeory} />
      <VideoSection catgeory={catgeory} />
    </div>
  );
};

export default Feed;
