import React, { useState } from "react";

function Hours({
  open,
  handleMinuteClick,
  handleHourClick,
  selectedMinute,
  selectedHour,
}) {
  const hours = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];
  const minutes = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
  ];    

  return (
    <>
      {open && (
        <div 
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="absolute  w-[99px] z-10   top-[33px]  h-[121px] overflow-auto text-black bg-white  shadow-md right-0">
          
          <div className="flex ">
            <div className="flex-1 p-2 text-center ">
              {hours.map((hour) => (
                <div
                  key={hour}
                  className={`mb-[10px] cursor-pointer ${
                    selectedHour === hour ? "bg-[#FF0000] text-white" : ""
                  }`}
                  onClick={() => handleHourClick(hour)}
                >
                  {hour}
                </div>
              ))}
            </div>
            <div className="flex-1 p-2 text-center">
              {minutes.map((minute) => (
                <div
                  key={minute}
                  className={`mb-[10px] cursor-pointer ${
                    selectedMinute === minute ? "bg-[#FF0000] text-white" : ""
                  }`}
                  onClick={() => handleMinuteClick(minute)}
                >
                  {minute}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hours;
