import React, { useState, useEffect } from "react";
import FarmerTable from "./components/FarmerTable";

function App() {
  const [farmerData, setFarmerData] = useState([]);
  useEffect(() => {
    fetch("./farmers.json")
      .then((response) => response.json())
      .then((json) => setFarmerData(json.data));
  }, []);
  return (
    <>
      <div>
        <FarmerTable farmerData={farmerData} />
      </div>
    </>
  );
}

export default App;
