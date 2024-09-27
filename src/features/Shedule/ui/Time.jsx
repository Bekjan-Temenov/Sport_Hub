import React, { useState } from "react";
import TimeSelector from "../../Adversting/ui/TimeSelector";

const timeSlots = [
  { day: "Пн-Ср-Пт" },
  { day: "Вт-Чт-Сб" }
];

function Time() {
  const [selectedIntervals, setSelectedIntervals] = useState({
    "Пн-Ср-Пт": Array(3).fill(false),
    "Вт-Чт-Сб": Array(3).fill(false)
  });

  const handleCheckboxChange = (day, index) => {
    setSelectedIntervals(prevState => ({
      ...prevState,
      [day]: prevState[day].map((value, i) => (i === index ? !value : value))
    }));
  };

  return (
    <div className="grid mt-4 w-full grid-cols-2 gap-[20px]">
      {timeSlots.map(({ day }) => (
        <div key={day} className="flex flex-col items-center gap-9">
          <h1>{day}</h1>
          {selectedIntervals[day].map((selected, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selected}
                onChange={() => handleCheckboxChange(day, index)}
                className="accent-[#FF0000] w-[22px] h-[22px]"
              />
              <div className="flex gap-2">
                <TimeSelector defaultHour="09" defaultMinute="00" />
                <TimeSelector defaultHour="09" defaultMinute="00" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Time;
