import React, { useState } from "react";
import Data from "./components/Data";
import Questions from "./components/Questions";
import "./App.css";

function App() {
  const [queries, setQueries] = useState(Data);

  return (
    <div className="App">
      <Questions queries={queries} />
    </div>
  );
}

export default App;
