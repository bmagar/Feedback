import { useRef, useState } from "react";
import Header from "./conponents/common/Header";
import FeedbackList from "./conponents/FeedbackList";
import { feedbackData } from "./data/FeedbackData";
import Card from "./conponents/common/Card";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);
  console.log(feedback);
  console.log(setFeedback);

  // These function is to delete the specific Feedback passing the id
  // Transferming the function from feedback.jsx
  function deleteFeedback(item) {
    // console.log(`YOu clicked n ${item.text} with id${item.id}`);
    setFeedback([]);
  }

  return (
    <>
      {/* <Card bgColor="purple">
        <h1>hello</h1>
      </Card> */}

      <FeedbackList feedback={feedbackData} deleteFeedback={deleteFeedback} />
    </>
  );
};

export default App;
