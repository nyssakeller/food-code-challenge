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

  render() {
    return(
      <div>
        <form>
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