import React, { useState } from "react";
import ReactDOM from "react-dom";

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
const Statistics = (props) => {
  const { good, neutral, bad, getTotal, getAverage, getPositive } = props;
  return (
    <>
      <h2>Statistics</h2>

      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {getTotal()}</p>
      <p>Average {getAverage()}</p>
      <p>Positive {getPositive()}</p>
    </>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const giveGood = () => setGood(good + 1);
  const giveNeutral = () => setNeutral(neutral + 1);
  const giveBad = () => setBad(bad + 1);
  const getTotal = () => good + neutral + bad;
  const getAverage = () => {
    const avg = (good - bad) / getTotal();
    return isNaN(avg) ? 0 : avg;
  };
  const getPositive = () => {
    const positive = (good / getTotal()) * 100;
    return isNaN(positive) ? "0 %" : `${positive} %`;
  };
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={giveGood} text="good" />
      <Button handleClick={giveNeutral} text="neutral" />
      <Button handleClick={giveBad} text="bad" />
      <hr />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        getTotal={getTotal}
        getPositive={getPositive}
        getAverage={getAverage}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
