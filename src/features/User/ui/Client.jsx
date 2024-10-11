import { useEffect, useState } from "react";
import NavBarContainer from "../../../shared/helpers/NavBarContainer";
import { useDispatch } from "react-redux";
import { getClients } from "../store/action";

const Client = () => {
  const [clients, setClients] = useState([]); // Локальное состояние для хранения данных клиентов
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients())
  }, [dispatch]);

  return (
    <NavBarContainer>
      <div className="border-b border-[#B6B7BC] flex justify-between items-center">
        <h1 className="text-[34px] font-bold">Клиенты</h1>
      </div>
      <div className=" h-[45px] border text-[24px] mb-6 mt-5 font-bold  text-black  bg-slate-200 rounded-[8px] px-10 flex justify-between items-center">
        <p>Имя</p>
        <p>Тренер</p>
        <p>Спорт</p>
        <p>Оплата</p>
      </div>
      {clients.map((client) => (
        <div
          key={client.id}
          className="border-b font-normal border-[#B6B7BC] px-10 flex justify-between"
        >
          <p>{client.name}</p>
          <p>{client.trainer}</p>
          <p>{client.sport}</p>
          <p>{client.paymentStatus}</p>
        </div>
      ))}
    </NavBarContainer>
  );
};

export default Client;
