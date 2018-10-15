import React, { Component } from 'react';
import AddFoodForm from '../AddFoodForm/AddFoodForm';
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
    return (
      <div className="App">
        <AddFoodForm addFoodToFavorite={ this.addFoodToFavorites }/>
      </div>
    );
  }
}

export default App;
