// src/features/Home/ui/SliderHome.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Container from '../../../shared/helpers/Container';
import slide1 from '../../../shared/assets/img/Rectangle 4.png';
import slide2 from '../../../shared/assets/img/slide2.png';
import phoneicon from '../../../shared/assets/svg/phone.svg';
import mapPin from '../../../shared/assets/svg/mapPin.svg';
import instgram from '../../../shared/assets/svg/instagram.svg';
import vector from '../../../shared/assets/svg/vector.svg';

const SliderHome = () => {
    return (
        <div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        style={{ backgroundImage: `url(${slide1})` }}
                        className="relative w-full border h-[440px] md:h-[983px] bg-cover bg-center bg-fixed md:bg-attachment-scroll flex items-center justify-center md:w-auto"
                    >
                        <Container>
                            <div>
                                <div className='flex p-[30px]'>
                                    <img src={phoneicon} alt="Phone Icon" />
                                    <span className='text-white text-[15px] md:text-[24px]'>+996 700-72-77-45</span>
                                </div>
                                <div className='w-[300px] md:w-[640px] h-auto md:h-[146px]'>
                                    <h1 className='text-white text-[32px] md:text-[67px] font-bold leading-tight mt-[60px] md:mt-[90px] ml-[5px] md:ml-[30px]'>
                                        БЕРЕМ НАГРУЗКУ НА СЕБЯ
                                    </h1>
                                </div>
                                <div className="mt-[20px] md:mt-[70px] ml-[10px] md:ml-[30px]">
                                    <button className='w-[270px] md:w-[474px] h-[40px] md:h-[66px] bg-[#FE0404] rounded-xl text-white text-[15px] md:text-[27px]'>
                                        РАССРОЧКА 6/9/12 МЕСЯЦЕВ
                                    </button>
                                </div>
                                <ul className="list-disc pl-4 md:pl-6 mb-6 text-white mt-4 md:mt-[70px] ml-4 md:ml-[40px] text-[18px] md:text-[24px]">
                                    <li>Тренажерный зал</li>
                                    <li>Фитнес</li>
                                    <li>Работаем 24/7</li>
                                </ul>
                                <div className='flex gap-2 mt-[40px] md:mt-[90px] ml-[30px]'>
                                    <img src={mapPin} alt="Map Pin" className="w-[20px] md:w-[30px] h-[20px] md:h-[30px]" />
                                    <p className='text-white text-[13px] md:text-[18px]'>
                                        г. Батайск, M. Горького, д. 84
                                    </p>
                                </div>
                                <div className='flex flex-col ml-[30px] mt-1 md:flex-row md:justify-between md:mt-[90px]'>
                                    <button className='text-white flex gap-2 justify-center w-[200px] h-[40px] items-center border border-white md:p-[10px] rounded-xl'>
                                        <img src={instgram} alt="Instagram Icon" className="w-[20px] md:w-[30px] h-[20px] md:h-[30px]" />Мы в Instagram
                                    </button>
                                    <button className='flex w-[208px] h-[40px] bg-[#E41C26] text-white text-[20px] justify-center mt-[20px] md:mt-0 items-center gap-3 rounded-xl'>
                                        Смотреть все <img src={vector} alt="Arrow Icon" className="w-[20px] md:w-[30px] h-[20px] md:h-[30px]" />
                                    </button>
                                </div>
                            </div>
                        </Container>
                        <div className="absolute bottom-0 left-0 flex justify-center w-full pb-4">
                            <div className="pagination"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        style={{ backgroundImage: `url(${slide2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        className="relative bg-[#030305]  w-full h-[440px] md:h-[983px] flex items-start justify-start md:justify-end transform scale-x-[-1] md:scale-x-100"
                    >
                        <Container>
                            <div className='flex flex-col justify-start md:justify-end transform scale-x-[-1] md:scale-x-100'>
                                <div className='flex p-4 md:p-[30px] justify-start md:justify-end w-full'>
                                    <img src={phoneicon} alt="Phone Icon" />
                                    <span className='text-white text-[15px] md:text-[24px] ml-2 md:ml-4'>+996 700-72-77-45</span>
                                </div>
                                <div className='w-full md:w-[823px] text-left md:text-right ml-0 md:ml-auto'>
                                    <h1 className='text-white text-[32px] md:text-[67px] font-bold leading-tight mt-[40px] md:mt-[70px]'>Более 20 различных групповых программ</h1>
                                </div>
                                <p className='w-[233px] md:w-[623px] text-[12px] md:text-[24px] text-white mt-4 md:mt-[30px] text-left md:text-right ml-0 md:ml-auto'>
                                    Огромный выбор групповых программ, которые проведут наши тренеры. Современный зал и позитивная атмосфера принесет не только пользу, но и доставит удовольствие от тренировок.
                                </p>
                                <div className='flex justify-start md:justify-end gap-2 mt-[40px] md:mt-[90px] ml-0 md:ml-auto'>
                                    <img src={mapPin} alt="Map Pin" />
                                    <p className='text-white text-[13px] md:text-[18px]'>г. Батайск, M. Горького, д. 84</p>
                                </div>
                                <div className='flex justify-start md:justify-end mt-4 md:mt-[20px] ml-0 md:ml-auto'>
                                    <button className='text-white flex gap-2 justify-center items-center border border-white p-2 md:p-[10px] rounded-xl'>
                                        <img src={instgram} alt="Instagram Icon" />Мы в Instagram
                                    </button>
                                </div>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>






                <div className="absolute flex items-center justify-center m-4 text-white transition duration-300 transform -translate-y-1/2 rounded-full shadow-lg swiper-button-next p-7 custom-swiper-button md:bg-red-900 md:w-12 md:h-12 hover:bg-white hover:text-red-900 right-2 top-1/2"></div>
                <div className="absolute flex items-center justify-center m-4 text-white transition duration-300 transform -translate-y-1/2 rounded-full shadow-lg swiper-button-prev p-7 custom-swiper-button md:bg-red-900 md:w-12 md:h-12 hover:bg-white hover:text-red-900 left-2 top-1/2"></div>
                
            </Swiper>
        </div>
    );
};

export default SliderHome;
