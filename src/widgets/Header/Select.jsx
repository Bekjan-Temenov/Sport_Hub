import React, { useState, useCallback, useRef } from "react";
import up from "../../shared/assets/svg/up.svg";
import down from "../../shared/assets/svg/down.svg";
import useOutsideClick from "../../shared/huki/useHandle";

const Select = ({ handleChangeLang, currentLang }) => {
  const options = ["Рус", "Кыр", "Анг"];
  const [selectedOption, setSelectedOption] = useState(currentLang); // Используем currentLang

  const sortRef = useRef();
  const [isOpen, setIsOpen] = useOutsideClick(sortRef);

  const handleSelect = useCallback(
    (option) => {
      setSelectedOption(option);
      handleChangeLang(option); 
      setIsOpen(false);
    },
    [handleChangeLang]
  );

  return (
    <div
      ref={sortRef}
      className="relative flex justify-center gap-3 text-sm text-center rounded-md cursor-pointer lg:text-lg lg:py-1"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full  items-center justify-center py-1 gap-1 px-[5px] lg:px-7 border rounded-md"
      >
        <h1 className="text-white hover:text-red-500 hover:underline">
          {selectedOption}
        </h1>
        <img src={isOpen ? up : down} alt="Toggle" />
      </div>
      {isOpen && (
        <div className="absolute flex bg-[#1E1D1D] flex-col z-10 items-center justify-between w-[130%] h-[80px] borde rounded-md mt-[40px]">
          {options
            .filter((option) => option !== selectedOption)
            .map((option, index) => (
              <p
                key={index}
                onClick={() => handleSelect(option)}
                className="w-[90%] py-1 borde rounded-md cursor-pointer hover:bg-white hover:text-black"
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
