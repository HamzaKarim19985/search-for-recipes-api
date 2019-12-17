import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const API_KEY = "41ba189b4d53cf734386555d17d068e5";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRecipe: []
    };
  }
  componentDidMount = async () => {
    const { recipe } = this.props.location.state;
    const { title } = recipe;
    const req = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );

    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
  };
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            {recipe.length !== 0 && (
              <div className="active-recipe">
                <img
                  className="active-recipe__img"
                  src={recipe.image_url}
                  alt={recipe.title}
                />
                <h3 className="active-recipe__title">{recipe.title}</h3>
                <h4 className="active-recipe__publisher">
                  Publisher: <span> {recipe.publisher}</span>
                </h4>
                <p className="active-recipe__website">
                  Website:{" "}
                  <span>
                    {" "}
                    <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
                  </span>
                </p>
                <button className="active-recipe__button">
                  <Link to="/"> Go Home</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
