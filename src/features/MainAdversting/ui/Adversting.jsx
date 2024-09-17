import React from "react";
import Container from "../../../shared/helpers/Container";
import slide1 from "../../../shared/assets/img/slide1.png";
import mapPin from "../../../shared/assets/svg/mapPin.svg";
import instgram from "../../../shared/assets/svg/instagram.svg";
import phoneicon from "../../../shared/assets/svg/phone.svg";
import setting from "../../../shared/assets/svg/setting.svg";

const advertisements = {
  Зал: [
    {
      category: "Зал",
      backgroundImage: slide1,
      phone: "+996 700-72-77-45",
      title: "БЕРЕМ НАГРУЗКУ НА СЕБЯ",
      buttonText: "РАССРОЧКА 6/9/12 МЕСЯЦЕВ",
      features: ["Тренажерный зал", "Фитнес", "Работаем 24/7"],
      address: "г. Батайск, M. Горького, д. 84",
      instagram: "Instagram",
    },
    {
      category: "Зал",
      backgroundImage: slide1,
      phone: "+996 701-88-99-33",
      title: "СИЛА И ТЕРПЕНИЕ",
      buttonText: "СИЛОВЫЕ ТРЕНИРОВКИ",
      features: ["Силовые тренировки", "Кардио", "Бассейн"],
      address: "г. Бишкек, Проспект Чуй, д. 115",
      instagram: "Instagram",
    },
    {
      category: "Зал",
      backgroundImage: slide1,
      phone: "+996 555-55-55-55",
      title: "ТРЕНИРУЙСЯ С НАМИ",
      buttonText: "ПОДДЕРЖКА ИНСТРУКТОРА",
      features: ["Фитнес", "Йога", "Групповые занятия"],
      address: "г. Ош, Ул. Асанбай, д. 22",
      instagram: "Instagram",
    },
    {
      category: "Зал",
      backgroundImage: slide1,
      phone: "+996 700-72-77-45",
      title: "БЕРЕМ НАГРУЗКУ НА СЕБЯ",
      buttonText: "РАССРОЧКА 6/9/12 МЕСЯЦЕВ",
      features: ["Тренажерный зал", "Фитнес", "Работаем 24/7"],
      address: "г. Батайск, M. Горького, д. 84",
      instagram: "Instagram",
    },
    {
      category: "Зал",
      backgroundImage: slide1,
      phone: "+996 701-88-99-33",
      title: "СИЛА И ТЕРПЕНИЕ",
      buttonText: "СИЛОВЫЕ ТРЕНИРОВКИ",
      features: ["Силовые тренировки", "Кардио", "Бассейн"],
      address: "г. Бишкек, Проспект Чуй, д. 115",
      instagram: "Instagram",
    },
    {
      category: "Зал",
      backgroundImage: slide1,
      phone: "+996 555-55-55-55",
      title: "ТРЕНИРУЙСЯ С НАМИ",
      buttonText: "ПОДДЕРЖКА ИНСТРУКТОРА",
      features: ["Фитнес", "Йога", "Групповые занятия"],
      address: "г. Ош, Ул. Асанбай, д. 22",
      instagram: "Instagram",
    },
  ],
  Кружки: [
    {
      category: "Кружки",
      backgroundImage: slide1,
      phone: "+996 555-55-55-55",
      title: "КРУЖКИ ДЛЯ ВСЕХ",
      buttonText: "РЕГИСТРАЦИЯ ОТКРЫТА",
      features: ["Художественный кружок", "Музыка", "Работаем по выходным"],
      address: "г. Бишкек, Ленина, д. 12",
      instagram: "Instagram",
    },
    {
      category: "Кружки",
      backgroundImage: slide1,
      phone: "+996 777-77-77-77",
      title: "ТАНЦЫ ДЛЯ ВСЕХ",
      buttonText: "ОТКРЫТ НАБОР",
      features: ["Танцевальный кружок", "Хореография", "Конкурсы"],
      address: "г. Батуми, Проспект Мира, д. 45",
      instagram: "Instagram",
    },
    {
      category: "Кружки",
      backgroundImage: slide1,
      phone: "+996 888-88-88-88",
      title: "РАЗВИВАЙТЕ ТВОРЧЕСТВО",
      buttonText: "ЗАПИСАТЬСЯ",
      features: ["Рисование", "Керамика", "Рукоделие"],
      address: "г. Ош, Центральная площадь",
      instagram: "Instagram",
    },
    {
      category: "Кружки",
      backgroundImage: slide1,
      phone: "+996 555-55-55-55",
      title: "КРУЖКИ ДЛЯ ВСЕХ",
      buttonText: "РЕГИСТРАЦИЯ ОТКРЫТА",
      features: ["Художественный кружок", "Музыка", "Работаем по выходным"],
      address: "г. Бишкек, Ленина, д. 12",
      instagram: "Instagram",
    },
    {
      category: "Кружки",
      backgroundImage: slide1,
      phone: "+996 777-77-77-77",
      title: "ТАНЦЫ ДЛЯ ВСЕХ",
      buttonText: "ОТКРЫТ НАБОР",
      features: ["Танцевальный кружок", "Хореография", "Конкурсы"],
      address: "г. Батуми, Проспект Мира, д. 45",
      instagram: "Instagram",
    },
    {
      category: "Кружки",
      backgroundImage: slide1,
      phone: "+996 888-88-88-88",
      title: "РАЗВИВАЙТЕ ТВОРЧЕСТВО",
      buttonText: "ЗАПИСАТЬСЯ",
      features: ["Рисование", "Керамика", "Рукоделие"],
      address: "г. Ош, Центральная площадь",
      instagram: "Instagram",
    },
  ],
  Турниры: [
    {
      category: "Турниры",
      backgroundImage: slide1,
      phone: "+996 777-77-77-77",
      title: "УЧАСТВУЙ В ТУРНИРАХ",
      buttonText: "ЗАПИСАТЬСЯ СЕЙЧАС",
      features: [
        "Турниры по футболу",
        "Турниры по волейболу",
        "Призы для победителей",
      ],
      address: "г. Ош, Центральный стадион",
      instagram: "Instagram",
    },
    {
      category: "Турниры",
      backgroundImage: slide1,
      phone: "+996 555-55-55-55",
      title: "ТУРНИРЫ ПО ТЕННИСУ",
      buttonText: "УЗНАТЬ БОЛЬШЕ",
      features: ["Большой теннис", "Настольный теннис", "Призы"],
      address: "г. Бишкек, Теннисный корт",
      instagram: "Instagram",
    },
    {
      category: "Турниры",
      backgroundImage: slide1,
      phone: "+996 888-88-88-88",
      title: "ВОЗЬМИ УЧАСТИЕ В ЧЕМПИОНАТЕ",
      buttonText: "ЗАПИСЬ ОТКРЫТА",
      features: ["Шахматы", "Киберспорт", "Спортивные игры"],
      address: "г. Ош, Молодежный центр",
      instagram: "Instagram",
    },
    {
      category: "Турниры",
      backgroundImage: slide1,
      phone: "+996 777-77-77-77",
      title: "УЧАСТВУЙ В ТУРНИРАХ",
      buttonText: "ЗАПИСАТЬСЯ СЕЙЧАС",
      features: [
        "Турниры по футболу",
        "Турниры по волейболу",
        "Призы для победителей",
      ],
      address: "г. Ош, Центральный стадион",
      instagram: "Instagram",
    },
    {
      category: "Турниры",
      backgroundImage: slide1,
      phone: "+996 555-55-55-55",
      title: "ТУРНИРЫ ПО ТЕННИСУ",
      buttonText: "УЗНАТЬ БОЛЬШЕ",
      features: ["Большой теннис", "Настольный теннис", "Призы"],
      address: "г. Бишкек, Теннисный корт",
      instagram: "Instagram",
    },
    {
      category: "Турниры",
      backgroundImage: slide1,
      phone: "+996 888-88-88-88",
      title: "ВОЗЬМИ УЧАСТИЕ В ЧЕМПИОНАТЕ",
      buttonText: "ЗАПИСЬ ОТКРЫТА",
      features: ["Шахматы", "Киберспорт", "Спортивные игры"],
      address: "г. Ош, Молодежный центр",
      instagram: "Instagram",
    },
  ],
};

function Adversting({ isHandle, setOpen, open }) {
  const allAdvertisements = Object.values(advertisements).flat();
  const filteredAds = allAdvertisements.filter(
    (ad) => ad.category === isHandle
  );

  return (
    <Container>
      <div className="flex flex-col text-white gap-y-[42px]">
        <div className="flex items-center justify-between">
          <h1 className="font-sans text-4xl">{isHandle || "Все рекламы"}</h1>
          <img
            onClick={() => setOpen(!open)}
            className="block cursor-pointer md:hidden"
            src={setting}
            alt="icon"
          />
        </div>
        <div className="flex mb-[100px] flex-wrap  justify-between  gap-y-[20px]">
          {filteredAds.map((ad, index) => (
            <div className="flex mx-auto  flex-col  mt-1   w-[560px] h-[300px] md:h-[400px]" key={index}>
              <div className="bg-[#FE0202]  mx-auto rounded-full md:rounded-none w-[99.7%] mb-[-17px] h-[20px] md:w-[70%] h-[15px] "></div>
              <div
                style={{
                  backgroundImage: `url(${ad.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  backgroundRepeat: "no-repeat",
                }}
                className="md:pl-[40px] pl-[15px] py-5 w-full  h-full rounded-md z-40"
              >
                <div className="flex flex-col justify-between h-full gap-2 ">
                  <div className="flex p-[15px]">
                    <img
                      className="hidden md:block"
                      src={phoneicon}
                      alt="Phone Icon"
                    />
                    <span className="text-white text-[12px] md:text-[18px]">
                      {ad.phone}
                    </span>
                  </div>
                  <div className="flex flex-col  justify-between gap-y-[10px]">
                    <h1 className="text-white font-orelega w-[238px] md:w-[400px] text-[24px] md:text-[40px] leading-tight  md:mt-[0px]">
                      {ad.title}
                    </h1>
                    <button className="bg-[#FE0404]   md:px-4 py-1 w-[200px] md:w-[55%] rounded-md text-white text-[8px] md:text-[17px]">
                      {ad.buttonText}
                    </button>
                  </div>
                  <ul className="list-disc   pl-4 md:pl-6 text-white mt-4 md:mt-[10px] text-[8px] md:text-[13px]">
                    {ad.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-y-[7px] ">
                    <div className="flex items-center gap-2">
                      <img
                        src={mapPin}
                        alt="Map Pin"
                        className="w-[6px] md:w-[15px] h-[16px] md:h-[15px]"
                      />
                      <p className="text-white text-[12px] md:text-[14px]">
                        {ad.address}
                      </p>
                    </div>
                    <button className="flex items-center gap-x-2 justify-start text-white w-[120px] md:w-[140px]  py-[5px] px-[10px] border border-white rounded-lg">
                      <img
                        src={instgram}
                        alt="Instagram Icon"
                        className="w-[8px] md:w-[15px] h-[8px] md:h-[16px]"
                      />
                      <span className="md:text-xs text-[10px]">
                        Мы в {ad.instagram}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#FE0202] mx-auto rounded-full md:rounded-none z-0 w-[99.8%] md:mt-[-17px] mt-[-10px] h-[15px] md:h-[30px]  md:w-[70%]  "></div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Adversting;