import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarContainer from "../../../../shared/helpers/NavBarContainer";
import { fetchAdminCircles, deleteAdminCircle } from "../../store/action";
import delate from "../../../../shared/assets/svg/admin-delete.svg";
import edit from "../../../../shared/assets/svg/admin-edit.svg";
import FullScreenModal from "../../../../shared/FullScreenModal/FullScreenModal";
import Create from "./create/Create";
import Edit from "./edit/Edit";
import log from "../../../../shared/assets/svg/admin_logo.svg";
import { ModalDelete } from "../Gym/ModalDelete";
import SearchInput from "../../../../shared/SearchInput/SearchInput";

function Section() {
  const dispatch = useDispatch();
  const { circles, status, error } = useSelector((state) => state.about);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  console.log(circles);
  
  const handleSearch = useCallback(
    (query) => {
      const params = { title: query }; 
  
      console.log("Отправляем параметры:", params);
  
      dispatch(fetchAdminCircles(params));
    },
    [dispatch]
  )
  

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
    setIsEditMode(false);
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
    setIsEditMode(true);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAdminCircles());
    }
  }, [status, dispatch]);

  const deleteMenu = useCallback((id) => {
    setCurrentId(id);
  }, []);

  const handleDelete = useCallback(
    (deleteId) => {
      dispatch(deleteAdminCircle(deleteId));
      setCurrentId(null);
    },
    [dispatch]
  );
  useEffect(() => {
    if (!isOpen) {
      dispatch(fetchAdminCircles());
    }
  }, [isOpen, dispatch]);

  return (
    <NavBarContainer>
      <div className="flex flex-col text-white ">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-sans text-2xl font-bold">Кружки</h1>
          <SearchInput onSearch={handleSearch} debounceDelay={500} />
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
              <Edit setIsOpen={setIsOpen} circles={selectedProduct} />
            ) : (
              <Create setIsOpen={setIsOpen} />
            )}
          </FullScreenModal>
        )}
        <hr className="border-[#B6B7BC] border w-full mt-[15px] mb-[50px]" />

        <div className="flex flex-col gap-y-[30px]">
          {status === "loading" && <p>Загрузка кружков...</p>}
          {status === "failed" && <p className="text-red-600">Ошибка: {error}</p>}

          {status === "succeeded" && circles.length > 0
            ? circles.map((item) => (
                <div
                  key={item.id}
                  className="flex bg-[#252525] rounded-md items-center justify-between px-[20px] py-[15px]"
                >
                  <div className="flex items-center justify-between w-[60%]">
                    <div className="flex items-center gap-x-4">
                      <img
                        className="w-[35px] h-[35px] mb-[5px]"
                        src={log}
                        alt="Логотип кружка"
                      />
                      <h1 className="text-2xl font-semibold font-comfortaa text-[#FF6600]">
                        {item.title}
                      </h1>
                    </div>
                    <span>{item.sports}</span>
                  </div>

                  <div className="flex items-center ml-[50px]">
                    <img
                      onClick={() => deleteMenu(item.id)}
                      className="cursor-pointer"
                      src={delate}
                      alt=""
                    />
                    {currentId === item.id && (
                      <ModalDelete
                        handleDelete={handleDelete}
                        closeModal={() => setCurrentId(null)}
                        itemId={item.id}
                      />
                    )}
                    <hr className="w-[1px] h-[36px] mx-[25px] border border-[#B6B7BC]" />
                    <img
                      onClick={() => handleEdit(item)}
                      className="cursor-pointer"
                      src={edit}
                      alt="Редактировать"
                    />
                  </div>
                </div>
              ))
            : status === "succeeded" && <p>Кружков не найдено.</p>}
        </div>
      </div>
    </NavBarContainer>
  );
}

export default Section;
