import React from "react";
import close from "../../../shared/assets/svg/close.svg"

const sports = [
  { name: "Все" },
  { name: "Новые" },
  { name: "За последние 10 дней" },
  { name: "Зa 1 месяц" },
];

const Select = ({ open, setOpen }) => {
  return (
    <div className="absolute right-[80px] bottom-[100px] flex justify-center gap-3 text-sm text-center  rounded-md cursor-pointer lg:text-lg lg:py-1">
      {!open && (
        <div className=" w-[236px] relative  flex bg-[#1E1D1D] flex-col z-50 mt-[35%] rounded-md">
          <img onClick={() => setOpen(true)} className="w-[15px] h-[15px]  absolute right-3 top-3" src={close} alt="icon"/>
          <p className="invisible">"</p>
          {sports.map((option) => (
            //   <Link  to={`/zally/${option.id}`}>
            <p
              onClick={() => setOpen(true)}
              className="w-full py-1 pl-8 rounded-md cursor-pointer text-start hover:bg-white hover:text-black"
            >
              {option.name}
            </p>
            //   </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
