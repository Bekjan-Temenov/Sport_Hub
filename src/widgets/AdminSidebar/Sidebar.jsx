import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../shared/assets/png/Admin_SideBar.png";
import adves from "../../shared/assets/svg/admin_advesting.svg";
import about from "../../shared/assets/svg/admin_about.svg";
import message from "../../shared/assets/svg/admin_message.svg";
import setting from "../../shared/assets/svg/admin_setting.svg";
import getout from "../../shared/assets/svg/admin_getout.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Sidebar = () => {
  const [openStates, setOpenStates] = useState({
    about: false,
    notifications: false,
    settings: false,
  });

  const toggleMenu = useCallback((key) => {
    setOpenStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  return (
    <div
      className="flex flex-col justify-between bg-cover w-[20%] h-[971px] pt-[210px] pb-[70px] pl-[30px] pr-[21px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${img})`,
      }}
    >
      <div className="flex flex-col gap-4">
        <SidebarItem text="Мои рекламы" img={adves} to="/admin" />
        <SidebarMenu
          setOpenStates={setOpenStates}
          title="О нас"
          img={about}
          open={openStates.about}
          onClick={() => toggleMenu("about")}
          items={[
            {
              text: "Залы",
              to: "about_us/gym",
            },
            {
              text: "Кружки",
              to: "about_us/section",
            },
          ]}
        />
        <SidebarMenu
          setOpenStates={setOpenStates}
          title="Пользователи"
          img={setting}
          open={openStates.settings}
          onClick={() => toggleMenu("settings")}
          items={[
            { text: "Тренер", to: "trainer" },
            { text: "Клиент", to: "client" },
          ]}
        />
        <SidebarMenu
          setOpenStates={setOpenStates}
          title="Уведомления"
          img={message}
          open={openStates.notifications}
          onClick={() => toggleMenu("notifications")}
          items={[
            { text: "Отзыв", to: "reviewn" },
            { text: "Оплата", to: "paymants" },
          ]}
        />
        <SidebarItem text="Настройка" img={setting} />
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-white">
        <img src={getout} alt="icon" />
        <span className="text-red-600">Выйти</span>
      </div>
    </div>
  );
};

const SidebarMenu = ({ title, img, open, onClick, items, setOpenStates }) => (
  <>
    <div
      onClick={onClick}
      className={`flex items-center  justify-between gap-3   rounded-md  cursor-pointer group hover:bg-white hover:text-black ${
        open ? "bg-[#FFFFFF9E] text-black" : ""
      }`}
    >
      <SidebarItem text={title} img={img} />
      {open ? <ExpandMoreOutlinedIcon /> : <KeyboardArrowRightIcon />}
    </div>
    {open && (
      <div className="w-full text-2xl">
        {items.map((item, index) => (
          <Link to={item.to}>
            <li
              onClick={() => {
                setOpenStates((prev) => ({
                  ...prev,
                  about: false,
                  notifications: false,
                  settings: false,
                }));
              }}
              key={index}
              className={`mb-2 cursor-pointer rounded-xl pr-3 pl-7 py-2 hover:bg-white hover:text-black ${
                index !== 0 ? "mt-1 " : ""
              }`}
            >
              {item.text}
            </li>
          </Link>
        ))}
      </div>
    )}
  </>
);

const SidebarItem = ({ text, img, to }) => (
  <Link
    to={to}
    className="flex items-center justify-between gap-3 py-2 pl-3 rounded-md cursor-pointer group hover:bg-white hover:text-black"
  >
    <div className="flex items-center gap-x-2">
      <img
        className="w-6 h-6 filter invert-0 group-hover:invert"
        src={img}
        alt="Icon"
      />
      <span className="text-2xl">{text}</span>
    </div>
  </Link>
);

export default Sidebar;
