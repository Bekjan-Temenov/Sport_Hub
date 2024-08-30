import React from "react";
import search from "../../shared/assets/svg/admin-search.svg";
import input from "../../shared/assets/svg/admin-input.svg";
function Input() {
  return (
    <div
      className="flex items-center gap-[15px]
    "
    >
      <div className="w-[677px] flex h-[47px] rounded-full border-2 border-transparent focus-within:bg-red-600 focus-within:outline-none">
        <img
          className="h-full py-3 pl-6 bg-white rounded-l-full"
          src={input}
          alt=""
        />
        <input
          className="w-full pl-3 text-black rounded-r-full focus:outline-none"
          placeholder=""
          type="search"
        />
      </div>

      <div className="w-[42px] h-[42px] cursor-pointer flex items-center justify-center rounded-full bg-red-600">
        <img src={search} />
      </div>
    </div>
  );
}

export default Input;
