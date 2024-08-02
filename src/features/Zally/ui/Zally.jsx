import React from "react";
import Container from "../../../shared/helpers/Container";
import basketball from "../../../shared/assets/png/basketball.png";
import krugok from "../../../shared/assets/png/Basket_Krugok.png"
import sports from "../../../shared/assets/png/Basket_Sports.png" 

function Zally() {
  return (
    <Container>
      <div className="flex flex-col gap-[40px] text-white mb-[100px]">
        <li className="text-4xl">Баскетбол</li>
        <div
          className="relative flex items-center bg-cover mx-auto rounded-l-full justify-between w-[90%] md:border-2 border rounded-r-md h-full pr-[20px]"
          style={{
            backgroundImage: `url(${krugok})`,
          }}
        >
          <img
            className="ml-[-10px]  md:ml-[-25px] w-[25%] h-[25%]"
            src={basketball}
            alt="basketball"
          />
          <h1 className="text-xl sm:text-4xl md:text-6xl">Залы</h1>
          <button className="w-[30%] sm:w-[20%] md:w-[10%] py-1 md:py-3 text-center bg-red-500 rounded-md hover:bg-red-700">
            Открыть
          </button>
        </div>
        <div
          className="relative flex items-center bg-cover mx-auto rounded-l-full justify-between w-[90%] md:border-2 border rounded-r-md h-full pr-[20px]"
          style={{
            backgroundImage: `url(${sports})`,
          }}
        >
          <img
            className="ml-[-10px]  md:ml-[-25px] w-[25%] h-[25%]"
            src={basketball}
            alt="basketball"
          />
          <h1 className="text-xl sm:text-4xl md:text-6xl">Кружки</h1>
          <button className="w-[30%] sm:w-[20%] md:w-[10%] py-1 md:py-3 text-center bg-red-500 rounded-md hover:bg-red-700">
            Открыть
          </button>
        </div>
      </div>
    </Container>
  );
}
export default Zally;
