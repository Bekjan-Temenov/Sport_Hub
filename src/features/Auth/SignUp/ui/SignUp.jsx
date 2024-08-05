import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import istockphoto from '../../../../shared/assets/svg/istockphoto.svg';
import Container from '../../../../shared/helpers/Container';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Неверный email').required('Обязательно'),
    password: Yup.string().min(6, 'Слишком короткий пароль!').required('Обязательно'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Пароли должны совпадать').required('Обязательно'),
    firstName: Yup.string().required('Обязательно'),
    lastName: Yup.string().required('Обязательно'),
    phoneNumber: Yup.string().required('Обязательно'),
    birthDate: Yup.date().required('Обязательно'),
    rememberMe: Yup.boolean(),
});

const SignUp = () => (
    <div className="w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${istockphoto})` }}>
        <Container>
            <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-[550px] mx-auto">
                <div className="flex justify-end">
                    <button className="text-xl font-bold">×</button>
                </div>
                <h1 className="text-3xl font-bold text-center">Регистрация</h1>
                <h2 className="text-xl font-semibold mb-4">Создать аккаунт</h2>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        confirmPassword: '',
                        firstName: '',
                        lastName: '',
                        phoneNumber: '',
                        birthDate: '',
                        rememberMe: false,
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => console.log(values)}
                >
                    {({ errors, touched, setFieldValue }) => (
                        <Form>
                            {['email', 'password', 'confirmPassword'].map(name => (
                                <div className="mb-4" key={name}>
                                    <Field
                                        name={name}
                                        type={name === 'email' ? 'email' : 'password'}
                                        placeholder={name === 'confirmPassword' ? 'Подтвердите пароль' : name === 'email' ? 'E-mail' : 'Пароль'}
                                        className={`input ${errors[name] && touched[name] ? 'border-red-500' : 'border-gray-300'} w-full h-10 px-4 border-2 rounded-lg bg-gray-100`}
                                    />
                                    {errors[name] && touched[name] && <div className="text-red-500 text-sm mt-1">{errors[name]}</div>}
                                </div>
                            ))}
                            <div className="flex mb-4 space-x-4">
                                {['firstName', 'lastName'].map(name => (
                                    <div className="w-1/2" key={name}>
                                        <label className="block text-gray-700">
                                            {name === 'firstName' ? 'Имя' : 'Фамилия'} <span className="text-red-500">*</span>
                                        </label>
                                        <Field
                                            name={name}
                                            type="text"
                                            placeholder={name === 'firstName' ? 'Имя' : 'Фамилия'}
                                            className={`input ${errors[name] && touched[name] ? 'border-red-500' : 'border-gray-300'} w-full h-10 px-4 border-2 rounded-lg bg-gray-100`}
                                        />
                                        {errors[name] && touched[name] && <div className="text-red-500 text-sm mt-1">{errors[name]}</div>}
                                    </div>
                                ))}
                            </div>
                            <div className="flex mb-4 space-x-4">
                                {['phoneNumber', 'birthDate'].map((name, index) => (
                                    <div className="w-1/2" key={name}>
                                        <label className="block text-gray-700">
                                            {name === 'phoneNumber' ? 'Номер телефона' : 'Дата рождения'} <span className="text-red-500">*</span>
                                        </label>
                                        {name === 'phoneNumber' ? (
                                            <PhoneInput
                                                country={'us'}
                                                value={''}
                                                onChange={phone => setFieldValue('phoneNumber', phone)}
                                                inputProps={{ name, required: true, className: `input ${errors[name] && touched[name] ? 'border-red-500' : 'border-gray-300'} w-full h-10 px-4 border-2 rounded-lg bg-gray-100` }}
                                            />
                                        ) : (
                                            <Field
                                                name={name}
                                                type="date"
                                                className={`input ${errors[name] && touched[name] ? 'border-red-500' : 'border-gray-300'} w-full h-10 px-4 border-2 rounded-lg bg-gray-100`}
                                            />
                                        )}
                                        {errors[name] && touched[name] && <div className="text-red-500 text-sm mt-1">{errors[name]}</div>}
                                    </div>
                                ))}
                            </div>
                            <div className="mb-4 flex items-center">
                                <Field name="rememberMe" type="checkbox" className="mr-2" />
                                <label htmlFor="rememberMe">Запомнить</label>
                            </div>
                            <button type="submit" className="w-full h-10 text-lg bg-red-600 text-white rounded-lg">
                                Зарегистрироваться
                            </button>
                            <div className="text-center mt-3">
                                Уже есть аккаунт? <a href="/login" className="text-blue-500">Авторизация</a>
                            </div>
                        </Form> 
                    )}
                </Formik>
            </div>
        </Container>
    </div>
);

export default SignUp;
