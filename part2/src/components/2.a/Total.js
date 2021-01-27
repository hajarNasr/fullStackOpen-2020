import React from "react";

const Total = ({ parts }) => (
  <p>
    Total of {parts.reduce((sum, part) => part.exercises + sum, 0)} exercises
  </p>
);

export default Total;
