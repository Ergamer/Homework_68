import React, { Component } from 'react';
import './App.css';
import AddNewToDo from "./containers/AddNewToDo/AddNewToDo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddNewToDo/>
      </div>
    );
  }
}

export default App;
