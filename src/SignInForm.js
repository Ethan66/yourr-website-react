import React from 'react';
export default function (props) {
    return (
      <form className="signIn" onSubmit={props.onSubmit}> {/* 登录*/}
        <div className="row">
          <label><i className="iconfont icon-ren"></i></label>
          <input type="text" value={props.formData.username}
            onChange={props.onChange.bind(null, 'username')}/>
        </div>
        <div className="row">
          <label><i className="iconfont icon-mima"></i></label>
          <input type="password" value={props.formData.password}
            onChange={props.onChange.bind(null, 'password')}/>
        </div>
        <div className="row actions">
          <a href="#" onClick={props.onForgotPassword}>忘记密码？</a>
          <button type="submit">登录</button>
        </div>
      </form>
    )
}