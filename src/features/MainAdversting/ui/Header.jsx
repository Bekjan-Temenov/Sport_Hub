import React, { useState } from "react";
import Container from "../../../shared/helpers/Container";
import football from "../../../shared/assets/png/MainAdversting.png";
import setting from "../../../shared/assets/svg/setting.svg";
import Select from "./Select";

function Header({ handleClick, isHandle, setOpen, open }) {
  return (
    <Container>
      <div
        style={{
          backgroundImage: `url(${football})`,
        }}
        className="relative flex flex-col md:h-[280px] bg-center h-[170px] items-center text-center text-white  md:flex-row justify-evenly"
      >
        <img
          onClick={() => setOpen(!open)}
          className="absolute right-[30px] hidden md:block top-2 cursor-pointer"
          src={setting}
          alt="icon"
        />
        {!open && <Select setOpen={setOpen} open={open} />}
        <NavItem
          text="Зал"
          isSelected={isHandle === "Зал"}
          onClick={() => handleClick("Зал")}
        />
        <NavItem
          text="Кружки"
          isSelected={isHandle === "Кружки"}
          onClick={() => handleClick("Кружки")}
        />
        <NavItem
          text="Турниры"
          isSelected={isHandle === "Турниры"}
          onClick={() => handleClick("Турниры")}
        />
      </div>
    </Container>
  );
}
const NavItem = ({ text, isSelected, onClick }) => (
  <h1
    onClick={onClick}
    className={`text-2xl font-semibold  cursor-pointer font-comfortaa ${
      isSelected ? "underline text-red-600 " : "no-underline"
    }`}
  >
    {text}
  </h1>
);

export default Header;
