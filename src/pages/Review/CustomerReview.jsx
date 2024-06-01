import React from "react";
import { Icons } from "../../assets/assets";
import TwoCard from "./TwoCard";

const CustomerReview = () => {
  return (
    <>
      <div className="text-center py-10">
        <h1 className="text-3xl font-semibold">Customers Reviews</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center  py-10 w-full justify-center gap-6">
        <TwoCard />
        <div className="bg-white lg:-mt-10 w-80 lg:w-80 shadow-xl text-center py-24 px-10 rounded-md mx-4 sm:mx-0 border ">
          <p className="text-xl font-bold mb-6">
            Deal Of The Day 15% Off On All Vegetables!
          </p>
          <p className="mb-6">
            I am text block. Click edit button to change this text.
          </p>
          <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-sm flex items-center gap-2 mx-auto">
            SHOP NOW
            <Icons.FaArrowRight />
          </button>
        </div>
        <TwoCard />
      </div>
    </>
  );
};

export default CustomerReview;
