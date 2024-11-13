import React, { useEffect } from "react";
import NavBarContainer from "../../../shared/helpers/NavBarContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPayment } from "../store/action";

const Oplata = () => {
  const dispatch = useDispatch();
  const { payment } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(fetchPayment());
  }, [dispatch]);

  console.log(payment);

  return (
    
    <div className="flex flex-col my-4 ">
      <h1 className="font-sans text-2xl font-bold">Оплата</h1>
      {payment.map((payment, index) => (
          <>
            <span key={index} className="flex justify-center font-sans items-end text-[15px] p-2 mt-4 mb-2">
              {payment.enrollment_date}
            </span>
            <div className="p-5 text-black bg-white pl-[50px] rounded-3xl">
              <div className="flex items-center justify-between">
                <h1 className="mb-2 font-sans text-2xl text-black">
                  {payment.paid ? "Вы оплатили !" : "Вы не оплатили !"}
                </h1>
                {!payment.paid && <ActionButton   to="/profile/card" />}
              </div>
              <hr />
              <div className="flex gap-2 mt-3 font-sans text-xl">
                <span className="font-semibold">Спорт: </span>
                <span> {payment.sport_display}</span>
              </div>
              <div className="flex gap-2 font-sans text-xl">
                <span className="font-semibold text-black">Цена за месяц:</span>
                <span>2948 сом</span>
              </div>
              <p className="flex justify-end text-[#2A2424] text-[15px]">
                16:00
              </p>
            </div>
          </>
        )
      )}
    </div>
  );
};
export default Oplata
const ActionButton = ({ to }) => (
  <Link to={to}>
    <button className="bg-[#FE0404] font-comfortaa text-white rounded-lg px-4 py-1">
      Оплатить
    </button>
  </Link>
);

// export const  Oplata = ({}) =>  {
//   const payments = [
//     { isPaid: false, date: "08.02.2024" },
//   ];

//   return (
//     <NavBarContainer>
//       <div className="flex flex-col gap-3">
//         <h1 className="font-sans text-2xl font-bold">Оплата</h1>
//         {payments.map((payment, index) => (
//           <PaymentStatus
//             key={index}
//             isPaid={payment.isPaid}
//             date={payment.date}
//           />
//         ))}
//       </div>
//     </NavBarContainer>
//   );
// }

// export default Oplata;
