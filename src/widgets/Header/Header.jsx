import React, { useState, useCallback } from "react";
import Container from "../../shared/helpers/Container";
import logo from "../../shared/assets/svg/header_logo.svg";
import burger from "../../shared/assets/svg/burger.svg";
import Select from "./Select";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <Container>
      <div className="flex items-center justify-between my-5 text-white border ">
        <div className="flex items-center justify-between w-full">

        <div className="block md:hidden">
          <img
            onClick={toggleMenu}
            className="border cursor-pointer "
            src={burger}
            alt="Menu"
            />  
          {open && <Burger  value={setOpen}/>}
        </div>
        <img className="lg:h-[30px] h-[25px]" src={logo} alt="Logo" />
        <img
          className="md:hidden w-[44px] rounded-full h-[44px] border-[3px] border-red-600 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s"
          alt="Profile"
          />
          </div>
        <nav className="hidden gap-3 text-sm no-underline list-none md:flex md:items-center md:justify-between md:block lg:gap-11 lg:text-lg">
          <Link to="/">
              <NavItem text="Главная" />
          </Link>
          <NavItem text="Спорт" />
          <NavItem text="Рекламы" />
        </nav>
        <ActionButton text="Разместить рекламу" />
        <div className="hidden md:block">
          <Select />
        </div>
        <Link to="/auth/sign-up">
          <ActionButton text="Регистрация" isOutlined />
        </Link>
      </div>
    </Container>
  );
};

const NavItem = ({ text }) => (
  <li className="no-underline cursor-pointer hover:text-red-600 hover:underline">
    {text}
  </li>
);

const ActionButton = ({ text, isOutlined }) => (
  <button
    className={`text-sm lg:text-lg rounded-md md:block hidden px-[10px] lg:px-[19px] md:h-[25px] lg:h-[30px] ${
      isOutlined
        ? "border text-lg"
        : "bg-red-600 hover:bg-red-700 md:font-thin lg:font-extralight"
    }`}
  >
    {text}
  </button>
);

export default Header;
