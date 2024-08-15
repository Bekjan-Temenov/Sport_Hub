import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../shared/helpers/Container";
import { sports } from '../../../shared/api/api';


const HomeSports = () => {
  return (
    <div className="p-8 text-white ">
      <Container>
        <h1 className="text-3xl ml-[70px] mb-[40px] text-[48px]">
          Виды спорта
        </h1>
        <div className="flex flex-wrap gap-[70px] justify-center">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="relative transition-transform transform hover:scale-105"
            >
              <div className="absolute bottom-[47px] left-[10px] w-[320px] bg-[#CA0610] h-[100px] z-0 border-start-end-radius rounded-tl-[50px] rounded-b-xl rounded-tr-lg animate-fade-in transform transition-transform hover:scale-105 "></div>
              <Link to={`/zally/zally/${sport.id}`}>
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="relative w-[300px] cursor-pointer h-[300px] object-cover ml-[20px] z-10"
                />
              </Link>
              <div className="text-[32px] mt-2">{sport.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomeSports;
