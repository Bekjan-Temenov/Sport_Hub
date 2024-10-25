import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarContainer from "../../../../shared/helpers/NavBarContainer";
import log from "../../../../shared/assets/svg/admin_logo.svg";
import delate from "../../../../shared/assets/svg/admin-delete.svg";
import edit from "../../../../shared/assets/svg/admin-edit.svg";
import { fetchAdminHalls, deleteAdminHall } from "../../store/action";
import FullScreenModal from "../../../../shared/FullScreenModal/FullScreenModal";
import EditModal from "./edit/Edit";
import Create from "./create/Create";
import { fetchWorkSchedules } from "../store/action";


function Gym() {
  const dispatch = useDispatch();
  const { halls, status } = useSelector((state) => state.about);
  const { schedules,  error } = useSelector((state) => state.shedules)
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  console.log("Полученные данные залов:", schedules);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchWorkSchedules());
    }
  }, [dispatch, status]);

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  const deleteMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
    setIsEditMode(false)
  }, []);
  
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
    setIsEditMode(true); 
  };
  const handleDelete = (deleteId) => {
    setOpen(true);
    dispatch(deleteAdminHall(deleteId));
  };

  useEffect(() => {
    dispatch(fetchAdminHalls());
  }, [dispatch]);

  return (
    <NavBarContainer>
      <div className="flex flex-col text-white ">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-sans text-2xl font-bold">Залы</h1>
          <button
            onClick={toggleMenu}
            className="bg-[#FE0404] hover:bg-red-700 rounded-md py-1 px-6 font-comfortaa"
          >
            + Добавить
          </button>
        </div>
        {isOpen && (
          <FullScreenModal setIsOpen={setIsOpen}>
            {isEditMode ? (
              <EditModal setIsOpen={setIsOpen} halls={selectedProduct} />
            ) : (
              <Create setIsOpen={setIsOpen} />
            )}
          </FullScreenModal>
        )}
        <hr className="border-[#B6B7BC] border w-full mt-[15px] mb-[50px]" />

        {status === "loading" && <p>Загрузка...</p>}
        {status === "failed" && <p>Ошибка при загрузке залов.</p>}

        <div className="flex flex-col gap-y-[30px]">
          {halls.map((item, index) => (
            <div
              key={index}
              className="flex bg-[#252525] rounded-md items-center justify-between px-[20px] py-[15px]"
            >
              <div className="flex items-center justify-between w-[49%]">
                <div className="flex items-center gap-x-4">
                  <img
                    className="w-[35px] h-[35px] mb-[5px]"
                    src={log}
                    alt=""
                  />
                  <h1 className="text-2xl font-semibold font-comfortaa text-[#FF6600]">
                    {item.title}
                  </h1>
                </div>
                <span>{item.sports}</span>
              </div>

              <div className="flex items-center ml-[50px]">
                <img
                  onClick={deleteMenu}
                  className="cursor-pointer "
                  src={delate}
                  alt=""
                />
                {!open && (
                  <ModalDelete
                    handleDelete={handleDelete}
                    deleteMenu={deleteMenu}
                    item={item.id}
                  />
                )}
                <hr className="w-[1px] h-[36px] mx-[25px] border border-[#B6B7BC]" />
                <img
                  onClick={() => handleEdit(item)}
                  className="cursor-pointer"
                  src={edit}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </NavBarContainer>
  );
}
export const ModalDelete = ({ handleDelete, deleteMenu, item }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20 ">
      <div className="bg-white p-8 rounded-lg shadow-xl w-[250px] md:w-[350px] h-[250px] flex flex-col justify-between">
        <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">
          Удалить рекламу?
        </h2>
        <p className="mb-6 text-center text-gray-600">
          Вы уверены, что хотите удалить этот элемент? Это действие нельзя
          отменить.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={deleteMenu}
            className="px-6 py-2 text-sm font-medium text-gray-800 transition-all duration-300 ease-in-out bg-gray-200 rounded-full hover:bg-gray-300"
          >
            Нет
          </button>
          <button
            onClick={() => handleDelete(item)}
            className="px-6 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out bg-red-600 rounded-full hover:bg-red-700"
          >
            Да
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gym;
