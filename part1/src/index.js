import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Header = ({ course }) => <h1>{course}</h1>;

  const Part = ({ part }) => (
    <p>
      {part.name} {part.exercises}
    </p>
  );

  const Content = ({ parts }) => (
    <>
      {parts.map((part) => (
        <Part part={part} key={part.name} />
      ))}
    </>
  );

  const Total = ({ parts }) => (
    <p>
      Number of exercises
      {Object.values(parts)
        .map((part) => part.exercises)
        .reduce((a, b) => a + b)}
    </p>
  );
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
