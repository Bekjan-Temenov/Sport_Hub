import React, { useState } from 'react';
import search from '../../../shared/assets/svg/search.svg';
import Container from '../../../shared/helpers/Container';
import { sports } from '../../../shared/api/api';

const HomeSelect = () => {
    const options = [
        'Залы',
        'Кружки',
        'Турниры',
    ];

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <Container>
            <div className="flex items-center justify-between mb-8 mt-[30px]  sm:ml-4  md:ml-[70px] ">
                <div className="flex items-center w-full space-x-2 ">
                    <select
                        value={selectedOption}
                        onChange={handleChange}
                        className="text-black p-2  rounded-l-lg h-[50px] shadow-inset-custom bg-white-opacity w-[30%] sm:w-[120px]"
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
                        className="p-2 h-[50px] w-[70%] sm:w-[300px]"
                    />
                    <button className="bg-white h-[50px] w-[69px] sm:w-[50px] flex justify-center items-center rounded-r-lg">
                        <img src={search} alt="Поиск" className="w-5 h-5 sm:h-4 sm:w-4" />
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default HomeSelect;
