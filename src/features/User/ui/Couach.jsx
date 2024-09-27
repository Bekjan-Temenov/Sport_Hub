import React from 'react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div  className=" absolute top-0 bg-black bg-opacity-50 left-0  w-full h-[150%]">
            <div className="w-[610px] h-[511px] absolute mx-[25%] my-[7%] border  rounded-[10px] bg-[#222224]">
                <div className='border  border-red-500 py-4  bg-[#FE0404] rounded-[10px] flex justify-center '>
                    <h1 className='text-[32] font-normal '>Добавить тренера</h1>
                </div>
                <div className=" grid grid-cols-2 mx-5   gap-4 mt-4">
                    <div className="flex flex-col w-full  gap-2">
                        <label>Имя</label>
                        <input type="text" placeholder="" className="border pl-3 py-2  w-full bg-[#131313] rounded-[8px]" />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label>Фамилия</label>
                        <input type="text" placeholder="" className="border pl-3 py-2  w-full bg-[#131313] rounded-[8px]" />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label>Email</label>
                        <input type="text" placeholder="" className="border pl-3 py-2  w-full bg-[#131313] rounded-[8px]" />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label>Телефон</label>
                        <input type="text" placeholder="" className="border pl-3 py-2  w-full bg-[#131313] rounded-[8px]" />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label>Спорт</label>
                        <input type="text" placeholder="" className="border pl-3 py-2  w-full bg-[#131313] rounded-[8px]" />
                    </div>
                </div>
                <div className=' mt-5 flex justify-end space-x-3'>
                    <button onClick={onClose} className='w-[152px] h-[40px] bg-red-700 rounded-[10px]'>Назад</button>
                    <button className='w-[204px] h-[40px] bg-red-700 rounded-[10px]'>Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
