import React from "react";
import Container from "../../../shared/helpers/Container";

const scheduleData = [
  {
    time: "07:00",
    days: [
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
    ],
  },
  {
    time: "09:00",
    days: [
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
    ],
  },
  {
    time: "07:00",
    days: [
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
      "",
    ],
  },
  {
    time: "09:00",
    days: [
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
    ],
  },
  {
    time: "07:00",
    days: [
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
    ],
  },
  {
    time: "09:00",
    days: [
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
      "Basketball (6-15 years)",
    ],
  },
  {
    time: "07:00",
    days: [
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
      "Basketball (Adults)",
      "",
    ],
  },
];

const Schedule = () => {
  return (
    <Container>
      <div className="mx-auto lg:p-6">
        <h1 className="py-4 mb-4 text-2xl text-center text-red-500">
          Расписание тренировок
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-gray-600 border text-white text-xs lg:text-lg bg-[#4F4D4D]">
            <thead>
              <tr>
                <th className="p-1 border border-gray-500 lg:p-6">Время</th>
                <th className="p-1 border border-gray-500 lg:p-6">Пн</th>
                <th className="p-1 border border-gray-500 lg:p-6">Вт</th>
                <th className="p-1 border border-gray-500 lg:p-6">Ср</th>
                <th className="p-1 border border-gray-500 lg:p-6">Чт</th>
                <th className="p-1 border border-gray-500 lg:p-6">Пт</th>
                <th className="p-1 border border-gray-500 lg:p-6">Сб</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, index) => (
                <tr
                  key={index}
                  className="bg-[#18171A] mx-auto border-b border-gray-500 "
                >
                  <td className="px-4 py-4 bg-[#4F4D4D] border-gray-500 border">
                    {row.time}
                  </td>
                  {row.days.map((day, i) => (
                    <td key={i} className="p-2 border border-gray-500 md:p-6">
                      {day}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Schedule;
