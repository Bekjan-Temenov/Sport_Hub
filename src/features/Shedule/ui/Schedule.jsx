import React, { useCallback, useState } from "react";
import NavBarContainer from "../../../shared/helpers/NavBarContainer";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Calendar from "./Calendar";
import ModalJoinClass from "./ModalJoinClass";
import ModalOplata from "./ModalOplata";
function Schedule() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
    setOpen(!false);
  };
  const handleModal = () => {
    setIsOpen(true);
    setOpen(false);
  };
  

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  
  return (
    <NavBarContainer>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-sans text-2xl font-bold">Расписание</h1>
          <div className="flex items-center justif-between gap-x-1">
            <KeyboardArrowLeftIcon className="cursor-pointer" />
            <span className="text-xs">11-16-Январь 2024</span>
            <KeyboardArrowRightIcon className="cursor-pointer" />
          </div>
          <button
            onClick={toggleMenu}
            className="bg-[#FE0404] hover:bg-red-7  00 rounded-md  py-1 px-6 font-comfortaa"
          >
            Записаться на кружок
          </button>
        </div>
        {isOpen && (
          <ModalJoinClass handleClick={handleClick} setIsOpen={setIsOpen} />
        )}
        {open && <ModalOplata setIsOpen={handleModal}  setOpen={setOpen}/>}
        <hr className="border-[#B6B7BC] m-4 border w-full  " />
        <Calendar />
      </div>
    </NavBarContainer>
  );
}

export default Schedule;
