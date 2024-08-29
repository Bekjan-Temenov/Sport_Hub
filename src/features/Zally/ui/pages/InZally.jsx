// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import Container from "../../../../shared/helpers/Container";
// import ModalZally from "./ModalZally";

// const zally = [
//   "EL CLASICO",
//   "Arsenal",
//   "Afb баскетбольный клуб",
//   "Bilimkana Arena»",
//   "SEYTEK SPORT",
//   "Sun City",
//   "Arsenal",
//   "Kyrgyzbasketball",
//   "Top Ordo",
//   "Билимкана арена",
//   "Arsenal",
//   "3x3Kyrgyzstan",
// ];

// function InZally() {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const sport = JSON.parse(decodeURIComponent(queryParams.get("sport")));

//   if (!sport) {
//     return <p>Data not found</p>;
//   }

//   return (
//     <Container>
//       <div
//         className="relative my-8 py-2 text-white flex  items-center bg-cover mx-auto rounded-r-full justify-between w-[90%] rounded-l-md md:pl-[40px] pl-[20px] border-2 border-white "
//         style={{
//           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${sport.inbackgroundImage2})`,
//         }}
//       >
//         <div className="hidden lg:grid lg:grid-cols-2 lg:block ">
//           {zally.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between mt-2 mr-9"
//             >
//               <span className="font-medium text-white border-b text-md xl:text-lg lg:text-md">
//                 {item}
//               </span>
//               <Link to="/arena">
//                 <button>
//                   <ArrowForwardIcon className="flex items-center justify-center ml-4 bg-red-600 rounded-md" />
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//         <Link to={`/zally/${sport.id}`}>
//           <button>
//             <ArrowBackIcon className="flex items-center justify-center w-5 h-5 bg-red-600 rounded-md sm:w-8 sm:h-8" />
//           </button>
//         </Link>
//         <h1 className="block text-2xl lg:hidden">{sport.name}</h1>
//         <img className="invisible w-[21%]" src={sport.boll} alt="" />
//         <img
//           className="absolute lg:w-[22%] w-[25%] sm:w-[20%] md:w-[21%] right-[-3%]"
//           src={sport.boll}
//           alt=""
//         />
//       </div>
//       <ModalZally zally={zally} />
//     </Container>
//   );
// }
// export default InZally;
import React from "react";
import { motion } from "framer-motion";

function InZally({ isClicked, handleButtonClick, sport }) {
  return (
    <div>
      <motion.div
        className="relative flex items-center bg-cover mx-auto rounded-l-full justify-between w-[90%] rounded-r-md md:pr-[40px] pr-[20px] border-2 border-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${sport.backgroundImage})`,
        }}
      >
        <motion.img
          initial={{ x: 0 }}
          animate={{ x: isClicked ? 1000 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute lg:w-[22%] w-[19%] sm:w-[20%] md:w-[21%] left-[-3%]"
          src={sport.boll}
          alt="basketball"
        />
        <img className="invisible w-[21%]" src={sport.boll} />
        <motion.h1
          animate={{ opacity: isClicked ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="text-xl sm:text-4xl md:text-6xl"
        >
          Залы
        </motion.h1>
        <motion.button
          animate={{ opacity: isClicked ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleButtonClick}
          className="p-5 text-sm text-center bg-[#FE0404] rounded-md hover:bg-red-700 sm:text-md md:text-2xl"
        >
          Открыть
        </motion.button>
      </motion.div>
    </div>
  );
}

export default InZally;
