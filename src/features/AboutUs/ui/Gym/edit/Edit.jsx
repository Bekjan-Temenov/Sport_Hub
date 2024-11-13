import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { putHall, putShedule } from "../../store/action";
import gallery from "../../../../../shared/assets/svg/admin_gallery.svg";
import TimeSelector from "../../../../Adversting/ui/TimeSelector";

const Edit = ({ setIsOpen, halls }) => {
  const { loading, schedules, error } = useSelector((state) => state.shedules);
  const notify = () => toast.success("Реклама успешно редактирована!");
  const errorfy = () => toast.error("Ошибка!");
  const dispatch = useDispatch();
  const hallsId = halls.id;
  const [filteredHalls, setFilteredHalls] = useState([]);
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
    image: halls.image || null,
    image1: halls.image1 || null,
    image2: halls.image2 || null,
    image3: halls.image3 || null,
  });
  const [mainImage, setMainImage] = useState(halls.image || gallery);
  const [image1, setImage1] = useState(halls.image1 || gallery);
  const [image2, setImage2] = useState(halls.image2 || gallery);
  const [image3, setImage3] = useState(halls.image3 || gallery);

  useEffect(() => {
    if (halls) {
      setFormData((prev) => ({
        ...prev,
        ...halls,
      }));
      setMainImage(halls.image);
    }
  }, [halls]);

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
    const imageUrl = URL.createObjectURL(file);
    setMainImage(imageUrl);
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };

  const handleAdditionalImageChange = (index) => (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const imageKey = `image${index + 1}`;

      if (index === 0) {
        setImage1(imageUrl);
      } else if (index === 1) {
        setImage2(imageUrl);
      } else if (index === 2) {
        setImage3(imageUrl);
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        [imageKey]: file,
      }));
    }
  };

  useEffect(() => {
    return () => {
      if (mainImage) URL.revokeObjectURL(mainImage);
      if (image1) URL.revokeObjectURL(image1);
      if (image2) URL.revokeObjectURL(image2);
      if (image3) URL.revokeObjectURL(image3);
    };
  }, [mainImage, image1, image2, image3]);

  //WorkShedule
  useEffect(() => {
    const filtered = schedules.filter((schedule) => schedule.hall === hallsId);
    setFilteredHalls(filtered);
  }, [schedules, hallsId]);

  function handleChangeActive(index) {
    setFilteredHalls((prevSchedules) =>
      prevSchedules.map((schedule, i) =>
        i === index ? { ...schedule, is_active: !schedule.is_active } : schedule
      )
    );
  }
  console.log(schedules);
  console.log(filteredHalls);
  const handleTimeChange = (newTime, index, type) => {
    setFilteredHalls((prevSchedules) =>
      prevSchedules.map((schedule, i) =>
        i === index ? { ...schedule, [type]: newTime } : schedule
      )
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (
        key === "image" ||
        key === "image1" ||
        key === "image2" ||
        key === "image3"
      ) {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else if (typeof value === "string" && value.startsWith("http")) {
          formDataToSend.append(
            `existing${key.charAt(0).toUpperCase() + key.slice(1)}Url`,
            value
          );
        }
      } else {
        formDataToSend.append(key, value);
      }
    });

    dispatch(
      putHall({
        formData: formDataToSend,
        id: halls.id,
        setIsOpen,
        notify,
        errorfy,
      })
    );
    //WorkShedule
    try {
      for (const schedule of filteredHalls) {
        const scheduleData = {
          day_of_week: schedule.day_of_week,
          opening_time: schedule.opening_time,
          closing_time: schedule.closing_time,
          is_active: schedule.is_active,
          hall: hallsId,
        };
        dispatch(putShedule({ putData: scheduleData, id: schedule.id }));
      }
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
                src={mainImage}
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
                  src={image}
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
          {filteredHalls.map((day, index) => (
            <div key={index} className="flex items-center justify-between ">
              <input
                type="checkbox"
                className="accent-[#FF0000] w-[22px] cursor-pointer h-[22px]"
                checked={day.is_active}
                onChange={() => handleChangeActive(index)}
              />
              <label className="block ml-2 text-sm text-white">
                {day.day_of_week}
              </label>
              <div className="flex items-center gap-3 ">
                <TimeSelector
                  defaultHour={
                    parseInt(day.opening_time.split(":")[0], 10) || 0
                  }
                  defaultMinute={
                    parseInt(day.opening_time.split(":")[1], 10) || 0
                  }
                  onChange={(newTime) =>
                    handleTimeChange(newTime, index, "opening_time")
                  }
                />

                <TimeSelector
                  defaultHour={
                    parseInt(day.closing_time.split(":")[0], 10) || 0
                  }
                  defaultMinute={
                    parseInt(day.closing_time.split(":")[1], 10) || 0
                  }
                  onChange={(newTime) =>
                    handleTimeChange(newTime, index, "closing_time")
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

export default Edit;
