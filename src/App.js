import React, { useState } from "react";
import './App.css';

// To use API call functions, use apiCalls as the module name, e.g., backend.getAllBoards() will return a promise of an array of Board objects. 
import * as backend from './APICalls.js'

import BoardList from "./components/BoardList";
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';


const App = () => {
  const [boardData, setBoardData] = useState([]);

  const handleNewBoardSubmit = (data) => {
    backend.createNewBoard(data)
    .then(result => {
      // update boardData with newly created board
      setBoardData(prev => [result, ...prev]);
    })
    .catch(err => {
      console.log(err);
    });
  };
  
  return (
    <div className="page__container">
      <div className="content__container">
        <h1>Inspiration Board</h1>
        <section className="boards__container">
          
          <section className="BoardList__container">
            <BoardList />
          </section>

          <section>
            <NewBoardForm handleNewBoardSubmit={handleNewBoardSubmit}/>
          </section>

          <section className="NewCardForm__container">
            <NewCardForm boardId={1} createNewBoard={backend.createNewBoard}/>

          </section>
        </section>
      </div>
    </div>
  );
}

export default App;