import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { createSchedule, createWorkSchedule, postCircles } from "../../store/action";
import gallery from "../../../../../shared/assets/svg/admin_gallery.svg";
import TimeSelector from "../../../../Adversting/ui/TimeSelector";

const daysOfWeek = [
  { id: 1, name: "Понедельник" },
  { id: 4, name: "Четверг" },
  { id: 2, name: "Вторник" },
  { id: 5, name: "Пятница" },
  { id: 3, name: "Среда" },
  { id: 6, name: "Суббота" },
];

const Create = ({ setIsOpen }) => {
  const notify = () => toast.success("Кружок успешно создана!");
  const errorfy = () => toast.error("ошибка!");
  const dispatch = useDispatch();
  const [workSchedules, setWorkSchedules] = useState(
    daysOfWeek.map((day) => ({
      day_of_week: day.name,
      opening_time: "09:00",
      closing_time: "18:00",
      is_active: false,
      hall:null
    }))
  );
  const [formData, setFormData] = useState({
    sports: "",
    title: "",
    phone: "",
    address: "",
    description1: "",
    header2: "",
    description2: "",
    header3: "",
    description3: "",
    header4: "",
    description4: "",
    image: null,
    image1: null,
    image2: null,
    image3: null,
  });
  console.log(formData);

  const [mainImage, setMainImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const { loading, error } = useSelector((state) => state.shedules);

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
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };

  const handleAdditionalImageChange = (index) => (e) => {
    const file = e.target.files[0];

    if (index === 0) {
      setImage1(file);
      setFormData((prevFormData) => ({ ...prevFormData, image1: file }));
    } else if (index === 1) {
      setImage2(file);
      setFormData((prevFormData) => ({ ...prevFormData, image2: file }));
    } else if (index === 2) {
      setImage3(file);
      setFormData((prevFormData) => ({ ...prevFormData, image3: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("sports", formData.sports);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("header2", formData.header2);
    formDataToSend.append("header3", formData.header3);
    formDataToSend.append("header4", formData.header4);
    formDataToSend.append("description1", formData.description1);
    formDataToSend.append("description2", formData.description2);
    formDataToSend.append("description3", formData.description3);
    formDataToSend.append("description4", formData.description4);

    if (mainImage) {
      formDataToSend.append("image", mainImage);
    }

    if (image1) {
      formDataToSend.append("image1", image1);
    }

    if (image2) {
      formDataToSend.append("image2", image2);
    }

    if (image3) {
      formDataToSend.append("image3", image3);
    }

    dispatch(
      postCircles({ formData: formDataToSend, setIsOpen, notify, errorfy })
    );

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
        dispatch(createSchedule({ ScheduleData: scheduleData }));
      }
      console.log("Все расписания успешно отправлены");
    } catch (error) {
      console.error("Ошибка при отправке расписания:", error);
      alert("Произошла ошибка при отправке расписания.");
    }

    if (uniqueSchedules.length === 0) {
      alert("Пожалуйста, выберите хотя бы один уникальный день для работы.");
      return;
    }

    try {
      for (const schedule of uniqueSchedules) {
        const scheduleData = {
          day_of_week: schedule.day_of_week,
          opening_time: schedule.opening_time,
          closing_time: schedule.closing_time,
          is_active: schedule.is_active,
        };
        dispatch(createWorkSchedule({ workScheduleData: scheduleData }));
      }
      console.log("Все уникальные расписания успешно отправлены");
    } catch (error) {
      console.error("Ошибка при отправке расписания:", error);
      alert("Произошла ошибка при отправке расписания.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-white ">
      <form onSubmit={handleSubmit} className="w-full p-4 mx-auto ">
        <div className="flex flex-col gap-14 ">
          <div className="flex items-center justify-between w-full ">
            <h1 className="ml-[50px] font-sans text-3xl font-semibold">
              Заголовок
            </h1>
            <div
              onClick={() => document.getElementById("mainImage").click()}
              className="w-[355px] items-center justify-center flex overflow-hidden  h-[225px] border rounded cursor-pointer bg-[#131313]"
            >
              <input
                type="file"
                id="mainImage"
                onChange={handleMainImageChange}
                className="hidden"
                accept="image/*"
              />
              <img
                src={mainImage ? URL.createObjectURL(mainImage) : gallery}
                alt="Главное изображение"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            {[image1, image2, image3].map((image, index) => (
              <div
                key={index}
                className="w-[207px] flex items-center overflow-hidden justify-center h-[140px] border rounded cursor-pointer bg-[#131313]"
                onClick={() =>
                  document.getElementById(`additionalImage${index}`).click()
                }
              >
                <input
                  type="file"
                  id={`additionalImage${index}`}
                  onChange={handleAdditionalImageChange(index)}
                  className="hidden"
                  accept="image/*"
                />
                <img
                  src={image ? URL.createObjectURL(image) : gallery}
                  className="rounded "
                  alt={`Дополнительное изображение ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <hr className="my-10 bg-[#D9D9D9]" />
        <div className="mb-4 cursor-pointer w-[41%]">
          <label className="block mb-2 font-sans text-lg">Спорт*</label>
          <select
            name="sports"
            value={formData.sports}
            onChange={handleChange}
            className="border w-full  cursor-pointer  pl-1 py-1 bg-[#131313] rounded"
            required
          >
            <option></option>
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
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
              placeholder="Дабавить заголовок ..."
            />
            <input
              type="text"
              value={formData.description1}
              onChange={handleChange}
              name="description1"
              className="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
              placeholder="Дабавить описание ..."
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded"
              placeholder="+996 (      )"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
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
        <h1 className="font-sans text-[24px] my-4 font-bold">
          Наши преимущества
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-8 ">
          <div className="flex flex-col w-[345px] gap-4">
            <input
              type="text"
              name="header2"
              value={formData.header2}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded-lg"
              placeholder="1.Дабавить заголовок ..."
            />
            <input
              type="text"
              name="description2"
              value={formData.description2}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded-lg"
              placeholder="1.Дабавить описание ..."
            />
          </div>
          <div className="flex w-[345px] flex-col gap-4">
            <input
              type="text"
              name="header3"
              value={formData.header3}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded-lg"
              placeholder="2.Дабавить заголовок ..."
            />
            <input
              type="text"
              name="description3"
              value={formData.description3}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded-lg"
              placeholder="2.Дабавить описание ..."
            />
          </div>
          <div className="flex w-[345px] flex-col gap-4">
            <input
              type="text"
              name="header4"
              value={formData.header4}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded-lg"
              placeholder="3.Дабавить заголовок ..."
            />
            <input
              type="tel"
              name="description4"
              value={formData.description4}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded-lg"
              placeholder="3.Дабавить описание ..."
            />
          </div>
        </div>
        <h1 className="font-sans text-[24px]">Расписание для взрослых</h1>
        <div className="grid grid-cols-2 gap-4 gap-x-7 my-9">
          {workSchedules.map((schedule, index) => (
            <div key={index} className="flex items-center justify-between ">
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
        </div>
        <h1 className="font-sans text-[24px]">Расписание для подростков </h1>
        <div className="grid grid-cols-2 gap-4 gap-x-7 my-9">
          {workSchedules.map((schedule, index) => (
            <div key={index} className="flex items-center justify-between ">
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
        </div>
        <h1 className="font-sans text-[24px]">Расписание для детей</h1>
        <div className="grid grid-cols-2 gap-4 gap-x-7 my-9">
          {workSchedules.map((schedule, index) => (
            <div key={index} className="flex items-center justify-between ">
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
        </div>

        <div className="flex items-center justify-around">
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="text-center bg-[#FE04044D] hover:bg-red-900 px-[55px] py-[10px] rounded-md"
          >
            Назад
          </button>
          <button
            type="submit"
            className={
              loading
                ? "bg-gray-400 cursor-disabled text-center px-[55px] py-[10px] rounded-md"
                : "text-center bg-[#FE0404] hover:bg-red-700 px-[55px] py-[10px] rounded-md"
            }
          >
            {loading ? "Загрузка..." : "Сохранить и опубликовать"}
          </button>
          <ToastContainer />
        </div>
        {error && (
          <p className="mx-[30%] my-4 text-red-600">
            Ошибка при отправление формы.
          </p>
        )}
      </form>
    </div>
  );
};

export default Create;
