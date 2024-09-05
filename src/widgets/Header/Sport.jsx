import React, { useState, useCallback, useRef } from "react";
import up from "../../shared/assets/svg/up.svg";
import down from "../../shared/assets/svg/down.svg";
import useOutsideClick from "../../shared/huki/useHandle";
import { sports } from "../../shared/api/api";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sport = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const sortRef = useRef();
  const [isOpen, setIsOpen] = useOutsideClick(sortRef);
  const {t} = useTranslation()
  const handleSelect = useCallback((option) => {
    setSelectedOption(option.name); 
    setIsOpen(false);
  }, []);
  
  return (
    <div
      ref={sortRef}
      className="relative flex justify-center gap-3 text-sm text-center rounded-md cursor-pointer lg:text-lg lg:py-1"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-center py-1 gap-1 px-[5px] lg:px-5 rounded-md"
      >
        <h1 className="text-white hover:text-red-600 hover:underline">
          {t(selectedOption) || t("Спорт")}
        </h1>
        <img src={isOpen ? up : down} alt="Toggle" />
      </div>
      {isOpen && (
        <div className="absolute w-[236px] flex bg-[#1E1D1D] flex-col z-50 mt-[35%] rounded-md">
          {sports
            .filter((option) => option.name !== selectedOption)
            .map((option) => (
              <Link  to={`/zally/${option.id}`}>
                <p
                  onClick={() => handleSelect(option)}
                  className="w-full py-1 pl-8 rounded-md cursor-pointer text-start hover:bg-white hover:text-black"
                >
                  {t(`${option.name}`)}
                </p>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Sport;
