import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";
import { Icons } from "../../assets/assets";
import Logout from "../../pages/Logout/Logout";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartData } = useSelector((state) => state.cart);

  const { isLogin, logout, setLogout, setdemo } =
    useContext(AppContext);

  return (
    <div className=" fixed bg-white z-0 top-0 flex justify-between w-full px-4 md:px-20 items-center py-4">
      <div className="flex items-center gap-4">
        <Link to={"/"}>
          <img
            src={Icons.logo}
            alt="logo"
            className="w-32 md:w-40 h-12 md:h-14"
          />
        </Link>
        <nav className="hidden md:flex items-center list-none gap-4">
          <Link to={"/products"}>
            <li className="cursor-pointer">Everything</li>
          </Link>
          <li className="cursor-pointer">Groceries</li>

          <li className="cursor-pointer">Juice</li>
        </nav>
      </div>
      <div className="flex gap-6">
        <nav className="hidden md:flex list-none gap-4 items-center">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </nav>
        <div className="flex items-center gap-4">
          <Link to={"/mycart"}>
            <div className="relative">
              <FaCartShopping className="text-2xl" />
              {cartData.length > 0 && (
                <h1 className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 border border-black bg-black text-white font-bold text-center w-5 h-5  flex items-center justify-center rounded-full">
                  {cartData.length}
                </h1>
              )}
            </div>
          </Link>
          {isLogin ? (
            <>
              <div
                className="cursor-pointer "
                onClick={() => {
                  setLogout(!logout);
                }}
              >
                <Icons.FaUser className="text-2xl" />
              </div>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <h1
                  className="cursor-pointer bg-black text-white px-4 py-1 rounded-sm"
                  // onClick={() => setShowLogin(!showLogin)}
                >
                  Login
                </h1>
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center md:hidden border-2 border-gray-500 px-1 py-1 rounded-md">
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
              <Link to={"/products"}>
                <li
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Everything
                </li>
              </Link>
              <li
                className="cursor-pointer"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Groceries
              </li>

              <li
                className="cursor-pointer"
                onClick={() => {
                  setdemo(true);
                }}
              >
                demo
              </li>
              <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>
                Juice
              </li>
              <li
                className=" cursor-pointer "
                onClick={() => setMenuOpen(false)}
              >
                About
              </li>
              <li
                className=" cursor-pointer "
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </li>
            </nav>
          </div>
        </div>
      )}
      {logout && <Logout />}
    </div>
  );
};

export default Navbar;
