import React from "react";
import Container from "../../shared/helpers/Container";

function Header() {
  return (
    <Container>
      <div className="flex justify-between text-white border">
        <img className="" src="" alt="" />
        <ul className="flex items-center gap-3">
          <li  className="cursor-pointer hover:text-red-600">Главная</li>
          <li className="cursor-pointer hover:text-red-600">Спорт</li>
          <li className="cursor-pointer hover:text-red-600">Рекламы</li>
        </ul>
        <button className="bg-red-600 rounded-md cursor-pointer hover:bg-red-700 font-extralight py-[2px] px-[20px]">
          Разместить рекламу
        </button>
        <select>
          
        </select>
      </div>
    </Container>
  );
}

export default Header;