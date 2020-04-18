import React from "react";
import { useState } from "react";

import "./App.css";

const App = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="Demo">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default App;
