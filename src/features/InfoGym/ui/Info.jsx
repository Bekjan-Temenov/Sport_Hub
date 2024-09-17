import React from 'react'
import Container from '../../../shared/helpers/Container'
import strelka from "../../../shared/assets/svg/strelka.svg";
import ellipse1 from "../../../shared/assets/png/Ellipse1.png";

function Info() {
  return (
    <div className="relative text-white bg-black h-auto lg:h-[632px]  pb-[89px]  relative">
    <Container>
      <header className="flex flex-col p-3 ">
        <button className="py-2 ">
          <img src={strelka} alt="back arrow" />
        </button>
        <li className="text-lg text-red-500 ">Кружки</li>
      </header>
      <main className="flex flex-col items-center justify-between lg:items-start lg:flex-row">
        <div className="flex-1  max-w-[409px] z-10  py-9">
          <h2 className="mb-4 text-3xl font-bold">“Bilimkana Arena“</h2>
          <p className="mb-4 text-xl">
            Школа Билимкана-Бишкек продолжает набор в секцию баскетбол для
            взрослых и детей! Занятия проводятся в зале, с соблюдением всех
            норм безопасности!
          </p>
        </div>
        <div className="flex lg:p-4 lg:w-[500px] z-10  max-w-[500px] ">
          <img
            className="w-full h-full rounded-lg shadow-lg "
            src="https://scontent.ffru1-4.fna.fbcdn.net/v/t1.6435-9/188131458_246983717223789_2363293312121498488_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=265h4sm9DoYQ7kNvgF5PU_z&_nc_ht=scontent.ffru1-4.fna&oh=00_AYAVXp4UK7ohLEyIe4IYvPaef07gDLZNlG9bNVZZzIIuLg&oe=66F010BE"
            alt="Bilimkana Arena"
          />
        </div>
      </main>
      <div className="absolute lg:bottom-0 bottom-[45%] left-0 right-0   text-center text-[#1B1B1B] font-inter font-extrabold bg-opacity-50 z-1 leading-[60px]  sm:leading-[70px] lg:leading-[150px]">
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
  )
}

export default Info
