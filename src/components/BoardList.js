import React, { useState } from "react";
import PropTypes from "prop-types";
import Board from "./Board";
import "./BoardList.css";

const BoardListProps = ({ boardData, handleBoardClick }) => {
  return (
    <ul>
      {boardData.map((board) => (
        <Board
          title={board.title}
          owner={board.owner}
          key={board.id}
          id={board.id}
          handleBoardClick={handleBoardClick}
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

const BoardList = ({ boardData, onBoardSelect }) => {
  const [selectedBoard, setSelectedBoard] = useState(null);

  const handleBoardClick = (title, owner, id) => {
    setSelectedBoard({ title, owner, id });
    onBoardSelect(id);
  };

  return (
    <div>
      <h1>Inspiration Board</h1>
      <section className="board__container">
        <section className="boardList__container">
          <h2>Board List</h2>
          <section className="boards__cointainer">
            <BoardListProps
              boardData={boardData}
              handleBoardClick={handleBoardClick}
            />
          </section>
        </section>
        <section className="selectBoard__container">
          <h2>Select a Board from the Board List</h2>
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

BoardList.propTypes = {
  boardData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  onBoardSelect: PropTypes.func.isRequired,
};

export default BoardList;
