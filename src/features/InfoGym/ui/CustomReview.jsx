// src/components/CustomerReviews.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews } from '../store/action';
import fon from "../../../shared/assets/png/ReviewsFon.png";
import Container from "../../../shared/helpers/Container";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";

const CustomerReviews = () => {
  const dispatch = useDispatch();
  const reviewsState = useSelector((state) => state.reviews); // Используйте правильный ключ
  const { reviews, status, error } = reviewsState || { reviews: [], status: 'idle', error: null };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReviews());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <section
      style={{
        backgroundImage: `url(${fon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[100%] h-auto py-12 text-white"
    >
      <Container>
        <div>
          <h2 className="mb-8 text-3xl font-bold text-center">
            Отзывы клиентов
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <Reviews key={review.id} {...review} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/arena-review">
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
