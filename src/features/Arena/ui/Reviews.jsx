import React from "react";

const Reviews = ({ text, rating, name, photo }) => {
  return (
    <div className="lg:w-[80%] w-[100%] ">
      <div className="lg:p-6 p-3 text-white bg-[#05050599]  flex flex-col lg:gap-9 gap-4   shadow-lg">
        <p className="text-sm md:text-xs">{text}</p>
        <span className="flex text-red-500 ">{"★ ".repeat(rating)}</span>
        <div className="flex items-center ">
          <img className="w-12 h-12 mr-4 rounded-full" src={photo} />
          <div>
            <p className="font-bold">{name}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[10px]  bg-red-600"></div>
    </div>
  );
};

export default Reviews;
