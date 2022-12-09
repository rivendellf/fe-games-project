import { getCommentsByReviewId } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Comments = () => {
  let { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentObj) => {
      setComments(commentObj);
      setLoading(false);
    });
  }, [review_id]);

  return loading ? (
    <p id="loading">...loading</p>
  ) : (
    <>
      <ul id="commentsList">
        {comments.map((comment) => {
          return (
            <li className="commentsContainer" key={comment.comment_id}>
              <h2>{comment.body}</h2>
              <article id="commentInfo">
                <p id="commentAuthor">By: {comment.author}</p>
                <p id="commentCreatedAt">Created at: {comment.created_at}</p>
                <p id="commentVotes">Votes: {comment.votes}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
};
