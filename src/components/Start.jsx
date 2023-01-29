import React from "react";

export default function Start(props) {
  return (
    <>
      <div className="start-page">
        <h1>Quizzical</h1>
        <p>Your favorite quiz game</p>
        <div className="start-button" onClick={props.startGame}>
          Start quiz
        </div>
      </div>
    </>
  );
}
