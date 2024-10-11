import React from "react";

function Inputs({ handleInputChange, formValues }) {
  
  return (
    <div>
      <h1 className="mb-3 font-sans text-2xl font-semibold">
        Дабавить обзор активности
      </h1>
      <div className="flex flex-col mb-[20px] gap-y-[10px]">
        <h1 className="font-sans text-xl font-medium">Спорт*</h1>

        <select
          name="sports"
          value={formValues.sports}
          onChange={handleInputChange}
          className="border w-[20%] pl-1 py-1  bg-[#131313] rounded"
        >
          <option value="value1" selected>
            Спорт
          </option>
          <option value="Баскетбол">Баскетбол</option>
          <option value="Футбол">Футбол</option>
          <option value="Волейбол">Волейбол</option>
          <option value="Бокс">Бокс</option>
          <option value="Теннис">Теннис</option>
          <option value="Тхэквондо">Тхэквондо</option>
          <option value="Велоспорт">Велоспорт</option>
          <option value="Плавание">Плавание</option>
          <option value="Йога">Йога</option>
        </select>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-y-[20px]">
          <input
            type="text"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
            className="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
            placeholder="Дабавить заголовок ..."
          />
          <input
            type="text"
            className="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
            placeholder="Дабавить описание ..."
          />
          <input
            type="tel"
            name="phone"
            value={formValues.phone}
            onChange={handleInputChange}
            className="w-full p-2 border  bg-[#131313] rounded"
            placeholder="+996 (      )"
          />
          <input
            type="text"
            name="address"
            value={formValues.address}
            onChange={handleInputChange}
            className="w-full p-2 border  bg-[#131313] rounded"
            placeholder="Дабавить адрес ..."
          />
        </div>
        <div className="flex flex-col border rounded gap-y-3 w-[356px] items-center py-[35px] px-[20px]  bg-[#131313]">
          <input
            type="file"
            id="avatar"
            className="hidden"
            name="avatar"
            accept="image/png, image/jpeg"
          />
          <button
            onClick={() => document.getElementById("avatar").click()}
            className="bg-[#C8180C]  py-2 px-6   rounded-full"
          >
            Загрузить изображение
          </button>
          <p className="text-center text-md">
            Допустимые форматы: PNG, GIF, WEBP, MP4, и MP3
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inputs; 
