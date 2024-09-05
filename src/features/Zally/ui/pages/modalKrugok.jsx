import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function ModalKrugok({ sport, zally }) {
  if (!sport) {
    return <p>Data not found</p>;
  }

  return (
    <div className="text-white mt-3 lg:hidden  w-[90%] h-full mx-auto">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${sport.inbackgroundImage2})`,
        }}
        className="grid grid-cols-1 gap-[3px] border gap-x-[50px] p-3 bg-center bg-cover  rounded-md sm:p-4 sm:grid-cols-2"
      >
        {zally.map((item, index) => (
          <Link to="/arena">
            <div
              key={index}
              className="flex items-center justify-between w-full "
            >
              <span className="font-sans text-sm font-medium text-white">
                {item}
              </span>
              <button className="flex items-center justify-center w-6 h-6 transition duration-300 bg-red-600 rounded-md hover:bg-red-700">
                <ArrowForwardIcon fontSize="small" />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ModalKrugok;
