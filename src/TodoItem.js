import React,{Component} from "react";

class TodoItem extends Component{
  render(){
    return <div>{this.props.todo}</div>
  }
}

export default TodoItem;