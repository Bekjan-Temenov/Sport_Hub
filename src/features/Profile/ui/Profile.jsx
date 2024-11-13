import React, { useEffect } from "react";
import fly from "../../../shared/assets/png/Fly.png";
import profileImg from "../../../shared/assets/png/profile.png";
import foto from "../../../shared/assets/svg/foto.svg";
import fotoparat from "../../../shared/assets/svg/fotoparat.svg";
import edit from "../../../shared/assets/svg/edit.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../store/action";

function Profile({ handleOpen }) {
  const dispatch = useDispatch();
  const { profiles, loading, error } = useSelector((state) => state.profiles);

  console.log(profiles);
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <div
      className="relative w-full h-[253px] flex flex-col justify-end border border-red-600 rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${fly})` }}
    >
      {loading && <p className="mx-[30%] my-4 text-red-600">Loading...</p>}
      {error && <p className="mx-[30%] my-4 text-red-600">Ошибка при отправлении формы.</p>}
      
      {profiles.length ? (
        profiles.map((profile) => (
          <div key={profile.id}>
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
                    src={profileImg}
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
              <div className="flex justify-between w-full h-[53px] bg-[#FE0404E5] rounded-b-lg pl-[143px] pr-5">
                <label className="mt-2">Бишкек</label>
                <img onClick={handleOpen} className="cursor-pointer" src={edit} alt="Редактировать" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No profiles available</p>
      )}
    </div>
  );
}

export default Profile;
