import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Button = ({ handleClick, text }) => (
    <button
      onClick={handleClick}
      style={{
        marginLeft: "5px",
        backgroundColor: "teal",
        color: "white",
        border: "none",
        boxShadow: "1px 1px 1px rgba(0,0,0,0.3)",
        borderRadius: "3px",
      }}
    >
      {text}
    </button>
  );
  const giveGood = () => setGood(good + 1);
  const giveNeutral = () => setNeutral(neutral + 1);
  const giveBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={giveGood} text="good" />
      <Button handleClick={giveNeutral} text="neutral" />
      <Button handleClick={giveBad} text="bad" />
      <hr />
      <h2>Statistics</h2>

      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
