import React, { useState } from "react";
import Container from "../../../shared/helpers/Container";

const images = [
  "https://olympic.kz/images/1627437788.png",
  "https://www.ballgames.ru/img/volleyball-gamers-H4.jpg",
  "https://sport.bsmu.by/assets/cache_image/images/service/volebol_750x400_4f5.jpg",
];
function Images() {
  const [activeImage, setactiveImage] = useState(images[0]);

  const ImgClick = (img) => {
    setactiveImage(img);
  }
  return (
    <Container>
      <div className="text-white   mb-[53px]">
        <header className="md:my-[40px] my-[15px]">
          <h1 className="text-xl md:text-4xl sm:text-xl">
            Баскетбольное поле «Bilimkana Arena»
          </h1>
        </header>
        <main className="flex flex-col justify-between gap-4 p-4 lg:flex-row">
          <div className="flex flex-col items-center w-full lg:w-[74%] h-auto">
            <div className="w-[80%] lg:w-[70%] h-[5px] bg-red-600"></div>
            <img
              className="w-full h-auto lg:h-[96%] object-cover"
              src={activeImage}
              alt="Basketball court"
            />
            <div className="w-[80%] lg:w-[70%] lg:h-[20px] h-[10px] bg-red-600 "></div>
          </div>
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex lg:flex-col items-center justify-between gap-4 md:gap-[40px] overflow-x-auto md:overflow-y-auto w-full md:w-auto"
          >
            {images.map((item, index) => (
              <img
                onClick={() => ImgClick(item)}
                key={index}
                className={`w-[30%] md:w-[100%] sm:h-[100px] h-[60px] md:h-[140px] cursor-pointer ${
                  item === activeImage ? "" : "bg-black opacity-60"
                }`}
                src={item}
                alt=""
              />
            ))}
          </div>
        </main>
      </div>
    </Container>
  );
}

export default Images;
