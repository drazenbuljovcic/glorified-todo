import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <header className="main-header fixed width-100 flex flex--end">
        <ul className="signing-links flex self--center">
          <li className="signing-link link"><Link to="/"><button className="btn">Sign in</button></Link></li>
          <li className="signing-link link"><Link to="/signup"><button className="btn">Sign up</button></Link></li>
        </ul>
      </header>
    )
  }
}