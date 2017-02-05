import React from 'react';

export default class SocialAuth extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="signup-social social-auth flexible flex flex--center flex--column">
        <button className="btn width-100 btn-fb">Signin with Facebook</button>
        <button className="btn width-100 btn-gplus">Signin with Google+</button>
      </div>
    )
  }
}