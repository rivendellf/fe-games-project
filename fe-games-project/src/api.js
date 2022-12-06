import axios from "axios";

const gameReviewsApi = axios.create({
  baseURL: "https://weary-lingerie-clam.cyclic.app/api",
});

export const getReviews = () => {
  return gameReviewsApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};