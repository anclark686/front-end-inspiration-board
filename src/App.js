import './App.css';
// To use API call functions, use apiCalls as the module name, e.g., backend.getAllBoards() will return a promise of an array of Board objects. 
import * as backend from './APICalls.js';
import CardList from './components/CardList';
import React, { useState, useEffect } from "react";
import BoardList from "./components/BoardList";
import NewCardForm from "./components/NewCardForm";
import NewBoardForm from "./components/NewBoardForm";

import "./App.css";

const App = () => {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);

  // This part is used for test
  //
  // const card1 = {
  //   card_id: 1,
  //   message: "I am 1",
  //   likes_count: 0,
  //   board_id: 1,
  // }

  // const card2 = {
  //   card_id: 2,
  //   message: "I am 2",
  //   likes_count: 0,
  //   board_id: 1,
  // }

  const [cardEntries, setCardEntries] = useState([]); //useState([card2, card1]); // Uncomment for test usage


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

  const updateLikeData = updatedCard =>{
    const cards= cardEntries.map(card => {
      if (card.card_id === updatedCard.card_id) {
        return updatedCard;
      }else {
        return card;
      }
    }); 
    setCardEntries(cards);
  };

  const deleteCardData = deleteCard =>{
    const cards= cardEntries.filter((card) => card.card_id !== deleteCard.card_id);
    setCardEntries(cards);
  };

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

  const handleBoardDelete = (boardId) => {
    backend.deleteBoard(boardId);
    setBoardData((prev) => prev.filter((board) => board.board_id !== boardId));
  };

  return (
    <div className="page__container">
      <div className="content__container">
        <h1>Inspiration Board</h1>
        <section className="boards__container">
          
          <section className="BoardList__container">
            <BoardList 
              boardData={boardData} 
              onBoardSelect={handleBoardSelect} 
              handleBoardDelete={handleBoardDelete}

            />
          </section>

          <section className="newBoardForm__container">
            <NewBoardForm handleNewBoardSubmit={handleNewBoardSubmit} />
          </section>
        </section>
        {selectedBoardId ?
          <section className="cards__container">
            <section className="cardList__container">
              <CardList
                boardId = {selectedBoardId}
                cardEntries = {cardEntries}
                onUpdate = {updateLikeData}
                onDelete = {deleteCardData}
              />
            </section>

            <section className="newCardForm__container">
              <NewCardForm
                boardId={selectedBoardId}
                createNewBoard={backend.createNewCard}
              />
            </section>
          </section>
          : null}
      </div>
    </div>
  );
};

export default App;
