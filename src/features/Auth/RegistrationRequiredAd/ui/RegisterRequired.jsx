import React from 'react';
import istockphoto from '../../../../shared/assets/svg/istockphoto.svg';
import Container from '../../../../shared/helpers/Container';
import iconsBack from '../../../../shared/assets/svg/iconsBack.svg';
import { Link } from 'react-router-dom';

const RegisterRequired = () => {
    return (
        <div style={{ backgroundImage: `url(${istockphoto})` }} className='w-full min-h-screen flex items-center justify-center bg-cover bg-center'>
            <Container>
                <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg gap-2 max-w-md">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#FE0404] rounded-full mb-4">
                            <img src={iconsBack} alt="Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <p className="mb-6 text-center text-base sm:text-lg">Для размещения рекламы сначала зарегистрируйтесь.</p>
                        <Link to='/signup' className="w-full py-2 mb-4 text-center text-white border-2 border-[#FE0404] bg-[#FE0404] rounded-lg hover:bg-white hover:text-[#FE0404]">Регистрация</Link>
                        <button className="w-full py-2 text-center text-white border-2 border-[#FE0404] bg-[#FE0404] rounded-lg hover:bg-white hover:text-[#FE0404]">Войти</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RegisterRequired;
