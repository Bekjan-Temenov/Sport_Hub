import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslation } from "react-i18next";
import icon from "../../../../shared/assets/svg/inkrugok_icon.svg";
import ModalZally from "./ModalZally"

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

function InZally({ sport }) {
  const [isClicked, setIsClicked] = useState(false);
  const { t } = useTranslation();
  const handleButtonClick = () => {
    setIsClicked(true);
  };

  const handleCloseClick = () => {
    setIsClicked(false);
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
          isClicked ? "rounded-r-full" : "rounded-l-full"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${
            isClicked ? sport.inbackgroundImage : sport.backgroundImage2
          })`,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          initial={{ right: "81%" }}
          animate={{ right: isClicked ? "-3%" : "81%" }}
          transition={{ duration: 0.4 }}
          className="absolute lg:w-[22%] w-[19%] sm:w-[20%] md:w-[21%]"
          src={sport.boll}
          alt="basketball"
        />
        <motion.img
          className={`w-[21%] ${isClicked ? "hidden" : "invisible"}`}
          src={sport.boll}
        />
        {isClicked && (
          <div className="flex items-center justify-between w-full ">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={{ opacity: isClicked ? 1 : 0 }}
              transition={{ duration: 0.7 }}
              className="hidden ml-[68px] w-[80%]  gap-x-[80px] lg:grid lg:grid-cols-2 lg:block"
            >
              {zally.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mt-2 "
                >
                  <span className="font-[600] text-white border-b font-comfortaa text-md xl:text-lg lg:text-md">
                    {item}
                  </span>
                  <Link to="/gym">
                    <img
                      src={icon}
                      className="flex items-center cursor-pointer w-[29px] p-1    h-[29px] justify-center w-full h-full  bg-[#FE0404] rounded-[5px]"
                    />
                  </Link>
                </div>
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
          animate={{ opacity: isClicked ? 0 : 1 }}
          transition={{ duration: 0.7 }}
          className={`text-xl sm:text-4xl  md:text-6xl ${
            isClicked ? "hidden" : "block"
          }`}
        >
          {t("Заллы")}
        </motion.h1>
        {
          isClicked && (

        <h1
          className={`text-xl sm:text-4xl md:hidden block md:text-6xl `}
        >
          {t("Заллы")}
        </h1>
          )
        }
        <motion.button
          animate={{ opacity: isClicked ? 0 : 1 }}
          transition={{ duration: 0.7 }}
          className={`  md:py-4 md:px-7 py-2 px-3 text-xs text-center bg-[#FE0404] rounded-md hover:bg-red-700 sm:text-md md:text-2xl ${
            isClicked ? "hidden" : "block"
          }`}
          onClick={() => handleButtonClick(true)}
        >
          {t("Открыть")}
        </motion.button>
        <motion.img
          animate={{ x: isClicked ? 900 : 0 }}
          transition={{ duration: 0.5 }}
          className={`w-[21%] ${isClicked ? "invisible" : "hidden"}`}
          src={sport.boll}
        />
      </motion.div>
      {
        isClicked && (
          <ModalZally sport={sport} zally={zally}/>
        )
      }
    </div>
  );
}

export default InZally;
