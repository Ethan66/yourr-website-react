import React from "react";
import './TodoInput.css';

function submit (props) {
  console.log()
  let value=document.querySelector(".TodoInput").value.trim();
  if(value!==''){
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
  export default function (props) {
  return (
    <div>
      <input placeholder="请输入待办事件" type = "text" value = {props.content} className = "TodoInput" onChange = {changeTitle.bind(null, props)}
      />
      <input placeholder="请输入时间" type="text" />
      <span className="iconfont icon-add" onClick={submit.bind(null, props)}></span>
    </div>
    )
}