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
const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);
const Statistics = (props) => {
  const { good, neutral, bad, getTotal, getAverage, getPositive } = props;
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={getTotal()} />
          <Statistic text="Average" value={getAverage()} />
          <Statistic text="Positive" value={getPositive()} />
        </tbody>
      </table>
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
  const getAverage = () => ((good - bad) / getTotal()).toFixed(1);
  const getPositive = () => `${((good / getTotal()) * 100).toFixed(1)} %`;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={giveGood} text="good" />
      <Button handleClick={giveNeutral} text="neutral" />
      <Button handleClick={giveBad} text="bad" />
      <hr />
      {good || bad || neutral ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          getTotal={getTotal}
          getPositive={getPositive}
          getAverage={getAverage}
        />
      ) : (
        <p>No Feedback Given</p>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
