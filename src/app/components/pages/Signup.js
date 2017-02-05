import React from 'react';
import SocialAuth from '../modules/SocialAuth';

export default class Signin extends React.Component {
  render() {
    return (
      <div className="signup-wrapper wrapper relative flex flex--center">
        <div className="signup-modal basic-modal flex">
          <div className="signup-local custom-auth flexible flex flex--center flex--column">
            <h1 className="text-white">Create an account</h1>
            <input className="input text-white center-text width-100" type="text" name="singup-fn" placeholder="First Name"/>
            <input className="input text-white center-text width-100" type="text" name="singup-ln" placeholder="Last Name"/>
            <input className="input text-white center-text width-100" type="email" name="singup-email" placeholder="Email"/>
            <input className="input text-white center-text width-100" type="password" name="singup-password" placeholder="Password"/>
            <button className="btn" name="local-form-submit">sign in</button>
          </div>
          <div className="divider text-white"><span>or</span></div>
          <SocialAuth />
        </div>
      </div>
    )
  }
}