import React from "react";
import NavBarContainer from "../../../shared/helpers/NavBarContainer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import protection from "../../../shared/assets/svg/protection.svg";
import card from "../../../shared/assets/svg/card.svg";
import { Link } from "react-router-dom";

function Card() {
  return (
    <NavBarContainer>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Link to="/profile/payment">
            <KeyboardBackspaceIcon />
          </Link>
          <img src={protection} />
          <h1 className="text-2xl">Добавить банковсскую карту</h1>
        </div>
        <hr></hr>
        <Inputs />
      </div>
    </NavBarContainer>
  );
}
const Inputs = () => {
  return (
    <div className="flex flex-col w-[60%]  gap-7 ml-[30px]">
      <div className="flex flex-col gap-3 mt-7">
        <label className="">Имя владельца карты *</label>
        <input
          className="w-full px-2 py-4 border rounded-md bg-inherit"
          type="text"
        />
      </div>
      <div className="relative flex flex-col gap-3">
        <label className="">Номер карты *</label>
        <img
          className="w-[65px] absolute top-10 left-3  h-[50px]"
          src={card}
          alt="img"
        />
        <input
          className="w-full py-4 pl-[91px] pr-2 border rounded-md bg-inherit"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label className="">Дата истечения срока действия *</label>
        <input
          className="w-full px-2 py-4 border rounded-md bg-inherit"
          placeholder="MM/YY"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label className="">CVC/CVV * </label>
        <input
          className="w-full px-2 py-4 border rounded-md bg-inherit"
          type="text"
        />
      </div>
      <Link to="/profile/pay">
        <button className="text-center mt-9 bg-[#FE0404] hover:bg-red-700 w-full px-[55px] py-[10px] rounded-md">
          Сохранить
        </button>
      </Link>
    </div>
  );
};
export default Card;
