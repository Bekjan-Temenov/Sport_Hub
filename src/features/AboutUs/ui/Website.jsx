import React from "react";

const inputFields = [
  { label: "Размеры зала", placeholder: "23х24х7" },
  { label: "Количество", placeholder: "2" },
  { label: "Тип", placeholder: "Крытый" },
  { label: "Покрытие", placeholder: "Паркет" },
  { label: "Инвентарь", placeholder: "Со своим мячом" },
  { label: "Оплата за час", placeholder: "3000с" },
];

const checkboxes = [
  { label: "Раздевалка" },
  { label: "Освещение" },
  { label: "Душевая" },
];


function Website({ setIsOpen }) {
  
  return (
    <div className="flex flex-col mt-[50px]">
      <div className="grid grid-cols-2 gap-x-[49px]">
        {inputFields.map((field, index) => (
          <div className="flex flex-col mb-[47px] justify-between" key={index}>
            <h1 className="font-sans text-2xl mb-[10px]">{field.label}</h1>
            <input
              className="w-[100%] p-2 border bg-[#131313] rounded-lg"
              type="text"
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-evenly">
        {checkboxes.map((box, index) => (
          <div className="flex gap-3" key={index}>
            <input
              type="checkbox"
              className="accent-[#FF0000] w-[22px] h-[22px]"
            />
            <span className="font-sans">{box.label}</span>
          </div>
        ))}
      </div>
      <Buttons setIsOpen={setIsOpen}/>
    </div>
  );
}
export const Buttons = ({setIsOpen}) => {
  return (
    <div className="flex items-center  mt-[60px] justify-evenly">
      <button
        onClick={() => setIsOpen(false)}
        className="text-center bg-[#FE04044D] hover:bg-red-900 px-[65px] py-[10px] rounded-md"
      >
        Назад
      </button>
      <button className="text-center bg-[#FE0404] hover:bg-red-700 px-[55px] py-[10px] rounded-md">
        Сохранить и опубликовать
      </button>
    </div>
  );
};

export default Website;
