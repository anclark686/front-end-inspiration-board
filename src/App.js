import "./App.css";
import React, { useState } from "react";
import BoardList from "./components/BoardList";

function App() {
  const [allBoardData, setAllBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  // Simulation to test
  const sampleBoardData = [
    { id: 1, title: "Portfolio examples", owner: "Barbara" },
    { id: 2, title: "Leetcode for beginners", owner: "Elizabeth" },
    { id: 3, title: "Rock your interview", owner: "Josh" },
  ];

  const handleBoardClick = (title, owner, id) => {
    setSelectedBoard({ title, owner, id });
  };

  return (
    <div>
      <h1> Inspiration Board </h1>
      <section className="board__container">
        <section className="board__list__container">
        <h2>Board List </h2>
          <section className="boards">
            <BoardList
              boardData={sampleBoardData} // Replace with data from inputs
              handleBoardClick={handleBoardClick}
            />
          </section>
        </section>
        <section className="select__board__container">
          <h2> Select a Board from the Board List </h2>
          <section className="select__board"> 
            {!selectedBoard ? (
              <span></span>
            ) : (
              <span>
                {selectedBoard.title} - made by {selectedBoard.owner} 
              </span>
            )}
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
