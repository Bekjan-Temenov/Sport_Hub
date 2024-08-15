import React, { useState, useCallback } from "react";
import up from "../../shared/assets/svg/up.svg";
import down from "../../shared/assets/svg/down.svg";

const Select = () => {
  const options = ["Рус", "Кыр", "Анг"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = useCallback((option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }, []);

  return (
    <div className="relative flex items-center gap-3 text-sm text-center rounded-md cursor-pointer lg:text-lg lg:py-1">
      <div onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-center   py-1 gap-1 px-[5px] lg:px-5 border rounded-md">
        <h1 className="text-white">{selectedOption}</h1>
        <img src={isOpen ? up : down} alt="Toggle" />
      </div>
      {isOpen && (
        <div className="absolute flex bg-black flex-col z-10  items-center justify-between w-full h-[80px] border rounded-md mt-[125px]">
          {options
            .filter((option) => option !== selectedOption)
            .map((option, index) => (
              <p 
                key={index}
                onClick={() => handleSelect(option)}
                className="w-full py-1 border rounded-md cursor-pointer hover:bg-white hover:text-black"
              >
                {option}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};

export default Select;
