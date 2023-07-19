// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Board from "./Board";
// import { getAllBoards } from "../APICalls"; // Import the function you need
// import "./BoardList.css";

// const BoardListProps = (props) => {
//   return (
//     <ul>
//       {props.boardData.map((board) => (
//         <Board
//           title={board.title}
//           owner={board.owner}
//           key={board.id}
//           id={board.id}
//           handleBoardClick={props.handleBoardClick}
//         />
//       ))}
//     </ul>
//   );
// };

// BoardListProps.propTypes = {
//   boardData: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       owner: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ),
//   handleBoardClick: PropTypes.func.isRequired,
// };

// const BoardList = ({ onBoardSelect }) => {
//   const [allBoardData, setAllBoardData] = useState([]);
//   const [selectedBoard, setSelectedBoard] = useState(null);

//   const handleBoardClick = (title, owner, id) => {
//     setSelectedBoard({ title, owner, id });
//     onBoardSelect(id);
//   };

//   useEffect(() => {
//     getAllBoards()
//       .then((boards) => {
//         setAllBoardData(boards);
//       })
//       .catch((error) => {
//         console.error("Error fetching boards:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1> Inspiration Board </h1>
//       <section className="board__container">
//         <section className="boardList__container">
//           <h2>Board List</h2>
//           <section className="boards__cointainer">
//             <BoardListProps
//               boardData={allBoardData}
//               handleBoardClick={handleBoardClick}
//             />
//           </section>
//         </section>
//         <section className="selectBoard__container">
//           <h2> Select a Board from the Board List </h2>
//           <section className="select__board">
//             {!selectedBoard ? (
//               <span></span>
//             ) : (
//               <span>
//                 {selectedBoard.title} - made by {selectedBoard.owner}
//               </span>
//             )}
//           </section>
//         </section>
//       </section>
//     </div>
//   );
// };

// export default BoardList;


import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Board from "./Board";
import { getAllBoards } from "../APICalls";
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

const BoardList = ({ onBoardSelect }) => {
  const [allBoardData, setAllBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  useEffect(() => {
    getAllBoards()
      .then((boards) => {
        setAllBoardData(boards);
      })
      .catch((error) => {
        console.error("Error fetching boards:", error);
      });
  }, []);

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
              boardData={allBoardData}
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

export default BoardList;
