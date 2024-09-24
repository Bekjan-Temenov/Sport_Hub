import React, { useState, useEffect } from "react";
import istockphoto from "../../../shared/assets/svg/istockphoto.svg";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activateUser } from "../store/action";

const CodeInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const validationSchema = Yup.object({
    code: Yup.string().required("Обязательное поле"),
  });

  const handleChange = (e, index, setFieldValue) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      setFieldValue("code", newCode.join(""));

      // Автоматический переход на следующий инпут
      if (value && index < 3) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (values) => {
    const { code } = values;

    console.log("Отправляемый payload:", code); // Лог для проверки

    dispatch(activateUser(code))
      .unwrap()
      .then((response) => {
        console.log("Код успешно отправлен:", response);
        navigate('/');
      })
      .catch((error) => {
        console.error("Ошибка активации:", error);
      });
  };

  const handleResendSMS = () => {
    // Логика для повторной отправки SMS
    console.log("SMS отправлено снова");
    setTimer(30);
    setIsTimerActive(true);
  };

  useEffect(() => {
    let interval = null;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  return (
    <div
      className="flex items-center justify-center w-full min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${istockphoto})` }}
    >
      <Formik
        initialValues={{ code: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="bg-white p-4 md:p-8 rounded-lg shadow-md w-[90%] max-w-[600px] h-auto md:h-[500px] flex flex-col items-center gap-3 justify-center">
            <h1 className="font-semibold mb-4 text-[24px] md:text-[32px] text-center">
              Введите 4-значный код
            </h1>
            <p className="text-gray-700 mb-6 text-[16px] md:text-[20px] w-[80%] md:w-[400px] text-center md:text-start">
              На адрес электронной почты, который вы указали, должен был прийти четырехзначный код.
            </p>
            <div className="mb-6 flex gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <Field
                  key={index}
                  type="text"
                  name={`code-input-${index}`}
                  id={`code-input-${index}`}
                  maxLength={1}
                  onChange={(e) => handleChange(e, index, setFieldValue)}
                  value={code[index]}
                  className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-gray-200 rounded text-center text-lg"
                />
              ))}
            </div>

            <div className="flex justify-start">
              <div className="flex justify-between items-center gap-[190px] text-blue-500">
                <button
                  type="button"
                  onClick={handleResendSMS}
                  disabled={isTimerActive}
                  className={`py-2 px-4 rounded ${isTimerActive ? 'bg-gray-400' : 'bg-transparent'}`}
                >
                  Отправить SMS ещё раз
                </button>
                {isTimerActive && (
                  <span>{`00:${timer < 5 ? `0${timer}` : timer}`}</span>
                )}
              </div>
            </div>

            <div className="flex justify-center w-full gap-2 md:gap-4 mt-4">
              <Link to="/auth/required">
                <button
                  type="button"
                  className="py-2 bg-[#FE0404] text-white rounded hover:bg-red-600 w-[120px] md:w-[200px] h-[40px] md:h-[50px]"
                  onClick={() => console.log("Отмена")}
                >
                  Отмена
                </button>
              </Link>
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

export default CodeInput;
