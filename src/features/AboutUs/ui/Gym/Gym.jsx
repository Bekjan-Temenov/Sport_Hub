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
import { ModalDelete } from "./ModalDelete";
import SearchInput from "../../../../shared/SearchInput/SearchInput";

function Gym() {
  const dispatch = useDispatch();
  const { halls, status } = useSelector((state) => state.about);
  const { error } = useSelector((state) => state.shedules);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleSearch = useCallback(
    (query) => {
      const params = { title : query } 
  
      dispatch(fetchAdminHalls(params));
      console.log(params);
    },
    [dispatch]
  );
  
  useEffect(() => {
      dispatch(fetchWorkSchedules());
    
  }, [dispatch]);

 

  const deleteMenu = useCallback((id) => {
    setCurrentId(id);
  }, []);

  const handleDelete = useCallback(
    (deleteId) => {
      dispatch(deleteAdminHall(deleteId));
      setCurrentId(null);
    },
    [dispatch]
  );

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
    dispatch(fetchAdminHalls());
  }, [dispatch, isOpen]);
 
  return (
    <NavBarContainer>
      <div className="flex flex-col text-white ">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-sans text-2xl font-bold">Залы</h1>
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
          {halls.map((item) => (
            <div
              key={item.id}
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

export default Gym;