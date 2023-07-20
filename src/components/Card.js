import React from "react";
import PropTypes from 'prop-types'; 
import './Card.css';


const Card = ({props, onUpdate, onDelete}) => {
  
  const increaseLikeButtonClick = () => {
    const updateLike ={
      card_id : props.card_id, 
      message : props.message,
      likes_count : props.likes_count + 1,
      board_id : props.board_id,
    }
    onUpdate(updateLike); 

  }

  const deleteCardButtonClick = () => {
    const deleteCard ={
      card_id : props.card_id, 
      message : props.message,
      likes_count : props.likes_count,
      board_id : props.board_id,
    }
    onDelete(deleteCard); 

  }  

  return (
    <div className="card">
      <p className ="card_message">{props.message}</p>
      <section>
        <p>{props.likes_count}</p>
        <button onClick ={increaseLikeButtonClick} className="increase-like">+1</button>
        <button onClick ={deleteCardButtonClick} className="delete-card">delete</button>
      </section>
    </div>
  );
}

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  board_id: PropTypes.number.isRequired,
}
export default Card;