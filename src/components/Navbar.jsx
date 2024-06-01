import React, { useState } from "react";
import { Icons } from "../assets/assets";
import Login from "../pages/Login/Login";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between w-full px-4 md:px-20 items-center py-4">
      <div className="flex items-center gap-4">
        <img
          src={Icons.logo}
          alt="logo"
          className="w-32 md:w-40 h-12 md:h-14"
        />
        <nav className="hidden md:flex items-center list-none gap-4">
          <li>Everything</li>
          <li>Groceries</li>
          <li>Juice</li>
        </nav>
      </div>
      <div className="flex gap-6">
        <nav className="hidden md:flex list-none gap-4 items-center">
          <li>About</li>
          <li>Contact</li>
        </nav>
        <div className="flex items-center gap-4">
          <Icons.FaCartShopping />
          <Icons.FaUser
            className="cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>
        <div className="md:hidden">
          <FaBars
            className="cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute top-0 right-0 bg-white w-3/4 h-full shadow-lg p-4">
            <FaTimes
              className="cursor-pointer mb-4"
              onClick={() => setMenuOpen(false)}
            />
            <nav className="flex flex-col list-none gap-4">
              <li onClick={() => setMenuOpen(false)}>Everything</li>
              <li onClick={() => setMenuOpen(false)}>Groceries</li>
              <li onClick={() => setMenuOpen(false)}>Juice</li>
              <li onClick={() => setMenuOpen(false)}>About</li>
              <li onClick={() => setMenuOpen(false)}>Contact</li>
            </nav>
          </div>
        </div>
      )}

      {show && <Login />}
    </div>
  );
};

export default Navbar;
