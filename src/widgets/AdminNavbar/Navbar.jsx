import React from "react";

function Navbar() {
  return (
    <div className="flex mt-[30px]  w-[957px] justify-end text-white  item-center">
      
      <div className="flex justify-center gap-2 item-center">
        <div className="flex flex-col justify-center text-sm font-comfortaa">
          <span >Бекенова </span>
          <span >Сабина</span>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="User"
          className="w-12 h-12 border-red-600 rounded-full border-[3px]"
        />

        
      </div>
    </div>
  );
}

export default Navbar;
