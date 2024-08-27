import React, { useState, useCallback, useRef, useEffect } from "react";
import Container from "../../shared/helpers/Container";
import logo from "../../shared/assets/svg/header_logo.svg";
import burger from "../../shared/assets/svg/burger.svg";
import Select from "./Select";
import Burger from "./Burger";
import { Link } from "react-router-dom";
import Sport from "./Sport";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [open, setOpen] = useState(false);
  const sortRef = useRef(null);
  const { t, i18n } = useTranslation();

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  }

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (sortRef.current && path && !path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Container>
      <div
        ref={sortRef}
        className="flex items-center justify-between my-5 text-white"
      >
        <img
          className="lg:h-[30px] h-[25px] hidden md:block"
          src={logo}
          alt="Logo"
        />
        <div className="flex items-center block w-full md:hidden">
          <div>
            <img
              onClick={toggleMenu}
              className="cursor-pointer "
              src={burger}
              alt="Menu"
            />
            {open && <Burger setOpen={setOpen} sortRef={sortRef} />}
          </div>
          <img className="lg:h-[30px] h-[25px] mx-auto" src={logo} alt="Logo" />
        </div>
        <nav className="hidden gap-3 text-sm no-underline list-none md:flex md:items-center md:justify-between md:block lg:gap-11 lg:text-lg">
          <Link to="/">
            <NavItem text={t("Главная")} />
          </Link>
          <Sport />
        </nav>
        <Link to="/auth/code">
          <ActionButton text={t("Разместить рекламу")} />
        </Link>
        <div className="hidden md:block">
          <Select handleChangeLang={handleChangeLang} currentLang={i18n.language} />
        </div>
        <Link to="/auth/sign-up">
          <ActionButton text={t("Регистрация")} isOutlined />
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
