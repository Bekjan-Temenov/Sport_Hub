import React from "react";

const FullScreenModal = ({ children , setIsOpen}) => {
  return (
    <div className="w-[100%] h-[170%]  top-0 left-0 z-50 absolute">
      <div onClick={() => setIsOpen(false)} className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="bg-[#222224] top-[58px] w-[60%] right-[20%]  absolute flex flex-col px-[60px] py-[40px] rounded">
        {children}
      </div>
    </div>
  );
};

export default FullScreenModal;
