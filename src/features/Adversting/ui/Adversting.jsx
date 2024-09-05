import React, { useCallback, useState } from "react";
import slide1 from "../../../shared/assets/img/slide1.png";
import mapPin from "../../../shared/assets/svg/mapPin.svg";
import instgram from "../../../shared/assets/svg/instagram.svg";
import phoneicon from "../../../shared/assets/svg/phone.svg";
import NavBarContainer from "../../../shared/helpers/NavBarContainer";
import delate from "../../../shared/assets/svg/admin-delete.svg";
import edit from "../../../shared/assets/svg/admin-edit.svg";
import ModalAdversting from "./ModalAdversting";

function Adversting() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <NavBarContainer>
      <div className="flex flex-col items-center gap-y-[50px]">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-sans text-2xl font-bold">Мои рекламы</h1>
          <button
            onClick={toggleMenu}
            className="bg-[#FE0404] hover:bg-red-7  00 rounded-md  py-1 px-6 font-comfortaa"
          >
            + Добавить
          </button>
        </div>
        {isOpen && <ModalAdversting  setIsOpen={setIsOpen}/> }
        <hr className="border-[#B6B7BC] border w-full mt-[15px] mb-[50px]" />
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col w-full">
            <div className="bg-[#FE0202] ml-[10%] w-[40%] h-[3px] "></div>
            <div
              style={{
                backgroundImage: `url(${slide1})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
              }}
              className="pl-[40px] py-5 w-full"
            >
              <div className="flex flex-col justify-center gap-2">
                <div className="flex p-[15px]">
                  <img src={phoneicon} alt="Phone Icon" />
                  <span className="text-white text-[12px]  md:text-[18px]">
                    +996 700-72-77-45
                  </span>
                </div>
                <div className="w-[220px] md:w-[440px]">
                  <h1 className="text-white font-orelega text-[24px] md:text-[40px]  leading-tight mt-[30px] md:mt-[0px]">
                    БЕРЕМ НАГРУЗКУ НА СЕБЯ
                  </h1>
                </div>
                <div className="">
                  <button className="  bg-[#FE0404] px-7 py-1 rounded-full text-white text-[12px] md:text-[17px]">
                    РАССРОЧКА 6/9/12 МЕСЯЦЕВ
                  </button>
                </div>
                <ul className="list-disc pl-4 md:pl-6  text-white mt-4 md:mt-[10px] text-[14px] md:text-[18px]">
                  <li>Тренажерный зал</li>
                  <li>Фитнес</li>
                  <li>Работаем 24/7</li>
                </ul>
                <div className="flex gap-2 ">
                  <img
                    src={mapPin}
                    alt="Map Pin"
                    className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]"
                  />
                  <p className="text-white text-[12px] md:text-[14px]">
                    г. Батайск, M. Горького, д. 84
                  </p>
                </div>
                <button className="text-white flex gap-2 justify-center w-[160px] p-2 items-center border border-white md:p-[6px] rounded-xl">
                  <img src={instgram} alt="Instagram Icon" className="" />
                  Мы в Instagram
                </button>
              </div>
            </div>
            <div className="bg-[#FE0202] ml-[10%] w-[40%] h-[6px] "></div>
          </div>
          <div className="flex items-center ml-[50px]">
            <img className="cursor-pointer" src={delate} alt="" />
            <hr className="w-[1px] h-[36px] mx-[25px] border border-[#B6B7BC]" />
            <img className="cursor-pointer" src={edit} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col w-full">
            <div className="bg-[#FE0202] ml-[10%] w-[40%] h-[3px] "></div>
            <div
              style={{
                backgroundImage: `url(${slide1})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
              }}
              className="pl-[40px] py-5 w-full"
            >
              <div className="flex flex-col justify-center gap-2">
                <div className="flex p-[15px]">
                  <img src={phoneicon} alt="Phone Icon" />
                  <span className="text-white text-[12px]  md:text-[18px]">
                    +996 700-72-77-45
                  </span>
                </div>
                <div className="w-[220px] md:w-[440px]">
                  <h1 className="text-white font-orelega text-[24px] md:text-[40px]  leading-tight mt-[30px] md:mt-[0px]">
                    БЕРЕМ НАГРУЗКУ НА СЕБЯ
                  </h1>
                </div>
                <div className="">
                  <button className="  bg-[#FE0404] px-7 py-1 rounded-full text-white text-[12px] md:text-[17px]">
                    РАССРОЧКА 6/9/12 МЕСЯЦЕВ
                  </button>
                </div>
                <ul className="list-disc pl-4 md:pl-6  text-white mt-4 md:mt-[10px] text-[14px] md:text-[18px]">
                  <li>Тренажерный зал</li>
                  <li>Фитнес</li>
                  <li>Работаем 24/7</li>
                </ul>
                <div className="flex gap-2 ">
                  <img
                    src={mapPin}
                    alt="Map Pin"
                    className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]"
                  />
                  <p className="text-white text-[12px] md:text-[14px]">
                    г. Батайск, M. Горького, д. 84
                  </p>
                </div>
                <button className="text-white flex gap-2 justify-center w-[160px] p-2 items-center border border-white md:p-[6px] rounded-xl">
                  <img src={instgram} alt="Instagram Icon" className="" />
                  Мы в Instagram
                </button>
              </div>
            </div>
            <div className="bg-[#FE0202] ml-[10%] w-[40%] h-[6px] "></div>
          </div>
          <div className="flex items-center ml-[50px]">
            <img className="cursor-pointer" src={delate} alt="" />
            <hr className="w-[1px] h-[36px] mx-[25px] border border-[#B6B7BC]" />
            <img className="cursor-pointer" src={edit} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col w-full">
            <div className="bg-[#FE0202] ml-[10%] w-[40%] h-[3px] "></div>
            <div
              style={{
                backgroundImage: `url(${slide1})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
              }}
              className="pl-[40px] py-5 w-full"
            >
              <div className="flex flex-col justify-center gap-2">
                <div className="flex p-[15px]">
                  <img src={phoneicon} alt="Phone Icon" />
                  <span className="text-white text-[12px]  md:text-[18px]">
                    +996 700-72-77-45
                  </span>
                </div>
                <div className="w-[220px] md:w-[440px]">
                  <h1 className="text-white font-orelega text-[24px] md:text-[40px]  leading-tight mt-[30px] md:mt-[0px]">
                    БЕРЕМ НАГРУЗКУ НА СЕБЯ
                  </h1>
                </div>
                <div className="">
                  <button className="  bg-[#FE0404] px-7 py-1 rounded-full text-white text-[12px] md:text-[17px]">
                    РАССРОЧКА 6/9/12 МЕСЯЦЕВ
                  </button>
                </div>
                <ul className="list-disc pl-4 md:pl-6  text-white mt-4 md:mt-[10px] text-[14px] md:text-[18px]">
                  <li>Тренажерный зал</li>
                  <li>Фитнес</li>
                  <li>Работаем 24/7</li>
                </ul>
                <div className="flex gap-2 ">
                  <img
                    src={mapPin}
                    alt="Map Pin"
                    className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]"
                  />
                  <p className="text-white text-[12px] md:text-[14px]">
                    г. Батайск, M. Горького, д. 84
                  </p>
                </div>
                <button className="text-white flex gap-2 justify-center w-[160px] p-2 items-center border border-white md:p-[6px] rounded-xl">
                  <img src={instgram} alt="Instagram Icon" className="" />
                  Мы в Instagram
                </button>
              </div>
            </div>
            <div className="bg-[#FE0202] ml-[10%] w-[40%] h-[6px] "></div>
          </div>
          <div className="flex items-center ml-[50px]">
            <img className="cursor-pointer" src={delate} alt="" />
            <hr className="w-[1px] h-[36px] mx-[25px] border border-[#B6B7BC]" />
            <img className="cursor-pointer" src={edit} alt="" />
          </div>
        </div>
      </div>
    </NavBarContainer>
  );
}

export default Adversting;
