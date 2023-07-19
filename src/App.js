import React, { useState, useEffect } from "react";
import * as backend from './APICalls.js';
import BoardList from "./components/BoardList";
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';

const App = () => {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);

  useEffect(() => {
    backend.getAllBoards()
      .then(boards => {
        setBoardData(boards);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleNewBoardSubmit = (data) => {
    backend.createNewBoard(data)
      .then(result => {
        setBoardData(prevBoardData => [result, ...prevBoardData]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleBoardSelect = (boardId) => {
    setSelectedBoardId(boardId);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>

      <section className="newBoardForm__container">
        <NewBoardForm handleNewBoardSubmit={handleNewBoardSubmit} />
      </section>

      <section className="BoardList__container">
        <BoardList boardData={boardData} onBoardSelect={handleBoardSelect} />
      </section>

      <section className="NewCardForm__container">
        <NewCardForm boardId={selectedBoardId} createNewBoard={backend.createNewBoard} />
      </section>
    </div>
  );
};

export default App;
