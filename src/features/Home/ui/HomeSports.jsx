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
    { name: 'Теннис', image: tennis},
    { name: 'Плавание', image: swimming },
    { name: 'Волейбол', image: volleyball },
    { name: 'Тхэквондо', image: taekwondo },
    { name: 'Бокс', image: boxing },
    { name: 'Велоспорт', image: cycling},
    { name: 'Йога', image: yoga }
];

const HomeSports = () => {
    return (
        <div className=" text-white  p-8">
            <Container>
                <h1 className="text-3xl ml-[70px] mb-[40px] text-[48px]">Виды спорта</h1>
                <div className="flex flex-wrap gap-[70px] justify-center">
                    {sports.map((sport, index) => (
                        <div key={index} className="relative transform transition-transform hover:scale-105">
                            <div className="absolute bottom-[47px] left-[10px] w-[320px] bg-[#CA0610] h-[100px] z-0 border-start-end-radius rounded-tl-[50px] rounded-b-xl rounded-tr-lg animate-fade-in transform transition-transform hover:scale-105 "></div>
                            <img src={sport.image} alt={sport.name} className="relative w-[300px] h-[300px] object-cover ml-[20px] z-10" />
                            <div className="text-[32px] mt-2">{sport.name}</div>
                        </div>
                    ))}
                </div>


            </Container>
        </div>
    );
};

export default HomeSports;
