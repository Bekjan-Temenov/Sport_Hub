import React from "react";

function NavBarContainer({ children }) {
  return (
    <div
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      className="max-w-[996px] mb-[20px] py-[15px] h-[850px] px-[40px] overflow-y-auto bg-[#0C192E7A] "
    >
      {children}
    </div>
  );
}

export default NavBarContainer;
