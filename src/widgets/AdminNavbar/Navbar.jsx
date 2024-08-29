import React from "react";
import Input from "./Input";

function Navbar() {
  return (
    <div className="flex mt-[30px] w-[957px] justify-between text-white  item-center">
      <Input />
      <div className="flex justify-center gap-2 item-center">
        <div className="flex flex-col justify-center text-sm font-comfortaa">
          <span >Бекенова </span>
          <span >Сабина</span>
        </div>
        <img
          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
          alt="User"
          className="w-12 h-12 border-red-600 rounded-full border-[3px]"
        />
      </div>
    </div>
  );
}

export default Navbar;
