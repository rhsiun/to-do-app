import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import './Todo.css';
import NewTodo from './NewTodo';

var apiKey = "cc2dd1-349dc4-e4d50c-d4c8b4-5ea8df";
var api = "https://cse204.work/todos";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

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

  componentWillMount() {
    this.renderToDo();
  }

  renderToDo() {
    var xhttp = new XMLHttpRequest()
    var todoList = [];

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // Convert response to JSON
        todoList = JSON.parse(this.responseText);
      }
    }
    xhttp.open("GET", api, false);
    xhttp.setRequestHeader("x-api-key", apiKey);
    xhttp.send();
    console.log(todoList);
    this.setState({ todos: todoList });
  }

  handleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          var xhttp = new XMLHttpRequest();

          var data = {
            completed: todo.completed
          };

          // Send the request to API
          xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
            }
          }
          xhttp.open("PUT", api + "/" + id, true);
          xhttp.setRequestHeader("x-api-key", apiKey);
          xhttp.send(JSON.stringify(data));
        }
        return todo;
      })
    });
  }

  handleSort = (e) => {
    var todoList = this.state.todos;
    if (e.target.value === "Created") {
      todoList = todoList.sort(function (a, b) {
        return a.created - b.created;
      });
      this.setState({ todos: todoList });
    } else if (e.target.value === "Completed") {
      todoList = todoList.sort(function (a, b) {
        return a.completed - b.completed;
      });
      this.setState({ todos: todoList });
    } else {
      this.renderToDo();
    }
  }

  handleAddEvent = (e) => {
    if (document.getElementById("newTitle").value === null || document.getElementById("newTitle").value === "") {
      alert("Please input an event");
    } else {
      // If the value of input was not null or "" then take the input and add 
      // the inputted string into the database of the API
      var xhttp = new XMLHttpRequest();
      var newTodo = document.getElementById("newTitle").value;

      var data = {
        text: newTodo
      };

      xhttp.open("POST", api, false);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.setRequestHeader("x-api-key", apiKey);
      xhttp.send(JSON.stringify(data));

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          // var todo = JSON.parse(this.responseText);
        } else if (this.readyState === 4) {
          // console.log(this.responseText);
        }
      };

      document.getElementById("newTitle").value = "";

      this.renderToDo();
    }
  }

  handleDelete = (id) => {
    var xhttp = new XMLHttpRequest();

    // Request to API to delete the item
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // console.log("success");
      }
    }

    xhttp.open("DELETE", api + "/" + id, false);
    xhttp.setRequestHeader("x-api-key", apiKey);
    xhttp.send();

    this.renderToDo();
  }
}

export default App;
