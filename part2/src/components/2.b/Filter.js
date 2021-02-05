import React from "react";

const Filter = ({ onChangeSearchTerm, searchTerm }) => (
  <div>
    Filter by:
    <input onChange={onChangeSearchTerm} value={searchTerm} />
  </div>
);

export default Filter;
