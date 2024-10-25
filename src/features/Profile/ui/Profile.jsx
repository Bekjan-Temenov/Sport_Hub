import React from "react";
import fly from "../../../shared/assets/png/Fly.png";
import profile from "../../../shared/assets/png/profile.png";
import foto from "../../../shared/assets/svg/foto.svg";
import fotoparat from "../../../shared/assets/svg/fotoparat.svg";
import edit from "../../../shared/assets/svg/edit.svg";
import { useSelector } from "react-redux";

function Profile({handleOpen}) {
  const {error , loading , profile} = useSelector((state) => state.profile)

  console.log(profile);
  return (
    <div
      className="relative w-full h-[253px] flex flex-col justify-end border border-red-600 rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${fly})` }}
    >
      <img
      onClick={handleOpen}
        className="absolute p-1 bg-white rounded-md cursor-pointer top-3 right-5"
        src={foto}
        alt="Фото"
      />
      <div className="flex flex-col">
        <div className="relative flex items-end ">
          <div className="relative top-7 left-3">
            <img
              className="w-[121px] h-[121px]  rounded-full"
              src={profile}
              alt="Профиль"
            />
            <img
              className="absolute bottom-0 right-3"
              src={fotoparat}
              alt="Иконка фотоаппарата"
            />
          </div>

          <h1 className="ml-4 text-2xl font-medium font-comfortaa">
            {profile.full_name}
          </h1>
        </div>

        <div className="flex justify-between  w-full h-[53px] bg-[#FE0404E5] rounded-b-lg pl-[143px] pr-5">
          <label className="mt-2">Бишкек</label>
          <img className="cursor-pointer" src={edit} alt="Редактировать" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
