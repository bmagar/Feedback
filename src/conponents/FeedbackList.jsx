import { string } from "prop-types";
import React from "react";
import Card from "./common/Card";
import Feedback from "./Feedback";

const FeedbackList = ({ feedback, deleteFeedback }) => {
  //
  // console.log(feedback);
  // console.log(feedback.length); //number does not have a lenght
  return (
    <Card bgColor="green">
      {feedback && typeof feedback !== "string" && feedback.length ? (
        feedback.map((item) => (
          <Feedback key={item.id} item={item} deleteFeedback={deleteFeedback} />
        ))
      ) : (
        <div>Data Not found</div>
      )}
    </Card>
  );
};

export default FeedbackList;

// add default value help from crash
// {feedback = []}

// make sure the value of feedback
// Line 7 means
// if feedback lenght is greater then 0 print line 8 else print line 10
// if the feedback.lenght is truthly value then it will print lne number 8

// {feedback.length > 0 ? (
//     feedback.map((item) => <Feedback key={item.id} item={item} />)
//   ) : (
//     <div>Data Not found</div>
//   )}
// </div>

// {feedback && feedback.length > 0 ? (
//     feedback.map((item) => <Feedback key={item.id} item={item} />)
//   ) : (
//     <div>Data Not found</div>
//   )}
// </div>

// Validating (typeof feedback !== "string")
