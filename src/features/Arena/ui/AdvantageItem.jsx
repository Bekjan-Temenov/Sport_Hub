import React from "react";

const AdvantageItem = ({ item, index }) => {
  return (
    <div className="flex flex-col gap-2 md:w-[30%] max-w-[378px] mx-auto  ">
      <div className="relative">
        <img
          className="w-full h-[436px] object-cover bg-cover bg-center"
          src={item.img}
          alt={item.title}
        />
        <div className="absolute bottom-0 left-0 flex items-center justify-center w-16 h-16 bg-white shadow-lg">
          <span className="absolute z-0 mt-4 text-6xl font-bold text-gray-100">
            {index + 1}
          </span>
          <span className="text-[#E41C26] font-bold z-10 text-2xl">
            {index + 1}
          </span>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="line-top-left"></div>
          <div className="line-bottom-left"></div>
        </div>
      </div>
      <h3 className="text-xl font-bold">{item.title}</h3>
      <p>{item.text}</p>
    </div>
  );
};

export default AdvantageItem;
    