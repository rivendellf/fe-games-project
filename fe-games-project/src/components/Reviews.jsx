import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { Link } from "react-router-dom";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  console.log(reviews, "reviews");

  return (
    <ul id="reviewList">
      {reviews.map((review) => {
        return (
          <div className="reviewContainer">
            <Link to={`/reviews`} key={review.review_id} id="reviewTitle">
              {review.title}
            </Link>
            <li key={review.review_img_url}>
              <img
                id="reviewImage"
                src={review.review_img_url}
                alt={review.title}
              ></img>
            </li>
            <li key={review.designer} id="reviewDesigner">
              Designed by: {review.designer}
            </li>
            <li key={review.category} id="reviewCategory">
              Category: {review.category}
            </li>
            <li key={review.owner} id="reviewOwner">
              User: {review.owner}
            </li>
            <li key={review.created_at} id="reviewCreatedAt">
              Posted: {review.created_at}
            </li>
            <li key={review.review_body} id="reviewBody">
              {review.review_body}
            </li>
            <li key={review.comment_count} id="reviewComments">
              Comments: {review.comment_count}
            </li>
            <li key={review.votes} id="reviewVotes">
              Votes: {review.votes}
            </li>
          </div>
        );
      })}
    </ul>
  );
};
