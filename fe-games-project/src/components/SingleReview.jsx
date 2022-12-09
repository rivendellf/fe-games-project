import { getSingleReview } from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Comments } from "./Comments";
import { Votes } from "./Votes";

export const SingleReview = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleReview(review_id).then((review) => {
      setSingleReview(review);
      setLoading(false);
    });
  }, [review_id]);

  return loading ? (
    <p id="loading">...loading</p>
  ) : (
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
          <ul id="singleReviewList">
            <li className="singleReviewInfo" key={singleReview.title}>
              <p id="reviewDesigner">Designed by: {singleReview.designer}</p>
              <p id="reviewCategory">Category: {singleReview.category}</p>
              <p id="reviewOwner">User: {singleReview.owner}</p>
              <p id="reviewCreatedAt">Posted: {singleReview.created_at}</p>
              <p id="reviewBody">{singleReview.review_body}</p>
              <button
                id="commentButton"
                onClick={() => {
                  setToggleButton((currentToggle) => {
                    return !currentToggle;
                  });
                }}
              >
                View Comments
              </button>
              {toggleButton ? <Comments /> : null}

              <p id="reviewVotes">
                <Votes singleReviewVotes={singleReview.votes} />
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
