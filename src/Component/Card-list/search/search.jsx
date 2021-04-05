import React from "react";

export const search = ({ placeholder, handleChange }) => {
  return (
    <input type="search" placeholder={placeholder} onChange={handleChange} />
  );
};

export default search;
