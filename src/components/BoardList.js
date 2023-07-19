import React, { useState } from "react";
import PropTypes from "prop-types";
import Board from "./Board";
import "./BoardList.css";

const BoardListProps = (props) => {
  return (
    <ul>
      {props.boardData.map((board) => (
        <Board
          title={board.title}
          owner={board.owner}
          key={board.id}
          id={board.id}
          handleBoardClick={props.handleBoardClick}
        />
      ))}
    </ul>
  );
};

BoardListProps.propTypes = {
  boardData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  handleBoardClick: PropTypes.func.isRequired,
};

const BoardList = () => {
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
        <section className="boardList__container">
          <h2>Board List</h2>
          <section className="boards__cointainer">
            <BoardListProps
              boardData={sampleBoardData} // Replace with data from inputs
              handleBoardClick={handleBoardClick}
            />
          </section>
        </section>
        <section className="selectBoard__container">
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
};

export default BoardList;
