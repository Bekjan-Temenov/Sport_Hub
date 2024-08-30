import React, { useEffect, useState } from "react";
import ExpandLessTwoToneIcon from "@mui/icons-material/ExpandLessTwoTone";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";
import home from "../../shared/assets/svg/home.svg";
import reklama from "../../shared/assets/svg/reklama.svg";
import sport from "../../shared/assets/svg/sport.svg";
import oplata from "../../shared/assets/svg/oplata.svg";
import ModalProfile from "./modalProfile";
import { Link } from "react-router-dom";
import { sports } from "../../shared/api/api";

const Burger = ({ setOpen, sortRef }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setOpen(false);
        console.log("Click outside Burger, closing menu");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen, sortRef]);

  const UserProfile = () => (
    <div className="flex flex-col items-start">
      <img
        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
        alt="User"
        className="w-12 h-12 border-2 border-red-600 rounded-full"
      />
      <div className="font-bold">Бекенова Сабина</div>
      <div className="text-sm text-gray-400">Бишкек, Кыргызстан</div>
    </div>
  );

  const MenuItem = ({ text, isDropdown }) => (
    <div className="relative ">
      <Link to="/">
        <button
          onClick={() => setOpen(false)}
          className="flex items-center w-full p-3 mb-2 border-2 rounded-lg"
        >
          <img className="w-5 h-5 mr-2" src={home} alt={text} />
          <NavItem text={"Главная"} />
        </button>
      </Link>
      <button
        onClick={() => setOpen(false)}
        className="flex items-center w-full p-3 mb-2 border-2 rounded-lg"
      >
        <img className="w-5 h-5 mr-2" src={reklama} alt={text} />
        <NavItem text={"Реклама"} />
      </button>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center w-full p-3 mb-2 border-2 rounded-lg"
      >
        <img className="w-5 h-5 mr-2 " src={sport} alt={text} />
        <NavItem text={"Спорт"} />
        {isDropdownOpen ? (
          <ExpandMoreTwoToneIcon className="w-5 h-5 ml-auto text-gray-400" />
        ) : (
          <ExpandLessTwoToneIcon className="w-5 h-5 ml-auto text-gray-400" />
        )}
      </button>
      {isDropdownOpen && (
        <div className="left-0 w-full mt-1 bg-[#1E1D1D] border rounded-lg top-full">
          {sports.map((option, index) => (
            <Link to={`/zally/${option.id}`}>
              <button
                key={index}
                onClick={() => setOpen(false)}
                className="w-full p-2 text-left hover:bg-white hover:text-black"
              >
                {option.name}
              </button>
            </Link>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(false)}
        className="flex items-center w-full p-3 mb-2 border-2 rounded-lg"
      >
        <img className="w-5 h-5 mr-2" src={oplata} alt={text} />
        <NavItem text={"Оплата"} />
      </button>
    </div>
  );

  return (
    <div className="w-[100%] h-[700%] top-0 left-0 z-10 absolute">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="relative p-3 pt-[100px] h-auto z-11 text-white bg-[#18171A] w-[75%]">
        <div className="flex justify-between">
          <UserProfile />
          <button onClick={() => setIsProfile(!isProfile)}>
            {isProfile ? (
              <ExpandMoreTwoToneIcon className="w-5 h-5 ml-auto text-gray-400" />
            ) : (
              <ExpandLessTwoToneIcon />
            )}
          </button>
        </div>
        <hr className="my-3 border border-red-600" />
        <div className="mt-4">
          {isProfile && <ModalProfile  setOpen={setOpen}/>}
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ text }) => (
  <span className="cursor-pointer hover:text-red-600 hover:underline">
    {text}
  </span>
);

export default Burger;
