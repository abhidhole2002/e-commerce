import React from "react";
import { Icons } from "../../assets/assets";

const TwoCard = () => {
  return (
    <div>
      <div className="bg-gray-200 text-center py-10 px-7  w-64 rounded-md ">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam natus
          aliquid vel quidem impedit dolore quae molestias minima amet
          reiciendis incidunt fuga, obcaecati perferendis facere.
        </p>
        <div className="flex bg-white justify-center gap-6 py-3 items-center mx-auto my-4 rounded-lg">
          <img
            src={Icons.mainimg}
            alt=""
            className="w-10 h-10 border border-black rounded-full "
          />
          <h1 className="font-semibold">Mila Kunis</h1>
        </div>
      </div>
    </div>
  );
};

export default TwoCard;
