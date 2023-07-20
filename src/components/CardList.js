import Card from './Card'
import './CardList.css';
import React from 'react';
import PropTypes from 'prop-types'; 


const CardList = ({boardId, cardEntries, onUpdate, onDelete}) => {
  const cards = cardEntries
                .filter((card) => card.board_id === boardId)
                .sort((a, b) => a.card_id - b.card_id);

  return (
    <div className="card-items__container">
      {cards.map(card => {
        return <Card props={card} onUpdate={onUpdate} onDelete={onDelete}></Card>;
      })}
    </div>
  );
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    board_id: PropTypes.number.isRequired,
  })),
  onUpdateCard : PropTypes.func.isRequired

}
export default CardList;