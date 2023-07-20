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
          key={board.board_id}
          id={board.board_id}
          handleBoardClick={handleBoardClick}
        />
      ))}
    </ul>
  );
};

const BoardList = ({ boardData, onBoardSelect }) => {
  const [selectedBoard, setSelectedBoard] = useState(null);

  const handleBoardClick = (title, owner, id) => {
    setSelectedBoard({ title, owner, id });
    onBoardSelect(id);
  };

  return (
    <div>
      <section className="mainBoard__container">
        <section className="boardList__container">
          <h2>Board List</h2>
          <section className="board__container">
            <BoardListProps
              boardData={boardData}
              handleBoardClick={handleBoardClick}
            />
          </section>
        </section>
        <section className="selectBoard__container">

          <h2> Selected Board</h2>

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
      board_id: PropTypes.number.isRequired,
    })
  ),
  onBoardSelect: PropTypes.func.isRequired,
};

export default BoardList;
