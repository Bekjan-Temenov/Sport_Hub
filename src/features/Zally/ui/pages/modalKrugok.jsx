import React from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function ModalKrugok({ zally }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sport = JSON.parse(decodeURIComponent(queryParams.get("sport")));

  if (!sport) {
    return <p>Data not found</p>;
  }

  return (
    <div className="text-white lg:hidden border w-[90%] h-full mx-auto">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${sport.inbackgroundImage2})`,
        }}
        className="grid grid-cols-1 gap-2 p-3 bg-center bg-cover rounded-lg sm:p-4 sm:grid-cols-2"
      >
        {zally.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full p-2 mb-2 transition duration-300 bg-black bg-opacity-50 border rounded-lg hover:bg-opacity-70"
          >
            <span className="text-sm font-medium text-white">{item}</span>
            <Link to="/gym">
              <button className="flex items-center justify-center w-6 h-6 transition duration-300 bg-red-600 rounded-full hover:bg-red-700">
                <ArrowForwardIcon fontSize="small" />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModalKrugok;
