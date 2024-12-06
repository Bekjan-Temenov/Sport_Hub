import React from "react";
import Time from "./Time";

function ModalJoinClass({handleClick,  setIsOpen }) {
  
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className="absolute top-0 left-0  w-full h-[140%] bg-black  opacity-70"
      ></div>
      <div className="absolute bg-[#222224]  top-[8%]   flex flex-col gap-y-3 items-center rounded-lg  px-[55px] py-[35px]">
        <h1 className="font-sans text-2xl">Записаться на кружок</h1>
        <div className="flex items-center justify-around w-full ">
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              className="accent-[#FF0000]  w-[22px] h-[22px]"
            />
            <span>Взрослых</span>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              className="accent-[#FF0000]   w-[22px] h-[22px]"
            />
            <span>Подростков</span>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              className="accent-[#FF0000]  w-[22px] h-[22px]"
            />
            <span>Детей</span>
          </div>
        </div>
        <hr className="border-[#B6B7BC] border w-[789px] mt-[15px] mb-[50px]" />
        <div>
          <p className="">Спорт*</p>
          <select
            name=""
            className=" rounded-md pr-[120px] pl-1 py-1 border-[#FFFFFF82] bg-[#131313] "
          >
            <option value="value1">Баскетбол </option>
            <option value="value2" selected>
              Футбол
            </option>
            <option value="value3">Теннис</option>
            <option value="value1">Плавание </option>
            <option value="value2"></option>
            <option value="value3"> Тхэквондо</option>
            <option value="value1">Бокс </option>
            <option value="value2">Велоспорт</option>
            <option value="value3">Велоспорт</option>
          </select>
        </div>
        <Time />
        <div className="flex items-center  gap-[50px] mt-[60px] justify-evenly">
          <button
            onClick={() => setIsOpen(false)}
            className="text-center bg-[#FE04044D] hover:bg-red-900 px-[55px] py-[10px] rounded-md"
          >
            Назад
          </button>
          <button
            onClick={handleClick}
            className="text-center bg-[#FE0404] hover:bg-red-700 px-[55px] py-[10px] rounded-md"
          >
            Сохранить и оплатить
          </button>
          
        </div>
      </div>
    </>
  );
}


export default ModalJoinClass;
