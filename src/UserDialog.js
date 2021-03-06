import React, { Component } from 'react';
import './UserDialog.css'
import {signUp,signIn, sendPasswordResetEmail   } from './leanCloud'
import deepCopy from "./deepCopy";
import ForgotPasswordForm from './ForgotPasswordForm'
import SignInOrSignUp from './SignInOrSignUp'
  export default class UserDialog extends Component{
  constructor(props){
    super(props)
    this.state={
      returnSignIn:"",
      selectedTab: 'signInOrSignUp', // 'forgotPassword'
      formData: {
        email: '',
        username: "",
        password: ""
      }
    }
  }
  render(){
    return (
          <div className="UserDialog-Wrapper">
              <div className="UserDialog">
                  {
                      this.state.selectedTab === 'signInOrSignUp' ?
                          <SignInOrSignUp
                              returnSignIn={this.state.returnSignIn}
                              formData={this.state.formData}
                              onSignIn={this.signIn.bind(this)}
                              onSignUp={this.signUp.bind(this)}
                              onChange={this.changeFormData.bind(this)}
                              onForgotPassword={this.showForgotPassword.bind(this)}
                          /> :
                      <ForgotPasswordForm
                          formData={this.state.formData}
                          onSubmit={this.resetPassword.bind(this)}
                          onChange={this.changeFormData.bind(this)}
                          onSignIn={this.returnToSignIn.bind(this)}
                      />
                  }
                  <div className="img">

                  </div>
              </div>
            </div>
          )
      }
      showForgotPassword(){
          let stateCopy = JSON.parse(JSON.stringify(this.state))
          stateCopy.selectedTab = 'forgotPassword'
          this.setState(stateCopy)
      }
      returnToSignIn(){
          let stateCopy = JSON.parse(JSON.stringify(this.state))
          stateCopy.selectedTab = 'signInOrSignUp'
          stateCopy.returnSignIn='signIn'
          this.setState(stateCopy)
      }
      resetPassword(e){
          e.preventDefault()
          sendPasswordResetEmail(this.state.formData.email)
      }
    changeFormData(key,e){
          let stateCopy=deepCopy(this.state);
      // let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.formData[key]=e.target.value;
        this.setState(stateCopy);
    }
    signUp(e){
        e.preventDefault()
            let {email,username, password} = this.state.formData
                let success = (user)=>{
                  window.location.reload();
                  setTimeout(function(){
                    this.props.onSignUp.call(null, user)
                  }.bind(this),3000)
                }
            let error = (error)=>{
                switch(error.code){
                    case 202:
                      alert('用户名已被占用')
                      break
                    case 201:
                        alert('密码不能为空')
                        break
                    case 200:
                        alert('用户名不能为空')
                        break
                    case 217:
                        alert('无效的用户名，不允许空白用户名')
                        break
                    case 218:
                        alert('无效的密码，不允许空白密码')
                        break
                    default:
                      alert(error)
                      break
                  }
                }
            signUp(email, username, password, success, error)
    }
    signIn(e){
        e.preventDefault()
            let {username, password} = this.state.formData
                let success = (user)=>{
                  window.location.reload();
                  setTimeout(function(){
                    this.props.onSignIn.call(null, user)
                  }.bind(this),3000);
                }
            let error = (error)=>{
                switch(error.code){
                    case 210:
                      alert('用户名与密码不匹配')
                      break
                    case 201:
                        alert('密码不能为空')
                        break
                    case 200:
                        alert('用户名不能为空')
                        break
                    case 211:
                        alert('用户名不存在')
                        break

                    default:
                      alert(error)
                      break
                  }
                }
            signIn(username, password, success, error)
    }
}