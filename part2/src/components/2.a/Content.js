import React from "react";
import Part from "./Part";

const Content = ({ parts }) => (
  <>
    <ul>
      {parts.map((part) => (
        <Part part={part} key={`part: ${part.id}`} />
      ))}
    </ul>
  </>
);

export default Content;
