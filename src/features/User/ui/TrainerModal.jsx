import { useState } from "react";
import profileicons from "../../../shared/assets/svg/profiletrainer.svg";
import { useDispatch } from "react-redux";
import { createTrainer } from "../store/action";

const TrainerModal = ({ onClosed }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    sport: "",
    image_files: [],
    imagePreview: profileicons,
  });

  const [errorMessages, setErrorMessages] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    sport: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrorMessages((prev) => ({ ...prev, [name]: "" }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      setFormData((prevData) => ({
        ...prevData,
        image_files: files,
        imagePreview: URL.createObjectURL(files[0]),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { first_name, last_name, email, phone, sport } = formData;
    const newErrors = {};

    if (!first_name) {
      newErrors.first_name = "Введите имя";
    }
    if (!last_name) {
      newErrors.last_name = "Введите фамилию";
    }
    if (!validateEmail(email)) {
      newErrors.email = "Введите правильный адрес электронной почты";
    }
    if (phone.length > 20) {
      newErrors.phone =
        "Убедитесь, что это значение содержит не более 20 символов";
    } else if (phone.length  == 0) {
      newErrors.phone = "Введите телефон";
    }
    if (!sport) {
      newErrors.sport = "Выберите вид спорта";
    }

   
    if (Object.keys(newErrors).length > 0) {
      setErrorMessages(newErrors);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("first_name", first_name);
    formDataToSend.append("last_name", last_name);
    formDataToSend.append("email", email);
    formDataToSend.append("phone", phone);
    formDataToSend.append("sport", sport);

    try {
      const response = await dispatch(createTrainer(formDataToSend));
      if (response) {
        resetForm();
        onClosed();
      }
    } catch (error) {
      if (error.response) {
        setErrorMessages({
          general: "Ошибка при добавлении тренера: " + error.response.data,
        });
      } else {
        setErrorMessages({ general: "Ошибка: " + error.message });
      }
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const resetForm = () => {
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      sport: "",
      image_files: [],
      imagePreview: profileicons,
    });
    setErrorMessages({}); // Reset all error messages
  };


  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div className="w-[610px] h-[540px] absolute mx-[25%] my-[7%] rounded-[10px] bg-[#222224]">
        <div className="border border-red-500 py-4 bg-[#FE0404] rounded-[10px] flex justify-center">
          <h1 className="text-[32px] font-normal">Добавить тренера</h1>
        </div>

        {errorMessages.general && (
          <div className="text-center text-red-500">
            {errorMessages.general}
          </div>
        )}

        <div className="flex flex-col items-center gap-1 m-2">
          <img
            id="image"
            className="w-[100px] h-[100px] rounded-full object-cover"
            src={formData.imagePreview}
            alt="Предпросмотр"
          />
          <label className="block " htmlFor="imageInput">
            Добавить фото
          </label>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            multiple
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4 p-2 mx-5 mt-4"
        >
          <div>
            <label className="block text-white" htmlFor="first_name">
              Имя{" "}
              {errorMessages.first_name && (
                <span className="text-red-500">{errorMessages.first_name}</span>
              )}
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              maxLength="255"
              minLength="1"
              className="w-full p-2 text-black rounded"
            />
          </div>
          <div>
            <label className="block text-white" htmlFor="last_name">
              Фамилия{" "}
              {errorMessages.last_name && (
                <span className="text-red-500">{errorMessages.last_name}</span>
              )}
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              maxLength="255"
              minLength="1"
              className="w-full p-2 text-black rounded"
            />
          </div>
          <div>
            <label className="block text-white" htmlFor="email">
              Электронная почта{" "}
              {errorMessages.email && (
                <span className="text-red-500">{errorMessages.email}</span>
              )}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength="254"
              minLength="1"
              className="w-full p-2 text-black rounded"
            />
          </div>
          <div>
            <label className="block text-white" htmlFor="phone">
              Телефон{" "}
              {errorMessages.phone && (
                <span className="text-red-500">{errorMessages.phone}</span>
              )}
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength="20"
              minLength="1"
              className="w-full p-2 text-black rounded"
            />
          </div>
          <div>
            <label className="block text-white" htmlFor="sport">
              Спорт{" "}
              {errorMessages.sport && (
                <span className="text-red-500">{errorMessages.sport}</span>
              )}
            </label>
            <select
              name="sport"
              id="sport"
              value={formData.sport}
              onChange={handleChange}
              required
              className="w-full p-2 text-white bg-black rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="">Выберите спорт</option>
              <option value="Баскетбол">Баскетбол</option>
              <option value="Футбол">Футбол</option>
              <option value="Валейбол">Валейбол</option>
              <option value="Тенис">Теннис</option>
              <option value="Бокс">Бокс</option>
              <option value="Велоспорт">Велоспорт</option>
              <option value="Таэквондо">Тхэквондо</option>
              <option value="Плавание">Плавание</option>
              <option value="Йога">Йога</option>
            </select>
          </div>
        </form>
        <div className="flex justify-end mt-5 space-x-3">
          <button
            onClick={() => {
              resetForm();
              onClosed();
            }}
            className="w-[152px] h-[40px] bg-red-700 rounded-[10px]"
          >
            Назад
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-[152px] h-[40px] bg-red-700 rounded-[10px]"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerModal;
