// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import Container from "../../../../shared/helpers/Container";
// import ModalKrugok from "./modalKrugok";

// const zally = [
//   "Билимкана арена",
//   "Afb баскетбольный клуб",
//   "Kyrgyzbasketball",
//   "3x3Kyrgyzstan",

// ];

// function InKrugok() {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const sport = JSON.parse(decodeURIComponent(queryParams.get("sport")));

//   if (!sport) {
//     return <p>Data not found</p>;
//   }
//   return (
//     <Container>
//       {sport ? (
//         <div>
//           <div
//             className="relative my-8 text-white flex items-center bg-cover mx-auto rounded-r-full justify-between w-[90%] rounded-l-md md:pl-[40px] pl-[20px] border-2 border-white"
//             style={{
//               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${sport.inbackgroundImage})`,
//             }}
//           >
//             <div className="flex flex-col   hidden lg:block w-[40%]">
//               {zally.map((item, index) => (
//                 <div key={index} className="flex items-center justify-between mt-2 ">
//                   <span className="text-lg font-medium text-white border-b">
//                     {item}
//                   </span>
//                   <Link to="/arena">
//                     <button className="flex items-center justify-center w-8 h-8 ml-4 bg-red-600 rounded-md">
//                       <ArrowForwardIcon />
//                     </button>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//             <Link to={`/zally/${sport.id}`}>
//               <button className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-md">
//                 <ArrowBackIcon />
//               </button>
//             </Link>
//             <h1 className="block text-2xl md:hidden">{sport.name}</h1>
//             <img className="invisible w-[21%]" src={sport.boll} />
//             <img
//               className="absolute lg:w-[22%] w-[19%] sm:w-[20%] md:w-[21%] right-[-3%]"
//               src={sport.boll}
//               alt="basketball"
//             />
//           </div>
//           <ModalKrugok zally={zally}/>
//         </div>
//       ) : (
//         <p className="text-white">Loading...</p>
//       )}
//     </Container>
//   );
// }
// export default InKrugok;
import React from "react";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const zally = [
  "EL CLASICO",
  "Arsenal",
  "Afb баскетбольный клуб",
  "Bilimkana Arena»",
  "SEYTEK SPORT",
  "Sun City",
  "Arsenal",
  "Kyrgyzbasketball",
];

function InKrugok({ sport, isOpen, handleOpenClick }) {
  
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
    <motion.div
      className={`relative flex items-center bg-cover mx-auto justify-between w-[90%]  md:pr-[40px] pr-[20px] border-2 border-white ${
        isOpen ? " rounded-r-full " : " rounded-l-full" 
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${isOpen ? sport.inbackgroundImage : sport.backgroundImage2})`,
      }}  
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        animate={{ x: isOpen ? 900 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute lg:w-[22%] w-[19%] sm:w-[20%] md:w-[21%] left-[-3%]"
        src={sport.boll}
        alt="basketball"
      />
      <motion.img
        animate={{ x: isOpen ? 900 : 0 }}
        transition={{ duration: 0.5 }}
        className={`w-[21%]   ${isOpen ? "hidden" :"invisible"}`}
        src={sport.boll}
      />
      {isOpen && (
        <div div className="flex items-center justify-between w-full ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="hidden   ml-[68px]  w-[90%] gap-x-[80px] lg:grid lg:grid-cols-2 lg:block "
          >
            {zally.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mt-2 "
              >
                <span className="font-medium text-white border-b text-md xl:text-lg lg:text-md">
                  {item}
                </span>
                <Link to="/arena">
                  <button>
                    <ArrowForwardIcon className="flex items-center justify-center ml-4 bg-[#FE0404] rounded-md" />
                  </button>
                </Link>
              </div>
            ))}
          </motion.div>
          <button 
          
          className="flex items-center justify-center p-3 bg-[#FE0404] ml-[20px] rounded-md">
            <ArrowBackIcon />
          </button>
        </div>
      )}
      <motion.h1
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className={`text-xl sm:text-4xl  md:text-6xl ${
          isOpen ? "hidden" : "block"
        }`}
      >
        Кружки
      </motion.h1>
      <motion.button
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        onClick={handleOpenClick}
        className={`p-5 text-sm  text-center bg-[#FE0404] rounded-md hover:bg-red-700 sm:text-md md:text-2xl ${
          isOpen ? "hidden" : "block"
        }`}
      >
        Открыть
      </motion.button>
      <motion.img
        animate={{ x: isOpen ? 900 : 0 }}
        transition={{ duration: 0.5 }}
        className={`w-[21%]   ${isOpen ? "invisible" :"hidden"}`}
        src={sport.boll}
      />
    </motion.div>
  );
}

export default InKrugok;
