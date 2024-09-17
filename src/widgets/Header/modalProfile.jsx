import React from "react";
import profile from "../../shared/assets/svg/profile.svg";
import message from "../../shared/assets/svg/message.svg";
import list from "../../shared/assets/svg/list.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const modalProfile = ({setOpen}) => {
  const {t} =useTranslation()
  return (
    <div className="mt-4">
      <Link to="/">
        <button  onClick={() => setOpen(false)} className="flex items-center w-full p-3 mb-2 border-2 rounded-lg">
          <img className="w-5 h-5 mr-2" src={profile} />
          <NavItem text={t("Профиль")} />
        </button>
      </Link>
      <Link to="/">
        <button  onClick={() => setOpen(false)} className="flex items-center w-full p-3 mb-2 border-2 rounded-lg">
          <img className="w-5 h-5 mr-2" src={message} />
          <NavItem text={t("Входящие")} />
        </button>
      </Link>
      <Link to="/">
        <button  onClick={() => setOpen(false)} className="flex items-center w-full p-3 mt-2 border-2 rounded-lg">
          <img className="w-5 h-5 mr-2" src={list} />
          <NavItem text={t("Опубликованные")} />
        </button>
      </Link>
      <hr className="my-5 border-2 border-gray-600 rounded-full" />
    </div>
  );
};

const NavItem = ({ text }) => (
  <span className="cursor-pointer hover:text-red-600 hover:underline">
    {text}
  </span>
);
export default modalProfile;
