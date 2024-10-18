import React, { useEffect, useState, useCallback } from "react";
import gallery from "../../../../shared/assets/svg/admin_gallery.svg";
import { putAdversting } from "../../store/action";
import { useDispatch } from "react-redux";

const InputField = ({
  label,
  value,
  name,
  onChange,
  placeholder,
  type = "text",
}) => (
  <input
    value={value}
    onChange={onChange}
    name={name}
    type={type}
    className="w-full p-2 border bg-[#131313] rounded"
    placeholder={placeholder}
    aria-label={label}
  />
);

function Edit({ setIsOpen, adversting }) {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(adversting.file);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    title: "",
    file: adversting.file,
    title1: "",
    description: "",
    phone: "",
    address: "",
    site_name: "",
    site_link: "",
    installment_plan: "",
    title2: "",
    title3: "",
  });
  console.log(formValue);
  console.log(imagePreview);
  useEffect(() => {
    if (adversting) {
      setFormValue((prev) => ({
        ...prev,
        ...adversting,
      }));
      setImagePreview(adversting.file); // Убедитесь, что вы обновляете изображение при изменении adversting
    }
  }, [adversting]);

  const handleImageClick = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Пожалуйста, загрузите файл в формате JPEG, PNG или GIF.");
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      // Обновляем file только если изображение действительно изменилось
      setFormValue((prev) => ({ ...prev, file }));
    }
  }, []);

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    
    Object.entries(formValue).forEach(([key, value]) => {
      // Просто добавьте файл, даже если он не изменился
      if (key === 'file' && !value) {
        console.log(`Не обновляем файл, он не изменен`);
        // Если вы не хотите обновлять файл, вы можете просто пропустить эту проверку
        // Или же добавьте существующий файл
      } else {
        console.log(`Key: ${key}, Value: ${value}`);
        formData.append(key, value);
      }
    });
    
    try {
      await dispatch(putAdversting({ id: adversting.id, putData: formData }));
      setIsOpen(false);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-between w-full">
        <h1 className="ml-[50px] font-sans text-3xl font-semibold">
          Заголовок
        </h1>
        <div className="flex items-center cursor-pointer">
          <div className="w-[355px] h-[225px] border rounded bg-[#131313]">
            <img
              onClick={() => document.getElementById("avatar").click()}
              className="w-full h-full border rounded"
              src={imagePreview || gallery}
              alt="Preview"
            />
          </div>
        </div>
      </div>
      <hr className="border-[#B6B7BC] w-full mt-[15px] mb-[50px]" />
      <h1 className="mb-3 font-sans text-2xl font-semibold">
        Добавить обзор активности
      </h1>
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-y-[50px] ">
          <input
            value={formValue.title}
            onChange={handleInputChange}
            name="title"
            type="text"
            className="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
            placeholder="Добавить заголовок ..."
          />
          <input
            value={formValue.description}
            onChange={handleInputChange}
            name="description"
            type="text"
            className="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
            placeholder="Добавить описание ..."
          />
          <InputField
            label="Телефон"
            value={formValue.phone}
            name="phone"
            onChange={handleInputChange}
            type="tel"
            placeholder="+996 (      )"
          />
          <InputField
            label="Адрес"
            value={formValue.address}
            name="address"
            onChange={handleInputChange}
            placeholder="Добавить адрес ..."
          />
        </div>
        <div className="flex flex-col justify-between gap-7">
          <div className="flex flex-col border rounded gap-y-3 w-[356px] items-center py-[35px] px-[20px] bg-[#131313]">
            <input
              type="file"
              id="avatar"
              className="hidden"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={handleImageClick}
            />
            <button
              onClick={() => document.getElementById("avatar").click()}
              className="bg-[#C8180C] py-2 px-6 rounded-full"
            >
              Загрузить изображение
            </button>
            <p className="text-center text-md">
              Допустимые форматы: PNG, GIF, WEBP, MP4, и MP3
            </p>
          </div>
          <InputField
            label="Тенажорный зал"
            value={formValue.title1}
            name="title1"
            onChange={handleInputChange}
            placeholder="Тенажорный зал"
          />
          <InputField
            label="Спорт"
            value={formValue.title2}
            name="title2"
            onChange={handleInputChange}
            placeholder="Спорт"
          />
          <InputField
            label="Работаем 24/7"
            value={formValue.title3}
            name="title3"
            onChange={handleInputChange}
            placeholder="Работаем 24/7"
          />
        </div>
      </div>

      <div className="flex flex-col mt-[50px]">
        <div className="flex flex-col">
          <h1 className="font-sans text-2xl mb-[10px]">Сайт</h1>
          <div className="flex items-center mb-[47px] justify-between">
            <input
              value={formValue.site_name}
              onChange={handleInputChange}
              name="site_name"
              className="w-[40%] p-2 border bg-[#131313] rounded"
              type="name"
              placeholder="Название"
            />
            <input
              value={formValue.site_link}
              onChange={handleInputChange}
              name="site_link"
              className="w-[40%] p-2 border bg-[#131313] rounded"
              type="url"
              placeholder="Ссылка"
            />
          </div>
          <h1 className="font-sans text-2xl mb-[10px]">Рассрочка</h1>
          <input
            className="w-[40%] p-2 border bg-[#131313] rounded"
            type="text"
            name="installment_plan"
            value={formValue.installment_plan}
            onChange={handleInputChange}
            placeholder="6\9\12 месяцев"
          />
        </div>
      </div>

      <div className="flex items-center mt-[60px] justify-evenly">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="text-center bg-[#FE04044D] hover:bg-red-900 px-[55px] py-[10px] rounded-md"
        >
          Назад
        </button>
        <button
          type="submit"
          disabled={loading}
          className={`text-center ${
            loading ? "bg-[#B6B7BC]" : "bg-[#FE0404] hover:bg-red-700"
          } px-[55px] py-[10px] rounded-md`}
        >
          {loading ? "Отправлено" : "Сохранить и опубликовать"}
        </button>
      </div>
    </form>
  );
}

export default Edit;
