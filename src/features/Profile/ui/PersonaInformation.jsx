import React from "react";
import { useSelector } from "react-redux";

function PersonaInformation() {
  const { profile } = useSelector((state) => state.profile.profile);

  console.log(profile);
  return (
    <div className="bg-white px-[70px] pt-[40px] text-black pb-[90px] rounded-t-md">
      <h2 className="font-sans text-xl font-semibold text-center mb-7">
        Личная информация
      </h2>
      {/* {error && (
          <p className="mx-[30%] my-4 text-red-600">
            Ошибка при отправление формы.
          </p>
        )}
        {loading && (
          <p className="mx-[30%] my-4 text-red-600">
           Loading...
          </p>
        )} */}
      <div className="flex items-center justify-between text-lg ">
        <div className="flex flex-col gap-6">
          <p className="font-sans text-xl">
            <span className="font-semibold ">ФИО:</span> {full_name}
          </p>
          <p className="font-sans text-xl ">
            <span className="font-semibold ">Дата рождения:</span>{" "}
            {profile.birth_date}
          </p>
          <p className="font-sans text-xl ">
            <span className="font-semibold ">Email:</span> {profile.address}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-sans text-xl ">
            <span className="font-semibold ">Телефон:</span> {profile.phone}
          </p>
          <p className="font-sans text-xl ">
            <span className="font-semibold ">Пол:</span> {profile.gender}
          </p>
          <p className="font-sans text-xl ">
            <span className="font-semibold ">Адрес:</span> {profile.address}
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default PersonaInformation;
