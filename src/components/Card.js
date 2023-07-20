import React from "react";
import PropTypes from 'prop-types'; 
import './Card.css';


const Card = ({card, onAddLike, onDelete}) => {
  const increaseLikeButtonClick = (event) => {
    onAddLike(card.card_id); 
  }

  const deleteCardButtonClick = (event) => {
    onDelete(card.card_id); 
  }  

  return (
    <div className="card">
      <p className ="card_message">{card.message}</p>
      <section>
        <p>{card.likes_count}</p>
        <button onClick={increaseLikeButtonClick} className="increase-like">+1</button>
        <button onClick={deleteCardButtonClick} className="delete-card">delete</button>
      </section>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired
}
export default Card;