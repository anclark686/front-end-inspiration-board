import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ board, cardEntries, onAddLike, onDelete }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardEntries);
  }, [cardEntries]);

  const sortCards = (type) => {
    if (type === "abc") {
      setCards(
        [...cards].sort((a, b) => {
          if (a.message.toLowerCase() < b.message.toLowerCase()) return -1;
          if (a.message.toLowerCase() > b.message.toLowerCase()) return 1;
          return 0;
        })
      );
    } else if (type === "likes") {
      setCards([...cards].sort((a, b) => b.likes_count - a.likes_count));
    } else {
      setCards([...cards].sort((a, b) => a.card_id - b.card_id));
    }
  };

  return (
    <section className="card-list__container">
      <h2>Cards For { board.title }</h2>
      <section className="sort-buttons__container">
        <p>Sort By:</p>
        <button className="sort-btn" onClick={() => sortCards("id")}>
          ID
        </button>
        <button className="sort-btn" onClick={() => sortCards("abc")}>
          Alphabetically
        </button>
        <button className="sort-btn" onClick={() => sortCards("likes")}>
          +1s
        </button>
      </section>
      <section className="card-items__container">
        {cards.map((card) => (
          <Card
            key={card.card_id}
            card={card}
            onAddLike={onAddLike}
            onDelete={onDelete}
          />
        ))}
      </section>
    </section>
  );
};

CardList.propTypes = {
  cardEntries: PropTypes.arrayOf(PropTypes.shape({
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    board_id: PropTypes.number.isRequired,
  })),
  board: PropTypes.object.isRequired,
  onAddLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CardList;
