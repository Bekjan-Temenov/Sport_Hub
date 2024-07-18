// src/features/Home/ui/SliderHome.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Container from '../../../shared/helpers/Container'
import slide1 from '../../../shared/assets/img/Rectangle 4.png';
import slide2 from '../../../shared/assets/img/slide2.jpg';
import phoneicon from '../../../shared/assets/svg/phone.svg';
import mapPin from '../../../shared/assets/svg/mapPin.svg'
import instgram from '../../../shared/assets/svg/instagram.svg'
import vector from '../../../shared/assets/svg/vector.svg'

const SliderHome = () => {
    return (
        <Container>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative bg-transparent mt-4">
                        <img src={slide1} alt="Slide Image 1" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white bg-transparent">
                            <div className='absolute flex justify-center items-center bg-transparent w-[214px] h-[24px] space-x-2 mt-5'>
                                <img className='bg-transparent' src={phoneicon} alt="" />
                                <span className="text-lg bg-transparent">+996 700-72-77-45</span>
                            </div>
                            <h1 className="text-[67px] w-[596px] h-[100px] mb-[300px] font-bold bg-transparent">БЕРЕМ НАГРУЗКУ
                                НА СЕБЯ</h1>
                            <button className="bg-[#FE0404] 
                        w-[474px] h-[66px]
                        px-6 py-2 rounded-tl-[50px]
                        rounded-tr-[10px] rounded-br-[50px] 
                        \rounded-bl-[20px]
                         text-[27px]  absolute mt-[360px] ml-[80px] ">РАССРОЧКА 6/9/12 МЕСЯЦЕВ</button>

                            <ul className="list-disc pl-6 mb-6 bg-transparent ml-[80px]">
                                <li className="text-xl bg-transparent">Тренажерный зал</li>
                                <li className="text-xl bg-transparent">Тренажерный зал</li>
                                <li className="text-xl bg-transparent">Работаем 24/7</li>
                            </ul>

                          
                        
                            <div className='  flex justify-center items-center bg-transparent w-[300px] h-[24px] space-x-2 mt-5 ml-[80px]'>
                                <img className='bg-transparent' src={mapPin} alt="" />
                                <span className="text-lg bg-transparent">г. Батайск, М. Горького, д. 84</span>
                            </div>
                            <div className=' flex bg-transparent justify-between w-[1000px] ml-[80px]'>
                            
                                <button className="px-6 py-2 rounded-xl flex justify-center gap-2 items-center space-x-2 mt-5 border border-white">
                                    <img src={instgram} alt="" />
                                    Мы в Instagram
                                </button>

                                <button className="  rouded-tr w-[208px] h-[40px]   rounded-xl bg-[#E41C26]  flex justify-center  gap-2 items-center space-x-2 mt-5 ">Смотреть все < img className='bg-transparent' src={vector} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative bg-transparent mt-4">
                        <img src={slide2} alt="Slide Image 2" className="w-full h-full object-cover transform scale-x-[-1]" />
                        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 text-white bg-transparent">
                            <div className='absolute flex justify-center items-center bg-transparent w-[214px] h-[24px] space-x-2 mt-5'>
                                <img className='bg-transparent' src={phoneicon} alt="" />
                                <span className="text-lg bg-transparent">+996 700-72-77-45</span>
                            </div>
                            <h1 className="text-[67px] w-[596px] h-[100px] mb-[200px] font-bold bg-transparent">Новый слайд</h1>
                            <button className="bg-red-600 px-6 py-2 text-xl rounded-2xl mb-6">Рассрочка 6/9/12 месяцев</button>
                            <ul className="list-disc pl-6 mb-6 bg-transparent">
                                <li className="text-xl bg-transparent">Тренажерный зал</li>
                                <li className="text-xl bg-transparent">Тренажерный зал</li>
                                <li className="text-xl bg-transparent">Работаем 24/7</li>
                            </ul>
                            <p className="text-xl mb-2 bg-transparent">г. Батайск, М. Горького, д. 84</p>
                            <button className="bg-gray-800 px-6 py-2 bg-none">Мы в Instagram</button>
                        </div>
                    </div>
                </SwiperSlide>


                <div className="swiper-button-next m-4 p-7 custom-swiper-button flex items-center justify-center bg-red-900 w-12 h-12 text-white rounded-full shadow-lg hover:bg-white hover:text-red-900 transition duration-300 absolute right-2 top-1/2 transform -translate-y-1/2"></div>
                <div className="swiper-button-prev m-4 p-7 custom-swiper-button flex items-center justify-center bg-red-900 w-12 h-12 text-white rounded-full shadow-lg hover:bg-white hover:text-red-900 transition duration-300 absolute left-2 top-1/2 transform -translate-y-1/2"></div>
            </Swiper>
        </Container>
    );
};

export default SliderHome;
