import React from "react";
import Container from "../../../shared/helpers/Container";

export const FreeLesson = () => {
  return (
    <div className="bg-[#D9D9D9] lg:py-[149px] py-[30px]  mt-4 ">
      <Container>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-xl font-medium md:text-2xl lg:text-4xl">
            Приходите на первое бесплатное занятие
          </h1>
          <p className="max-w-[500px] text-start lg:text-center md:text-lg text-sm">
            Первое занятие является бесплатным исключительно для новых
            посетителей баскетбол центра.
          </p>
          <p className="max-w-[500px] text-start md:text-lg text-sm lg:text-center mb-8">
            Стоимость посещения групповых занятий, а также стоимость
            абонементов в баскетбол центр уточняйте у менеджера.
          </p>
          <button className="px-8 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700">
            ЗАРЕГИСТРИРОВАТЬСЯ
          </button>
        </div>
      </Container>
    </div>
  );
};
