import React, { Component } from 'react';
import './App.css';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import "normalize.css";
import './reset.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state={
        newTodo:"",
        todoList:[

        ]
    }
  }
  render() {
    let todos=this.state.todoList.map((item,index)=>{
      return (<li key={index} >
        <TodoItem todo={item.title}/>
      </li>)
    })
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)} onChange={this.changeTitle.bind(this)} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
  addTodo(e){
    var value=e.target.value;
    this.state.todoList.push({
      id:idmaker(),
      title:value,
      status: null,
      deleted: false
    });
    this.setState({
      newTodo:"",
      todoList:this.state.todoList
    })
    console.log(this.state);
  }
  changeTitle(e){
    this.setState({
      newTodo: e.target.value,
      todoList: this.state.todoList
    })
  }
}

export default App;

let id=0;
function idmaker(){
  return ++id
}
