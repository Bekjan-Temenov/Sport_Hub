import React, { useState } from "react";
import gallery from "../../../shared/assets/svg/admin_gallery.svg";
import Schedule from "./Schedule";
import Website from "./Website";
import { postAdminAdversting } from "../store/action";
import { useDispatch } from "react-redux";

function ModalAdversting({ setIsOpen }) {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [formValue, setFormValue] = useState({
    title: "",
    file: null,
    title1: "",
    description: "",
    phone: "",
    address: "",
    site_name: "",
    site_link: "",
    installment_plan: "",
  });

  const handleImageClick = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(file);
      setFormValue({ ...formValue, file: file });
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    const formData = new FormData(); // Create FormData instance
    for (const key in formValue) {
      formData.append(key, formValue[key]);
    }
  
    try {
      console.log("Form submitted:", formData);
      await dispatch(postAdminAdversting(formData)); // Send FormData instance
      setIsOpen(false); 
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false); 
    }
  };
  

  return (
    <div className="w-[100%] h-[240%] top-0 left-0 z-50 absolute ">
      <div
        onClick={() => setIsOpen(false)}
        className="absolute top-0 left-0 w-full h-full bg-black opacity-70"
      ></div>
      <form
        onSubmit={handleSubmit}
        className="bg-[#222224] w-[60%] right-[20%]  absolute flex flex-col px-[60px] py-[40px] rounded"
      >
        <div className="flex items-center justify-between w-full ">
          <h1 className="ml-[50px] font-sans text-3xl font-semibold">
            Заголовок
          </h1>
          <div className="flex items-center cursor-pointer">
            <div className="w-[355px] h-[225px] border rounded bg-[#131313]">
              <img
                onClick={() => document.getElementById("avatar").click()}
                className="w-full h-full border rounded"
                src={imagePreview || gallery}
                alt="icon"
              />
            </div>
          </div>
        </div>
        <hr className="border-[#B6B7BC]  w-full mt-[15px] mb-[50px]" />
        <div className="">
          <h1 className="mb-3 font-sans text-2xl font-semibold">
            Дабавить обзор активности
          </h1>
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-y-[20px]">
              <input
                value={formValue.title}
                onChange={handleInputChange}
                name="title"
                type="text"
                className="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
                placeholder="Дабавить заголовок ..."
              />
              <input
                value={formValue.description}
                onChange={handleInputChange}
                name="description"
                type="text"
                className="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
                placeholder="Дабавить описание ..."
              />
              <input
                value={formValue.title1}
                onChange={handleInputChange}
                name="title1"
                type="text"
                className="w-full p-2 border pb-[39px] pr-[120px] bg-[#131313] rounded"
                placeholder="Дабавить title1 ..."
              />
              <input
                value={formValue.phone}
                onChange={handleInputChange}
                name="phone"
                type="tel"
                className="w-full p-2 border  bg-[#131313] rounded"
                placeholder="+996 (      )"
              />
              <input
                value={formValue.address}
                onChange={handleInputChange}
                name="address"
                type="text"
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
          </div>
        </div>
        <Schedule />
        <Website
          setIsOpen={setIsOpen}
          handleInputChange={handleInputChange}
          formValues={formValue}
          loading={loading}
        />
      </form>
    </div>
  );
}

export default ModalAdversting;
