import React from "react";

const FarmerSearch = ({ propFunction, filterInput }) => {
  const handleChange = (e) => {
    propFunction(e);
  };
  return (
    <div>
      <input
        value={filterInput}
        onChange={handleChange}
        placeholder={"Name, City"}
      />
    </div>
  );
};
export default FarmerSearch;
