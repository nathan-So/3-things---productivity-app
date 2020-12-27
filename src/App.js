import "./App.css";
import Homepage from "./Home";
import Forms from "./Forms";
import React, { useState } from "react";
import List from "./List";

function App() {
  const [isList, setIsList] = useState(false);

  return (
    <div className="bg">
      <button type="button" onClick={() => setIsList(!isList)}>
        Go to your list
      </button>
      {!isList && <Homepage />}
      {isList && <List />}
    </div>
  );
}

export default App;
