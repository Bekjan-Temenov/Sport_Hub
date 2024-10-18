import React from "react";

function Hours({ selectedHour, selectedMinute, handleHourClick, handleMinuteClick }) {
  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));

  return (
    <div className="absolute z-10 bg-white border border-gray-300 rounded shadow-lg">
      <div className="grid grid-cols-2 gap-2 p-2">
        <div>
          <h4 className="font-bold">Часы</h4>
          {hours.map((hour) => (
            <div
              key={hour}
              className={`cursor-pointer p-1 ${hour === selectedHour ? 'bg-blue-200' : ''}`}
              onClick={() => handleHourClick(hour)}
            >
              {hour}
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-bold">Минуты</h4>
          {minutes.map((minute) => (
            <div
              key={minute}
              className={`cursor-pointer p-1 ${minute === selectedMinute ? 'bg-blue-200' : ''}`}
              onClick={() => handleMinuteClick(minute)}
            >
              {minute}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hours;
