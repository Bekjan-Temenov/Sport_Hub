import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarContainer from "../../../shared/helpers/NavBarContainer";
import TrainerModal from "./TrainerModal";
import { getTrainers } from "../store/action";

const Trainer = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const trainers = useSelector((state) => state.trainers?.trainers);

  useEffect(() => {
    dispatch(getTrainers());
  }, [dispatch]);

  useEffect(() => {
    console.log(trainers);
  }, [trainers]);

  return (
    <NavBarContainer>
      <div className="border-b border-[#B6B7BC] flex justify-between items-center">
        <h1 className="text-[34px] font-bold">Тренеры</h1>
        <button
          onClick={() => setShowModal(true)}
          className="w-[204px] h-[40px] bg-red-700 rounded-[8px]"
        >
          +Добавить
        </button>
      </div>
      <div className="h-[45px] text-[24px] mt-5 font-bold text-black bg-slate-200 rounded-[8px] px-10 flex justify-between items-center">
        <p className="w-1/5">Имя</p>
        <p className="w-1/5">Email</p>
        <p className="w-1/5">Спорт</p>
      </div>
      {trainers && trainers.length > 0 ? (
        trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="border-b font-normal border-[#B6B7BC] flex justify-between items-center p-3 transition duration-300"
          >
            <p className="flex items-center gap-4 w-1/5 text-left">
              <img
                className="w-1/5 h-10 object-cover rounded-full"
                src={trainer.photo}
                alt={`${trainer.first_name}`}
              />
              {`${trainer.first_name} ${trainer.last_name}`}
            </p>
            <p className="w-1/5 text-center">{trainer.email}</p>
            <p className="w-1/5 text-left">{trainer.sport}</p>
          </div>
        ))
      ) : (
        <div className="border-b font-normal border-[#B6B7BC] flex justify-center items-center p-3">
          <p>Нет тренеров для отображения</p>
        </div>
      )}
      {showModal && (
        <TrainerModal
          onClosed={() => setShowModal(false)} // Close modal function
        />
      )}
    </NavBarContainer>
  );
};

export default Trainer;
