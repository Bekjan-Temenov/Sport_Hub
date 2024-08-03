import React from "react";
import Container from "../../shared/helpers/Container";
import strelka from "../../shared/assets/svg/strelka.svg";

function Arena() {
  return (
    <div className="text-white bg-black border min-h-auto">
      <Container>
        <header className="flex flex-col p-3 ">
          <button className="text-red-500 ">
            <img src={strelka} />
          </button>
          <li className="text-lg text-red-500 ">Кружки</li>
        </header>
        <main className="flex flex-col items-center justify-between lg:items-start lg:flex-row">
          <div className="flex-1 max-w-[459px]">
            <h2 className="mb-4 text-3xl font-bold">“Bilimkana Arena“</h2>
            <p className="mb-4 text-xl">
              Школа Билимкана-Бишкек продолжает набор в секцию баскетбол для
              взрослых и детей! Занятия проводятся в зале, с соблюдением всех
              норм безопасности!
            </p>
          </div>
          <div className="flex-1 p-4 max-w-[500px]">
            <img
              className="rounded-lg shadow-lg"
              src="https://weproject.media/upload/iblock/a50/a5045e5d61614aa385fe29c88921962a.jpg"
            />
          </div>
        </main>
      </Container>
    </div>
  );
}

export default Arena;
