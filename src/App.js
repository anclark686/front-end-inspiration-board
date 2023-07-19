import React, { useState } from "react";
import BoardList from "./components/BoardList";
import * as backend from "./APICalls.js";
import NewCardForm from "./components/NewCardForm";

const App = () => {
  const [selectedBoardId, setSelectedBoardId] = useState(null);

  const handleBoardSelect = (boardId) => {
    setSelectedBoardId(boardId);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <section className="BoardList__container">
        <BoardList onBoardSelect={handleBoardSelect} />
      </section>

      <section className="NewCardForm__container">
        <NewCardForm boardId={selectedBoardId} createNewBoard={backend.createNewBoard} />
      </section>
    </div>
  );
};

export default App;
