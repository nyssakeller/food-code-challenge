import React, { Component } from 'react';

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
    this.setState({ inputValue: '' });
  }

  render() {
    return(
      <div>
        <form onSubmit={ (e) => this.submitFavoriteFood(e) }>
          <input type='text'
                 value={ this.state.inputValue }
                 placeholder='Enter food here'
                 onChange={ (e) => this.updateInputValue(e) } />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFoodForm;