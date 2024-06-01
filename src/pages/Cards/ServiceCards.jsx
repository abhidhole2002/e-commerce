import React from "react";
import Card from "./Card";
import { Icons } from "../../assets/assets";

const ServieCards = () => {
  return (
    <div className="bg-gray-800 py-10 sm:px-10 md:px-12 w-full">
      <div className="flex flex-col lg:flex-row lg:gap-4 md:gap-6 items-center justify-center">
        <div className="mb-6 lg:mb-0">
          <Card
            icon={Icons.MdLocalShipping}
            title="Free shipping"
            info="Above $5 only"
          />
        </div>
        <div className="mb-6 lg:mb-0">
          <Card
            icon={Icons.GrCertificate}
            title="Certified Products"
            info="Quality guaranteed"
          />
        </div>
        <div className="mb-6 lg:mb-0">
          <Card
            icon={Icons.FaRegMoneyBillAlt}
            title="Money Back"
            info="30 days guarantee"
          />
        </div>
        <div className="mb-6 lg:mb-0">
          <Card
            icon={Icons.RiRecycleFill}
            title="Eco Friendly"
            info="100% recyclable"
          />
        </div>
      </div>
    </div>
  );
};

export default ServieCards;
