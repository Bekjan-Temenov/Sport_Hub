import { useEffect } from "react";
import NavBarContainer from "../../../shared/helpers/NavBarContainer";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../store/action";

const Client = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.trainers?.clients);
  console.log(clients, "clients");

  useEffect(() => {
    dispatch(getClients());
    console.log(dispatch(getClients()));
  }, [dispatch]);

  useEffect(() => {
    console.log(clients);
  }, [clients]);

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
          className="border-b font-normal border-[#B6B7BC] flex justify-between items-center p-3 transition duration-300"
        >
          <p className="w-1/5 text-left">{client.name}</p>
          <p className="w-1/5 text-center">{client.trainer.name}</p>
          <p className="w-1/5 text-center">{client.sport}</p>
          <p className="w-1/5 pr-5 text-right">{client.payment_method}</p>
        </div>
      ))}
    </NavBarContainer>
  );
};

export default Client;
