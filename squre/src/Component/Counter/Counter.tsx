import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1> You clicked {count}</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
};

export default Counter;
