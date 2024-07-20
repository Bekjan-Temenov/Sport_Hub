import React from "react";
import Select from "./Select";

const Burger = () => (
  <div className="absolute flex flex-col text-white border w-[40%] py-4 gap-3">
    <ul className="flex flex-col items-center justify-between block gap-2">
      <NavItem text="Главная" />
      <NavItem text="Спорт" />
      <NavItem text="Рекламы" />
    </ul>
    <ActionButton text="Разместить рекламу" />
    <div>
      <Select />
    </div>
    <ActionButton text="Регистрация" isOutlined />
  </div>
);

const NavItem = ({ text }) => (
  <li className="cursor-pointer hover:text-red-600 hover:underline">{text}</li>
);

const ActionButton = ({ text, isOutlined }) => (
  <button
    className={`bg-red-600 h-[30px] rounded-md cursor-pointer hover:bg-red-700 font-extralight px-[20px] ${
      isOutlined ? "-white rounded-md border text-lg" : ""
    }`}
  >
    {text}
  </button>
);

export default Burger;
