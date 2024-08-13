import React from 'react';
import Container from '../../../../shared/helpers/Container';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import istockphoto from '../../../../shared/assets/svg/istockphoto.svg';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Введите корректный email')
            .required('Обязательное поле'),
    });

    const onSubmit = (values, { setSubmitting }) => {
        console.log('Form data', values);
        setTimeout(() => {
            setSubmitting(false);
            alert('Инструкция по восстановлению пароля отправлена на указанный email');
        }, 1000);
    };

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center bg-cover bg-center p-4"
            style={{ backgroundImage: `url(${istockphoto})` }}
        >
            <Container>
                <div className='bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full flex flex-col gap-4 justify-center max-w-[400px] sm:max-w-[500px] mx-auto'>
                    <h2 className="text-2xl sm:text-3xl font-bold text-center">Забыли пароль</h2>
                    <p className="text-start text-sm sm:text-[15px]">
                        Введите свой адрес электронной почты для процесса проверки, мы вышлем код на ваш адрес электронной почты
                    </p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-4 sm:space-y-6">
                                <div>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="E-mail"
                                        className="input w-full h-10 px-4 border-2 rounded-lg bg-gray-100"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                                <div className="text-start">
                                    <Link to="/login" className="text-blue-500 underline">Вернуться на авторизацию</Link>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-2 sm:py-3 bg-[#FE0404] text-white rounded-lg"
                                    >
                                        Отправить
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Container>
        </div>
    );
};

export default ForgotPassword;
