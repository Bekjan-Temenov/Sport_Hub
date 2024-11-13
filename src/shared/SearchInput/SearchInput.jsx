import React, { useEffect, useState } from "react";
import input from "../assets/svg/admin-input.svg";

function SearchInput({
  placeholder = "Поиск...",
  onSearch,
  debounceDelay = 500,
}) {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceDelay);
    return () => clearTimeout(timer);
  }, [value, debounceDelay]);

  useEffect(() => {
    if (debouncedValue !== "") {
      onSearch(debouncedValue); 
    } else {
      onSearch(""); 
    }
  }, [debouncedValue, onSearch]);

  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-[40%]  flex h-[47px] rounded-full border-2 border-transparent focus-within:bg-red-600 focus-within:outline-none">
      <img
        className="h-full py-3 pl-6 bg-white rounded-l-full"
        src={input}
        alt=""
      />
      <input
        value={value}
        onChange={onChangeInput}
        className="w-full pl-3 text-black rounded-r-full focus:outline-none"
        placeholder={placeholder}
        type="search"
      />
    </div>
  );
}

export default SearchInput;
