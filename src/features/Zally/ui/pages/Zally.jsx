import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../../../shared/helpers/Container";
import { sports } from "../../../../shared/api/api";
import { useTranslation } from "react-i18next";

function Zally() {
  const { id } = useParams();
  const [sport, setSport] = useState();
  const {t} = useTranslation()

  useEffect(() => {
    const findSport = sports.find((data) => data.id === parseInt(id));
    setSport(findSport || null);
  }, [id]);
  
  return (
    <Container>
      {sport ? (
        <div  className="flex flex-col gap-[40px] text-white mb-[100px]">
          <li className="text-4xl">{t(`${sport.name}`)}</li>
          <div
            className="relative  flex items-center bg-cover  mx-auto rounded-l-full justify-between w-[90%]  rounded-r-md md:pr-[40px] pr-[20px]   border-2 border-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url(${sport.backgroundImage})`,
            }}
          >
            <img
              className=" absolute lg:w-[22%] w-[19%] sm:w-[20%] md:w-[ 21%]  left-[-3%]"
              src={sport.boll}
              alt="basketball"
            />
            <img className=" invisible w-[21%]" src={sport.boll} />
            <h1 className="text-xl sm:text-4xl md:text-6xl">{t("Залы")}</h1>
            <Link
              to={`/zally/in-zally?sport=${encodeURIComponent(
                JSON.stringify(sport)
              )}`}
              className="w-[30%] sm:w-[20%] md:w-[20%] py-1 md:py-3 px-3 text-center bg-red-500 rounded-md hover:bg-red-700 text-sm sm:text-md"
            >
              <button >
                {t("Открыть")}
              </button>
            </Link>
          </div>
          <div
            className="relative  flex items-center bg-cover  mx-auto rounded-l-full justify-between w-[90%]  rounded-r-md md:pr-[40px] pr-[20px]   border-2 border-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url(${sport.backgroundImage2})`,
            }}
          >
            <img
              className=" absolute lg:w-[22%] w-[19%] sm:w-[20%] md:w-[ 21%]  left-[-3%]"
              src={sport.boll}
              alt="basketball"
            />
            <img className=" invisible w-[21%]" src={sport.boll} />
            <h1 className="text-xl sm:text-4xl md:text-6xl">{t("Кружки")}</h1>
            <Link
              to={`/zally/in-krugok?sport=${encodeURIComponent(
                JSON.stringify(sport)
              )}`}
              className="w-[30%] sm:w-[20%] md:w-[20%] py-1 md:py-3 px-3 text-center bg-red-500 rounded-md hover:bg-red-700 text-sm sm:text-md"
            >
              <button>{t("Открыть")}</button>
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}
export default Zally;
