import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Импортируем useDispatch и useSelector
import NavBarContainer from "../../../shared/helpers/NavBarContainer";
import log from "../../../shared/assets/svg/admin_logo.svg";
import delate from "../../../shared/assets/svg/admin-delete.svg";
import edit from "../../../shared/assets/svg/admin-edit.svg";
import ModalGym from "./ModalGym";
import { fetchAdminHalls , deleteAdminHall} from "../store/action";


function Gym() {
  const dispatch = useDispatch(); // Создаем dispatch
  const { halls, status } = useSelector((state) => state.section); // Получаем данные из Redux
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleDeleteHall = (hallId) => {
    dispatch(deleteAdminHall(hallId)); // Удаление зала
  };

  useEffect(() => {
    // Вызываем fetchAdminHalls при монтировании компонента
    dispatch(fetchAdminHalls());
  }, [dispatch]);

  return (
    <NavBarContainer>
      <div className="flex flex-col text-white">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-sans text-2xl font-bold">Залы</h1>
          <button
            onClick={toggleMenu}
            className="bg-[#FE0404] hover:bg-red-700 rounded-md py-1 px-6 font-comfortaa"
          >
            + Добавить
          </button>
        </div>
        {isOpen && <ModalGym setIsOpen={setIsOpen} />}
        <hr className="border-[#B6B7BC] border w-full mt-[15px] mb-[50px]" />

        {status === 'loading' && <p>Загрузка...</p>}
        {status === 'failed' && <p>Ошибка при загрузке залов.</p>}

        <div className="flex flex-col gap-y-[30px]">
          {halls.map((item, index) => (
            <div
              key={index}
              className="flex bg-[#252525] rounded-md items-center justify-between px-[20px] py-[15px]"
            >
              <div className="flex items-center justify-between w-[49%]">
                <div className="flex items-center gap-x-4">
                  <img className="w-[35px] h-[35px] mb-[5px]" src={log} alt="" />
                  <h1 className="text-2xl font-semibold font-comfortaa text-[#FF6600]">
                    {item.title}
                  </h1>
                </div>
                <span>{item.sports}</span>
              </div>

              <div className="flex items-center ml-[50px]">
                <img className="cursor-pointer" src={delate} alt="Удалить" onClick={() => handleDeleteHall(item.id)} />
                <hr className="w-[1px] h-[36px] mx-[25px] border border-[#B6B7BC]" />
                <img className="cursor-pointer" src={edit} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </NavBarContainer>
  );
}

export default Gym;
