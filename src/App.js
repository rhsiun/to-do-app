import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import './Todo.css';
import NewTodo from './NewTodo';

var apiKey = "cc2dd1-349dc4-e4d50c-d4c8b4-5ea8df";
var api = "https://cse204.work/todos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="todos">
            <h1>ToDo List</h1>
            <input id="newTitle" type="text" placeholder="Enter new todos" />
            <button id="addBtn">+</button>
        </div>
        <div id="todo-list">
            
        </div>
    
      </div>
    );
  }
}

export default App;
