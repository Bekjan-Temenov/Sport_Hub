import React from "react";

function PersonaInformation() {
  return (
    <div className="bg-white px-[70px] pt-[40px] text-black pb-[90px] rounded-t-md">
      
        <h2 className="font-sans text-xl font-semibold text-center  mb-7">
          Личная информация
        </h2>
        <div className="flex items-center justify-between text-lg ">
          <div className="flex flex-col gap-6">
            <p className="font-sans text-xl">
              <span className="font-semibold ">ФИО:</span> Асанова Амина
            </p>
            <p className="font-sans text-xl " >
              <span className="font-semibold ">Дата рождения:</span> 20 . 09 .
              1996
            </p>
            <p className="font-sans text-xl " >
              <span className="font-semibold ">Email:</span>{" "}
              jordansteve@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-sans text-xl " >
              <span className="font-semibold ">Телефон:</span> +996 500 391 234
            </p>
            <p className="font-sans text-xl " >
              <span className="font-semibold ">Пол:</span> Женский
            </p>
            <p className="font-sans text-xl " >
              <span className="font-semibold ">Адрес:</span> Бишкек Токтогул 76
            </p>
          </div>
      </div>
    </div>
  );
}

export default PersonaInformation;
