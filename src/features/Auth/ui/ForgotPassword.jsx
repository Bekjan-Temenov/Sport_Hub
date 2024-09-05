import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../../shared/helpers/Container';
import { useDispatch, useSelector } from 'react-redux';
import { requestPasswordReset } from '../store/action'; 
import istockphoto from '../../../shared/assets/svg/istockphoto.svg';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Используем useNavigate для навигации
    const { status, error } = useSelector((state) => state.auth);

    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Неверный формат email')
            .required('Обязательно для заполнения'),
    });

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            // Запрашиваем сброс пароля
            await dispatch(requestPasswordReset(values.email));

            // Навигация на страницу после успешного входа
            navigate('/auth/resetpassword'); // Измените путь на нужный вам
        } catch (err) {
            console.error('Ошибка при сбросе пароля или входе в систему:', err);
        }
        setSubmitting(false);
    };

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center bg-cover bg-center p-4"
            style={{ backgroundImage: `url(${istockphoto})` }}
        >
            <Container>
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full flex flex-col gap-4 justify-center max-w-[400px] sm:max-w-[500px] mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center">Забыли пароль</h2>
                    <p className="text-start text-sm sm:text-[15px]">
                        Введите свой адрес электронной почты для процесса проверки, мы вышлем код на ваш адрес электронной почты.
                    </p>
                    {error && <div className="text-red-500 text-sm">{error}</div>}
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
                                    <Link to="/auth/sign-in" className="text-blue-500 underline">Вернуться на авторизацию</Link>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || status === 'loading'}
                                        className="w-full py-2 sm:py-3 bg-[#FE0404] text-white rounded-lg"
                                    >
                                        {isSubmitting || status === 'loading' ? 'Отправка...' : 'Отправить'}
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
