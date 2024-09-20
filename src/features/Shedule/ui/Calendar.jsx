import React, { useState } from "react";
import clsx from "clsx";
import eys from "../../../shared/assets/svg/eyes.svg";
import del from "../../../shared/assets/svg/delete.svg";
import clock from "../../../shared/assets/svg/admin_oclock.svg";

const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
const timeSlots = [
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
  "17:00-18:00",
  "18:00-19:00",
];
const slots = [
  { time: "09:00-10:00", day: "ПН", event: "Баскетбол" },
  { time: "10:00-11:00", day: "ВТ", event: "Баскетбол" },
  { time: "09:00-10:00", day: "СР", event: "Баскетбол" },
  { time: "10:00-11:00", day: "ЧТ", event: "Баскетбол" },
  { time: "09:00-10:00", day: "ПТ", event: "Баскетбол" },
  { time: "10:00-11:00", day: "СБ", event: "Баскетбол" },
];

const Calendar = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSlotClick = (slot) => {
    if (slot.event) {
      setSelectedSlot(slot);
      setShowModal(true);
    }
  };

  const getSlot = (day, time) =>
    slots.find((slot) => slot.day === day && slot.time === time) || {
      event: null,
    };

  return (
    <div className=" w-[105%] ">
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr>
            <th></th>
            {daysOfWeek.map((day) => (
              <th key={day} className="px-2 py-1 text-white ">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr key={time}>
              <td className="px-2 w-[26px] py-1 text-white   flex-flex-col">
                {time}
              </td>

              {daysOfWeek.map((day) => {
                const slot = getSlot(day, time);
                return (
                  <td key={day} className="">
                    <TimeSlot
                      slot={slot}
                      onClick={() => handleSlotClick(slot)}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && selectedSlot && (
        <Modal onClose={() => setShowModal(false)} slot={selectedSlot} />
      )}
    </div>
  );
};

const TimeSlot = ({ slot, onClick }) => {
  return (
    <div
      className={clsx(
        "rounded-md px-3 h-20 flex items-center border justify-center",
        slot.event ? "bg-red-600 cursor-pointer" : "border"
      )}
      onClick={onClick}
    >
      {slot.event ? (
        <div className="flex gap-2 ">
          <img src={clock} alt="icon" />
          <div className="text-center text-white">
            <p className="whitespace-nowrap">{slot.time}</p>
            <p className="whitespace-nowrap">{slot.event}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-4 bg-white rounded-lg flex flex-col items-center gap-3 pr-[80px]">
        <button
          className="flex items-center block gap-2 mb-2 text-gray-400 text-blue-500 "
          onClick={onClose}
        >
          <img src={eys} alt="icon" />
          Смотреть
        </button>
        <button
          className="flex items-center block gap-2 text-gray-400"
          onClick={onClose}
        >
          <img src={del} alt="icon" />
          Отменить
        </button>
      </div>
    </div>
  );
};

export default Calendar;
