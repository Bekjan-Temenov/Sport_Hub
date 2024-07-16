import React from "react";
import Container from "../../shared/helpers/Container";
import logo from "../../shared/assets/header_logo.svg";
import player from "../../shared/assets/player.svg";

function Header() {
  return (
    <Container>
      <div className="flex  justify-between items-center text-white my-5 border">
        <img className="max-h-[30px]" src={logo} alt="" />
        <ul className="flex items-center justify-between gap-8">
          <li className="cursor-pointer hover:text-red-600">Главная</li>
          <li className="cursor-pointer hover:text-red-600">Спорт</li>
          <li className="cursor-pointer hover:text-red-600">Рекламы</li>
        </ul>
        <button className="bg-red-600 h-[30px]  rounded-md cursor-pointer hover:bg-red-700 font-extralight  px-[20px]">
          Разместить рекламу
        </button>
        <select className=" rounded-md text-center flex items-center border px-3 text-center">
          <option> Рус</option>
          <option selected>Кыр</option>
          <option>Англ</option>
        </select>
        <button className=" -white rounded-md px-[1 9px] text-lg  border">
          Регистрация
        </button>
        <div className=" h-[35px] p-2 box-border border border-red-600 rounded-md flex justify-center cursor-pointer items-cenetr ">
          <img className="" src={player} />
        </div>
      </div>
    </Container>
  );
}

export default Header;
