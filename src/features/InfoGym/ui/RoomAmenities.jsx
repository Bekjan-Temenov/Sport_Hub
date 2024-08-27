import React from "react";
import Container from "../../../shared/helpers/Container";
import chek from "../../../shared/assets/svg/chekbox.svg";

function RoomAmenities() {
  const texts = ["Раздевалка", "Освещение", "Душевая"];
  return (
    <div className="bg-white ">
      <Container>
        <div className="flex items-center md:py-[52px] py-[32px]  justify-between">
          {texts.map((item, index) => (
            <div key={index} className="flex items-center gap-1 md:gap-4">
                <img
                className="bg-red-600 md:w-[35px]  md:h-[35px] w-[20px]  h-[20px]  p-1 md:p-2 box-border rounded-full"
                  src={chek}
                  alt="icon"
                />
              <span className="text-sm md:text-2xl">{item}</span>
            </div>
          ))} 
        </div>
      </Container>
    </div>
  );
}
export default RoomAmenities;
