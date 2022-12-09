import { getCommentsByReviewId } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { PostComment } from "./PostComment";
import { postComment } from "../api";

export const Comments = () => {
  let { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentObj) => {
      setComments(commentObj);
      setLoading(false);
    });
  }, [review_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(review_id, newComment).then((commentFromApi) => {
      console.log(commentFromApi, "comment from Api");
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

      <section id="postCommentSection">
        <form className="PostComment" onSubmit={handleSubmit}>
          <label htmlFor="newComment">Add a comment</label>
          <textarea
            id="newComment"
            value={newComment}
            placeholder="Add your comment here"
            onChange={(event) => setNewComment(event.target.value)}
          ></textarea>
          <button id="addCommentButton">Add</button>
        </form>
      </section>
    </>
  );
};
