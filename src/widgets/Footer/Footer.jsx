import React from "react";
import Container from "../../shared/helpers/Container";
import { NavItem } from "../Header/Header";
import { ActionButton } from "../Header/Header";
import log from "../../shared/assets/svg/footer_logo.svg";
import facebook from "../../shared/assets/svg/footer_facebook.svg";
import telega from "../../shared/assets/svg/footeer_telega.svg";
import insta from "../../shared/assets/svg/footer_insta.svg";

function Footer() {
  return (
    <div className="bg-[url('../../shared/assets/png/futter.png')]  bg-cover bg-center text-white  py-[48px]">
      <Container>
        <div className="flex flex-col gap-14">
          <div className="flex items-center px-[50px] justify-between ">
            <img src={log} alt="logo" />
            <ActionButton text="Разместить рекламу" />
          </div>
          <div className=" w-[40%] mx-auto">
            <nav className="hidden gap-3 text-sm no-underline list-none md:flex md:items-center md:justify-between md:block lg:gap-11 lg:text-lg">
              <NavItem text="Главная" />
              <NavItem text="Спорт" />
              <NavItem text="Рекламы" />
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

export default Footer;
