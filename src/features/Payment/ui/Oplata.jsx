import React from "react";
import NavBarContainer from "../../../shared/helpers/NavBarContainer";
import { Link } from "react-router-dom";

const PaymentStatus = ({ isPaid, date }) => {
  return (
    <div className="my-4">
      <span className="flex justify-center font-sans items-end text-[15px] p-2 mt-4 mb-2">
        {date}
      </span>
      <div className="p-5 text-black bg-white pl-[50px] rounded-3xl">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 font-sans text-2xl text-black">
            {isPaid ? "Вы оплатили !" : "Вы не оплатили !"}
          </h1>
          {!isPaid && <ActionButton to="/shedule/card"/>}
        </div>
        <hr />
        <div className="flex gap-2 mt-3 font-sans text-xl">
          <span className="font-semibold">Спорт: </span>
          <span> Баскетбол</span>
        </div>
        <div className="flex gap-2 font-sans text-xl">
          <span className="font-semibold text-black">Цена за месяц:</span>
          <span>2948 сом</span>
        </div>
        <p className="flex justify-end text-[#2A2424] text-[15px]">16:00</p>
      </div>
    </div>
  );
};

const ActionButton = ({to}) => (
  <Link to={to}>
    <button className="bg-[#FE0404] font-comfortaa text-white rounded-lg px-4 py-1">
      Оплатить
    </button>
  </Link>
);

function Oplata() {
  const payments = [
    { isPaid: false, date: "08.02.2024" },
    { isPaid: true, date: "08.02.2024" },
    { isPaid: true, date: "08.02.2024" },
    { isPaid: true, date: "08.02.2024" },
    { isPaid: true, date: "08.02.2024" },
  ];

  return (
    <NavBarContainer>
      <div className="flex flex-col gap-3">
        <h1 className="font-sans text-2xl font-bold">Оплата</h1>
        {payments.map((payment, index) => (
          <PaymentStatus
            key={index}
            isPaid={payment.isPaid}
            date={payment.date}
          />
        ))}
      </div>
    </NavBarContainer>
  );
}

export default Oplata;
