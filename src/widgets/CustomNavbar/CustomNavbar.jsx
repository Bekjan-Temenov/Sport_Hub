import React from "react";
import kalendar from "../../shared/assets/svg/custom_kalendar.svg";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <div className="flex mt-[30px] flex-end  w-[957px] justify-end gap-x-[84px] text-white   item-center">
      <div className="flex items-center justify-between p-1 border rounded-md gap-x-3">
        <img src={kalendar} alt="icon" />
        <span>8 февраль,</span>
        <span>2024 г.</span>
      </div>
      <div className="flex justify-center gap-2 item-center">
        <div className="flex flex-col justify-center text-sm font-comfortaa">
          <span>Бекенова </span>
          <span>Сабина</span>
        </div>
        <Link to="/profile/profile">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="User"
            className="w-12 h-12 border-red-600 rounded-full border-[3px]"
          />
        </Link>
      </div>
    </div>
  );
}
export default CustomNavbar;
