import React from "react";

function Website({ setIsOpen, loading, handleInputChange }) {
  return (
    <div className="flex flex-col mt-[50px]">
      <div className="flex flex-col">
        <h1 className="font-sans text-2xl mb-[10px]">Сайт</h1>
        <div className="flex items-center mb-[47px] justify-between">
          <input
            value={handleInputChange.site_name}
            onChange={handleInputChange}
            name="site_name"
            class="w-[40%] p-2 border  bg-[#131313] rounded"
            type="name"
            placeholder="Название"
          />
          <input
            value={handleInputChange.site_link}
            onChange={handleInputChange}
            name="site_link"
            class="w-[40%] p-2 border  bg-[#131313] rounded"
            type="url"
            placeholder="Ссылка"
          />
        </div>
        <h1 className="font-sans text-2xl mb-[10px]">Рассрочка</h1>
        <input
          class="w-[40%] p-2 border  bg-[#131313] rounded"
          type="text"
          name="installment_plan"
          value={handleInputChange.installment_plan}
          onChange={handleInputChange}
          placeholder="6\9\12 месяцев"
        />
      </div>
      <div className="flex items-center mt-[60px] justify-evenly">
        <button
          onClick={() => setIsOpen(false)}
          className="text-center bg-[#FE04044D] hover:bg-red-900 px-[55px] py-[10px] rounded-md"
        >
          Назад
        </button>
        <button
          type="submit"
          disabled={loading}
          className={`text-center ${loading ? 'bg-[#B6B7BC]' : 'bg-[#FE0404] hover:bg-red-700'} px-[55px] py-[10px] rounded-md`}
        >
          {loading ? "Отправлено" : "Сохранить и опубликовать"}
        </button>
      </div>
    </div>
  );
}

export default Website;
