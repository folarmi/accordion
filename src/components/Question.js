import React, { useState } from "react";

const Question = ({ id, question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const revealAnswer = (id) => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="row">
      <div className="column">
        <div className="column">
          <div className="question">
            <h4>{question}</h4>
            <button onClick={() => revealAnswer(id)}>
              {showAnswer ? "-" : "+"}
            </button>
            <p>{showAnswer ? answer : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
