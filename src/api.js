import axios from "axios";

const gameReviewsApi = axios.create({
  baseURL: "https://weary-lingerie-clam.cyclic.app/api",
});

export const getReviews = (category) => {
  return gameReviewsApi
    .get("/reviews", { params: { category } })
    .then((res) => {
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

export const postComment = (review_id, newCommentText) => {
  const commentBody = { username: "jessjelly", comment: newCommentText };
  return gameReviewsApi
    .post(`/reviews/${review_id}/comments`, commentBody)
    .then((res) => {
      return res.data.comment;
    });
};

export const getCategories = () => {
  return gameReviewsApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};
