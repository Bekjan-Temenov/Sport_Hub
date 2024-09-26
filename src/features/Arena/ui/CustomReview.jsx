import React from "react";
import Reviews from "./Reviews";
import fon from "../../../shared/assets/png/ReviewsFon.png";
import Container from "../../../shared/helpers/Container";
import { Link } from "react-router-dom";

const reviews = [
  {
    text: "Баскетбол - это удивительный спорт, который сочетает в себе физическую активность, стратегию и командную работу. Я играю в баскетбол уже несколько лет и могу с уверенностью сказать, что это одна из самых захватывающих игр.",
    rating: 5,
    name: "Кортни Генри",
    photo: "https://via.placeholder.com/150",
  },
  {
    text: "Баскетбол - это удивительный спорт, который сочетает в себе физическую активность, стратегию и командную работу. Я играю в баскетбол уже несколько лет и могу с уверенностью сказать, что это одна из самых захватывающих игр.",
    rating: 5,
    name: "Антонов Павел",
    photo: "https://via.placeholder.com/150",
  },
  {
    text: "Баскетбол - это удивительный спорт, который сочетает в себе физическую активность, стратегию и командную работу. Я играю в баскетбол уже несколько лет и могу с уверенностью сказать, что это одна из самых захватывающих игр.",
    rating: 5,
    name: "Анна Каренина",
    photo: "https://via.placeholder.com/150",
  },
];

const CustomerReviews = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${fon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[100% ]  h-auto py-12 text-white"
    >
      <Container>
        <div className="">
          <h2 className="mb-8 text-3xl font-bold text-center">
            Отзывы клиентов
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
            {reviews.map((review, index) => (
              <Reviews key={index} {...review} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/review">
              <button className="py-2 font-normal text-white bg-red-600 rounded-md px-7 text-md hover:bg-red-700">
                Оставить отзыв
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomerReviews;
