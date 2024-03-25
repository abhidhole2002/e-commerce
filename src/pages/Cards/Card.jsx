import React from "react";
import { Icons } from "../../assets/assets";
const Card = ({ icon: Icon, title, info }) => {
  return (
    <div className="flex items-center gap-5 bg-gray-500 bg-opacity-70 px-4 py-8  rounded-md">
      <div>
        <Icon className="text-5xl text-green-600" />
      </div>
      <div>
        <h1 className="text-lg font-bold">{title}</h1>
        <h1 className="sm text-gray-800 font-semibold">{info}</h1>
      </div>
    </div>
  );
};

export default Card;
