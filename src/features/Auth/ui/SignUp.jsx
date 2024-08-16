import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import istockphoto from "../../../shared/assets/svg/istockphoto.svg";
import Container from "../../../shared/helpers/Container";
import { Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Неверный email").required("Обязательно"),
  password: Yup.string()
    .min(6, "Слишком короткий пароль!")
    .required("Обязательно"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
    .required("Обязательно"),
  firstName: Yup.string().required("Обязательно"),
  lastName: Yup.string().required("Обязательно"),
  phoneNumber: Yup.string().required("Обязательно"),
  birthDate: Yup.date().required("Обязательно"),
  rememberMe: Yup.boolean(),
});

const SignUp = () => {
  return (
    <div
      className="flex items-center justify-center w-full min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${istockphoto})` }}
    >
      <Container>
        <div className="bg-white p-5 rounded-lg shadow-lg w-[550px] mx-auto">
          <div className="flex justify-end">
            <button className="text-xl font-bold">×</button>
          </div>
          <h1 className="text-3xl font-bold text-center">Регистрация</h1>
          <h2 className="mb-4 text-xl font-semibold">Создать аккаунт</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
              firstName: "",
              lastName: "",
              phoneNumber: "",
              birthDate: "",
              rememberMe: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form>
                <div className="mb-4">
                  <Field
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    className={`input ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } w-full h-10 px-4 border-2 rounded-lg bg-gray-100`}
                  />
                  {errors.email && touched.email ? (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    className={`input ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-gray-300"
                    } w-full h-10 px-4 border-2 rounded-lg bg-gray-100`}
                  />
                  {errors.password && touched.password ? (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="mb-4">
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Подтвердите пароль"
                    className={`input ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } w-full h-10 px-4 border-2 rounded-lg bg-gray-100`}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
                <div className="flex mb-4 space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">
                      Имя <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="Имя"
                      className={`input ${
                        errors.firstName && touched.firstName
                          ? "border-red-500"
                          : "border-gray-300"
                      } w-full h-10 px-4 border-2 rounded-lg bg-gray-100`}
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.firstName}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">
                      Фамилия <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="lastName"
                      type="text"
                      placeholder="Фамилия"
                      className={`input ${
                        errors.lastName && touched.lastName
                          ? "border-red-500"
                          : "border-gray-300"
                      } w-full h-10 px-4 border-2 rounded-lg bg-gray-100`}
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.lastName}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex mb-4 space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">
                      Номер телефона <span className="text-red-500">*</span>
                    </label>
                    <PhoneInput
                      country={"us"}
                      value={""}
                      onChange={(phone) => setFieldValue("phoneNumber", phone)}
                      inputProps={{
                        name: "phoneNumber",
                        required: true,
                        className: `input ${
                          errors.phoneNumber && touched.phoneNumber
                            ? "border-red-500"
                            : "border-gray-300"
                        } w-full h-10 px-4 border-2 rounded-lg bg-gray-100`,
                      }}
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.phoneNumber}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">
                      Дата рождения <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="birthDate"
                      type="date"
                      placeholder="Дата рождения"
                      className={`input ${
                        errors.birthDate && touched.birthDate
                          ? "border-red-500"
                          : "border-gray-300"
                      } w-full h-10 px-4 border-2 rounded-lg bg-gray-100`}
                    />
                    {errors.birthDate && touched.birthDate ? (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.birthDate}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Field name="rememberMe" type="checkbox" className="mr-2" />
                  <label htmlFor="rememberMe">Запомнить</label>
                </div>
                <Link to="/auth/code">
                  <button
                    type="submit"
                    className="w-full h-10 text-lg text-white bg-red-600 rounded-lg"
                  >
                    Зарегистрироваться
                  </button>
                </Link>
                <Link to="/auth/sign-in">
                  <div className="flex items-center justify-center gap-2 mt-3">
                    Уже есть аккаунт?{" "}
                    <p className="text-blue-500">Авторизация</p>
                  </div>
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
