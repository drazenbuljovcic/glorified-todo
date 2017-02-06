import React from 'react';

import { Link } from 'react-router'; 

export default class AsideNav extends React.Component {
  render() {
    return (
      <aside className="user-panel">
        <figure className="user-greeting flex flex--row flex--center">
          <img className="user-avatar self--center" alt="user avatar" />
          <figcaption className="greeting-text lighten-font">
            <span>Hello</span>
            <br />
            <span>{this.props.userFirstName}</span>
          </figcaption>
        </figure>
        <nav>
          <ul>
            <Link to="/user/dashboard" activeClassName="active"><li>Dashboard</li></Link>
            <Link to="/user/week" activeClassName="active"><li>My Week</li></Link>
            <Link to="/user/deadlines" activeClassName="active"><li>Deadlines</li></Link>
            <Link to="/user/grades" activeClassName="active"><li>Grades</li></Link>
            <Link to="/user/notes" activeClassName="active"><li>Notes</li></Link>
          </ul>
        </nav>
      </aside>
    )
  }
}