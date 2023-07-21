import React, { useState, useEffect } from "react";

// To use API call functions, use apiCalls as the module name, e.g., backend.getAllBoards() will return a promise of an array of Board objects.
import * as backend from "./APICalls.js";

import CardList from "./components/CardList";
import BoardList from "./components/BoardList";
import NewCardForm from "./components/NewCardForm";
import NewBoardForm from "./components/NewBoardForm";

import "./App.css";

const App = () => {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cardEntries, setCardEntries] = useState([]);

  useEffect(() => {
    backend
      .getAllBoards()
      .then((boards) => {
        setBoardData(boards);
      })
      .catch((err) => {
        console.log("Error in getAllBoards()", err);
      });
  }, []);
  
  const handleNewBoardSubmit = (data) => {
    backend
    .createNewBoard(data)
    .then((result) => {
      setBoardData((prevBoardData) => [result, ...prevBoardData]);
    })
    .catch((err) => {
      console.log("Error in handleNewBoardSubmit", err);
    })
  };
  
  const handleBoardSelect = (board) => {
    setSelectedBoard(board);
    backend
    .getBoardCards(board.id)
    .then((result) => {
      setCardEntries(result);
    })
    .catch((err) => {
      console.log("Error in handleBoardSelect", err)
    })
  };
  
  const handleBoardDelete = (boardId) => {
    backend
    .deleteBoard(boardId)
    .then(setBoardData((prev) => prev.filter((board) => board.board_id !== boardId))
    )
    .catch((err) => {
      console.log("Error in handleBoardDelete", err)
    })
  };
  
  const handleNewCardSubmit = (data) => {
    backend
    .createNewCard(data)
    .then((result) => {
      setCardEntries((prev) => [...prev, result])
    })
    .catch((err) => {
      console.log("Error in handleNewCardSubmit", err)
    })
  };

  const handleAddLike = (cardId) => {
    backend
    .addLike(cardId)
    .then((result) => {
      setCardEntries(cardEntries.map((card) => {
        if (card.card_id === cardId) {
          return {...card, likes_count:result.card_like_count};
        } else {
          return card;
        };
      }))
    })
    .catch((err) => {
      console.log("Error in handleAddLike", err)
    })
  };

  const handleDeleteCard = (cardId) => {
    backend
    .deleteCard(cardId)
    .then(setCardEntries((prev) => prev.filter((card) => card.card_id !== cardId))
    )
    .catch((err) => {
      console.log("Error in handleDelete Card", err)
    });
  };

  return (
    <div className="page__container">
      <div className="content__container">
        <h1>Our Site</h1>
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
        {selectedBoard ?
          <section className="cards__container">
            <section className="cardList__container">
              <CardList
                board = {selectedBoard}
                cardEntries = {cardEntries}
                onAddLike = {handleAddLike}
                onDelete = {handleDeleteCard}
              />
            </section>

            <section className="newCardForm__container">
              <NewCardForm
                boardId={selectedBoard.id}
                createNewCard={handleNewCardSubmit}
              />
            </section>
          </section>
          : null}
      </div>
    </div>
  );
};

export default App;
