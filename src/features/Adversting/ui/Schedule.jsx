import React, { useState } from "react";
import TimeSelector from "./TimeSelector";
import Website from "./Website";

function Schedule() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="mt-[30px] mb-2 font-sans text-2xl font-medium">
          График работы
        </h1>
      </div>
      <div className="grid  grid-cols-2 gap-[20px]">
        {[
          "Понедельник",
          "Вторник",
          "Среда",
          "Четверг",
          "Пятница",
          "Суббота",
        ].map((day) => (
          <div key={day} className="flex items-center justify-between ">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="accent-[#FF0000] w-[22px] h-[22px]"
              />
              <span className="font-sans">{day}</span>
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
