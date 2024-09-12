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
                        className="w-full h-[400px] md:h-[400px] lg:h-[600px] flex items-center justify-center"
                    >
                        <Container>
                            <div className="flex flex-col justify-center gap-2">
                                <div className='flex p-[15px]'>
                                    <img src={phoneicon} alt="Phone Icon" />
                                    <span className='text-white text-[12px] md:text-[18px] ml-2'>+996 700-72-77-45</span>
                                </div>
                                <div className='w-[220px] md:w-[440px]'>
                                    <h1 className='text-white text-[24px] md:text-[40px] font-bold leading-tight mt-[30px] md:mt-[50px]'>
                                        БЕРЕМ НАГРУЗКУ НА СЕБЯ
                                    </h1>
                                </div>
                                <div>
                                    <button className='w-[200px] md:w-[350px] h-[30px] md:h-[50px] bg-[#FE0404] rounded-xl text-white text-[12px] md:text-[20px]'>
                                        РАССРОЧКА 6/9/12 МЕСЯЦЕВ
                                    </button>
                                </div>
                                <ul className="list-disc pl-4 md:pl-6 mb-6 text-white mt-4 md:mt-[40px] text-[14px] md:text-[18px]">
                                    <li>Тренажерный зал</li>
                                    <li>Фитнес</li>
                                    <li>Работаем 24/7</li>
                                </ul>
                                <div className='flex gap-2 mt-[10px]'>
                                    <img src={mapPin} alt="Map Pin" className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]" />
                                    <p className='text-white text-[12px] md:text-[14px]'>
                                        г. Батайск, M. Горького, д. 84
                                    </p>
                                </div>
                                <button className='text-white flex gap-2 justify-center w-[160px] p-2 items-center border border-white md:p-[6px] rounded-xl'>
                                    <img src={instgram} alt="Instagram Icon" className="w-[16px] md:w-[24px] h-[16px] md:h-[24px]" />
                                    Мы в Instagram
                                </button>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${slide2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center top',
                            backgroundRepeat: 'no-repeat',
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
                                <div className='w-full md:w-[680px] text-left md:text-right ml-0 md:ml-auto'>
                                    <h1 className='text-white text-[24px] md:text-[40px] font-bold leading-tight mt-[30px] md:mt-[50px]'>
                                        Более 20 различных групповых программ
                                    </h1>
                                </div>
                                <p className='w-[200px] md:w-[550px] text-[10px] md:text-[18px] text-white mt-4 md:mt-[20px] text-left md:text-right ml-0 md:ml-auto'>
                                    Огромный выбор групповых программ, которые проведут наши тренеры. Современный зал и позитивная атмосфера принесет не только пользу, но и доставит удовольствие от тренировок.
                                </p>
                                <div className='flex justify-start md:justify-end gap-2 mt-[10px] md:mt-[30px] ml-0 md:ml-auto'>
                                    <img src={mapPin} alt="Map Pin" />
                                    <p className='text-white text-[12px] md:text-[14px]'>г. Батайск, M. Горького, д. 84</p>
                                </div>
                                <div className='flex justify-start md:justify-end mt-2 md:mt-[10px] ml-0 md:ml-auto'>
                                    <button className='text-white flex gap-2 justify-center items-center border border-white p-2 md:p-[6px] rounded-xl'>
                                        <img src={instgram} alt="Instagram Icon" /> Мы в Instagram
                                    </button>
                                </div>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>

                <div className="swiper-button-next custom-swiper-button flex items-center justify-center bg-[#FE0404] w-5 h-5 md:p-5 text-white rounded-full shadow-lg hover:bg-white hover:text-[#FE0404]"></div>
                <div className="swiper-button-prev custom-swiper-button flex items-center justify-center bg-[#FE0404] w-5 h-5 md:p-5 text-white rounded-full shadow-lg hover:bg-white hover:text-[#FE0404]"></div>
            </Swiper>

            <Container>
                <div className='flex justify-center'>
                    <button className='flex w-[120px] md:w-[170px] p-1 md:p-2 bg-[#FE0404] text-white text-[12px] md:text-[16px] justify-center mt-[10px] md:mt-0 items-center gap-2 md:gap-3 rounded-lg lg:absolute z-20 right-[20px] md:right-[60px] lg:right-[110px] bottom-0 lg:bottom-0'>
                        Смотреть все
                        <img src={vector} alt="Arrow Icon" className="hidden lg:block w-[12px] md:w-[16px] lg:w-[24px] h-[12px] md:h-[16px] lg:h-[24px]" />
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default SliderHome;
