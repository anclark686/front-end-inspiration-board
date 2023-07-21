import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ card, onAddLike, onDelete }) => {
  const increaseLikeButtonClick = (event) => {
    onAddLike(card.card_id);
  };

  const deleteCardButtonClick = (event) => {
    onDelete(card.card_id);
  };

  return (
    <section className="card">
      <p className="card__message">{card.message}</p>
      <section className="card__actions">
        <p>{card.likes_count} 💙</p>
        <button
          onClick={increaseLikeButtonClick}
          id="increase-like"
          className="action-btn"
        >
          +1
        </button>
        <button
          onClick={deleteCardButtonClick}
          id="delete-card"
          className="action-btn"
        >
          Delete
        </button>
      </section>
    </section>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};
export default Card;
