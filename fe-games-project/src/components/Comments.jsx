import { getCommentsByReviewId } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostComment } from "./PostComment";
import { postComment } from "../api";

export const Comments = () => {
  let { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentObj) => {
      setComments(commentObj);
      setLoading(false);
    });
  }, [review_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosting(true);
    postComment(review_id, newComment).then((commentFromApi) => {
      setPosting(false);
      setNewComment("");
      setComments((currentComments) => {
        const newComments = [...currentComments];
        newComments.push(commentFromApi);
        return newComments;
      });
    });
  };

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

      <PostComment
        newComment={newComment}
        setNewComment={setNewComment}
        handleSubmit={handleSubmit}
        posting={posting}
      />
    </>
  );
};
