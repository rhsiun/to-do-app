import React, { Component } from 'react';
import './Todo.css';
import TodoItem from './TodoItem';

var apiKey = "cc2dd1-349dc4-e4d50c-d4c8b4-5ea8df";
var api = "https://cse204.work/todos";

class Todo extends Component {
  
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      this.props.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.text} api_id={todo.id} completed={todo.completed} handleDelete={this.props.handleDelete} handleComplete={this.props.handleComplete}/>
      ))
    );
  }
}

export default Todo;
