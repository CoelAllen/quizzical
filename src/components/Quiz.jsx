import React, { useEffect } from "react";

export default function Quiz(props) {
  return (
    <>
      <main className="quiz-main">
        <div className="quiz-block">
          <h4 className="quiz-question">{props.question}</h4>
          <div className="quiz-answers">
            <div className="quiz-answer">Adios</div>
            <div className="quiz-answer">Adios</div>
            <div className="quiz-answer">Adios</div>
            <div className="quiz-answer">Adios</div>
          </div>
        </div>
      </main>
    </>
  );
}
