import React, { Component } from 'react';
import Email from './Email';
import Select from './Select';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      select: '',
      email: '',
      checkbox: false,
      textarea: '',
      formularioComErros: false
    }
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleError() {
    const verify = this.state.email.length > 5;
    this.setState({
      formularioComErros: verify,
    })
  }

  handleInputs({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    },this.handleError);
  }

  render() {
   
    return (
      <form>
        <fieldset>
          <Select value={this.state.select} handleInputs={this.handleInputs} />
          <Email value={this.state.email} handleInputs={this.handleInputs} sendError={this.checkError}/>
        <input 
        name='checkbox' 
        type="checkbox"
        onChange={this.handleInputs}
        value={this.checkbox}
        />
        <textarea 
        name='textarea' 
        onChange={this.handleInputs}
        value={this.textarea}
        />
        </fieldset>
      </form>
    )
  }
}

export default Forms