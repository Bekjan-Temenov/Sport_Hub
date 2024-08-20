import React from "react";
import Container from "../../../shared/helpers/Container";
import strelka from "../../../shared/assets/svg/strelka.svg";
import ellipse1 from "../../../shared/assets/png/Ellipse1.png";

function Info() {
  return (
    <div className="relative text-white bg-black h-auto lg:h-[632px]   relative">
      <Container>
        <header className="flex flex-col p-3 ">
          <button className="py-2 ">
            <img src={strelka} alt="back arrow" />
          </button>
          <li className="text-lg text-red-500 ">Кружки</li>
        </header>
        <main className="flex flex-col items-center justify-between lg:items-start lg:flex-row">
          <div className="flex-1  max-w-[409px] z-9  py-9">
            <h2 className="mb-4 text-3xl font-bold">“Bilimkana Arena“</h2>
            <p className="mb-4 text-xl">
              Школа Билимкана-Бишкек продолжает набор в секцию баскетбол для
              взрослых и детей! Занятия проводятся в зале, с соблюдением всех
              норм безопасности!
            </p>
          </div>
          <div className="flex p-4 max-w-[500px] z-50 ">
            <img
              className="rounded-lg shadow-lg"
              src="https://weproject.media/upload/iblock/a50/a5045e5d61614aa385fe29c88921962a.jpg"
              alt="Bilimkana Arena"
            />
          </div>
        </main>
        <div className="absolute lg:bottom-0 bottom-[45%] left-0 right-0   text-center text-[#1B1B1B] font-inter font-extrabold bg-opacity-50 z-10 leading-[60px] sm:leading-[70px] lg:leading-[150px]">
          <h1 className="text-[80px] sm:hidden">ARENA</h1>
          <h1 className="hidden sm:block text-[105px] lg:text-[200px]  xl:text-[220px] tracking-[60.5%]">
            A R E N A
          </h1>
          <h1 className=" hidden sm:block text-[37px] sm:text-[45px] lg:text-[65px] 2xl:text-[80px] ">
            B I L I M K A N A
          </h1>
          <h1 className="sm:hidden text-[37px] ">BILIMKANA</h1>
        </div>

        <img className="absolute bottom-0 z-1  right-[150px]" src={ellipse1} />
      </Container>
    </div>
  );
}

export default Info;
