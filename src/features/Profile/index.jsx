import React, { useCallback, useState } from "react";
import Profile from "./ui/Profile";
import NavBarContainer from "../../shared/helpers/NavBarContainer";
import PersonaInformation from "./ui/PersonaInformation";
import ModalProfile from "./ui/ModalProfile";

function index() {
  const [open , setOpen] = useState(false)
  
  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev)
  })

  return (
    <NavBarContainer>
      <div className="flex flex-col w-full gap-[25px]">
        <h1 className="font-sans text-2xl font-bold">Профиль</h1>
        <hr className=" border border-[#B6B7BC] rounded-full my-7"></hr>
        <Profile handleOpen={handleOpen}/>
        <PersonaInformation/>
        {open && <ModalProfile setOpen={setOpen}/>}
      </div>
    </NavBarContainer>
  );
}
export default index;
