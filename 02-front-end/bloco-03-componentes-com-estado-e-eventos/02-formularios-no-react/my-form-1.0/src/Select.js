import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { handleInputs } = this.props;
    return (
      <select 
        name='select'
        onChange={handleInputs}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
    )
  }
}

export default Select