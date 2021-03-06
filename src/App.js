import React, { Component } from 'react';
import './App.css';
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import "normalize.css";
import './reset.css';
import UserDialog from './UserDialog';
import {getCurrentUser, signOut, TodoModel} from './leanCloud';
import deepCopy from './deepCopy';
import DateTable from './date';



class App extends Component {
  constructor(props){
    super(props)
      this.state={
       user: getCurrentUser() || {},
        newTodo:"",
        newTime:"",
        todoList: []
    }
    let user = getCurrentUser()
    if (user) {
        TodoModel.getByUser(user, (todos) => {
          let stateCopy = JSON.parse(JSON.stringify(this.state))
          stateCopy.todoList = todos
          this.setState(stateCopy)
        })
    }
  }
  render() {
    let todos=this.state.todoList.filter((item)=>!item.deleted).map((item,index)=>{
      return (<li key={index} >
        <TodoItem todo={item} onToggle={this.toggle.bind(this)} onDelete={this.delete.bind(this)} />
      </li>)
    })
    return (
      <div className="App">
        <DateTable />
        <div className="todo">
          <div className="time">
             <span>2017年10月11日</span> <em>周一</em>
          </div>
          <h1>{this.state.user.username|| "我"}
              {this.state.user.id ? <i className="iconfont icon-out" onClick={this.signOut.bind(this)}></i> : null}
          </h1>
          <div className="inputWrapper">
            <TodoInput content={this.state.newTodo} time1={this.state.newTime} onSubmit={this.addTodo.bind(this)} onChange={this.changeTitle.bind(this)}
            onChangeTime={this.changeTime.bind(this)} />
          </div>
          <ol className="todoList">
            {todos}
          </ol>
            {this.state.user.id ? null : <UserDialog onSignUp={this.onSignUpOrSignIn.bind(this)} onSignIn={this.onSignUpOrSignIn.bind(this)}/>}
        </div>
      </div>
    );
  }
  signOut(){
    signOut();
    let stateCopy=deepCopy(this.state);
      // let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.user = {}
      this.setState(stateCopy)
  }
    onSignUpOrSignIn(user){
        let stateCopy=deepCopy(this.state);
      // let stateCopy = JSON.parse(JSON.stringify(this.state))
      stateCopy.user = user
      this.setState(stateCopy)
    }
    componentDidUpdate(){
    }
  addTodo(value){
      let newTodo = {
      title:value.newTodo,
      status: '',
      deleted: false,
      time:value.newTime
    }
    TodoModel.create(newTodo, (id) => {
      newTodo.id = id
      this.state.todoList.push(newTodo)
      this.setState({
        newTodo: '',
        todoList: this.state.todoList
      })
    }, (error) => {
       console.log(error)
    })
    console.log(this.state);
  }
  changeTitle(e){
    this.setState({
      newTodo: e.target.value,
      todoList: this.state.todoList
    })
  }
  changeTime(e){
    this.setState({
      newTime:e.target.value,
      todoList:this.state.todoList
    })
  }
  toggle(e,todo){
    let oldStatus = todo.status
    todo.status=todo.status==="completed"?"":"completed";
    TodoModel.update(todo, () => {
      this.setState(this.state)
    }, (error) => {
      todo.status = oldStatus
      this.setState(this.state)
    })
  }
  delete(e,todo){
    TodoModel.destroy(todo.id, () => {
      todo.deleted = true
      this.setState(this.state)
    })
  }
}

export default App;

