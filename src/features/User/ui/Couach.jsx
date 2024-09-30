import React, { useState } from 'react';
import profileicons from '../../../shared/assets/svg/profiletrainer.svg';
import { createTrainer } from '../store/action';
import { resetError } from '../store/slice';
import { useDispatch } from 'react-redux'; // Добавлено для использования dispatch
import axios from 'axios';

const TrainerModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch(); // Инициализация dispatch
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        sport: '',
        image_files: [],
        imagePreview: profileicons,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length) {
            setFormData((prevData) => ({
                ...prevData,
                image_files: files,
                imagePreview: URL.createObjectURL(files[0]), // Предпросмотр только первого изображения
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Проверка валидности данных перед отправкой
        if (!validateEmail(email)) {
            console.error('Введите правильный адрес электронной почты.');
            return;
        }

        if (phone.length > 20) {
            console.error('Убедитесь, что это значение содержит не более 20 символов.');
            return;
        }

        if (!sport) {
            console.error('Выберите вид спорта.');
            return;
        }

        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('sport', sport);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await axios.post('http://192.168.68.134:3000/administrator/trainers/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Тренер успешно добавлен:', response.data);
        } catch (error) {
            if (error.response) {
                console.error('Ошибка при добавлении тренера:', error.response.data);
            } else if (error.request) {
                console.error('Запрос был отправлен, но ответ не получен:', error.request);
            } else {
                console.error('Ошибка:', error.message);
            }
        }
    };

    // Функция для проверки корректности email
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };




    const resetForm = () => {
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            sport: '',
            image_files: [],
            imagePreview: profileicons,
        });
    };

    if (!isOpen) return null;

    return (
        <div className="absolute top-0 bg-black bg-opacity-50 left-0 w-full h-full">
            <div className="w-[610px] h-[540px] absolute mx-[25%] my-[7%] rounded-[10px] bg-[#222224]">
                <div className="border border-red-500 py-4 bg-[#FE0404] rounded-[10px] flex justify-center">
                    <h1 className="text-[32px] font-normal">Добавить тренера</h1>
                </div>

                <div className="flex flex-col items-center m-2 gap-1">
                    <img
                        id="image"
                        className="w-[100px] h-[100px] rounded-full object-cover"
                        src={formData.imagePreview}
                        alt="Предпросмотр"
                    />
                    <label className="block text-white" htmlFor="imageInput">
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

                <form onSubmit={handleSubmit} className="grid grid-cols-2 mx-5 p-2 gap-4 mt-4">
                    <div>
                        <label className="block text-white" htmlFor="first_name">
                            Имя
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
                            className="w-full p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white" htmlFor="last_name">
                            Фамилия
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
                            className="w-full p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white" htmlFor="email">
                            Электронная почта
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
                            className="w-full p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white" htmlFor="phone">
                            Телефон
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
                            className="w-full p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-white" htmlFor="sport">
                            Спорт
                        </label>
                        <select
                            name="sport"
                            id="sport"
                            value={formData.sport}
                            onChange={handleChange}
                            required
                            className="w-full p-2 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                        >
                            <option value="">Выберите спорт</option>
                            <option value="basketball">Баскетбол</option>
                            <option value="football">Футбол</option>
                            <option value="volleyball">Волейбол</option>
                            <option value="tennis">Теннис</option>
                            <option value="boxing">Бокс</option>
                            <option value="cycling">Велоспорт</option>
                            <option value="taekwondo">Тхэквондо</option>
                            <option value="swimming">Плавание</option>
                            <option value="yoga">Йога</option>
                        </select>
                    </div>
                </form>
                <div className="mt-5 flex justify-end space-x-3">
                    <button onClick={onClose} className="w-[152px] h-[40px] bg-red-700 rounded-[10px]">
                        Назад
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-[204px] h-[40px] bg-red-700 rounded-[10px]"
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrainerModal;
