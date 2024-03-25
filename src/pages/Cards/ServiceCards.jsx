import React from "react";
import Card from "./Card";
import { Icons } from "../../assets/assets";

const ServieCards = () => {
  return (
    <div className=" bg-gray-800 py-10">
      <div className="flex  justify-center gap-4 md:gap-6 lg:gap-8">
        <Card
          icon={Icons.MdLocalShipping}
          title="Free shipping"
          info="Above $5 only"
        />
        <Card
          icon={Icons.GrCertificate}
          title="Free shipping"
          info="Above $5 only"
        />
        <Card
          icon={Icons.FaRegMoneyBillAlt}
          title="Free shipping"
          info="Above $5 only"
        />
        <Card
          icon={Icons.RiRecycleFill}
          title="Free shipping"
          info="Above $5 only"
        />
      </div>
    </div>
  );
};

export default ServieCards;
