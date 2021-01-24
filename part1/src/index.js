import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);
const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  const getNextAnecdote = () => {
    const random = Math.floor(Math.random() * 6);
    setSelected(random);
  };
  const addVote = () => setVotes({ ...votes, [selected]: votes[selected] + 1 });

  const maxValue = Math.max(...Object.values(votes));
  const maxVoteKey = Object.keys(votes).filter((x) => votes[x] === maxValue)[0];

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has votes: {votes[selected]}</p>
      <Button handleClick={addVote} text="Vote" />
      <Button handleClick={getNextAnecdote} text="Next Anecdote" />
      <h2>Anecdote with most votes</h2>
      {maxValue !== 0 && (
        <>
          <p>{anecdotes[maxVoteKey]}</p>
          <h5>has votes {maxValue}</h5>
        </>
      )}
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
