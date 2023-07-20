import React, { useState, useEffect } from "react";

import * as backend from "./APICalls.js";

import BoardList from "./components/BoardList";
import NewCardForm from "./components/NewCardForm";
import NewBoardForm from "./components/NewBoardForm";

import "./App.css";

const App = () => {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);

  useEffect(() => {
    backend
      .getAllBoards()
      .then((boards) => {
        setBoardData(boards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleNewBoardSubmit = (data) => {
    backend
      .createNewBoard(data)
      .then((result) => {
        setBoardData((prevBoardData) => [result, ...prevBoardData]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBoardSelect = (boardId) => {
    setSelectedBoardId(boardId);
  };

  return (
    <div className="page__container">
      <div className="content__container">
        <h1>Inspiration Board</h1>
        <section className="boards__container">
          <section className="boardList__container">
            <BoardList
              boardData={boardData}
              onBoardSelect={handleBoardSelect}
            />
          </section>

          <section className="newBoardForm__container">
            <NewBoardForm handleNewBoardSubmit={handleNewBoardSubmit} />
          </section>
        </section>

        {selectedBoardId ?
          <section className="cards__container">
            <section className="cardList__container">

            </section>

            <section className="newCardForm__container">
              <NewCardForm
                boardId={selectedBoardId}
                createNewBoard={backend.createNewBoard}
              />
            </section>
          </section>
          : null}
      </div>
    </div>
  );
};

export default App;
