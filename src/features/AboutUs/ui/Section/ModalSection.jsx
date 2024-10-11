import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TimeSelector from "../../../Adversting/ui/TimeSelector";
import { section } from "../../store/action";
import gallery from "../../../../shared/assets/svg/admin_gallery.svg";

const inputGroups = [
  [
    { name: "header1", placeholder: "1.Добавить заголовок ..." },
    { name: "description1", placeholder: "1.Добавить описание ..." },
  ],
  [
    { name: "header2", placeholder: "2.Добавить заголовок ..." },
    { name: "description2", placeholder: "2.Добавить описание ..." },
  ],
  [
    { name: "header3", placeholder: "3.Добавить заголовок ..." },
    { name: "description3", placeholder: "3.Добавить описание ..." },
  ],
];
const ModalSection = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState(Array(3).fill(null));
  const [image, setImage] = useState(null);
  const [formValues, setFormValues] = useState({
    title: "",
    phone: "",
    address: "",
    sports: "basketball",
    header1: "",
    header2: "",
    header3: "",
    description1: "",
    description2: "",
    description3: "",
    age_group: "teens",
    day_of_week: "monday",
    start_time: "09:00",
    end_time: "18:00",
    image: "",
  });

  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedImages = [...selectedImages];
      updatedImages[index] = imageUrl;
      setSelectedImages(updatedImages);
      setImage(file); // Set the image file for submission
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  console.log(formValues);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });

    if (image) {
      formData.append("image", image); // Append the image file if available
    }

    // Debug: Check the content before dispatch
    console.log("FormData submitted:", formData);

    // Ensure the backend accepts multipart/form-data
    dispatch(section(formData));
  };

  return (
    <div className="flex flex-col rounded">
      <hr className="border-[#B6B7BC]  w-full mt-[50px] mb-[50px]" />
      <form onSubmit={handleSubmit} className="w-full p-4 mx-auto ">
        <div className="flex flex-col gap-y-[70px]">
          <div className="flex items-center justify-between w-full">
            <h1 className="ml-[50px] font-sans text-3xl font-semibold">
              Заголовок
            </h1>
            <div className="flex items-center cursor-pointer">
              <div className="flex justify-center items-center w-[355px] h-[225px]  border rounded cursor-pointer bg-[#131313]">
                <input
                  type="file"
                  id="avatar-0"
                  className="hidden"
                  name="avatar-0"
                  accept="image/png, image/jpeg"
                  onChange={(e) => handleImageUpload(e, 0)}
                />
                <img
                  onClick={() => document.getElementById("avatar-0").click()}
                  src={selectedImages[0] || gallery}
                  className="w-full h-full border rounded"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className=" border w-[207px] overflow-hidden flex items-center justify-center h-[140px] rounded cursor-pointer bg-[#131313] "
              >
                <input
                  type="file"
                  id={`avatar-${index + 1}`}
                  className="hidden "
                  name={`avatar-${index + 1}`}
                  accept="image/png, image/jpeg"
                  onChange={(e) => handleImageUpload(e, index + 1)}
                />
                <img
                  onClick={() =>
                    document.getElementById(`avatar-${index + 1}`).click()
                  }
                  src={selectedImages[index + 1] || gallery}
                  alt="icon"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="mb-3 font-sans text-2xl font-semibold">
            Дабавить обзор активности
          </h1>
          <div className="flex flex-col mb-[20px] gap-y-[10px]">
            <h1 className="font-sans text-xl font-medium">Спорт*</h1>

            <select
              name="sports"
              value={formValues.sports}
              onChange={handleInputChange}
              className="border w-[20%] pl-1 py-1  bg-[#131313] rounded"
            >
              <option value="value1" selected>
                Спорт
              </option>
              <option value="Баскетбол">Баскетбол</option>
              <option value="Футбол">Футбол</option>
              <option value="Волейбол">Волейбол</option>
              <option value="Бокс">Бокс</option>
              <option value="Теннис">Теннис</option>
              <option value="Тхэквондо">Тхэквондо</option>
              <option value="Велоспорт">Велоспорт</option>
              <option value="Плавание">Плавание</option>
              <option value="Йога">Йога</option>
            </select>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-y-[20px]">
              <input
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleInputChange}
                className="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
                placeholder="Дабавить заголовок ..."
              />
              <input
                type="text"
                className="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
                placeholder="Дабавить описание ..."
              />
              <input
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                className="w-full p-2 border  bg-[#131313] rounded"
                placeholder="+996 (      )"
              />
              <input
                type="text"
                name="address"
                value={formValues.address}
                onChange={handleInputChange}
                className="w-full p-2 border  bg-[#131313] rounded"
                placeholder="Дабавить адрес ..."
              />
            </div>
            <div className="flex flex-col border rounded gap-y-3 w-[356px] items-center py-[35px] px-[20px]  bg-[#131313]">
              <input
                type="file"
                id="avatar"
                className="hidden"
                name="avatar"
                accept="image/png, image/jpeg"
              />
              <button
                onClick={() => document.getElementById("avatar").click()}
                className="bg-[#C8180C]  py-2 px-6   rounded-full"
              >
                Загрузить изображение
              </button>
              <p className="text-center text-md">
                Допустимые форматы: PNG, GIF, WEBP, MP4, и MP3
              </p>
            </div>
          </div>
        </div>
        <h1 className="mt-8 mb-5 font-sans text-2xl">Наши преимущества</h1>
        <div className="flex flex-wrap items-center justify-between">
          {inputGroups.map((group, index) => (
            <div
              key={index}
              className={`flex w-[45%] flex-col gap-3 ${
                index === 2 ? "mx-auto mt-[30px]" : ""
              }`}
            >
              {group.map((field, subIndex) => (
                <input
                  key={subIndex}
                  className="w-full p-2 border border-gray-700 bg-[#131313] text-white rounded-lg"
                  type="text"
                  name={field.name}
                  value={formValues[field.name]}
                  placeholder={field.placeholder}
                  onChange={handleInputChange}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">
            Возрастная группа
          </label>
          <select
            name="age_group"
            value={formValues.age_group}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#131313] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="adults">Взрослые</option>
            <option value="teens">Подростки</option>
            <option value="children">Дети</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">
            Выберите день недели
          </label>
          <select
            name="day_of_week"
            value={formValues.day_of_week}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-[#131313] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="monday">Понедельник</option>
            <option value="tuesday">Вторник</option>
            <option value="wednesday">Среда</option>
            <option value="thursday">Четверг</option>
            <option value="friday">Пятница</option>
            <option value="saturday">Суббота</option>
            <option value="sunday">Воскресенье</option>
          </select>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-medium">Начало</label>
            <TimeSelector
              label="start_time"
              defaultHour="09"
              defaultMinute="00"
              onChange={(time) =>
                setFormValues((prevValues) => ({
                  ...prevValues,
                  start_time: time,
                }))
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-medium">Конец</label>
            <TimeSelector
              label="end_time"
              defaultHour="18"
              defaultMinute="00"
              onChange={(time) =>
                setFormValues((prevValues) => ({
                  ...prevValues,
                  end_time: time,
                }))
              }
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">
            Изображения круга
          </label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalSection;
