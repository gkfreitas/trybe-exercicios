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
    if (this.state.message % 2 !== 0) {
      this.setState({
        colorM: 'green',
      });
    } else {
      this.setState({
        colorM: 'gray',
      })
    }
  }
  
  message2 () {
    console.log(this)
    console.log('Click2');
    this.setState((old, _props) => ({
      message2: old.message2 + 2
    }));
    if (this.state.message2 % 2 !== 0) {
      this.setState({
        colorM: 'green',
      });
    } else {
      this.setState({
        colorM: 'gray',
      })
    }
  }
  
  message3 () {
    console.log(this)
    console.log('Click3');
    this.setState((old, _props) => ({
      message3: old.message3 + 3,
    }));
    if (this.state.message3 % 2 !== 0) {
      this.setState({
        colorM: 'green',
      });
    } else {
      this.setState({
        colorM: 'gray',
      })
    }
  }

  state = {
    message: 0,
    colorM: 'gray',
    message2: 0,
    message3: 0
  }

  render() {
    return (
      <>
        <button style={{backgroundColor: this.state.colorM }} onClick={this.message}>{this.state.message}</button>
        <button style={{backgroundColor: this.state.colorM }} onClick={this.message2}>{this.state.message2}</button>
        <button style={{backgroundColor: this.state.colorM }} key="message3w" onClick={this.message3}>{this.state.message3}</button>
      </>
    );
  }
  
}

export default App;
