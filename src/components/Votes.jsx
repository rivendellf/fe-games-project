import { useParams } from "react-router-dom";
import { patchVotesByReviewId } from "../api";
import { useEffect, useState } from "react";

export const Votes = ({ singleReviewVotes }) => {
  let { review_id } = useParams();
  const [currentVotes, setCurrentVotes] = useState(0);

  useEffect(() => {
    setCurrentVotes(singleReviewVotes);
  }, [singleReviewVotes]);

  const handleUpVote = () => {
    setCurrentVotes((currentCount) => currentCount + 1);
    patchVotesByReviewId(review_id, 1);
  };

  const handleDownVote = () => {
    setCurrentVotes((currentCount) => currentCount - 1);
    patchVotesByReviewId(review_id, -1);
  };

  return (
    <>
      <button className="downVote" onClick={handleDownVote}>
        -
      </button>
      Votes: {currentVotes}
      <button className="upVote" onClick={handleUpVote}>
        +
      </button>
    </>
  );
};
