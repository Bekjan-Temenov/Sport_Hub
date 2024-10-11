import React, { useState } from "react";
import axios from "axios";
import gallery from "../../../../shared/assets/svg/admin_gallery.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TimeSelector from "../../../Adversting/ui/TimeSelector";
import Hours from "../../../Adversting/ui/Hours";
import Schedule from "../../../Adversting/ui/Schedule";

const ModalGym = ({ setIsOpen }) => {
  const notify = () => toast.success("Реклама успешно создана!");
  const errorfy = () => toast.error("ошибка!");
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
  });
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([null, null, null]);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleMainImageChange = (e) => {
    setMainImage(e.target.files[0]);
  };

  const handleAdditionalImageChange = (index) => (e) => {
    const newImages = [...additionalImages];
    newImages[index] = e.target.files[0];
    setAdditionalImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (mainImage) {
      data.append("image", mainImage);
    } else {
      console.error("Главное изображение не выбрано");
    }
    additionalImages.forEach((image, index) => {
      if (image) {
        data.append(`additional_image${index + 1}`, image);
      } else {
        console.error(`Дополнительное изображение ${index + 1} не выбрано`);
      }
    });

    setLoading(true);

    try {
      const response = await axios.post(
        "http://192.168.68.103:3000/administrator/halls",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      notify();
      setTimeout(() => {
        setIsOpen();
      }, 800);
      console.log("Зал успешно создан:", response.data);
    } catch (error) {
      console.error(
        "Ошибка при отправке данных:",
        error.response?.data || error
      );
      errorfy();
    } finally {
      setLoading(false);
    }
  };

  console.log(formData);
  return (
    <div className="flex flex-col items-center justify-center text-white ">
      <h2 className="text-2xl font-bold text-center ">Создать новый зал</h2>
      <form onSubmit={handleSubmit} className="w-full p-4 mx-auto ">
        <div className="flex flex-col gap-14 ">
          <div className="flex items-center justify-between w-full ">
            <h1 className="ml-[50px] font-sans text-3xl font-semibold">
              Заголовок
            </h1>
            <div className="w-[355px] h-[225px] border rounded cursor-pointer bg-[#131313]">
              <input
                type="file"
                id="mainImage"
                onChange={handleMainImageChange}
                className="hidden"
                accept="image/*"
              />
              <img
                onClick={() => document.getElementById("mainImage").click()}
                src={mainImage ? URL.createObjectURL(mainImage) : gallery}
                className="w-full h-full border rounded"
                alt="Главное изображение"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            {additionalImages.map((image, index) => (
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

        <div className=" my-9">
          <Schedule />
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
      </form>
    </div>
  );
};

export default ModalGym;
