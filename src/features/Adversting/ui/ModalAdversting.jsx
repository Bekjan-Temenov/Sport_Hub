import React, { useState } from "react";
import gallery from "../../../shared/assets/svg/admin_gallery.svg";
import Schedule from "./Schedule";
import Website from "./Website";

function ModalAdversting({ setIsOpen }) {
  return (
    <div className="w-[100%] h-[240%] top-0 left-0 z-50 absolute ">
      <div onClick={() => setIsOpen(false)} className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="bg-[#222224] w-[60%] right-[20%]  absolute flex flex-col px-[60px] py-[40px] rounded">
        <div className="flex items-center justify-between w-full ">
          <h1 className="ml-[50px] font-sans text-3xl font-semibold">
            Заголовок
          </h1>
          <div className="flex items-center cursor-pointer">
            <div className="py-[92px] border rounded px-[158px] bg-[#131313]">
              <img className="  w-[38px] h-[38px]" src={gallery} alt="icon" />
            </div>
          </div>
        </div>
        <hr className="border-[#B6B7BC]  w-full mt-[15px] mb-[50px]" />
        <div className="">
          <h1 className="mb-3 font-sans text-2xl font-semibold">
            Дабавить обзор активности
          </h1>
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
        <Schedule />
        <Website setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default ModalAdversting;
