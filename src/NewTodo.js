import React, { Component } from 'react'
import './Todo.css';

var apiKey = "cc2dd1-349dc4-e4d50c-d4c8b4-5ea8df";
var api = "https://cse204.work/todos";

export class NewTodo extends Component {
  
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row" id={this.props.div_id}>
        <input type="text" className="col" id={this.props.input_id}></input>
        <button className="col" id={this.props.button_id} onClick={this.props.handleAddEvent.bind(this)}>Add a task</button>
      </div>
    )
  }
}

export default NewTodo
