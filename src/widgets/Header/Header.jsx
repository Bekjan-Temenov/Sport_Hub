import React, { useState, useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux"; // Import useSelector
import Container from "../../shared/helpers/Container";
import logo from "../../shared/assets/svg/header_logo.svg";
import burger from "../../shared/assets/svg/burger.svg";
import batman from "../../shared/assets/png/batman.webp";
import Burger from "./Burger";
import { Link } from "react-router-dom";
import Sport from "./Sport";

const Header = () => {
  const [open, setOpen] = useState(false);
  const sortRef = useRef(null);
  
  const user = useSelector((state) => state.auth.user);

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
        className="flex items-center justify-between my-5 text-white "
      >
        <div className="flex items-center w-full gap-x-9">
          <img
            className="lg:h-[30px] h-[25px]  hidden md:block"
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
            <img
              className="lg:h-[30px] h-[25px] mx-auto"
              src={logo}
              alt="Logo"
            />
          </div>

          <nav className="hidden gap-3 text-sm no-underline list-none md:flex md:items-center md:justify-between lg:gap-11 lg:text-lg">
            <Link to="/">
              <NavItem text="Главная" />
            </Link>
            <Sport />
            <Link to="/adversting">
              <NavItem text="Рекламы" />
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-x-[30px]">
          {!user ? (
            <Link
              to="/auth/sign-up"
              className="py-[3px] hidden md:block rounded-md"
            >
              <ActionButton text="Регистрация" />
            </Link>
          ) : (
            <img className="rounded-full cursor-pointer w-[64px] h-[64px]" src={batman} alt="User Profile" />
          )}
        </div>
      </div>
    </Container>
  );
};

const NavItem = ({ text }) => (
  <li className="no-underline cursor-pointer hover:text-red-600 hover:underline">
    {text}
  </li>
);

export const ActionButton = ({ text }) => (
  <button className="text-sm whitespace-nowrap border rounded-md md:text-lg lg:text-lg md:block hidden px-[10px] lg:px-[19px] md:h-[25px] lg:h-[30px] ">
    {text}
  </button>
);

export default Header;
