
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux"; // Импортируем useDispatch и useSelector
import NavBarContainer from '../../../shared/helpers/NavBarContainer';

const Paymentn = () => {
  return (
    function payments() {
      const dispatch = useDispatch(); // Создаем dispatch
  
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleIsOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
      }, []);
     
    <NavBarContainer>
      <h1 onClick={toggleIsOpen} className='text-2xl mb-2 border-b p-2'>Оплата</h1>
      <span className='flex justify-center items-end text-[20px] p-2 mt-7'>08.02.2024</span>
      <div className='w-[872px] h-[40px] bg-white rounded-t-3xl border-b p-4'>
        <h2 className='text-black w-[872px]'>Оплатил(a)! Аскат Ырыскелдиевич</h2>
      </div>
      <div className='w-[872px] h-[100px] bg-white rounded-b-3xl border-b p-5'>
        <div className="flex">
          <span className="text-black font-semibold text-[16px]">Спорт:</span>
          <span className="text-[#000000] ml-1 text-[16px]">Баскетбол</span>
        </div>
        <div className="flex mt-1">
          <span className="text-black font-semibold text-[16px]">Цена:</span>
          <span className="text-[#000000] ml-1 text-[16px]">2948 сом</span>
        </div>
        <p className='flex justify-end text-[#2A2424] text-[15px]'>16:00</p>
      </div>
    </NavBarContainer>
    }
  );
};



export default Paymentn;
