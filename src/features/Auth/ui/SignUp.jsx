import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { signup } from "../store/action";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Container from "../../../shared/helpers/Container";
import istockphoto from "../../../shared/assets/svg/istockphoto.svg";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Неверный email").required("Обязательно"),
  password: Yup.string()
    .min(5, "Пароль должен содержать 8 символов")
    .matches(/[0-9]/, "Пароль должен включать хотя бы одну цифру")
    .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .required("Обязательно"),
  password_confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
    .required("Обязательно"),
  first_name: Yup.string().required("Обязательно"),
  last_name: Yup.string().required("Обязательно"),
  phone_number: Yup.string().required("Обязательно"),
  birth_date: Yup.date().required("Обязательно"),
  rememberMe: Yup.boolean(),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm((prev) => !prev);
  };
  const handleSubmit = (values) => {
    dispatch(signup(values));
    // dispatch(setEmail(values.email));
  };

  return (
    <div
      className="
      flex items-center justify-center w-full min-h-screen 
      bg-no-repeat bg-center bg-cover 
      sm:bg-[url(${istockphoto})] 
      md:bg-[url(${istockphoto})] 
      lg:bg-[url(${istockphoto})]
      xl:bg-[url(${istockphoto})]
    "
      style={{ backgroundImage: `url(${istockphoto})` }}
    >
      <Container>
        <div className="bg-white p-4 rounded-lg shadow-lg w-[350px] h-full mx-auto md:w-[500px] lg:max-w-[550px] sm:max-w-full">
          <Link to="/">
            <div className="flex justify-end">
              <button className="text-xl font-bold">×</button>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-center">Регистрация</h1>
          <h2 className="mb-4 text-l font-semibold">Создать аккаунт</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
              password_confirm: "",
              first_name: "",
              last_name: "",
              phone_number: "",
              birth_date: "",
              rememberMe: false,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(signup(values))
                .unwrap()
                .then(() => {
                  navigate("/auth/code", { state: { email: values.email } });
                })
                .catch((error) => {
                  console.error("Ошибка регистрации:", error);
                })
                .finally(() => {
                  setSubmitting(false);
                });
            }}
          >
            {({ errors, touched, setFieldValue, isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <Field
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    className={`${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } w-full h-9 px-4 border-2 rounded-lg bg-gray-100`}
                  />
                  {errors.email && touched.email && (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-4 relative display-flex justify-content-center align-items-center">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Пароль"
                    className={`${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-gray-300"
                    } w-full h-10 px-4 border-2 rounded-lg bg-gray-100`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-[18px] transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <VisibilityIcon className="display-flex justify-center align-items-center w-4 h-4" />
                    ) : (
                      <VisibilityOffIcon className="w-4 h-4" />
                    )}
                  </button>
                  {errors.password && touched.password && (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.password}
                    </div>
                  )}
                </div>
                <div className="mb-4 relative">
                  <Field
                    name="password_confirm"
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder="Подтвердите пароль"
                    className={`${
                      errors.password_confirm && touched.password_confirm
                        ? "border-red-500"
                        : "border-gray-300"
                    } w-full h-9 px-4 pr-10 border-2 rounded-lg bg-gray-100`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordConfirmVisibility}
                    className="absolute right-2 top-[18px] transform -translate-y-1/2 "
                  >
                    {showPasswordConfirm ? (
                      <VisibilityIcon className="w-4 h-4" />
                    ) : (
                      <VisibilityOffIcon className="w-4 h-4" />
                    )}
                  </button>
                  {errors.password_confirm && touched.password_confirm && (
                    <div className="mt-1 text-sm text-red-500">
                      {errors.password_confirm}
                    </div>
                  )}
                </div>
                <div className="flex mb-4 space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">
                      Имя <span className="text-[#FE0404]">*</span>
                    </label>
                    <Field
                      name="first_name"
                      type="text"
                      // placeholder="Имя"
                      className={`${
                        errors.first_name && touched.first_name
                          ? "border-red-500"
                          : "border-gray-300"
                      } w-full h-9 px-4 border-2 rounded-lg bg-gray-100`}
                    />
                    {errors.first_name && touched.first_name && (
                      <div className="mt-1 text-sm text-[#FE0404]">
                        {errors.first_name}
                      </div>
                    )}
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">
                      Фамилия <span className="text-[#FE0404]">*</span>
                    </label>
                    <Field
                      name="last_name"
                      type="text"
                      // placeholder="Фамилия"
                      className={`${
                        errors.last_name && touched.last_name
                          ? "border-red-500"
                          : "border-gray-300"
                      } w-full h-9 px-4 border-2 rounded-lg bg-gray-100`}
                    />
                    {errors.last_name && touched.last_name && (
                      <div className="mt-1 text-sm text-[#FE0404]">
                        {errors.last_name}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex mb-4 space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700">
                      Номер телефона <span className="text-[#FE0404]">*</span>
                    </label>
                    <PhoneInput
                      country="us"
                      value={""}
                      onChange={(phone) => setFieldValue("phone_number", phone)}
                      inputProps={{
                        name: "phone_number",
                        required: true,
                        className:
                          (errors.phone_number && touched.phone_number
                            ? "border-red-500"
                            : "border-gray-300") +
                          " w-[190] h-9 px-4 border-2 rounded-lg bg-gray-100 ml-6",
                      }}
                    />
                    {errors.phone_number && touched.phone_number && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.phone_number}
                      </div>
                    )}
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700">
                      Дата рождения <span className="text-[#FE0404]">*</span>
                    </label>
                    <Field
                      name="birth_date"
                      type="date"
                      placeholder="Дата рождения"
                      className={`${
                        errors.birth_date && touched.birth_date
                          ? "border-red-500"
                          : "border-gray-300"
                      } w-full h-9 px-4 border-2 rounded-lg bg-gray-100`}
                    />
                    {errors.birth_date && touched.birth_date && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.birth_date}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full h-10 text-white bg-[#FE0404] rounded-lg hover:bg-opacity-90"
                >
                  Зарегистрироваться
                </button>
                <div className="mt-4 text-center">
                  <p className="text-sm sm:text-base text-[#242424]">
                    Уже есть аккаунт?{" "}
                    <Link to="/auth/sign-in" className="text-[#6b6bf7]">
                      Авторизация
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
