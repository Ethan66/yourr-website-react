import React,{Component} from "react";
import './TodoItem.css';

class TodoItem extends Component{
  render(){
      {/* return <div>{this.props.todo}</div>*/}
   return (
       <div className="TodoItem">
         <input type="checkbox" checked={this.props.todo.status?true:false} onChange={this.toggle.bind(this)} />
         <i className="iconfont icon-gou"></i>
         <p><span className="title">{this.props.todo.title}</span></p>
         <p><span className="time1">10:00-11:00</span><i className="iconfont icon-shanchu" onClick={this.delete.bind(this)}></i></p>
       </div>
   )
  }
  toggle(e){
    console.log(e.target);
      this.props.onToggle(e,this.props.todo);
  }
  delete(e){
      this.props.onDelete(e,this.props.todo);
  }
}

export default TodoItem;