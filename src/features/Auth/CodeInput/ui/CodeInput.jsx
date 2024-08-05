import React from 'react';
import istockphoto from '../../../../shared/assets/svg/istockphoto.svg';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

const CodeInput = () => {
    const validationSchema = Yup.object({
        code1: Yup.string()
            .matches(/^\d$/, 'Введите цифру')
            .required('Обязательное поле'),
        code2: Yup.string()
            .matches(/^\d$/, 'Введите цифру')
            .required('Обязательное поле'),
        code3: Yup.string()
            .matches(/^\d$/, 'Введите цифру')
            .required('Обязательное поле'),
        code4: Yup.string()
            .matches(/^\d$/, 'Введите цифру')
            .required('Обязательное поле'),
    });

    const handleSubmit = (values) => {
        const code = `${values.code1}${values.code2}${values.code3}${values.code4}`;
        console.log('Код успешно отправлен:', code);
    };

    const CustomInput = ({ name }) => {
        const [field, meta] = useField(name);
        return (
            <div className="flex flex-col items-center ">
                <input
                    type="text"
                    {...field}
                    maxLength={1}
                    className={`w-[89px] h-[100px] bg-gray-200 rounded text-center text-lg ${meta.touched && meta.error ? 'border-2 border-red-500' : ''
                        }`}
                />
            </div>
        );
    };

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${istockphoto})` }}
        >
            <Formik
                initialValues={{ code1: '', code2: '', code3: '', code4: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className="bg-white p-8 rounded-lg shadow-md w-[600px] h-[500px] flex flex-col items-center gap-3 justify-center">
                        <h1 className="font-semibold mb-4 text-[32px]">Введите 4-значный код</h1>
                        <p className="text-gray-700 mb-6 text-start text-[20px] w-[400px]">
                            На адрес электронной почты, который вы указали, должен был прийти четырехзначный код.
                        </p>
                        <div className="flex gap-4 mb-6">
                            <CustomInput name="code1" />
                            <CustomInput name="code2" />
                            <CustomInput name="code3" />
                            <CustomInput name="code4" />
                        </div>
                        <div className="flex gap-4 w-full justify-center">
                            <button
                                type="button"
                                className=" py-2 bg-[#FE0404] text-white rounded hover:bg-red-600 w-[200px] h-[50px]"
                                onClick={() => console.log('Отмена')}
                            >
                                Отмена
                            </button>
                            <button
                                type="submit"
                                className=" bg-[#FE0404] text-white rounded hover:bg-red-600 w-[200px] h-[50px]"
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

export default CodeInput;
