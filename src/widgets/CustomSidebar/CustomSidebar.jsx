import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../shared/assets/png/Admin_SideBar.png";
import adves from "../../shared/assets/svg/custom_shedule.svg";
import setting from "../../shared/assets/svg/custom_attendance.svg";
import set from "../../shared/assets/svg/custom_oplata.svg";
import getout from "../../shared/assets/svg/admin_getout.svg";


const CustomSidebar = () => {
  const [activeItem, setActiveItem] = useState("Расписание");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div
      className="flex flex-col justify-between bg-cover w-[20%] h-[971px] pt-[210px] pb-[70px] pl-[30px] pr-[21px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${img})`,
      }}
    >
      <div className="flex flex-col gap-4">
        <SidebarItem
          text="Расписание"
          img={adves}
          to="/profile"
          isActive={activeItem === "Расписание"}
          onClick={() => handleItemClick("Расписание")}
        />
        <SidebarItem
          text="Посещаемость"
          img={setting}
          to="/profile/attendence"
          isActive={activeItem === "Посещаемость"}
          onClick={() => handleItemClick("Посещаемость")}
        />
        <SidebarItem
          text="Оплата"
          img={set}
          to="/profile/payment"
          isActive={activeItem === "Оплата"}
          onClick={() => handleItemClick("Оплата")}
        />
      </div>
      <Link to="/">
        <div className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-white">
          <img src={getout} alt="icon" />
          <span className="text-red-600">Выйти</span>
        </div>
      </Link>
    </div>
  );
};

const SidebarItem = ({ text, img, to, isActive, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center justify-between hover:bg-white hover:text-black gap-3 py-2 pl-3 rounded-md cursor-pointer group 
      ${isActive ? "bg-white text-black " : ""}`}
  >
    <div className="flex items-center gap-x-2">
      <img
        className={`w-6 h-6 filter group-hover:invert 
        ${isActive ? "invert" : "invert-0"}`}
        src={img}
        alt="Icon"
      />
      <span>{text}</span>
    </div>
  </Link>
);

export default CustomSidebar;
