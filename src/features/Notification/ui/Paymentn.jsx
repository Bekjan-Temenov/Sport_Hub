// 
import NavBarContainer from '../../../shared/helpers/NavBarContainer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPaymentData } from "../store/action"; // Импортируем action

const Payment = () => {
    const dispatch = useDispatch();
    
    // Используем правильный selector для доступа к состоянию
    const { payments, status, error } = useSelector((state) => state.payments);
    
    // Отправляем action для получения данных о платежах при загрузке компонента
    useEffect(() => {
        console.log('Компонент загружен, отправляем getPaymentData');
        dispatch(getPaymentData());
    }, [dispatch]);

    // Логируем текущее состояние
    console.log('Состояние payments:', payments);
    console.log('Статус загрузки:', status);
    console.log('Ошибка:', error);

    // Обрабатываем состояние загрузки и ошибки
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    // Основной рендеринг компонента
    return (
        <NavBarContainer>
            <h1 
                onClick={() => {
                    console.log('Кнопка обновления данных нажата');
                    dispatch(getPaymentData());
                }} 
                className='text-2xl mb-2 border-b p-2'>
                Оплата  
            </h1>   
            <span className='flex justify-center items-end text-[20px] p-2 mt-7'>
                08.02.2024
            </span>
            <div className='w-[872px] h-[40px] bg-white rounded-t-3xl border-b p-4'>
                <h2 className='text-black w-[872px]'>
                    Оплатил(a)! Аскат Ырыскелдиевич
                </h2>
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
                <p className='flex justify-end text-[#2A2424] text-[15px]'>
                    16:00
                </p>
            </div> 
        </NavBarContainer>
    );
};

export default Payment;
