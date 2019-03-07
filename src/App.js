import React, { Component } from 'react';
import './App.css';
import PersonComp from './Person/Person';
import Person2Comp from './Person2/Person2';

class App extends Component {

  constructor(props){
    super()
    this.state = {
      persons : [
        { name: 'Vandjik', age: 28 },
        { name: 'Bobby', age: 29 },
        { name: 'Alex', age: 21 }
      ],
      status: 0,
      linkName: props.initLinkName
    }
    setTimeout(() => {
      this.setState({status: 1})
    }, 4000);
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
    });
  }

  changeHeader() {
    this.props.onChangeHeader(this.state.linkName);
  }

  onChangeText(event){
    this.setState({
      linkName: event.target.value
    })
  }

  render() {
    //this compiles to
    //return React.createElement('div', {className: 'App'}, React.createElement('h2', null, 'Well, original react works this way'));
    return (
      <div className="App">
        <h1>What's up dude? Changed entry name</h1>
        <p>New Line nest test {this.state.status}</p>
        <button onClick={this.switchNameHandler}>Switch name</button>

        <PersonComp age={this.state.persons[0].age} name={this.state.persons[0].name} />
        <PersonComp age={this.state.persons[1].age} name={this.state.persons[1].name} click={this.switchNameHandler}>My Hobbies: Racing</PersonComp>
        <PersonComp age={this.state.persons[2].age} name={this.state.persons[2].name} />
        <Person2Comp age={33} name={"stevie"} hobbies={["football", "pubg", "movies"]}><h3>I kick arse!</h3></Person2Comp>
        <hr/>

        <input type="text" value={this.state.linkName} onChange={(event) => this.onChangeText(event)}/> <br/>
        <button onClick={this.changeHeader.bind(this)}>Change Header Name</button>
      </div>
    );
  }
}

export default App;
