import "./App.css";
import React from "react";
import BoardList from "./components/BoardList";
// To use API call functions, use apiCalls as the module name, e.g., backend.getAllBoards() will return a promise of an array of Board objects. 
import * as backend from './APICalls.js'
import NewCardForm from './components/NewCardForm';

const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <section className="BoardList__container">
        <BoardList />
      </section>

      <section className="NewCardForm__container">
        <NewCardForm boardId={boardId} createNewBoard={backend.createNewBoard}/>

      </section>
    </div>
  );
}

export default App;

