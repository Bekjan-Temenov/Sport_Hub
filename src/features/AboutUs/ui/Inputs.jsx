import React from "react";

function Inputs() {
  return (
    <div>
      <h1 className="mb-3 font-sans text-2xl font-semibold">
        Дабавить обзор активности
      </h1>
      <div className="flex flex-col mb-[20px] gap-y-[10px]">
        <h1 className="font-sans text-xl font-medium">Спорт*</h1>
        <select name="select" className="border w-[20%] pl-1 py-1  bg-[#131313] rounded">
          <option value="value1" selected>Спорт</option>
          <option value="value2">Баскетбол</option>
          <option value="value3">Футбол</option>
          <option value="value2">Волейбол</option>
          <option value="value3">Бокс</option>
          <option value="value2">Теннис</option>
          <option value="value3">Тхэквондо</option>
          <option value="value3">Велоспорт</option>
          <option value="value2">Плавание</option>
          <option value="value3">Йога</option>
        </select>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-y-[20px]">
          <input
            type="text"
            class="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
            placeholder="Дабавить заголовок ..."
          />
          <input
            type="text"
            class="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
            placeholder="Дабавить описание ..."
          />
          <input
            type="tel"
            class="w-full p-2 border  bg-[#131313] rounded"
            placeholder="+996 (      )"
          />
          <input
            type="text"
            class="w-full p-2 border  bg-[#131313] rounded"
            placeholder="Дабавить адрес ..."
          />
        </div>
        <div class="flex flex-col border rounded gap-y-3 w-[356px] items-center py-[35px] px-[20px]  bg-[#131313]">
          <input
            type="file"
            id="avatar"
            className="hidden"
            name="avatar"
            accept="image/png, image/jpeg"
          />
          <button
            onClick={() => document.getElementById("avatar").click()}
            class="bg-[#C8180C]  py-2 px-6   rounded-full"
          >
            Загрузить изображение
          </button>
          <p class=" text-md text-center ">
            Допустимые форматы: PNG, GIF, WEBP, MP4, и MP3
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inputs;// src/components/Inputs.js
