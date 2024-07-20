// src/features/Home/ui/SliderHome.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Container from '../../../shared/helpers/Container'
import slide1 from '../../../shared/assets/img/Rectangle 4.png';
import slide2 from '../../../shared/assets/img/slide2.png';
import phoneicon from '../../../shared/assets/svg/phone.svg';
import mapPin from '../../../shared/assets/svg/mapPin.svg'
import instgram from '../../../shared/assets/svg/instagram.svg'
import vector from '../../../shared/assets/svg/vector.svg'

const SliderHome = () => {
    return (


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
                <div style={{ backgroundImage: `url(${slide1})` }} className=" w-full  bg-cover h-[996px] ">
                    <Container>
                        <div className=''>
                            <div className='flex p-[30px]'>
                                <img src={phoneicon} alt="" />
                                <span className='text-white text-[24px]'>+996 700-72-77-45</span>
                            </div>
                            <div className='w-[640px] h-[146px] '>
                                <h1 className='text-white  text-[67px] font-bold leading-tight mt-[70px] ml-[30px]'>БЕРЕМ НАГРУЗКУ
                                    НА СЕБЯ</h1>
                            </div>
                            <div className=" mt-[70px] ml-[30px]    ">
                                <button className='w-[474px] h-[66px] bg-[#FE0404]  rounded-xl text-white text-[27px] ' >
                                     РАССРОЧКА 6/9/12 МЕСЯЦЕВ
                                </button>
                               
                            </div>

                            <ul className="list-disc pl-6 mb-6  text-white  mt-[70px] ml-[40px] text-[24px] ">
                                <li className=" ">Тренажерный зал</li>
                                <li className="">Тренажерный зал</li>
                                <li className="">Работаем 24/7</li>
                            </ul>

                            <div className='flex  gap-2  mt-[90px] ml-[30px]'>
                                <img src={mapPin} alt="" />
                                <p className='text-white  text-[18px]'>г. Батайск, M. Горького, д. 84</p>
                            </div>

                            <div className='flex   justify-between mt-[90px] ml-[30px]  '>
                                <button className='text-white flex gap-2 justify-center items-center border border-white  p-[10px] rounded-xl'> <img src={instgram} alt="" />Мы в Instagram</button>
                                <button className=' flex w-[208px] h-[40px] bg-[#E41C26] text-white text-[20px] justify-center items-center gap-3 rounded-xl'> Смотреть все <img src={vector} alt="" /></button>
                            </div>
                        </div>
                    </Container>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div style={{ backgroundImage: `url(${slide2})` }} className=" bg-[#030305] w-full    bg-cover h-[996px]  ">
                    <Container>
                        <div className='flex flex-col justify-end '>
                            <div className='flex p-[30px] justify-center '>
                                <img src={phoneicon} alt="" />
                                <span className='text-white text-[24px]'>+996 700-72-77-45</span>
                            </div>
                            <div className='ml-[500px]    w-[823px]  '>
                                <h1 className='text-white  text-[67px] font-bold leading-tight mt-[70px] '>Более 20 различных
                                    групповых программ</h1>
                            </div>
                           

                            <p className=' w-[623px] text-[24px] text-white mt-[30px]  ml-[550px]'>Огромный выбор групповых программ, которые проведут наши тренеры. Современный зал
                                и позитивная атмосфера принесет не только пользу, но и доставит удовольствие от тренировок.</p>

                            <div className='flex justify-end gap-2  mt-[90px] ml-[30px]'>
                                <img src={mapPin} alt="" />
                                <p className='text-white  text-[18px]'>г. Батайск, M. Горького, д. 84</p>
                            </div>

                            <div className='flex   justify-end mt-[20px] ml-[30px]  '>
                                <button className='text-white flex gap-2 justify-center items-center border border-white  p-[10px] rounded-xl'> <img src={instgram} alt="" />Мы в Instagram</button>
                               
                            </div>
                        </div>
                    </Container>
                </div>
            </SwiperSlide>

          

            <div className="swiper-button-next m-4 p-7 custom-swiper-button flex items-center justify-center bg-red-900 w-12 h-12 text-white rounded-full shadow-lg hover:bg-white hover:text-red-900 transition duration-300 absolute right-2 top-1/2 transform -translate-y-1/2"></div>
            <div className="swiper-button-prev m-4 p-7 custom-swiper-button flex items-center justify-center bg-red-900 w-12 h-12 text-white rounded-full shadow-lg hover:bg-white hover:text-red-900 transition duration-300 absolute left-2 top-1/2 transform -translate-y-1/2"></div>
        </Swiper>

    );
};

export default SliderHome;

