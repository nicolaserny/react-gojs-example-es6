import React, { Component } from 'react';
import logo from './logo.svg';
import MyDiagram from './Components/MyDiagram';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">react-gojs example in es6</h1>
                </header>
                <MyDiagram />
            </div>
        );
    }
}

export default App;
