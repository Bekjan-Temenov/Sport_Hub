import React, { useCallback, useEffect, useState } from "react";
import mapPin from "../../../shared/assets/svg/mapPin.svg";
import instgram from "../../../shared/assets/svg/instagram.svg";
import phoneicon from "../../../shared/assets/svg/phone.svg";
import NavBarContainer from "../../../shared/helpers/NavBarContainer";
import delate from "../../../shared/assets/svg/admin-delete.svg";
import edit from "../../../shared/assets/svg/admin-edit.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAdminAdversting,
  fetchAdminAdversting
} from "../store/action";
import { Link } from "react-router-dom";
import FullScreenModal from "../../../shared/FullScreenModal/FullScreenModal";
import Create from "./create/Create";
import Edit from "./edit/Edit";

function Adversting() {
  const dispatch = useDispatch();
  const { adversting } = useSelector((state) => state.adversting);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
    setIsEditMode(false); // Reset to create mode when toggling
  }, []);

  const deleteMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleDelete = (deleteId) => {
    setOpen(true);
    dispatch(deleteAdminAdversting(deleteId));
  };

 
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
    setIsEditMode(true); // Set edit mode
  };
  useEffect(() => {
    dispatch(fetchAdminAdversting());
  }, [dispatch]);

  return (
    <NavBarContainer>
      <div className="flex flex-col items-center gap-y-[50px] ">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-sans text-2xl font-bold">Мои рекламы</h1>
          <button
            onClick={toggleMenu}
            className="bg-[#FE0404] hover:bg-red-7  00 rounded-md  py-1 px-6 font-comfortaa"
          >
            + Добавить
          </button>
        </div>
        {isOpen && (
          <FullScreenModal setIsOpen={setIsOpen}>
          {isEditMode ? ( // Conditional rendering based on mode
            <Edit setIsOpen={setIsOpen} adversting={selectedProduct} />
          ) : (
            <Create setIsOpen={setIsOpen} />
          )}
        </FullScreenModal>
        )}

        <hr className="border-[#B6B7BC] border w-full mt-[15px] mb-[50px]" />
        {adversting.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full "
          >
            <div className="flex flex-col w-full">
              <div className="bg-[#FE0202] ml-[10%] w-[40%] h-[3px] "></div>
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),url(${item.file})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  backgroundRepeat: "no-repeat",
                }}
                className="pl-[40px] py-5 w-full"
              >
                <div className="flex flex-col justify-center gap-2">
                  <div className="flex p-[15px]">
                    <img src={phoneicon} alt="Phone Icon" />
                    <span className="text-white text-[12px]  md:text-[18px]">
                      {item.phone}
                    </span>
                  </div>
                  <div className="w-[220px] md:w-[440px]">
                    <h1 className="text-white font-orelega text-[24px] md:text-[40px]  leading-tight mt-[30px] md:mt-[0px]">
                      {item.title}
                    </h1>
                  </div>
                  <div className="">
                    <button className="  bg-[#FE0404] px-7 py-1 rounded-full text-white text-[12px] md:text-[17px]">
                      РАССРОЧКА {item.installment_plan} МЕСЯЦЕВ
                    </button>
                  </div>
                  <ul className="list-disc pl-4 md:pl-6  text-white mt-4 md:mt-[10px] text-[14px] md:text-[18px]">
                    <li>{item.title1}</li>
                    <li>{item.title2}</li>
                    <li>{item.title3}</li>
                  </ul>
                  <div className="flex gap-2 ">
                    <img
                      src={mapPin}
                      alt="Map Pin"
                      className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]"
                    />
                    <p className="text-white text-[12px] md:text-[14px]">
                      {item.address}
                    </p>
                  </div>
                  <Link to={`${item.site_link}`}>
                    <button className="text-white flex gap-2 justify-center w-[160px] p-2 items-center border border-white md:p-[6px] rounded-xl">
                      <img src={instgram} alt="Instagram Icon" className="" />
                      Мы в Instagram
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-[#FE0202] ml-[10%] w-[40%] h-[6px] "></div>
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
    </NavBarContainer>
  );
}

const ModalDelete = ({ handleDelete, deleteMenu, item }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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

export default Adversting;
