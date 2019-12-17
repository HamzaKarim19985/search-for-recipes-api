import React from "react";

const Form = props => (
  <div className="searchRecipe">
    <form onSubmit={props.getRecipe} className="search-form">
      <input
        type="text"
        placeholder="Search for chicken, cake, coffee and more.."
        className="form__input"
        name="recipeName"
      />
      <input type="submit" value="Search" />
    </form>
  </div>
);

export default Form;
