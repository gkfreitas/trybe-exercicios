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
  }
  
  message2 () {
    console.log(this)
    console.log('Click2');
  }
  
  message3 () {
    console.log(this)
    console.log('Click3');
  }

  render() {
    return (
      <>
        <button onClick={this.message}>Texto 1</button>
        <button onClick={this.message2}>Texto 2</button>
        <button onClick={this.message3}>Texto 3</button>
      </>
    );
  }
  
}

export default App;
