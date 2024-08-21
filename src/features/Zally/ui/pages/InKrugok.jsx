import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "../../../../shared/helpers/Container";
import ModalKrugok from "./modalKrugok";

const zally = [
  "Билимкана арена",
  "Afb баскетбольный клуб",
  "Kyrgyzbasketball",
  "3x3Kyrgyzstan",
  
];

function InKrugok() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sport = JSON.parse(decodeURIComponent(queryParams.get("sport")));

  if (!sport) {
    return <p>Data not found</p>;
  }
  return (
    <Container>
      {sport ? (
        <div>
          <div
            className="relative my-8 text-white flex items-center bg-cover mx-auto rounded-r-full justify-between w-[90%] rounded-l-md md:pl-[40px] pl-[20px] border-2 border-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${sport.inbackgroundImage})`,
            }}
          >
            <div className="flex flex-col   hidden lg:block w-[40%]">
              {zally.map((item, index) => (
                <div key={index} className="flex items-center justify-between mt-2 ">
                  <span className="text-lg font-medium text-white border-b">
                    {item}
                  </span>
                  <Link to="/arena">
                    <button className="flex items-center justify-center w-8 h-8 ml-4 bg-red-600 rounded-md">
                      <ArrowForwardIcon />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            <Link to={`/zally/${sport.id}`}>
              <button className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-md">
                <ArrowBackIcon />
              </button>
            </Link>
            <h1 className="block text-2xl md:hidden">{sport.name}</h1>
            <img className="invisible w-[21%]" src={sport.boll} />
            <img
              className="absolute lg:w-[22%] w-[19%] sm:w-[20%] md:w-[21%] right-[-3%]"
              src={sport.boll}
              alt="basketball"
            />
          </div>
          <ModalKrugok zally={zally}/>
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </Container>
  );
}
export default InKrugok;
