import React, { useEffect } from "react";
import NavBarContainer from "../../../shared/helpers/NavBarContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchPayments } from "../store/action";

const Paymentn = () => {
  const dispatch = useDispatch();
  const { data, status ,error } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(fetchPayments());
  }, [dispatch]);

  console.log(data);

  return (
    <NavBarContainer>
      {status === "loading" && <h1 className="">Loading...</h1>}
      {status === "failed" && <h1 className="text-red-700">Error: {error}</h1>}
      <h1 className="p-2 mb-2 text-2xl border-b">Оплата</h1>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <>
            <span
              key={index}
              className="flex justify-center items-end text-[20px] p-2 mt-7"
            >
              08.02.2024
            </span>
            <div className="w-[872px] h-[40px] bg-white rounded-t-3xl border-b p-4">
              <h2 className="text-black w-[872px]">Оплатил(a)! {item.name}</h2>
            </div>
            <div className="w-[872px] h-[100px] bg-white rounded-b-3xl border-b p-5">
              <div className="flex">
                <span className="text-black font-semibold text-[16px]">
                  Спорт:
                </span>
                <span className="text-[#000000] ml-1 text-[16px]">
                  {item.sport}
                </span>
              </div>
              <div className="flex mt-1">
                <span className="text-black font-semibold text-[16px]">
                  Цена:
                </span>
                <span className="text-[#000000] ml-1 text-[16px]">
                  {item.monthly_price} сом
                </span>
              </div>
              <p className="flex justify-end text-[#2A2424] text-[15px]">
                {created_at}
              </p>
            </div>
          </>
        ))
      ) : (
        <div className=" font-normal border-[#B6B7BC] flex justify-center items-center p-3">
          <p>Нет оплаты для отображения</p>
        </div>
      )}
    </NavBarContainer>
  );
};
export default Paymentn;
