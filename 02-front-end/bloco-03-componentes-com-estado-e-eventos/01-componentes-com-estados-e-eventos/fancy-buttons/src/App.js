import React from 'react';
import './App.css';



class App extends React.Component {
  
  constructor() {
    super();
    this.message = this.message.bind(this);
    this.message2 = this.message2.bind(this);
    this.message3 = this.message3.bind(this);
  }

  message () {
    console.log(this)
    console.log('Click');
    this.setState((old, _props) => ({
      message: old.message + 1
    }));
  }
  
  message2 () {
    console.log(this)
    console.log('Click2');
    this.setState((old, _props) => ({
      message2: old.message2 + 2
    }));
  }
  
  message3 () {
    console.log(this)
    console.log('Click3');
    this.setState((old, _props) => ({
      message3: old.message3 + 3
    }));
  }

  state = {
    message: 0,
    message2: 0,
    message3: 0
  }

  render() {
    return (
      <>
        <button onClick={this.message}>{this.state.message}</button>
        <button onClick={this.message2}>{this.state.message2}</button>
        <button onClick={this.message3}>{this.state.message3}</button>
      </>
    );
  }
  
}

export default App;
