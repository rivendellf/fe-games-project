import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { Link } from "react-router-dom";
import { Categories } from "./Categories";

export const Reviews = ({ currentCategory, setCurrentCategory }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p id="loading">...loading</p>
  ) : (
    <>
      <Categories
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <ul id="reviewList">
        {reviews.map((review) => {
          return (
            <li className="reviewContainer" key={review.review_id}>
              <Link to={`/reviews/${review.review_id}`} id="reviewTitle">
                {review.title}
              </Link>
              <img
                id="reviewImage"
                src={review.review_img_url}
                alt={review.title}
              ></img>
              <section>
                <p id="reviewDesigner">Designed by: {review.designer}</p>
                <p id="reviewCategory">Category: {review.category}</p>
                <p id="reviewOwner">User: {review.owner}</p>
                <p id="reviewCreatedAt">Posted: {review.created_at}</p>
                <p id="reviewBody">{review.review_body}</p>
                <p id="reviewComments">Comments: {review.comment_count}</p>
                <p id="reviewVotes">Votes: {review.votes}</p>
              </section>
            </li>
          );
        })}
      </ul>
    </>
  );
};
