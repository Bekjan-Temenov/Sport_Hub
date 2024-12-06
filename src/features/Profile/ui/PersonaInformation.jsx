import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../store/action";

const PersonaInformation = () => {
  const dispatch = useDispatch();
  const { profiles, loading, error } = useSelector((state) => state.profiles);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  {
    error && (
      <p className="mx-[30%] my-4 text-red-600">
        Ошибка при отправление формы.
      </p>
    );
  }
  {
    loading && <p className="mx-[30%] my-4 text-red-600">Loading...</p>;
  }
  return (
    <div className="bg-white px-[70px] pt-[40px] text-black pb-[90px] rounded-t-md">
      <h2 className="font-sans text-xl font-semibold text-center mb-7">
        Личная информация
      </h2>
      {profiles.length ? (
        profiles.map((profile) => (
          <div className="flex items-center justify-between text-lg ">
            <div className="flex flex-col gap-6">
              <p className="font-sans text-xl">
                <span className="font-semibold ">ФИО:</span> {profile.full_name}
              </p>
              <p className="font-sans text-xl ">
                <span className="font-semibold ">Дата рождения:</span>{" "}
                {profile.birth_date}
              </p>
              <p className="font-sans text-xl ">
                <span className="font-semibold ">Email:</span> {profile.user}
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
        ))
      ) : (
        <p className="text-center text-gray-500">No profiles available</p>
      )}
    </div>
  );
};

export default PersonaInformation;