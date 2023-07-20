import Card from './Card'
import './CardList.css';
import React from 'react';
import PropTypes from 'prop-types'; 


const CardList = ({ cardEntries, onAddLike, onDelete }) => {
  return (
    <div className="card-items__container">
      {cardEntries.map((card) => (
        <Card
          key={card.card_id}
          card={card}
          onAddLike={onAddLike}
          onDelete={onDelete}
          />
      ))}
    </div>
  );
}

CardList.propTypes = {
  cardEntries: PropTypes.arrayOf(PropTypes.shape({
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    board_id: PropTypes.number.isRequired,
  })),
  onAddLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};


export default CardList;