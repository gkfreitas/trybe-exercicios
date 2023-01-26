import React, { Component } from 'react';

class Email extends Component {

  render() {
    const { handleInputs, value} = this.props;
    return (
      <>
      <input 
        name='email' 
        type="text"
        onChange={handleInputs}
        value={value}
        />
        </>
    )
  }
}

export default Email;