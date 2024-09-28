import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../../shared/helpers/Container";
import { sports } from "../../../shared/api/api";
// import { useDispatch, useSelector } from "react-redux";
// import { sport } from "../store/action";

const HomeSports = () => {
  // Получаем статус загрузки, данные и ошибки из состояния Redux
  // const  sports  = useSelector((state) => state.sport.sports || {});

  // const dispatch = useDispatch();

  // console.log(sports);
  // useEffect(() => {
  //   dispatch(sport());
  // }, [dispatch]);

  // // Обработка разных состояний загрузки данных
  // if (status === "loading") {
  //   return <div>Loading...</div>; // Вы можете заменить на индикатор загрузки
  // }

  // if (status === "failed" || error) {
  //   return <div>Error: {error}</div>; // Отображение сообщения об ошибке
  // }

  return (
    <Container>
      <div className="text-white lg:p-8">
        <h1 className="text-3xl ml-[70px] mb-[40px] text-[48px]">
          Виды спорта
        </h1>
        <div className="flex flex-wrap gap-[70px] justify-center">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-[320px] transition-transform transform  hover:scale-105"
            >
              <div className="absolute bottom-[47px] w-full bg-[#CA0610] h-[100px] z-0 border-start-end-radius rounded-tl-[50px] rounded-b-xl rounded-tr-lg animate-fade-in  transform transition-transform hover:scale-105 "></div>
              <Link to={`/zally/${sport.id}`}>
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="relative w-[93%] mx-auto bg-cover cursor-pointer h-[300px] object-cover z-10"
                />
              </Link>
              <div className="text-[32px] mt-2">{sport.name}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );      
};

export default HomeSports;
