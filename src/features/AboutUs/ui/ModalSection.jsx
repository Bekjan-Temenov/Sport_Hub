import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TimeSelector from "../../Adversting/ui/TimeSelector"; 
import { section } from "../store/action"; 
import Title from "./Title";
import Inputs from "./Inputs";
import OurAdvantages from "./OurAdvantages";
import Schedule from "../../Adversting/ui/Schedule";

const ModalSection = ({ setIsOpen }) => {
  const dispatch = useDispatch(); 
  const [image, setImage] = useState(null);
  const [formValues, setFormValues] = useState({
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
    age_group: "teens",
    day_of_week: "monday",
    start_time: "09:00",
    end_time: "18:00",
    circle_images: [],
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = e.target.files[0]; 
    setImage(files);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues); 
    dispatch(section({...formValues, image: image}));
  };

  return (
    <div className="absolute top-0 border left-0 z-50 w-full h-[295%]">
      <div
        onClick={() => setIsOpen(false)}
        className="absolute left-0 w-full h-full bg-black border border-red-500 opacity-70"
      ></div>
      <div className="bg-[#222224] top-[58px] w-[60%] right-[20%]  absolute flex flex-col px-[60px] py-[40px] rounded">
        {/* <Title /> */}
        <hr className="border-[#B6B7BC]  w-full mt-[50px] mb-[50px]" />
        <form onSubmit={handleSubmit} className="w-full p-4 mx-auto ">
          <Inputs
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
          <OurAdvantages
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
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

          {/* Time selection */}
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

          {/* Image selection */}
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium">
              Изображения круга
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="grid grid-cols-2 gap-2 mt-2">
              {/* {formValues.image.map((file, index) => (
                <img
                  key={index}
                  src={
                    typeof file === "string" ? file : URL.createObjectURL(file)
                  }
                  alt={`Circle ${index}`}
                  className="w-full h-auto rounded-md"
                />
              ))} */}
              {/* <input type="file" onChange={handleImage} /> */}
            </div>
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
    </div>
  );
};

export default ModalSection;
