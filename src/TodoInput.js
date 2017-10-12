import React from "react";
import './TodoInput.css';

function submit (props, e) {
   if (e.key === 'Enter') {
     if (e.target.value.trim() !== '') {
           props.onSubmit(e)
       }
  }
}

function changeTitle (props, e) {
    props.onChange(e)
  }
  export default function (props) {
  return (
    <div>
      <input placeholder="请输入待办事件" type = "text" value = {props.content} className = "TodoInput" onChange = {changeTitle.bind(null, props)}
      onKeyPress={submit.bind(null, props)}/>
      <input placeholder="请输入时间" type="text" />
    </div>
    )
}