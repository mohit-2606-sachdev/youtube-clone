import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between p-2 sticky top-0 bg-black items-center mx-5 pt-3">
      <img src={logo} alt="logo" className="w-14" />
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="search"
          className="text-center p-1 w-96 rounded-2xl outline-none"
        />
      </div>
    </div>
  );
};

export default Navbar;
