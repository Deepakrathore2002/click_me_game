import React from "react";
import ReactDOM from "react-dom";
var count = 0;
function reset() {
  count = 0;
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={counter}>+</button>
      <button onClick={reset}>Reset</button>
    </div>,
    document.getElementById("root")
  );
}
function counter() {
  count++;
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={counter}>+</button>
      <button onClick={reset}>Reset</button>
    </div>,
    document.getElementById("root")
  );
}

ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={counter}>+</button>
    <button onClick={reset}>Reset</button>
  </div>,
  document.getElementById("root")
);
