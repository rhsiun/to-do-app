import React, { Component } from 'react';

var apiKey = "cc2dd1-349dc4-e4d50c-d4c8b4-5ea8df";
var api = "https://cse204.work/todos";

class TodoItem extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    var isCompleted;
    if(this.props.completed === true) {
      isCompleted = "complete";
    } else {
      isCompleted = "incomplete";
    }

    return (
      <div>
        <p className={isCompleted} id={this.props.id} api_id={this.props.api_id}>{this.props.id}</p>
        <button id={this.props.id} api_id={this.props.api_id} onClick={this.props.handleDelete.bind(this, this.props.api_id)}>Delete</button>
        <button id={this.props.id} api_id={this.props.api_id} onClick={this.props.handleComplete.bind(this, this.props.api_id)}>Completed</button>
        <hr></hr>
      </div>
    );
  }


}

export default TodoItem;

