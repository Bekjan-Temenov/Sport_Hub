import React, { useState, useEffect } from "react";
import oclock from "../../../shared/assets/svg/admin_oclock.svg";

const TimeSelector = ({ defaultHour, defaultMinute, onChange }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const [selectedHour, setSelectedHour] = useState(defaultHour);
  const [selectedMinute, setSelectedMinute] = useState(defaultMinute);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedHour(defaultHour);
    setSelectedMinute(defaultMinute);
  }, [defaultHour, defaultMinute]);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
    onChange(`${hour < 10 ? `0${hour}` : hour}:${selectedMinute < 10 ? `0${selectedMinute}` : selectedMinute}`);
  };

  const handleMinuteChange = (minute) => {
    setSelectedMinute(minute);
    onChange(`${selectedHour < 10 ? `0${selectedHour}` : selectedHour}:${minute < 10 ? `0${minute}` : minute}`);
  };

  return (
    <div className="relative w-[86px] inline-block text-white">
      <div
        className="flex justify-between px-3 py-1 text-center bg-[#FF0000] rounded cursor-pointer"
        onClick={toggleSelect}
      >
        {`${selectedHour < 10 ? `0${selectedHour}` : selectedHour}:${selectedMinute < 10 ? `0${selectedMinute}` : selectedMinute}`}
        <img src={oclock} alt="" />
      </div>

      {isOpen && (
        <div style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} onClick={() => setIsOpen(false)} className="absolute z-50 left-0 w-full p-3 text-black max-h-[116px] overflow-y-auto bg-white shadow-lg top-full">
          <div className="flex justify-between mb-2">
            <div className="flex flex-col items-center font-sans cursor-pointer">
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="w-full px-1 text-center hover:bg-[#FF0000] hover:text-white"
                  onClick={() => handleHourChange(hour)}
                >
                  {hour < 10 ? `0${hour}` : hour}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center font-sans cursor-pointer">
              {minutes.map((minute) => (
                <div
                  key={minute}
                  className="w-full px-1 text-center hover:bg-[#FF0000] hover:text-white"
                  onClick={() => handleMinuteChange(minute)}
                >
                  {minute < 10 ? `0${minute}` : minute}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSelector;
