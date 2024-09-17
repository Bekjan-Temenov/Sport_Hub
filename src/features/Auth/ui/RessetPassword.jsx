import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPasswordVerify } from '../store/action';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        code1: Yup.string()
            .length(1, 'Введите 1 цифру')
            .required('Обязательное поле'),
        code2: Yup.string()
            .length(1, 'Введите 1 цифру')
            .required('Обязательное поле'),
        code3: Yup.string()
            .length(1, 'Введите 1 цифру')
            .required('Обязательное поле'),
        code4: Yup.string()
            .length(1, 'Введите 1 цифру')
            .required('Обязательное поле'),
    });

    const handleSubmit = (values) => {
        const { code1, code2, code3, code4 } = values;
        const code = `${code1}${code2}${code3}${code4}`;

        dispatch(resetPasswordVerify(code))
            .unwrap()
            .then((response) => {
                console.log('Код успешно отправлен:', response);
                navigate('/');
            })
            .catch((error) => {
                console.error('Ошибка проверки сброса пароля:', error);
            });
    };

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-center bg-cover">
            <Formik
                initialValues={{ code1: '', code2: '', code3: '', code4: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className="bg-white p-4 md:p-8 rounded-lg shadow-md w-[90%] max-w-[600px] h-auto md:h-[500px] flex flex-col items-center gap-3 justify-center">
                        <h1 className="font-semibold mb-4 text-[24px] md:text-[32px] text-center">
                            Введите 4-значный код
                        </h1>
                        <p className="text-gray-700 mb-6 text-[16px] md:text-[20px] w-[80%] md:w-[400px] text-center md:text-start">
                            На адрес электронной почты, который вы указали, должен был прийти четырехзначный код.
                        </p>
                        <div className="mb-6 flex gap-3">
                            {['code1', 'code2', 'code3', 'code4'].map((fieldName, index) => (
                                <div key={index} className="relative">
                                    <Field
                                        type="text"
                                        name={fieldName}
                                        maxLength={1}
                                        className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-gray-200 rounded text-center text-lg"
                                    />
                                    {errors[fieldName] && touched[fieldName] ? (
                                        <div className="absolute text-red-500 text-xs top-full left-1/2 transform -translate-x-1/2 mt-1">
                                            {errors[fieldName]}
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center w-full gap-2 md:gap-4">
                            <button
                                type="button"
                                className="py-2 bg-[#FE0404] text-white rounded hover:bg-red-600 w-[120px] md:w-[200px] h-[40px] md:h-[50px]"
                                onClick={() => navigate('/auth/required')}
                            >
                                Отмена
                            </button>
                            <button
                                type="submit"
                                className="bg-[#FE0404] text-white rounded hover:bg-red-600 w-[120px] md:w-[200px] h-[40px] md:h-[50px]"
                            >
                                Отправить
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ResetPassword;
