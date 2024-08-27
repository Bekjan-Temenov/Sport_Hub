import React, { useState } from "react";
import Container from "../../../shared/helpers/Container";

const images = [
  "https://olympic.kz/images/1627437788.png",
  "https://scontent.ffru1-4.fna.fbcdn.net/v/t1.6435-9/188131458_246983717223789_2363293312121498488_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=265h4sm9DoYQ7kNvgF5PU_z&_nc_ht=scontent.ffru1-4.fna&oh=00_AYAVXp4UK7ohLEyIe4IYvPaef07gDLZNlG9bNVZZzIIuLg&oe=66F010BE",
  "https://s3-alpha-sig.figma.com/img/338c/ba6d/aaf6d9335e86c71b269fc0220e675ece?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NicOIFt2wtMVrSn~MqTaG6b~29gAF3zsbIzTcbOgcSZoXD2IroinaNOutL6bzs5YIwbfLKZWLcxzOJN8VvhASicThbmGo6yBLtJ-j7v~3dDrWxyPoQOj8hshhtcE0LNd4bANcgEqbI3120ds9fMoEluckbWRh-LhxtLPA0Z2~XR4-J4kLqo5jXsQHqTD5wDWzNDd1f1rkAEy~r-WrR~M0t5TjVwx4uSRqVmrFglzqECSCYWapPjGZHxHal5bXjmnuaiNN7wQcVb3neEPLvJgYk7~allLLqeEG6eoWgEeabVvMl0~f39nmOmzO5Ux0C6ocerPBe3gL6BUjctUrepwjQ__",
];
function Images() {
  const [activeImage, setactiveImage] = useState(images[0]);

  const ImgClick = (img) => {
    setactiveImage(img);
  };

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
