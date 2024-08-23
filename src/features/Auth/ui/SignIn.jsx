import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import istockphoto from "../../../shared/assets/svg/istockphoto.svg";
import { Link } from "react-router-dom";

const SignIn = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Неверный формат email").required("Обязательно"),
    password: Yup.string().required("Обязательно"),
  });

  return (
    <div
      className="flex items-center justify-center w-full min-h-screen p-4 bg-center bg-cover"
      style={{ backgroundImage: `url(${istockphoto})` }}
    >
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-[550px] h-auto sm:h-[500px] mx-auto">
        <Link to="/">
          <div className="flex justify-end">
            <button className="text-2xl font-bold">&times;</button>
          </div>
        </Link>
        <h1 className="text-3xl text-center sm:text-4xl">Авторизация</h1>
        <h2 className="mt-4 text-lg font-semibold sm:text-xl text-start">
          Добро пожаловать!
        </h2>
        <p className="mb-6 text-gray-500 text-start">Войдите в свой аккаунт!</p>
        <Formik
          initialValues={{ email: "", password: "", remember: false }}
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
                  className="w-full h-10 px-4 bg-gray-100 border-2 rounded-lg input"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
              <div className="mb-4">
                <Field
                  name="password"
                  type="password"
                  placeholder="Пароль"
                  className="w-full h-10 px-4 bg-gray-100 border-2 rounded-lg input"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
              <div className="flex flex-row items-center justify-between mb-4 sm:flex-row">
                <div className="flex items-center">
                  <Field name="remember" type="checkbox" className="mr-2" />
                  <label>Запомнить</label>
                </div>
                <a href="#" className="mt-2 text-blue-500 sm:mt-0">
                  Забыли пароль?
                </a>
              </div>
              <button
                type="submit"
                className="w-full h-10 text-lg bg-[#FE0404] cursor-pointer text-white rounded-lg"
                disabled={isSubmitting}
              >
                Войти
              </button>
            </Form>
          )}
        </Formik>
        <p className="mt-4 text-center text-gray-500">
          Если вы не зарегистрированы, нажмите{" "}
          <Link to="/auth/sign-up" className="text-blue-500">
            Регистрация
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
