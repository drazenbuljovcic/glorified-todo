import React from 'react';
import SocialAuth from '../modules/SocialAuth';

export default class Signin extends React.Component {
  render() {
    return (
      <div className="signin-wrapper wrapper relative flex flex--center">
        <div className="signin-modal basic-modal flex">
          <div className="signin-local custom-auth flexible flex flex--center flex--column">
            <h1 className="text-white">Sign in</h1>
            <input className="input text-white center-text width-100" type="email" name="local-email" placeholder="email"/>
            <input className="input text-white center-text width-100" type="password" name="local-password" placeholder="password"/>
            <button className="btn" name="local-form-submit">sign in</button>
          </div>
          <div className="divider text-white"><span>or</span></div>
          <SocialAuth />
        </div>
      </div>
    )
  }
}