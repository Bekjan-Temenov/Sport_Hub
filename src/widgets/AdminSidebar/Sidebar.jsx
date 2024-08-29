import React from "react";
import img from "../../shared/assets/png/Admin_SideBar.png";
import adves from "../../shared/assets/svg/admin_advesting.svg";
import about from "../../shared/assets/svg/admin_about.svg";
import message from "../../shared/assets/svg/admin_message.svg";
import setting from "../../shared/assets/svg/admin_setting.svg";
import getout from "../../shared/assets/svg/admin_getout.svg"

function Sidebar() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${img})`,
      }}
      className=" flex flex-col justify-between bg-cover npm r  w-[20%] h-[971px] pt-[210px] pb-[70px] pl-[30px] pr-[21px]"
    >
      <div className="flex flex-col gap-4 ">
        <Routes text="Мои рекламы" img={adves} />
        <Routes text="О нас" img={about} />
        <Routes text="Уведомления " img={message} />
        <Routes text="Настройка" img={setting} />
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-white">
        <img src={getout} alt="icon"/>
        <span className="text-red-600">
        Выйти
        </span>
      </div>
    </div>
  );
}
const Routes = ({ text, img }) => {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer group hover:bg-white hover:text-black">
      <img
        className="w-6 h-6 filter invert-0 group-hover:invert"
        src={img}
        alt="Icon"
      />
      <span className="">{text}</span>
    </div>
  );
};

export default Sidebar;
