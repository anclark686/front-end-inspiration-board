import { useState } from "react";
import PropTypes from 'prop-types';

import './NewBoardForm.css';


const kInitialFormData = {
  title: '',
  owner: '',
};

const NewBoardForm = ({handleNewBoardSubmit}) => {
  const [formData, setFormData] = useState(kInitialFormData);
  const [showForm, setShowForm] = useState(true)

  const handleFormVisibility = (event) => {
    setShowForm(!showForm)
  }

  const handleFormChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData(prev => ({
      ...prev, [name]: value
    }));
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // API call to create a new board in db
    handleNewBoardSubmit(formData);
    // clear input field
    setFormData(kInitialFormData);
  };

  if (showForm) {
    return (
      <div className="NewBoardForm">
      <h1>Create a New Board</h1>
      <form className="new-board-form" onSubmit={handleFormSubmit}>
        <li>
          <label htmlFor="title">Title: </label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleFormChange} 
          />
        </li>
        <li>
          <label htmlFor="owner">Owner: </label>
          <input 
            type="text" 
            name="owner" 
            value={formData.owner} 
            onChange={handleFormChange} 
          />
        </li>
        <p id="preview">Preview: {formData.title} - {formData.owner}</p>
        <input type="submit" className="submit-btn" />
      </form>
      <button onClick={handleFormVisibility}>Hide New Board Form</button>
    </div>
    )
  } else {
    return (
      <div className="NewBoardForm">
        <h1>Create a New Board</h1>
        <button onClick={handleFormVisibility}>Show New Board Form</button>
      </div>
    );
  };
}
    

export default NewBoardForm;
