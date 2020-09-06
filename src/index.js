// import React and ReactDOM libs
import React from "react";
import ReactDOM from "react-dom";

// create React component
const App = () => {

  const btnText = 'click me';
  const style = { backgroundColor: "green", color: "red" };

  return (
    <div>
      <label className="label" for="name">
        Enter name
      </label>
      <input id="name" />
      <button style={style}>
        {btnText}
      </button>
    </div>
  );
};

// take React component, show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
