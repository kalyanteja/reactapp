import React, { Component } from "react";
import PropTypes from 'prop-types';

class Person2 extends Component{
    constructor(props){
        super();
        this.state = {
            age: props.age,
        };
    }

    incAge(){
        this.setState({
            age: this.state.age + 100,
        })
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <h2 onClick={this.incAge.bind(this)}>I'm {this.props.name} and i'm {this.state.age}</h2>
                <ul>
                    {this.props.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>
                <span>{this.props.children}</span>
            </div>
        )
    }
}

Person2.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array,
    children: PropTypes.element.isRequired
}

export default Person2;