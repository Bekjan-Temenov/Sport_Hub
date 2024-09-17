<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import api from '../api';// Обновите путь к вашему API
=======
import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../shared/helpers/Container";
import { sports } from '../../../shared/api/api';
import { useTranslation } from "react-i18next";
>>>>>>> dbd9a6b451f2cadd79ecc6349d90b4f31d660a1f

const SportClasses = () => {
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState(null);

<<<<<<< HEAD
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await api.sports(); // Вызов API
        setClasses(response.data); // Установка данных в состояние
      } catch (err) {
        setError(err); // Установка ошибки в состояние
      }
    };

    fetchClasses();
  }, []);

  return (
    <div>
      <h1>Sport Classes</h1>
      {error && <p>Error: {error.message}</p>}
      {classes.length > 0 ? (
        <ul>
          {classes.map((sportClass) => (
            <li key={sportClass.id}>
              <h2>{sportClass.class_name}</h2>
              <p><strong>Sport Type:</strong> {sportClass.sport_type}</p>
              <p><strong>Description:</strong> {sportClass.description || 'N/A'}</p>
              <p><strong>Schedule:</strong> {sportClass.schedule || 'N/A'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No sport classes available.</p>
      )}
    </div>
=======
const HomeSports = () => {
  const {t} = useTranslation()
  return (
    <Container>
         <div className="text-white lg:p-8 ">
        <h1 className="text-3xl ml-[70px]  mb-[40px] text-[48px]">
          Виды спорта
        </h1>
        <div className="flex flex-wrap gap-[70px]  justify-center">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-[320px] transition-transform transform  hover:scale-105"
            >
              <div className="absolute bottom-[47px]  w-full bg-[#CA0610] h-[100px] z-0 border-start-end-radius rounded-tl-[50px] rounded-b-xl rounded-tr-lg animate-fade-in  transform transition-transform hover:scale-105 "></div>
              <Link to={`/zally/${sport.id}`}>
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="relative w-[93%] mx-auto bg-cover   cursor-pointer h-[300px] object-cover  z-10"
                />
              </Link>
              <div className="text-[32px] mt-2">{t(`${sport.name}`)}</div>
            </div>
          ))}
        </div>
     </div>
      </Container>

>>>>>>> dbd9a6b451f2cadd79ecc6349d90b4f31d660a1f
  );
};

export default SportClasses;
