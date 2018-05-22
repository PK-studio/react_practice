import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Examples</h1>
        </header>
        <Projects passArguments="hello world - passArguments"/>
      </div>
    );
  }
}

export default App;
