import React, { useCallback, useState } from "react";
import NavBarContainer from "../../shared/helpers/NavBarContainer";
import log from "../../shared/assets/svg/admin_logo.svg";
import delate from "../../shared/assets/svg/admin-delete.svg";
import edit from "../../shared/assets/svg/admin-edit.svg";
import ModalSection from "./ui/ModalSection";

const data = [
  {
    src: "log",
    title: "Bilimkana Arena",
    subtitle: "Баскетбол",
  },
  {
    src: "log",
    title: "Спортивный Комплекс Авангард",
    subtitle: "Волейбол",
  },
  {
    src: "log",
    title: "Центр Спорта Олимп",
    subtitle: "Футбол",
  },
  {
    src: "log",
    title: "Арена Здоровье",
    subtitle: "Теннис",
  },
  {
    src: "log",
    title: "Дворец Спорта Альфа",
    subtitle: "Лёгкая Атлетика",
  },
  {
    src: "log",
    title: "Парк Чемпионов",
    subtitle: "Плавание",
  },
  {
    src: "log",
    title: "Спорт-Сити",
    subtitle: "Хоккей",
  },
  {
    src: "log",
    title: "Торнадо Арена",
    subtitle: "Бокс",
  },
  {
    src: "log",
    title: "Спортивный Центр Победа",
    subtitle: "Баскетбол",
  },
  {
    src: "log",
    title: "Фитнес-Клуб Актив",
    subtitle: "Фитнес",
  },
  {
    src: "log",
    title: "Академия Спорта Движение",
    subtitle: "Йога",
  },
];

function Section() {
  const [open , setIsOpen] = useState(false)
  
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  
  
  return (
    <NavBarContainer>
      <div className="flex flex-col text-white">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-sans text-2xl font-bold">Кружки</h1>
          <button onClick={toggleMenu} className="bg-[#FE0404] hover:bg-red-7  00 rounded-md  py-1 px-6 font-comfortaa">
            + Добавить
          </button>
        </div>
        
        {open && <ModalSection setIsOpen={setIsOpen}/>}
        <hr className="border-[#B6B7BC] border w-full mt-[15px] mb-[50px]" />
        <div className="flex flex-col gap-y-[30px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex bg-[#252525] rounded-md items-center justify-between px-[20px] py-[15px]"
            >
              <div className="flex items-center justify-between   w-[60%] ">
                <div className="flex items-center gap-x-4">
                  <img className="w-[35px] h-[35px]  mb-[5px]" src={log} />
                  <h1 className="text-2xl font-semibold font-comfortaa text-[#FF6600]">
                    {item.title}
                  </h1>
                </div>
                <span>{item.subtitle}</span>
              </div>

              <div className="flex items-center ml-[50px]">
                <img className="cursor-pointer" src={delate} alt="" />
                <hr className="w-[1px] h-[36px] mx-[25px] border border-[#B6B7BC]" />
                <img className="cursor-pointer" src={edit} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </NavBarContainer>
  );
}

export default Section;
