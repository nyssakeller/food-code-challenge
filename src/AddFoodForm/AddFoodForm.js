import React, { Component } from 'react';
import './AddFoodForm.css';

class AddFoodForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
  }

  updateInputValue = e => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  }

  submitFavoriteFood = e => {
    e.preventDefault();
    const { addFoodToFavorites } = this.props;
    const { inputValue } = this.state;

    addFoodToFavorites(inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const { inputValue } = this.state;
    let disable = inputValue !== '' ? false : true;
    
    return(
      <div>
        <form onSubmit={ (e) => this.submitFavoriteFood(e) }>
          <input type='text'
                 value={ this.state.inputValue }
                 placeholder='Enter food here'
                 onChange={ (e) => this.updateInputValue(e) } />
          <button disabled={ disable }>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFoodForm;