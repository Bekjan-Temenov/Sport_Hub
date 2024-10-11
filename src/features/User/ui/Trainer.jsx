import { useState } from "react";
import NavBarContainer from "../../../shared/helpers/NavBarContainer";
import TrainerModal from "./Couach";

const Trainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <NavBarContainer>
      <div className="border-b border-[#B6B7BC] flex justify-between items-center">
        <h1 onClick={handleOpen} className="text-[34px] font-bold">
          Тренеры
        </h1>
        <button
          onClick={handleOpen}
          className="w-[204px] h-[40px] bg-red-700 rounded-[8px] "
        >
          +Добавить
        </button>
      </div>
      <div className=" h-[45px]  text-[24px] mt-5  font-bold text-black bg-slate-200 rounded-[8px] px-10 flex justify-between items-center">
        <p> Имя</p>
        <p>Email</p>
        <p>Спорт</p>
      </div>
      <div className="border-b font-normal border-[#B6B7BC]  flex justify-around  items-center p-3 ">
        <p className="flex items-center gap-2">
          {" "}
          <img
            className="w-10 rounded-[50px]"
            src="https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395236.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1727222400&semt=ais_hybrid"
            alt=""
          />
          Махмудов Термирлан
        </p>
        <p>maxmudovtemir@gmail.com</p>
        <p>волейбол</p>
      </div>
      <TrainerModal isOpen={toggleModal} /> {/* Добавьте компонент Modal */}
    </NavBarContainer>
  );
};

export default Trainer;
