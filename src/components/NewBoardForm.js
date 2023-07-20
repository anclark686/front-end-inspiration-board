import { useState } from "react";
import PropTypes from "prop-types";

import "./NewBoardForm.css";


const kInitialFormData = {
  title: "",
  owner: "",
};

const NewBoardForm = ({ handleNewBoardSubmit }) => {
  const [formData, setFormData] = useState(kInitialFormData);
  const [showForm, setShowForm] = useState(true)
  const [invalidForm, setInvalidForm] = useState({ title: true, owner: true })

  const handleFormVisibility = (event) => {
    setShowForm(!showForm)
  }

  const handleFormChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData(prev => ({
      ...prev, [name]: value
    }));
    // Check if there is text in field for a valid submission
    value ? setInvalidForm(prev => ({ ...prev, [name]: false })) : setInvalidForm(prev => ({ ...prev, [name]: true }))
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
      <div className="new-board-form__container">
        <h2>Create a New Board</h2>
        <form className="new-board-form__form" onSubmit={handleFormSubmit}>
          <label htmlFor="title">Title </label>
          <input
            type="text"
            className={invalidForm.title ? "invalid-form-input" : "form-input"}
            name="title"
            value={formData.title}
            onChange={handleFormChange}
          />
          <label htmlFor="owner">Owner's Name </label>
          <input
            type="text"
            className={invalidForm.owner ? "invalid-form-input" : "form-input"}
            name="owner"
            value={formData.owner}
            onChange={handleFormChange}
          />
          <p id="preview">Preview: {formData.title} - {formData.owner}</p>
          {/*Check if both fields are filled, disable submit button if not*/}
          {!invalidForm.title && !invalidForm.owner ?
            <input type="Submit" className="submit-btn" />
            :
            <input type="Submit" className="submit-btn-invalid" disabled />}
        </form>
        <button className="submit-btn" onClick={handleFormVisibility}>Hide New Board Form</button>
      </div>
    )
  } else {
    return (
      <div className="new-board-form__container">
        <h2>Create a New Board</h2>
        <span className="submit-btn" onClick={handleFormVisibility}>Show New Board Form</span>
      </div>
    );
  };
};

NewBoardForm.propTypes = {
  handleNewBoardSubmit: PropTypes.func.isRequired,
}


export default NewBoardForm;
