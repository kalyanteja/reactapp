import React, { Component } from 'react';
import AppComp from './App';
import HeaderComp from './Header/Header';

class Main extends Component{

    constructor(){
        super()
        this.state = {
            headName: "Home"
        }
    }

    onChangeHeader(newName){
        this.setState({
            headName: newName
        });
    }

    render(){
        return(
            <div className="App">
                <HeaderComp pageName={this.state.headName}/>
                <AppComp onChangeHeader={this.onChangeHeader.bind(this)} initLinkName="Home"/>
            </div>
        )
    }
}

export default Main;