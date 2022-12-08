import axios from "axios";

const gameReviewsApi = axios.create({
  baseURL: "https://weary-lingerie-clam.cyclic.app/api",
});

export const getReviews = () => {
  return gameReviewsApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const getSingleReview = (review_id) => {
  return gameReviewsApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getCommentsByReviewId = (review_id) => {
  return gameReviewsApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comment;
  });
};

export const patchVotesByReviewId = (review_id, votes) => {
  const body = { inc_votes: votes };
  return gameReviewsApi.patch(`/reviews/${review_id}`, body).then((res) => {
    return res.data.votes;
  });
};
