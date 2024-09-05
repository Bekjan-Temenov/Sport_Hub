import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Container from '../../../shared/helpers/Container';
import slide1 from '../../../shared/assets/img/slide1.png';
import slide2 from '../../../shared/assets/img/slide2.png';
import phoneicon from '../../../shared/assets/svg/phone.svg';
import mapPin from '../../../shared/assets/svg/mapPin.svg';
import instgram from '../../../shared/assets/svg/instagram.svg';
import vector from '../../../shared/assets/svg/vector.svg';

const SliderHome = () => {
    return (
        <div className="w-full h-full">
            <style>
                {`
                    .swiper-button-next::after, 
                    .swiper-button-prev::after {
                        font-size: 20px; 
                    }
                `}
            </style>
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
                        style={{
                            backgroundImage: `url(${slide1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center top',
                            backgroundRepeat: 'no-repeat',
                        }}
                        className="relative w-full h-[440px] md:h-[983px] flex items-center justify-center bg-fixed md:bg-attachment-scroll"
                    >
                        <Container>
                            <div className="flex flex-col justify-center gap-2">        
                                <div className='flex p-[15px]'>
                                    <img src={phoneicon} alt="Phone Icon" />
                                    <span className='text-white text-[12px] md:text-[18px]'>+996 700-72-77-45</span>
                                </div>
                                <div className='w-[220px] md:w-[440px]'>
                                    <h1 className='text-white text-[24px] md:text-[40px] font-bold leading-tight mt-[30px] md:mt-[50px]'>
                                        БЕРЕМ НАГРУЗКУ НА СЕБЯ
                                    </h1>
                                </div>
                                <div className="">
                                    <button className='w-[200px] md:w-[350px] h-[30px] md:h-[50px] bg-[#FE0404] rounded-xl text-white text-[12px] md:text-[20px]'>
                                        РАССРОЧКА 6/9/12 МЕСЯЦЕВ
                                    </button>
                                </div>
                                <ul className="list-disc pl-4 md:pl-6 mb-6 text-white mt-4 md:mt-[40px] text-[14px] md:text-[18px]">
                                    <li>Тренажерный зал</li>
                                    <li>Фитнес</li>
                                    <li>Работаем 24/7</li>
                                </ul>
                                <div className='flex gap-2 mt-[10px] '>
                                    <img src={mapPin} alt="Map Pin" className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]" />
                                    <p className='text-white text-[12px] md:text-[14px]'>
                                        г. Батайск, M. Горького, д. 84
                                    </p>
                                </div>
                                <button className='text-white flex gap-2 justify-center w-[160px] p-2 items-center border border-white md:p-[6px] rounded-xl'>
                                    <img src={instgram} alt="Instagram Icon" className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]" />Мы в Instagram
                                </button>
                            </div>
                        </Container>
                        <div className="absolute bottom-0 left-0 flex justify-center w-full pb-4">
                            <div className="pagination"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${slide2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center top',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className="relative bg-[#030305] w-full h-[400px] md:h-[400px] lg:h-[600px] flex items-start justify-start md:justify-end transform scale-x-[-1] md:scale-x-100"
                    >
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <Container>
                            <div className='relative z-10 flex flex-col justify-start md:justify-end transform scale-x-[-1] md:scale-x-100'>
                                <div className='flex p-4 md:p-[15px] justify-start md:justify-end w-full'>
                                    <img src={phoneicon} alt="Phone Icon" />
                                    <span className='text-white text-[12px] md:text-[18px] ml-2 md:ml-4'>+996 700-72-77-45</span>
                                </div>
                                <div className='w-[220px] md:w-[440px] flex justify-start md:justify-end'>
                                    <h1 className='text-white text-[24px] md:text-[40px] font-bold leading-tight mt-[30px] md:mt-[50px]'>
                                        ИНТЕРЕСНЫЕ УПРАЖНЕНИЯ ДЛЯ НОВИЧКОВ
                                    </h1>
                                </div>
                                <div className="flex justify-start md:justify-end">
                                    <button className='w-[200px] md:w-[350px] h-[30px] md:h-[50px] bg-[#FE0404] rounded-xl text-white text-[12px] md:text-[20px]'>
                                        ЗАПИСАТЬСЯ НА ПЕРВУЮ ТРЕНИРОВКУ
                                    </button>
                                </div>
                                <ul className="list-disc pl-4 md:pl-6 mb-6 text-white mt-4 md:mt-[40px] text-[14px] md:text-[18px]">
                                    <li>Удобный график</li>
                                    <li>Персональный подход</li>
                                    <li>Групповые занятия</li>
                                </ul>
                                <div className='flex gap-2 mt-[10px] justify-start md:justify-end'>
                                    <img src={vector} alt="Vector Icon" className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]" />
                                    <p className='text-white text-[12px] md:text-[14px]'>
                                        г. Батайск, M. Горького, д. 84
                                    </p>
                                </div>
                            </div>
                        </Container>
                        <div className="absolute bottom-0 left-0 flex justify-center w-full pb-4">
                            <div className="pagination"></div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="absolute flex items-center justify-center m-4 text-white transition duration-300 transform -translate-y-1/2 rounded-full shadow-lg swiper-button-next p-7 custom-swiper-button md:bg-red-900 md:w-12 md:h-12 hover:bg-white hover:text-red-900 right-2 top-1/2"></div>
                <div className="absolute flex items-center justify-center m-4 text-white transition duration-300 transform -translate-y-1/2 rounded-full shadow-lg swiper-button-prev p-7 custom-swiper-button md:bg-red-900 md:w-12 md:h-12 hover:bg-white hover:text-red-900 left-2 top-1/2"></div>
            </Swiper>
        </div>
    );
};

export default SliderHome;
