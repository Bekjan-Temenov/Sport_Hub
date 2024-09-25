import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Buttons } from "./Website";
// import Title from "./Title";
// import Inputs from "./Inputs";
// import Schedule from "../../Adversting/ui/Schedule";
// import OurAdvantages from "./OurAdvantages";
import { section } from "../store/action";

function ModalSection({ setIsOpen }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.section);

  const [formData, setFormData] = useState({
    title: "",
    phone: "",
    address: "",
    sports: "basketball",
    header1: "",
    header2: "",
    header3: "",
    header4: "",
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    images: [],
    scheduleAdults: {},
    scheduleTeens: {},
    scheduleKids: {},
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);
    dispatch(section(formData))
      .unwrap()
      .catch((err) => {
        console.error("Failed to submit:", err);
        alert(`Ошибка: ${err.message || "Неизвестная ошибка"}`);
      });
  };

  return (
    <div className="container p-6 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="p-8 text-white bg-gray-900 rounded-lg shadow-lg"
      >
        {/* Title and Image Upload */}
        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold">Заголовок</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
            onChange={handleInputChange}
          />
        </div>

        {/* Phone and Address */}
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
          <div>
            <label className="block mb-2">Телефон</label>
            <input
              type="text"
              name="phone"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mb-2">Адрес</label>
            <input
              type="text"
              name="address"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Sports Type */}
        <div className="mb-4">
          <label className="block mb-2">Вид спорта</label>
          <select
            name="sports"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
            onChange={handleInputChange}
          >
            <option value="basketball">Баскетбол</option>
            <option value="football">Футбол</option>
            {/* Add more sports options as needed */}
          </select>
        </div>

        {/* Headers and Descriptions */}
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
          {["header1", "header2", "header3", "header4"].map((header, index) => (
            <div key={index}>
              <label className="block mb-2">Заголовок {index + 1}</label>
              <input
                type="text"
                name={header}
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
          {["description1", "description2", "description3", "description4"].map(
            (desc, index) => (
              <div key={index}>
                <label className="block mb-2">Описание {index + 1}</label>
                <input
                  type="text"
                  name={desc}
                  className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
                  onChange={handleInputChange}
                />
              </div>
            )
          )}
        </div>

        {/* Images Upload */}
        <div className="mb-4">
          <label className="block mb-2">Загрузить изображения</label>
          <input
            type="file"
            name="images"
            multiple
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg"
            onChange={(e) =>
              setFormData({
                ...formData,
                images: [...formData.images, ...Array.from(e.target.files)],
              })
            }
          />
        </div>

        {/* Schedules for Adults, Teens, and Kids */}
        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold">
            Расписание для взрослых
          </label>
          <input
            type="text"
            name="scheduleAdults"
            className="w-full p-2 bg-gray-800 border rounded-lg"
            onChange={handleInputChange}
          />
          {/* Add your time input logic here */}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold">
            Расписание для подростков
          </label>
          <input
            type="text"
            name="scheduleTeens"
            className="w-full p-2 bg-gray-800 border rounded-lg"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold">
            Расписание для детей
          </label>
          <input
            type="text"
            name="scheduleKids"
            className="w-full p-2 bg-gray-800 border rounded-lg"
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Отправка..." : "Отправить"}
          </button>
          {error && <p className="mt-2 text-red-500">Ошибка: {error}</p>}
        </div>
      </form>
    </div>
  );
}
export default ModalSection;
