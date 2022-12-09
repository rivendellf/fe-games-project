// import { postComment } from "../api";
// import { useState } from "react";

// export const PostComment = () => {
//   const [newComment, setNewComment] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     postComment(review_id, newComment).then((commentFromApi) => {
//       console.log(commentFromApi, "comment from Api");
//       setNewComment("");
//       setComments((currentComments) => {
//         const newComments = [...currentComments];
//         newComments.push(commentFromApi);
//         return newComments;
//       });
//     });
//   };

//   return (
//     <form className="PostComment" onSubmit={handleSubmit}>
//       <label htmlFor="newComment">Add a comment</label>
//       <textarea
//         id="newComment"
//         value={newComment}
//         onChange={(event) => setNewComment(event.target.value)}
//       ></textarea>
//       <button id="addCommentButton">Add</button>
//     </form>
//   );
// };
