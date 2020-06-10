import React from 'react';
import './App.css';
import Child from "./Child"
import AnotherChild from "./AnotherChild"

function App() {
  return (
    <div className="App">
      <Child userName = {{firstName: "Hamza", lastName: "Alvi"}}/>
      <AnotherChild />

    </div>
  );
}

export default App;
