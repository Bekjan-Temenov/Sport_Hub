import React from "react";
import TimeSelector from "./TimeSelector";

const days = [
  { 
    id:1,
    checked:false,
    day:"Понедельник",
    day_of_week: "monday",
    opening_time: "09:00",
    closing_time: "18:00",
    is_active: false,
  },
  { 
    id:2,
    checked:false,
    day:"Вторник"
  },
  { 
    id:3,
    checked:false,
    day:"Среда"
  },
  { 
    id:4,
    checked:false,
    day:"Четверг"
  },
  { 
    id:5,
    checked:false,
    day:"Пятница"
  },
  { 
    id:6,
    checked:false,
    day:"Суббота"
  }
]
function Schedule( {title}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="mt-[30px] mb-2 font-sans text-2xl font-medium">
          {title}
        </h1>
      </div>
      <div className="grid  grid-cols-2 gap-[20px]">
        {days.map((day) => (
          <div key={day.id} className="flex items-center justify-between ">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="accent-[#FF0000] w-[22px] h-[22px]"
              />
              <span className="font-sans">{day.day}</span>
            </div>
            <div className="flex gap-2">
              <TimeSelector
                label={day}
                defaultHour="09"
                defaultMinute="00"
              />
              <TimeSelector
                label={day}
                defaultHour="09"
                defaultMinute="00"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
