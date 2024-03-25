import React from "react";
import { Icons } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-800 ">
      <div className="mt-10 text-white flex justify-around py-10">
        <div>
          <img src={Icons.logo} alt="" className="h-16 mb-4" />

          <p className="w-60">
            Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
            Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse
            quis faucibus urna. Suspendisse pellentesque
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-bold">Quick Links</h1>
          <nav className="list-none">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Cart</li>
            <li className="cursor-pointer">Checkout</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">My account</li>
          </nav>
        </div>

        <div>
          <h1 className="text-2xl font-bold">Quick Links</h1>
          <nav className="list-none">
            <li className="cursor-pointer">Know More</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Visit Store</li>
            <li className="cursor-pointer">Let’s Connect</li>
          </nav>
        </div>
      </div>
      <hr class="py-5 mx-10" />
      <div className="text-white flex justify-between px-24 items-center pb-3">
        <h1>Copyright © 2024 | Organic Store</h1>
        <div className="flex gap-5 text-2xl ">
          <Icons.FaFacebook />
          <Icons.FaTwitterSquare />
          <Icons.FaYoutube />
          <Icons.RiInstagramFill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
