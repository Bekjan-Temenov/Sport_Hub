import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import visa from "../../../shared/assets/svg/visa.svg";

export const ModalOplata = ({ setIsOpen , setOpen }) => {
  return (
    <>
      <div onClick={() => setOpen(false)} className="absolute top-0 left-0  w-full h-[140%] bg-black  opacity-70"></div>
      <div  className="absolute bg-[#222224]  top-[15%]   flex flex-col gap-y-3  rounded-lg  px-[55px] py-[35px]">
        <div className="flex items-center gap-4">
          <KeyboardBackspaceIcon
            onClick={() => setIsOpen()}
            className="cursor-pointer"
          />
          <h1 className="text-2xl">Оплатить</h1>
        </div>
        <hr className="border-[#B6B7BC] border w-[789px] mt-[15px] mb-[30px]" />
        <div className="flex flex-col gap-6 ">
          <span className="text-xl pl-[70px]">Спорт: Баскетбол</span>
          <div className="flex items-start gap-3">
            <img src={visa} alt="icon" className="mt-3" />
            <div className="flex flex-col gap-2">
              <span> Способ оплаты</span>
              <p className=""> Visa-8780</p>
              <button className="text-[#00C5FF]  w-[80px]">изменить</button>
            </div>
          </div>
          <hr className="border-[#B6B7BC] border  mt-[15px] mb-[20px]" />
          <h1 className="flex items-center gap-2 text-3xl">
            Цена за месяц: <h1 className="text-red-600">2948 сом</h1>
          </h1>
          <button className="text-center bg-[#FE0404] hover:bg-red-700 w-[40%] px-[55px] py-[10px] rounded-md">
            Оплатить
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalOplata;
