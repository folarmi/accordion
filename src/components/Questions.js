import React from "react";
import Question from "./Question";

const Questions = ({ queries }) => {
  return (
    <div className="wrapper">
      <div className="title">
        <h3>Questions and Answers about my Dev Life</h3>
      </div>
      <div>
        {queries.map((query) => {
          return <Question key={query.id} {...query}></Question>;
        })}
      </div>
    </div>
  );
};

export default Questions;
