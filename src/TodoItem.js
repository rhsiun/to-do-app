import React, { Component } from 'react';


class TodoItem extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    var isCompleted;
    if(this.props.completed === true) {
      isCompleted = "completed";
    } else {
      isCompleted = "incomplete";
    }

    return (
      <div className="todo">
        <div className={isCompleted}>
          <a id={this.props.id} api_id={this.props.api_id}>{this.props.id}</a>
          <button id={this.props.id} className="delete" api_id={this.props.api_id} onClick={this.props.handleDelete.bind(this, this.props.api_id)}>-</button>
          <button id={this.props.id} className="checkBox" api_id={this.props.api_id} onClick={this.props.handleComplete.bind(this, this.props.api_id)}></button>
        </div>
      </div>
    );
  }


}

export default TodoItem;

