import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const partOne = () => {
  return (
    <div>
      <h1>Hello from Home</h1>

      <Link to="/next">
        <button>Go to next</button>
      </Link>
    </div>
  );
};

const partTwo = () => {
  return (
    <div>
      <h1>Hello from another</h1>

      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={partOne} />
        <Route path="/next" component={partTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
