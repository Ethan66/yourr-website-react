import React, {Component} from 'react';
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

export default class SignInOrSignUp extends Component {
  constructor (props) {
      super(props)
      this.state = {
              selected: 'signUp'
          }
  }

  switch (e) {
      this.setState({
          selected: e.target.value
      })
  }

  render () {
      return (
          <div className="signInOrSignUp">
              <h1>Todo-List</h1>
      {/*<nav>
                  <label>
                      <input type="radio" value="signUp" checked={this.state.selected === 'signUp'}
                              onChange={this.switch.bind(this)}
                            /> 注册</label>
                  <label>
                      <input type="radio" value="signIn"
                             checked={this.state.selected === 'signIn'}
                             onChange={this.switch.bind(this)}
                      /> 登录</label>
            </nav>*/}
            <div className="panes">
                {this.state.selected === 'signUp' ?
                    <SignUpForm formData={this.props.formData} onSubmit={this.props.onSignUp}
                          onChange={this.props.onChange}
                    />
                        : null}
                {this.state.selected === 'signIn' ?
                    <SignInForm formData={this.props.formData} onChange={this.props.onChange} onSubmit={this.props.onSignIn}
                          onForgotPassword={this.props.onForgotPassword}
                    />
                    : null}
            </div>
            <div className="change">
              <p className="line"><span>or</span></p>
      {this.state.selected==='signUp'?<p className="text clearfix">
                <span>已有账号，点击</span><button value="signIn" onClick={this.switch.bind(this)}>登录</button>
              </p>:
              <p className="text clearfix">
                <button value="signUp" onClick={this.switch.bind(this)}>返回注册</button>
              </p>}
            </div>
          </div>
          )
  }
}