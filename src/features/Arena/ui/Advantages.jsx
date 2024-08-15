import React from "react";
import Container from "../../../shared/helpers/Container";
import foto2 from "../../../shared/assets/png/2.png";
import foto3 from "../../../shared/assets/png/3.png";
import foto4 from "../../../shared/assets/png/4.png";
import AdvantageItem from "./AdvantageItem";

function Advantages() {
  const fotos = [
    {
      title: "Топовые тренери",
      text: "Для вас работают преподаватели имеющие в общей сумме более 10 лет преподавательской практики, непрерывно совершенствующие свой уровень знаний.",
      img: foto4,
    },
    {
      title: "Улучшение здоровья",
      text: "Мы помогаем обрести уверенность в себе, с помощью раскрытия таланта и развития физических возможностей. Поможем уйти блокам и зажатости. А взамен придет лёгкость, гибкость тела и ума.",
      img: foto2,
    },
    {
      title: "Насыщенное расписание",
      text: "Возможность заниматься в любое время с 08:00 до 22:00",
      img: foto3,
    },
  ];

  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-col gap-4 items-start pt-[30px] pb-[55px]">
          <header className="flex flex-col">
            <span className="text-[#E41C26] font-medium">почему мы</span>
            <h1 className="text-2xl">Наши преимущества</h1>
          </header>
          <main className="flex flex-wrap items-center justify-between gap-3 md:items-start">
            {fotos.map((item, index) => (
              <AdvantageItem key={index} item={item} index={index} />
            ))}
          </main>
        </div>
      </Container>
    </div>
  );
}

export default Advantages;
