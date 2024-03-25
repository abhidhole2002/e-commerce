import React, { useState } from "react";
import { Icons } from "../assets/assets";
import Login from "../pages/Login/Login";
const Navbar = () => {
  const [show, Setshow] = useState(false);
  return (
    <div className="flex justify-between w-full px-20 items-center py-4">
      <div className="flex gap-4">
        <img src={Icons.logo} alt="" className="w-40 h-14" />
        <nav className="flex items-center list-none gap-4">
          <li>Everything</li>
          <li>Groceries</li>
          <li>Juice</li>
        </nav>
      </div>
      <div className="flex gap-6">
        <nav className="flex list-none gap-4 items-center">
          <li>About</li>
          <li>Contact</li>
        </nav>
        <div className="flex items-center gap-4">
          <Icons.FaCartShopping />
          <Icons.FaUser className="cursor-pointer" onClick={() => Setshow(!show)} />
        </div>
      </div>

      {show ? <Login /> : <></>}
    </div>
  );
};

export default Navbar;
