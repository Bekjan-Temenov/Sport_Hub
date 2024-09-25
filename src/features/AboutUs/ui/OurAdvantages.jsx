import React from "react";

const inputGroups = [
  [
    { placeholder: "1.Добавить заголовок ..." },
    { placeholder: "1.Добавить описание ..." }
  ],
  [
    { placeholder: "2.Добавить заголовок ..." },
    { placeholder: "2.Добавить описание ..." }
  ],
  [
    { placeholder: "3.Добавить заголовок ..." },
    { placeholder: "3.Добавить описание ..." }
  ]
];

function OurAdvantages() {
  return (
    <>
      <h1 className="mt-8 mb-5 font-sans text-2xl">Наши преимущества</h1>
      <div className="flex flex-wrap items-center justify-between">
        {inputGroups.map((group, index) => (
          <div
            key={index}
            className={`flex w-[45%] flex-col gap-3 ${index === 2 ? "mx-auto mt-[30px]" : ""}`}>
            {group.map((field, subIndex) => (
              <input
                key={subIndex}
                className="w-full p-2 border border-gray-700 bg-[#131313] text-white rounded-lg"
                type="text"
                placeholder={field.placeholder}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default OurAdvantages;