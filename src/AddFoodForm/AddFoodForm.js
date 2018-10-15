import React, { Component } from 'react';

class AddFoodForm extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div>
        <form>
          <input type='text'
                 value={ this.state.inputValue }
                 placeholder='Enter food here' />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFoodForm;