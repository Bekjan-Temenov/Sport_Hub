import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import istockphoto from '../../../../shared/assets/svg/istockphoto.svg';
import { Link } from 'react-router-dom';


const SignIn = () => {
    const validationSchema = Yup.object({
        email: Yup.string().email('Неверный формат email').required('Обязательно'),
        password: Yup.string().required('Обязательно'),
    });

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-center p-4" style={{ backgroundImage: `url(${istockphoto})` }}>
            <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-[550px] h-auto sm:h-[500px] mx-auto">
                <div className="flex justify-end">
                    <button className="text-2xl font-bold">&times;</button>
                   
                </div>
                <h1 className="text-3xl sm:text-4xl text-center">Авторизация</h1>
                <h2 className="text-lg sm:text-xl font-semibold mt-4 text-start">Добро пожаловать!</h2>
                <p className="text-gray-500 text-start mb-6">Войдите в свой аккаунт!</p>
                <Formik
                    initialValues={{ email: '', password: '', remember: false }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            <div className="mb-4">
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="E-mail"
                                    className="input w-full h-10 px-4 border-2 rounded-lg bg-gray-100"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="mb-4">
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Пароль"
                                    className="input w-full h-10 px-4 border-2 rounded-lg bg-gray-100"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="flex flex-row sm:flex-row items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <Field name="remember" type="checkbox" className="mr-2" />
                                    <label>Запомнить</label>
                                </div>
                                <a href="#" className="text-blue-500 mt-2 sm:mt-0">Забыли пароль?</a>
                            </div>
                            <button
                                type="submit"
                                className="w-full h-10 text-lg bg-[#FE0404] text-white rounded-lg"
                                disabled={isSubmitting}
                            >
                                Войти
                            </button>
                        </Form>
                    )}
                </Formik>
                <p className="text-gray-500 text-center mt-4">
                    Если вы не зарегистрированы, нажмите <Link to='/signup' className="text-blue-500">Регистрация</Link>
                </p>
            </div>
        </div>
    );
}

export default SignIn;
