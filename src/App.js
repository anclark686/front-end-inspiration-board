import "./App.css";
import React from "react";
import BoardList from "./components/BoardList";


const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <section className="BoardList__container">
        <BoardList />
      </section>
    </div>
  );
}

export default App;