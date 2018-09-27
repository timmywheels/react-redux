import React, { Component } from 'react';
import Developer from './Developers';
import AddDeveloper from './AddDeveloper';
class App extends Component {

    state = {

        developers: [

            { name: 'Tim', age: 27, tech: 'React', id: 1 },
            { name: 'Andrea', age: 27, tech: 'JavaScript', id: 2 },
            { name: 'Julie', age: 44, tech: 'CSS', id: 3 }

        ]

    };

  render() {
    return (
      <div className="App">
        <h1>Using React ⚛️</h1>
          <p>Welcome 😎</p>
          <Developer developers={this.state.developers} />
          <AddDeveloper/>
      </div>
    );
  }
}

export default App;
