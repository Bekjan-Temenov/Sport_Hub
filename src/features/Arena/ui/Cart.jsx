import React from "react";
import calendar from "../../../shared/assets/svg/calendar.svg";
import map from "../../../shared/assets/svg/map.svg";
import phone from "../../../shared/assets/svg/phones.svg";
import Container from "../../../shared/helpers/Container";

const Card = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row w-[100%]   mx-auto text-white shadow-lg mt-[52px] mb-[100px]">
        <div className="lg:w-1/2 w-full space-y-4 md:border border-red-600 py-5 lg:py-[70px] px-2 lg:px-9 ">
          <div className="flex items-center space-x-2">
            <img src={calendar} />
            <div className="flex flex-col text-sm md:text-md">
              <p>Понедельник — Пятница: 07:00–23:00</p>
              <p>Суббота — Воскресенье: 09:00–22:00</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm md:text-md">
            <img src={map} />
            <p>Адрес: Село Кок-Жар, ул.Егимбаева, 145</p>
          </div>

          <div className="flex items-center space-x-2 text-sm md:text-md">
            <img src={phone} />
            <p>Телефон: +996 505 170 179</p>
          </div>

          <p className="mt-4 text-[#858585] text-sm">
            Bilimkana arena это современный зал в самом центре города Бишкек.
            Оборудованный итальянскими тренажерами и залами для групповых
            тренировок.
          </p>
        </div>

        <div className="w-full border border-red-600 lg:w-1/2">
          <iframe
            title="Map"
            src="https://go.2gis.com/0gvi69"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </Container>
  );
};

export default Card;
