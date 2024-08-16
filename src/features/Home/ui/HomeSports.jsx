import React from 'react';
import Container from '../../../shared/helpers/Container';



import basketball from '../../../shared/assets/img/Rectangle 2.png'
import soccer from '../../../shared/assets/img/Rectangle 3.png'
import tennis from '../../../shared/assets/img/Rectangle 4 (1).png'
import swimming from '../../../shared/assets/img/Rectangle 2 (1).png'
import volleyball from '../../../shared/assets/img/Rectangle 4 (2).png'
import taekwondo from '../../../shared/assets/img/Rectangle 5.png'
import boxing from '../../../shared/assets/img/Rectangle 5 (1).png'
import cycling from '../../../shared/assets/img/Rectangle 6.png'
import yoga from '../../../shared/assets/img/Rectangle 7.png'



const sports = [
  { name: 'Баскетбол', image: basketball },
  { name: 'Футбол', image: soccer },
  { name: 'Теннис', image: tennis },
  { name: 'Плавание', image: swimming },
  { name: 'Волейбол', image: volleyball },
  { name: 'Тхэквондо', image: taekwondo },
  { name: 'Бокс', image: boxing },
  { name: 'Велоспорт', image: cycling },
  { name: 'Йога', image: yoga }
];

const HomeSports = () => {
  return (
    <div className=" text-white  p-8">
      <Container>
        <h1 className="text-2xl ml-4 mb-4 text-[32px] sm:text-3xl sm:ml-[50px] sm:mb-[30px] lg:text-[48px] lg:ml-[70px] lg:mb-[40px]">
          Виды спорта
        </h1>
        <div className="flex flex-wrap gap-4 justify-center sm:gap-[50px] lg:gap-[70px]">
          {sports.map((sport, index) => (
            <div key={index} className="relative transform transition-transform hover:scale-105">
              <div className="absolute bottom-8 left--2 w-[240px] h-[80px] bg-[#CA0610] z-0 rounded-tl-[30px] rounded-b-lg rounded-tr-md sm:bottom-[30px] sm:left--2 sm:w-[280px] sm:h-[90px] lg:bottom-[47px] lg:left-[10px] lg:w-[320px] lg:h-[100px] lg:rounded-tl-[50px] transition-transform hover:scale-105"></div>

              <img src={sport.image} alt={sport.name} className="relative w-[220px] h-[220px] object-cover ml-2 z-10 sm:w-[260px] sm:h-[260px] sm:ml-[10px] lg:w-[300px] lg:h-[300px] lg:ml-[20px]" />

              <div className="text-[24px] mt-2 sm:text-[28px] lg:text-[32px]">
                {sport.name}
              </div>

            </div>
          ))}
        </div>


      </Container>
    </div>
  );
};

export default HomeSports;
