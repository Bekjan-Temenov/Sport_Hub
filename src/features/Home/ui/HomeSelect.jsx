import React, { useState } from 'react';
import search from '../../../shared/assets/svg/search.svg';
import Container from '../../../shared/helpers/Container';

const HomeSelect = () => {
    // Массив с вариантами для <select>
    const options = [
        'Залы',
        'Кружки',
        'Турниры',
    ];

    // Состояние для хранения выбранного значения
    const [selectedOption, setSelectedOption] = useState('');

    // Обработчик изменения значения в <select>
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <Container>
            <div className="flex items-center justify-between mb-8 mt-[30px]  sm:ml-4  md:ml-[70px] ">
                <div className="flex items-center space-x-2 w-full">
                    <select
                        value={selectedOption}
                        onChange={handleChange}
                        className="text-black p-2 rounded-l-lg h-[50px] shadow-inset-custom bg-white-opacity w-[150px] sm:w-[120px]"
                    >
                        {!selectedOption && (
                            <option value="">Выбрать</option>
                        )}
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder="Укажите адрес"
                        className="p-2 h-[50px] w-[452px] sm:w-[300px]"
                    />
                    <button className="bg-white h-[50px] w-[69px] sm:w-[50px] flex justify-center items-center rounded-r-lg">
                        <img src={search} alt="Поиск" className="h-5 w-5 sm:h-4 sm:w-4" />
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default HomeSelect;
