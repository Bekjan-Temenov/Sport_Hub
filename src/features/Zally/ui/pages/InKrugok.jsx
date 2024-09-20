import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import icon from "../../../../shared/assets/svg/inkrugok_icon.svg";
import ModalKrugok from "./modalKrugok";

const zally = [
  "Bilimkana Arena»",
  "EL CLASICO",
  "Arsenal",
  "Afb баскетбольный клуб",
  "SEYTEK SPORT",
  "Sun City",
  "Arsenal",
  "Kyrgyzbasketball",
];

function InKrugok({ sport }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-col">
      <motion.div
        className={`relative flex items-center bg-cover mx-auto justify-between w-[90%] md:pr-[40px] pr-[20px] border-2 border-white transition-all duration-700 ease-in-out ${
          isOpen ? "rounded-r-full" : "rounded-l-full"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${
            isOpen ? sport.inbackgroundImage : sport.backgroundImage2
          })`,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          initial={{ right: "81%" }}
          animate={{ right: isOpen ? "-3%" : "81%" }}
          transition={{ duration: 0.4 }}
          className="absolute lg:w-[22%] w-[19%] sm:w-[20%] md:w-[21%] "
          src={sport.boll}
          alt="basketball"
        />
        <motion.img
          className={`w-[21%] ${isOpen ? "hidden" : "invisible"}`}
          src={sport.boll}
        />
        {isOpen && (
          <div className="flex items-center justify-between w-full ">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.7 }}
              className="hidden ml-[68px] w-[80%] gap-x-[80px] lg:grid lg:grid-cols-2 lg:block"
            >
              {zally.map((item, index) => (
                <Link to="/arena">
                  <div
                    key={index}
                    className="flex items-center justify-between mt-2 "
                  >
                    <span className="font-[600] text-white border-b font-comfortaa text-md xl:text-lg lg:text-md">
                      {item}
                    </span>
                    <button>
                      <img
                        src={icon}
                        className="flex items-center cursor-pointer w-[29px] p-1    h-[29px] justify-center w-full h-full  bg-[#FE0404] rounded-[5px]"
                      />
                    </button>
                  </div>
                </Link>
              ))}
            </motion.div>
            <button
              className="flex items-center  justify-center p-1 md:p-3 bg-[#FE0404] ml-[20px] rounded-md"
              onClick={handleCloseClick}
            >
              <ArrowBackIcon />
            </button>
          </div>
        )}
        <motion.h1
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.7 }}
          className={`text-xl sm:text-4xl md:text-6xl ${
            isOpen ? "hidden" : "block"
          }`}
        >
          Кружки
        </motion.h1>
        {isOpen && (
          <h1 className={`text-xl sm:text-4xl md:hidden block md:text-6xl `}>
            Кружки
          </h1>
        )}
        <motion.button
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.7 }}
          className={` md:py-4 md:px-7 py-2 px-3 text-xs text-center bg-[#FE0404] rounded-md hover:bg-red-700 sm:text-md md:text-2xl ${
            isOpen ? "hidden" : "block"
          }`}
          onClick={() => handleOpenClick(true)}
        >
          Открыть
        </motion.button>
        <motion.img
          animate={{ x: isOpen ? 900 : 0 }}
          transition={{ duration: 0.5 }}
          className={`w-[21%] ${isOpen ? "invisible" : "hidden"}`}
          src={sport.boll}
        />
      </motion.div>
      {isOpen && <ModalKrugok sport={sport} zally={zally} />}
    </div>
  );
}

export default InKrugok;
