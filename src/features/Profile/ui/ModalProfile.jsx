import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function ModalProfile({setOpen}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className=" p-8 px-[50px] pt-[30px] pb-[60px] text-white bg-[#222224] rounded-lg">
        <div className="flex items-center gap-4">
          <KeyboardBackspaceIcon onClick={() => setOpen(false)} className="cursor-pointer" />
          <h1 className="text-2xl">Редактировать</h1>
        </div>
        <hr className=" border border-[#B6B7BC] rounded-full my-7"></hr>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-1">ФИО*</label>
              <input
                type="text"
                className="w-[287px] p-2 bg-[#131313] border border-gray-600 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1">Email*</label>
              <input
                type="email"
                className="w-full p-2 bg-[#131313] border border-gray-600 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1">Дата рождения*</label>
              <input
                type="date"
                className="w-full p-2 bg-[#131313] border border-gray-600 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1">Телефон*</label>
              <input
                type="tel"
                className="w-full p-2 bg-[#131313] border border-gray-600 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1">Пол*</label>
              <input
                type="text"
                className="w-full p-2 bg-[#131313] border border-gray-600 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1">Адрес*</label>
              <input
                type="text"
                className="w-full p-2 bg-[#131313] border border-gray-600 rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="w-[90%] py-2 font-semibold text-white bg-[#FE0404E5] rounded-md hover:bg-red-700">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalProfile;
