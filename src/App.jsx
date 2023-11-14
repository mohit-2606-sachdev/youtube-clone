import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/common/Navbar";
import Feed from "./pages/Feed/index";
import VideoDetail from "./pages/VideoDetail/index";
import ChannelDetail from "./pages/ChannelDetail/index";
import SearchFeed from "./pages/SearchFeed/index";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="bg-black w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
