import React from "react";
import Container from "../../shared/helpers/Container";
import logo from "../../shared/assets/svg/header_logo.svg";
import facebook from "../../shared/assets/svg/footer_facebook.svg";
import telega from "../../shared/assets/svg/footeer_telega.svg";
import insta from "../../shared/assets/svg/footer_insta.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[url('../../shared/assets/png/futter.png')]  bg-cover bg-center text-white py-4 md:py-[48px]   ">
      <Container>
        <div className="flex flex-col gap-5 md:gap-14">
          <div className="flex sm:flex-row gap-3 flex-col  items-center md:px-[50px] justify-between ">
            <img src={logo} alt="logo" />
            <ActionButton text="Разместить рекламу" />
          </div>
          <div className=" w-[40%] mx-auto">
            <nav className="flex flex-col items-center justify-between gap-3 text-lg no-underline list-none sm:flex-row">
              <Link to="/">
                <NavItem text="Главная" />
              </Link>
              <NavItem text="Спорт" />
              <Link to="/auth/code">
                <NavItem text="Рекламы" />
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 mx-auto cursor-pointer">
              <img src={facebook} />
              <img src={telega} />
              <img src={insta} />
            </div>
            <hr />
            <p className="mx-auto text-gray-400">Спасибо что выбираете нас !</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
const NavItem = ({ text }) => (
  <li className="no-underline cursor-pointer hover:text-red-600 hover:underline">
    {text}
  </li>
);

const ActionButton = ({ text }) => (
  <button className="w-full h-8 px-2 bg-red-600 rounded-md sm:w-auto whitespace-nowrap lg:text-lg hover:bg-red-700 font-extralight">
    <span className="text-sm">{text}</span>
  </button>
);

export default Footer;
