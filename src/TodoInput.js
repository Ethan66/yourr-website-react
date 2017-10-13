import React from "react";
import './TodoInput.css';

function submit (props) {
  let value={}
  value.newTodo=document.querySelector(".TodoInput").value.trim();
  value.newTime=document.querySelector(".TimeTodo").value.trim();
  if(value.newTodo!==''&&value.newTime){
    props.onSubmit(value)
  }
}
/*function submit (props, e) {
    if (e.key === 'Enter') {
     if (e.target.value.trim() !== '') {
     props.onSubmit(e)
     }
   }
}*/

function changeTitle (props, e) {
    props.onChange(e)
  }
function changeTime(props,e){
  props.onChangeTime(e)
}
  export default function (props) {
  return (
    <div>
      <input placeholder="请输入待办事件" type = "text" value = {props.content} className = "TodoInput" onChange = {changeTitle.bind(null, props)}
      />
      <input placeholder="请输入时间" type="text" value={props.time1} className="TimeTodo" onChange={changeTime.bind(null,props)} />
      <span className="iconfont icon-add" onClick={submit.bind(null, props)}></span>
    </div>
    )
}