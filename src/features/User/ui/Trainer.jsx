import React, { useState } from 'react';
import NavBarContainer from '../../../shared/helpers/NavBarContainer';
import Modal from './Couach';

const Trainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <NavBarContainer>
      <div className='border-b border-[#B6B7BC] flex justify-between items-center'>
        <h1 onClick={handleOpen} className='text-[34px] font-bold'>Тренеры</h1>
        <button onClick={handleOpen} className='w-[204px] h-[40px] bg-red-700 rounded-[8px] '>+Добавить</button>
      </div>
      <div className='border text-[24] mb-6  font-bold text-black border-red-500 bg-slate-200 rounded-[8px] px-10 flex justify-between'>
        <p>Имя</p>
        <p>Email</p>
        <p>Спорт</p>
      </div>
      <div className='border-b font-normal border-[#B6B7BC] px-10 flex justify-between '>
        <p>Махмудов Термирлан</p>
        <p>maxmudovtemir@gmail.com</p>
        <p>волейбол</p>
      </div>
      <Modal isOpen={isOpen} onClose={handleClose} /> {/* Добавьте компонент Modal */}

    </NavBarContainer>
  );
};

export default Trainer;
