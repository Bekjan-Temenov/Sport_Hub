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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098174!2d144.96305731550427!3d-37.81410797975127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57772c3c1fabb0b!2sGoogle!5e0!3m2!1sen!2sus!4v1614234402238!5m2!1sen!2sus"
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
