import React, { Component } from "react";
import ReactDOM from "react-dom";

import "react-bootstrap";

import "./styles.css";
import "./App.css";

import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Header from "./components/Header";

const API_KEY = "41ba189b4d53cf734386555d17d068e5";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };

    this.getRecipe = this.getRecipe.bind(this);
  }

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`
    );

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    if (recipes !== null) this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}
