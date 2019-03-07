import React, { Component } from 'react';
import './App.css';
import PersonComp from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { name: 'Vandjik', age: 28 },
      { name: 'Bobby', age: 29 },
      { name: 'Alex', age: 21 }
    ]
  }

  switchNameHandler = () => {
    // let newState = this.state;
    // newState.persons[0].name = 'Gerrard';

    // this.setState(newState);
    this.setState({
      persons: [
        { name: 'Vandjik Van', age: 28 },
        { name: 'Bobby Firmino', age: 29 },
        { name: 'Alex Trent', age: 21 }
      ]
    })
  }

  render() {
    //this compiles to
    //return React.createElement('div', {className: 'App'}, React.createElement('h2', null, 'Well, original react works this way'));
    return (
      <div className="App">
        <h1>What's up dude? Changed entry name</h1>
        <p>New Line nest test</p>

        <button onClick={this.switchNameHandler}>Switch name</button>

        <PersonComp age={this.state.persons[0].age} name={this.state.persons[0].name} />
        <PersonComp age={this.state.persons[1].age} name={this.state.persons[1].name} click={this.switchNameHandler}>My Hobbies: Racing</PersonComp>
        <PersonComp age={this.state.persons[2].age} name={this.state.persons[2].name} />
      </div>
    );
  }
}

export default App;
