import React from "react";

function Website({setIsOpen}) {
  return (
    <div className="flex flex-col mt-[50px]">
      <div className="flex flex-col">
        <h1 className="font-sans text-2xl mb-[10px]">Сайт</h1>
        <div className="flex items-center mb-[47px] justify-between">
          <input
            class="w-[40%] p-2 border  bg-[#131313] rounded"
            type="name"
            placeholder="Название"
          />
          <input
            class="w-[40%] p-2 border  bg-[#131313] rounded"
            type="url"
            placeholder="Ссылка"
          />
        </div>
        <h1 className="font-sans text-2xl mb-[10px]">Рассрочка</h1>
        <input
          class="w-[40%] p-2 border  bg-[#131313] rounded"
          type="text"
          placeholder="6\9\12 месяцев"
        />
      </div>
      <div className="flex items-center mt-[60px] justify-evenly">
        <button onClick={() => setIsOpen(false)}  className="text-center bg-[#FE04044D] hover:bg-red-900 px-[55px] py-[10px] rounded-md">Назад</button>
        <button className="text-center bg-[#FE0404] hover:bg-red-700 px-[55px] py-[10px] rounded-md">Сохранить и опубликовать</button>
      </div>
    </div>
  );
}

export default Website;
