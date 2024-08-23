// import React from "react";
// import istockphoto from "../../../shared/assets/svg/istockphoto.svg";
// import { Formik, Form, Field, useField } from "formik";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";

// const CodeInput = () => {
//   const validationSchema = Yup.object({
//     code1: Yup.string()
//       .matches(/^\d$/, "Введите цифру")
//       .required("Обязательное поле"),
//     code2: Yup.string()
//       .matches(/^\d$/, "Введите цифру")
//       .required("Обязательное поле"),
//     code3: Yup.string()
//       .matches(/^\d$/, "Введите цифру")
//       .required("Обязательное поле"),
//     code4: Yup.string()
//       .matches(/^\d$/, "Введите цифру")
//       .required("Обязательное поле"),
//   });

//   const handleSubmit = (values) => {
//     const code = `${values.code1}${values.code2}${values.code3}${values.code4}`;
//     console.log("Код успешно отправлен:", code);
//   };

//   const handleChange = (event, fieldName) => {
//     const value = event.target.value;
//     if (/^\d$/.test(value)) {
//       event.target.value = value;
//     } else {
//       event.target.value = "";
//     }
//   };

//   const handlePaste = (event, fieldName) => {
//     event.preventDefault();
//     const pastedData = event.clipboardData.getData("text");
//     const sanitizedData = pastedData.replace(/\D/g, "").slice(0, 4);
//     const fields = ["code1", "code2", "code3", "code4"];
//     fields.forEach((field, index) => {
//       if (sanitizedData[index] !== undefined) {
//         document.getElementsByName(field)[0].value = sanitizedData[index];
//       }
//     });
//   };

//   const CustomInput = ({ name }) => {
//     const [field, meta] = useField(name);
//     return (
//       <div className="flex flex-col items-center">
//         <input
//           type="text"
//           {...field}
//           name={name}
//           maxLength={1}
//           onChange={(e) => handleChange(e, name)}
//           onPaste={(e) => handlePaste(e, name)}
//           className={`w-[60px] h-[60px] md:w-[89px] md:h-[100px] bg-gray-200 rounded text-center text-lg ${
//             meta.touched && meta.error ? "border-2 border-red-500" : ""
//           }`}
//         />
//       </div>
//     );
//   };

//   return (
//     <div
//       className="flex items-center justify-center w-full min-h-screen bg-center bg-cover"
//       style={{ backgroundImage: `url(${istockphoto})` }}
//     >
//       <Formik
//         initialValues={{ code1: "", code2: "", code3: "", code4: "" }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {() => (
//           <Form className="bg-white p-4 md:p-8 rounded-lg shadow-md w-[90%] max-w-[600px] h-auto md:h-[500px] flex flex-col items-center gap-3 justify-center">
//             <h1 className="font-semibold mb-4 text-[24px] md:text-[32px] text-center">
//               Введите 4-значный код
//             </h1>
//             <p className="text-gray-700 mb-6 text-start text-[16px] md:text-[20px] w-[80%] md:w-[400px] text-center md:text-start">
//               На адрес электронной почты, который вы указали, должен был прийти
//               четырехзначный код.
//             </p>
//             <div className="flex gap-2 mb-6 md:gap-4">
//               <CustomInput name="code1" />
//               <CustomInput name="code2" />
//               <CustomInput name="code3" />
//               <CustomInput name="code4" />
//             </div>
//             <div className="flex justify-center w-full gap-2 md:gap-4">
//               <Link to="/auth/required">
//                 <button
//                   type="button"
//                   className="py-2 bg-[#FE0404] text-white rounded hover:bg-red-600 w-[120px] md:w-[200px] h-[40px] md:h-[50px]"
//                   onClick={() => console.log("Отмена")}
//                 >
//                   Отмена
//                 </button>
//               </Link>
//               <button
//                 type="submit"
//                 className="bg-[#FE0404] text-white rounded hover:bg-red-600 w-[120px] md:w-[200px] h-[40px] md:h-[50px]"
//               >
//                 Отправить
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default CodeInput;
import React from "react";
import istockphoto from "../../../shared/assets/svg/istockphoto.svg";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const CodeInput = () => {
  const validationSchema = Yup.object({
    code1: Yup.string().matches(/^\d$/, "Введите цифру").required("Обязательное поле"),
    code2: Yup.string().matches(/^\d$/, "Введите цифру").required("Обязательное поле"),
    code3: Yup.string().matches(/^\d$/, "Введите цифру").required("Обязательное поле"),
    code4: Yup.string().matches(/^\d$/, "Введите цифру").required("Обязательное поле"),
  });

  const handleSubmit = (values) => {
    const code = `${values.code1}${values.code2}${values.code3}${values.code4}`;
    console.log("Код успешно отправлен:", code);
  };

  const handleChange = (event, fieldName) => {
    const value = event.target.value;
    if (/^\d$/.test(value)) {
      event.target.value = value;
    } else {
      event.target.value = "";
    }
  };

  const handlePaste = (event, setFieldValue) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    const fields = ["code1", "code2", "code3", "code4"];
    
    fields.forEach((field, index) => {
      if (pastedData[index]) {
        setFieldValue(field, pastedData[index]);
      }
    });
  };

  const CustomInput = ({ name, setFieldValue }) => {
    const [field, meta] = useField(name);

    return (
      <div className="flex flex-col items-center">
        <input
          type="text"
          {...field}
          maxLength={1}
          onChange={(e) => handleChange(e, name)}
          onPaste={(e) => handlePaste(e, setFieldValue)}
          className={`w-[60px] h-[60px] md:w-[89px] md:h-[100px] bg-gray-200 rounded text-center text-lg ${
            meta.touched && meta.error ? "border-2 border-red-500" : ""
          }`}
        />
      </div>
    );
  };

  return (
    <div
      className="flex items-center justify-center w-full min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${istockphoto})` }}
    >
      <Formik
        initialValues={{ code1: "", code2: "", code3: "", code4: "" }}
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
            <div className="flex gap-2 mb-6 md:gap-4">
              <CustomInput name="code1" setFieldValue={setFieldValue} />
              <CustomInput name="code2" setFieldValue={setFieldValue} />
              <CustomInput name="code3" setFieldValue={setFieldValue} />
              <CustomInput name="code4" setFieldValue={setFieldValue} />
            </div>
            <div className="flex justify-center w-full gap-2 md:gap-4">
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
