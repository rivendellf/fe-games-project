import { getSingleReview } from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SingleReview = () => {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});

  useEffect(() => {
    getSingleReview(review_id).then((review) => {
      setSingleReview(review);
    });
  }, [review_id]);

  return (
    <>
      <main>
        <div className="singleReviewContainer">
          <Link
            to={`/reviews/${singleReview.review_id}`}
            key={singleReview.review_id}
            id="reviewTitle"
          >
            {singleReview.title}
          </Link>
          <img
            key={singleReview.review_img_url}
            id="singleReviewImage"
            src={singleReview.review_img_url}
            alt={singleReview.title}
          ></img>
          <ul id='singleReviewList'>
            <li className="singleReviewInfo" key={singleReview.title}>
              <p id="reviewDesigner">Designed by: {singleReview.designer}</p>
              <p id="reviewCategory">Category: {singleReview.category}</p>
              <p id="reviewOwner">User: {singleReview.owner}</p>
              <p id="reviewCreatedAt">Posted: {singleReview.created_at}</p>
              <p id="reviewBody">{singleReview.review_body}</p>
              <p id="reviewComments">Comments: {singleReview.comment_count}</p>
              <p id="reviewVotes">Votes: {singleReview.votes}</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
