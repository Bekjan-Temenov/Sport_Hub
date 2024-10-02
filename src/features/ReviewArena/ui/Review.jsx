import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../../shared/helpers/Container";
import fon from "../../../shared/assets/png/ReviewsFon.png";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { postReview } from "../../InfoGym/store/action";
import clsx from 'clsx';

const Review = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.reviews);

  const handleSubmit = async () => {
    try {
      // Убедитесь, что идентификаторы определены и не пустые
      const reviewData = {
        rating,
        content: feedback,
        arena: '4',    // Замените на реальный идентификатор арены
        user: '1'      // Замените на реальный идентификатор пользователя
      };

      if (!reviewData.arena || !reviewData.user) {
        throw new Error("Arena and User fields are required.");
      }

      await dispatch(postReview(reviewData)).unwrap();
      setRating(0);
      setFeedback("");
      console.log('Ваш отзыв отправлен');
    } catch (error) {
      console.error("Ошибка при отправке отзыва:", error);
    }
  };


  return (
    <div
      style={{
        backgroundImage: `url(${fon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-auto py-[58px] bg-center bg-cover"
    >
      <Container>
        <div className="md:p-6 p-2 flex flex-col gap-1 relative mx-auto lg:w-[70%] w-full">
          <Link to="/arena" aria-label="Close" role="button">
            <CloseIcon className="absolute text-white cursor-pointer right-1 top-2 md:top-5 md:right-12" />
          </Link>
          <h2 className="text-xl font-medium text-white lg:text-4xl">
            What do you think?
          </h2>
          <p className="text-sm text-gray-400">
            Please give us your rating
          </p>
          <div className="flex gap-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                onClick={() => setRating(index + 1)}
                className={clsx("w-8 h-8 cursor-pointer", {
                  "text-red-500": rating > index,
                  "text-gray-400": rating <= index,
                })}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-label={`Rating ${index + 1}`}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.185a1 1 0 00.95.69h4.395c.969 0 1.371 1.24.588 1.81l-3.561 2.58a1 1 0 00-.364 1.118l1.357 4.186c.3.922-.755 1.688-1.54 1.118l-3.562-2.581a1 1 0 00-1.175 0l-3.562 2.581c-.785.57-1.841-.196-1.54-1.118l1.357-4.186a1 1 0 00-.364-1.118L2.16 9.612c-.783-.57-.38-1.81.588-1.81h4.396a1 1 0 00.95-.69l1.357-4.185z" />
              </svg>
            ))}
          </div>
          <div className="md:w-[80%] w-full flex flex-col items-end">
            <textarea
              className="w-full p-2 mb-4 bg-white rounded-[4px] resize-none"
              placeholder="Tell us about your experience"
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button
              type="button"
              className={`px-4 py-2 text-center text-white bg-red-500 rounded-lg hover:bg-red-600 ${status === 'loading' ? "cursor-wait" : ""}`}
              onClick={handleSubmit}
              disabled={status === 'loading'}
              aria-label="Submit review"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit'}
            </button>
            {status === 'failed' && (
              <p className="text-red-500">
                Error: {typeof error === 'string' ? error : 'An error occurred'}
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;
