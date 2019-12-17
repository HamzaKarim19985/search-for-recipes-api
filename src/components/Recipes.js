import React from "react";
import { Link } from "react-router-dom";

const Recipes = props => (
  <div className="container-fluid w-80 mt-25">
    <div className="row">
      {props.recipes.map(recipe => {
        return (
          <div
            key={recipe.recipe_id}
            className="col-12 col-md-6 col-lg-4 col-xl-3"
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipes__box">
              <img
                className="recipe__box-img"
                src={recipe.image_url}
                alt={recipe.title}
              />
              <div className="recipe__text">
                <h5 className="recipes__title">
                  {recipe.title.length < 20
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 25)}...`}
                </h5>
                <p className="recipes_subtitle">
                  publisher:
                  <span> {recipe.publisher}</span>
                </p>
              </div>
              <button className="form__button">
                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipe }
                  }}
                >
                  View recipe
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
