export const PostComment = ({ newComment, setNewComment, handleSubmit, posting}) => {
  return (
    <section id="postCommentSection">
      <form className="PostComment" onSubmit={handleSubmit}>
        <label htmlFor="newComment">Add a comment</label>
        <textarea
          id="newComment"
          value={newComment}
          placeholder="Add your comment here"
          onChange={(event) => setNewComment(event.target.value)}
          required={true}
          disabled={posting}
        ></textarea>
        <button id="addCommentButton" disabled={posting}>
          Add
        </button>
      </form>
    </section>
  );
};
