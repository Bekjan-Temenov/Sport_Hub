import React from "react";
import Select from "./Select";
import { Link } from "react-router-dom";

const Burger = ({value}) => (
  <div className="absolute z-10 flex flex-col bg-gray-800  text-white border w-[40%] py-4 gap-3">
    <ul className="flex flex-col items-center justify-between block gap-2">
      <Link to="/">
        <NavItem onClick={() => value(false)} text="Главная" />
      </Link>
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
    className={`bg-red-600 h-[30px] text-[11px] rounded-md cursor-pointer hover:bg-red-700 font-extralight px-[20px] ${
      isOutlined ? "-white rounded-md border text-lg" : ""
    }`}
  >
    {text}
  </button>
);

export default Burger;
