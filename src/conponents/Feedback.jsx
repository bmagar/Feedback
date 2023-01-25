import React from "react";
import styles from "./FeedbackList.module.css";

const Feedback = ({ item, deleteFeedback }) => {
  return (
    <>
      <h1>{item.text}</h1>
      <button onClick={() => deleteFeedback(item)}>Delete</button>
    </>
  );
};

export default Feedback;

// line 8 adding passing the ID into the delete feedback
