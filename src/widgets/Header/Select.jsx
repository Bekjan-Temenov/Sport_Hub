import React, { useState, useCallback } from "react";
import up from "../../shared/assets/up.svg";
import down from "../../shared/assets/down.svg";

const Select = () => {
  const options = ["Рус", "Кыр", "Анг"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = useCallback((option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }, []);

  return (
    <div className="relative flex items-center text-sm text-center rounded-md cursor-pointer lg:text-lg lg:py-1">
      <div onClick={() => setIsOpen(!isOpen)} className="flex w-full py-1 gap-1 px-[5px] lg:px-5 border rounded-md">
        <h1 className="text-white">{selectedOption}</h1>
        <img src={isOpen ? up : down} alt="Toggle" />
      </div>
      {isOpen && (
        <div className="absolute flex flex-col items-center justify-between w-full h-[80px] border rounded-md mt-11">
          {options
            .filter((option) => option !== selectedOption)
            .map((option, index) => (
              <p 
                key={index}
                onClick={() => handleSelect(option)}
                className="w-full py-1 rounded-md cursor-pointer hover:bg-white hover:text-black"
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
