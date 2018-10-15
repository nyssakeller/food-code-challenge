import React, { Component } from 'react';
import AddFoodForm from '../AddFoodForm/AddFoodForm';
import CardContainer from '../CardContainer/CardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favoriteFoodArray: []
    }
  }

  addFoodToFavorites = food => {
    const { favoriteFoodArray } = this.state;
    this.setState({ favoriteFoodArray: [...favoriteFoodArray, food] });
  }

  render() {
    const { favoriteFoodArray } = this.state;
    let amountOfFood = !favoriteFoodArray.length ? 'You have no items' : `You have ${favoriteFoodArray.length} item(s)`;

    return (
      <div className="App">
        <AddFoodForm addFoodToFavorites={ this.addFoodToFavorites } />
        <h2>{ amountOfFood }</h2>
        <CardContainer favoriteFoodArray={ favoriteFoodArray } />
      </div>
    );
  }
}

export default App;
