import React from "react";
import { FaHome } from "react-icons/fa";
import { BsCode } from "react-icons/bs";
import { RiMovie2Fill } from "react-icons/ri";
import { IoMdMusicalNote } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import { FaMicrophone } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { GiLargeDress } from "react-icons/gi";
import { FaToolbox } from "react-icons/fa6";

const Sidebar = ({ setCatgeory, catgeory }) => {
  let arr = [
    { name: "New", icon: <FaHome /> },
    { name: "JS Mastery", icon: <BsCode /> },
    { name: "ReactJS", icon: <BsCode /> },
    { name: "NextJS", icon: <BsCode /> },
    { name: "Music", icon: <IoMdMusicalNote /> },
    { name: "Education", icon: <GiNotebook /> },
    { name: "Podcast", icon: <FaMicrophone /> },
    { name: "Movie", icon: <RiMovie2Fill /> },
    { name: "Gaming", icon: <IoLogoGameControllerB /> },
    { name: "Live", icon: <PiTelevisionSimpleFill /> },
    { name: "Sport", icon: <MdOutlineSportsBasketball /> },
    { name: "Fashion", icon: <GiLargeDress /> },
    { name: "Beauty", icon: <FaToolbox /> },
  ];

  return (
    <div className="flex md:flex-col md:w-44 md:h-[92vh] bg-black border-r-[1px] sticky top-16 border-slate-800 overflow-y-auto">
      {arr.map((ele, index) => {
        return (
          <div
            key={index}
            className={`p-1 px-4 mx-3 my-2  rounded-2xl hover:bg-red-700 ${
              catgeory === ele.name ? "bg-red-700" : ""
            } duration-150 cursor-pointer group  flex items-center`}
            onClick={() => setCatgeory(ele.name)}
          >
            <span
              className={`group-hover:text-white ${
                catgeory === ele.name ? "text-white" : "text-red-700"
              } `}
            >
              {ele.icon}
            </span>
            <span className="ms-2 text-white">{ele.name}</span>
          </div>
        );
      })}
      <div className="text-white text-xs text-center mt-2">
        Copyright 2023 JSM Media
      </div>
    </div>
  );
};

export default Sidebar;
