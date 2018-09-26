import React, { Component } from 'react';
import Developer from './Developer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Using React ⚛️</h1>
          <p>Welcome 😎</p>
          <Developer name={'Tim'} age={27} tech={'React'}/>
          <Developer name={'Andrea'} age={24} tech={'JavaScript'}/>
      </div>
    );
  }
}

export default App;
