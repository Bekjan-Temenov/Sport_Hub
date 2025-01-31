import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { postHall, createWorkSchedule } from "../../store/action";
import "react-toastify/dist/ReactToastify.css";
import gallery from "../../../../../shared/assets/svg/admin_gallery.svg";
import TimeSelector from "../../../../Adversting/ui/TimeSelector";

const daysOfWeek = [
  { id: 1, name: "Понедельник" },
  { id: 2, name: "Вторник" },
  { id: 3, name: "Среда" },
  { id: 4, name: "Четверг" },
  { id: 5, name: "Пятница" },
  { id: 6, name: "Суббота" },
];

const Create = ({ setIsOpen }) => {
  const notify = () => toast.success("Реклама успешно создана!");
  const errorfy = () => toast.error("ошибка!");
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    sports: "",
    title: "",
    description: "",
    phone: "",
    address: "",
    size: "",
    inventory: "",
    coverage: "",
    quantity: "",
    price_per_hour: "",
    hall_type: "",
    shower: false,
    lighting: false,
    dressing_room: false,
    image: null,
    image1: null,
    image2: null,
    image3: null,
  });
  const [workSchedules, setWorkSchedules] = useState(
    daysOfWeek.map((day) => ({
      day_of_week: day.name,
      opening_time: "09:00",
      closing_time: "18:00",
      is_active: false,
      hall:null
    }))
  );
  const [mainImage, setMainImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const { loading, error } = useSelector((state) => state.shedules);

  console.log(workSchedules);
  useEffect(() => {
    if (formData.title) {
      setWorkSchedules(
        daysOfWeek.map((day) => ({
          day_of_week: day.name,
          opening_time: "09:00",
          closing_time: "18:00",
          is_active: false,
          hall:null
  
        }))
      );
    }
  }, [formData.title, daysOfWeek]);

  console.log(workSchedules);
  console.log(formData.title);
  const isEditing = formData.id !== undefined;


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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("sports", formData.sports);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("size", formData.size);
    formDataToSend.append("inventory", formData.inventory);
    formDataToSend.append("coverage", formData.coverage);
    formDataToSend.append("quantity", formData.quantity);
    formDataToSend.append("price_per_hour", formData.price_per_hour);
    formDataToSend.append("hall_type", formData.hall_type);
    formDataToSend.append("shower", formData.shower);
    formDataToSend.append("lighting", formData.lighting);
    formDataToSend.append("dressing_room", formData.dressing_room);
  
    if (isEditing) {
      formDataToSend.append("hall", formData.hall);
    }
  
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
  
    const uniqueSchedules = workSchedules.reduce((acc, current) => {
      const exists = acc.some(
        (schedule) =>
          schedule.day_of_week === current.day_of_week &&
          schedule.opening_time === current.opening_time
      );
      return exists ? acc : [...acc, current];
    }, []);
  
    if (uniqueSchedules.length === 0) {
      alert("Пожалуйста, выберите хотя бы один день для работы.");
      return;
    }
  
    try {
      const hallId = await dispatch(postHall({ formData: formDataToSend, setIsOpen, notify, errorfy })).unwrap();
  
      if (!hallId) {
        console.error("ID зала не найден, расписание не будет отправлено.");
        return;
      }
  
      for (const schedule of uniqueSchedules) {
        const scheduleData = {
          day_of_week: schedule.day_of_week,
          opening_time: schedule.opening_time,
          closing_time: schedule.closing_time,
          is_active: schedule.is_active,
          hall: hallId,
        };
        await dispatch(createWorkSchedule({ workScheduleData: scheduleData }));
      }
  
      console.log("Все расписания успешно отправлены");
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
                className={mainImage ? "w-full" : ""}
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
                  className="rounded"
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
            <option value="Валейбол">Валейбол</option>
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
              value={formData.description}
              onChange={handleChange}
              name="description"
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

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="font-sans">Размеры зала</label>
            <input
              type="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded"
              placeholder="23х24х7"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sans">Количество</label>
            <input
              type="tel"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded"
              placeholder="2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sans">Тип</label>
            <input
              type="tel"
              name="hall_type"
              value={formData.hall_type}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded"
              placeholder="Крытый"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sans">Покрытие</label>
            <input
              type="tel"
              name="coverage"
              value={formData.coverage}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded"
              placeholder="Паркет"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sans">Инвентарь</label>
            <input
              type="text"
              name="inventory"
              value={formData.inventory}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded"
              placeholder="Со своим мячом"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sans">Оплата за час</label>
            <input
              type="tel"
              name="price_per_hour"
              value={formData.price_per_hour}
              onChange={handleChange}
              className="w-full p-2 border  bg-[#131313] rounded"
              placeholder="3000с"
            />
          </div>
        </div>
        <div className="flex items-center justify-around my-[40px]">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="shower"
              checked={formData.shower}
              onChange={handleChange}
              className="mr-2 accent-[#FF0000] w-[22px] h-[22px] cursor-pointer"
            />
            <label className="">Душевая</label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="lighting"
              checked={formData.lighting}
              onChange={handleChange}
              className="mr-2 accent-[#FF0000] w-[22px] h-[22px] cursor-pointer"
            />
            <label>Освещение</label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="dressing_room"
              checked={formData.dressing_room}
              onChange={handleChange}
              className="mr-2 accent-[#FF0000] w-[22px] h-[22px] cursor-pointer"
            />
            <label>Раздевалка</label>
          </div>
        </div>
        <div className="flex items-center justify-around">
          <button
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
