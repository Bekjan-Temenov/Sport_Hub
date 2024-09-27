import React from "react";
import Schedule from "../../Adversting/ui/Schedule";
import Inputs from "./Inputs";
import Title from "./Title";
import Website from "./Website";

function ModalGym({ setIsOpen }) {
  return (
    <div className="w-[100%] h-[250%] top-0 left-0 z-50 absolute ">
      <div
        onClick={() => setIsOpen(false)}
        className="absolute left-0 w-full h-full bg-black opacity-70"
      ></div>
      <div className="bg-[#222224] top-[58px] w-[60%] right-[20%]  absolute flex flex-col px-[60px] py-[40px] rounded">
        <Title/>
        <hr className="border-[#B6B7BC]  w-full mt-[15px] mb-[50px]" />
        <Inputs />
        <Schedule />
        <Website setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default ModalGym;
