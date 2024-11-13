import React, { useEffect, useState } from "react";
import search from "../../shared/assets/svg/admin-search.svg";
import input from "../../shared/assets/svg/admin-input.svg";
import { useDispatch } from "react-redux";
import { fetchAdminAdversting } from "../../features/Adversting/store/action";

function Input() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    if (debouncedValue !== "") {
      const params = {};

      
      if (/^\d+$/.test(debouncedValue)) {
        params.title = debouncedValue;
        params.phone = ""; 
      } else {
        params.phone = debouncedValue; // Иначе отправляем параметр title
        params.title = ""; // Очищаем phone, если указан title
      }

      // Отправка запроса с нужным параметром
      dispatch(fetchAdminAdversting({
        phone: params.phone || "", // Если phone нет, отправляем пустую строку
        title: params.title || "", // Если title нет, отправляем пустую строку
      }));
    } else {
      dispatch(fetchAdminAdversting({
        phone: "",
        title: "",
      }));
    }
  }, [debouncedValue, dispatch]);

  const onChangeInput = (event) => {
    setValue(event.target.value); 
  };

  return (
    <div className="flex items-center gap-[15px]">
      <div className="w-[677px] flex h-[47px] rounded-full border-2 border-transparent focus-within:bg-red-600 focus-within:outline-none">
        <img
          className="h-full py-3 pl-6 bg-white rounded-l-full"
          src={input}
          alt=""
        />
        <input
          value={value}
          onChange={onChangeInput}
          className="w-full pl-3 text-black rounded-r-full focus:outline-none"
          placeholder="Введите номер телефона или заголовок"
          type="search"
        />
      </div>

      <div className="w-[42px] h-[42px] cursor-pointer flex items-center justify-center rounded-full bg-red-600">
        <img src={search} />
      </div>
    </div>
  );
}

export default Input;
