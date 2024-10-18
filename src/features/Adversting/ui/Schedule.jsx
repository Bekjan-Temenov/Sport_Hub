import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createWorkSchedule } from "../shedule";
import TimeSelector from "./TimeSelector";

const daysOfWeek = [
  { id: 1, name: "Понедельник" },
  { id: 4, name: "Четверг" },
  { id: 2, name: "Вторник" },
  { id: 5, name: "Пятница" },
  { id: 3, name: "Среда" },
  { id: 6, name: "Суббота" },
]

const WorkScheduleForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.workSchedules);

  const [workSchedules, setWorkSchedules] = useState(
    daysOfWeek.map((day) => ({
      day_of_week: day.name,
      opening_time: "",
      closing_time: "",
      is_active: false,
    }))
  );

  console.log(workSchedules);


  const handleCheckboxChange = (index) => {
    setWorkSchedules((prevSchedules) =>
      prevSchedules.map((schedule, i) =>
        i === index ? { ...schedule, is_active: !schedule.is_active } : schedule
      )
    );
  };

  const handleTimeChange = (index, field, value) => {
    setWorkSchedules((prevSchedules) =>
      prevSchedules.map((schedule, i) =>
        i === index ? { ...schedule, [field]: value } : schedule
      )
    );
  };

  const handleSubmits = async (e) => {
    e.preventDefault();

    console.log("Форма отправляется");

    const selectedSchedules = workSchedules.filter(
      (schedule) => schedule.is_active
    );

    if (selectedSchedules.length === 0) {
      alert("Пожалуйста, выберите хотя бы один день для работы.");
      return;
    }

    try {
      for (const schedule of selectedSchedules) {
        const scheduleData = {
          day_of_week: schedule.day_of_week,
          opening_time: schedule.opening_time,
          closing_time: schedule.closing_time,
          is_active: schedule.is_active,
        };

        await dispatch(
          createWorkSchedule({ workScheduleData: scheduleData })
        ).unwrap();
      }
      console.log("Все расписания успешно отправлены");
    } catch (error) {
      console.error("Ошибка при отправке расписания:", error);
      alert("Произошла ошибка при отправке расписания.");
    }
  };

  return (
    <div className="w-full mx-auto mt-10 text-white rounded-lg">
      <h2 className="mb-4 text-2xl font-semibold text-start">График работы</h2>
      {error && <p className="text-center text-red-500">{error}</p>}

      <form onSubmit={handleSubmits} className="grid grid-cols-2">
        {workSchedules.map((schedule, index) => (
          <div key={index} className="flex items-center justify-between p-4">
            <input
              type="checkbox"
              checked={schedule.is_active}
              onChange={() => handleCheckboxChange(index)}
              className="accent-[#FF0000] w-[22px] cursor-pointer h-[22px]"
            />
            <label className="block ml-2 text-sm text-white">
              {schedule.day_of_week}
            </label>
            <div className="flex items-center gap-3">
              <TimeSelector
                defaultHour={
                  parseInt(schedule.opening_time.split(":")[0], 10) || 0
                }
                defaultMinute={
                  parseInt(schedule.opening_time.split(":")[1], 10) || 0
                }
                onChange={(time) =>
                  handleTimeChange(index, "opening_time", time)
                }
              />
              <TimeSelector
                defaultHour={
                  parseInt(schedule.closing_time.split(":")[0], 10) || 0
                }
                defaultMinute={
                  parseInt(schedule.closing_time.split(":")[1], 10) || 0
                }
                onChange={(time) =>
                  handleTimeChange(index, "closing_time", time)
                }
              />
            </div>
          </div>
        ))}

        <button
          type="submit"
          className={
            loading
              ? "bg-gray-400 cursor-disabled text-center px-[55px] py-[10px] rounded-md"
              : "text-center bg-[#FE0404] hover:bg-red-700 px-[55px] py-[10px] rounded-md"
          }
        >
          {loading ? "Загрузка..." : "Сохранить"}
        </button>
      </form>
    </div>
  );
};

export default WorkScheduleForm;
