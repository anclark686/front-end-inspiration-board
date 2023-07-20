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

const BoardList = ({ boardData, onBoardSelect, handleBoardDelete }) => {
  const [selectedBoard, setSelectedBoard] = useState(null);

  const handleBoardClick = (title, owner, id) => {
    setSelectedBoard({ title, owner, id });
    onBoardSelect(id);
  };

  const handleDeleteClick = () => {
    console.log(selectedBoard.id);
    const delboard = window.confirm(
      `Are you sure you want to delete board "${selectedBoard.title}"?`
    );
    if (delboard) {
      handleBoardDelete(selectedBoard.id);
      setSelectedBoard(null);
    }
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
          <h2> Selected Board</h2>

          <section className="board__extras">
            {!selectedBoard ? (
              <span></span>
            ) : (
              <section className="board__actions">
                <section className="select__board">
                  {selectedBoard.title} - made by {selectedBoard.owner}
                </section>
                <section className="delete-btn__container">
                  <button className="delete-btn" onClick={handleDeleteClick}>
                    Delete Board
                  </button>
                </section>
              </section>
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
  handleBoardDelete: PropTypes.func.isRequired,
};

export default BoardList;
