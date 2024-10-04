import React, { useState } from "react";
import clock from "../../../shared/assets/svg/admin_oclock.svg";
import Hours from "./Hours";

function TimeSelector({
  defaultHour = "09",
  defaultMinute = "00"
}) {
  const [open, setOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState(defaultHour);
  const [selectedMinute, setSelectedMinute] = useState(defaultMinute);

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
    setOpen(false);
  };
  
  const handleMinuteClick = (minute) => {
    setSelectedMinute(minute);
    setOpen(false);
  };

  return (
    <div
      className="rounded relative cursor-pointer  w-[99px]  py-1 px-4 flex gap-x-2 bg-[#FF0000]"
      onClick={() => setOpen(!open)}
    >
      <span className="font-sans">
        {selectedHour}:{selectedMinute}
      </span>
      <img src={clock} alt="icon" />
      {open && (
        <Hours
          open={open}
          selectedHour={selectedHour}
          selectedMinute={selectedMinute}
          handleHourClick={handleHourClick}
          handleMinuteClick={handleMinuteClick}
        />
      )}
    </div>
  );
}

export default TimeSelector;
