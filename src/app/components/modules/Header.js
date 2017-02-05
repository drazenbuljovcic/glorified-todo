import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      navOpened: false
    }
  }

  // componentWillMount() {
    // console.log('header will mount');
  // }

  // componentDidMount() {
  // }

  // shouldComponentUpdate() {
  //   console.log('Should header update')
  //   return true
  // }
  // componentWillUpdate() {
  //   console.log('header will update');
  // }
  // componentDidUpdate() {
  //   console.log('header did update');
  // }

  hideMobileNav() {
    Promise.resolve(
      this.setState({ navOpened: false })
    ).then(() => {
      if(!this.state.navOpened)
        this.nav.classList.remove('active');
    })
  }
  
  toggleMobileNav() {
    Promise.resolve(
      this.setState({ navOpened: !this.state.navOpened })
    ).then(() => {
      if(!this.state.navOpened) {
        this.nav.classList.remove('active');
      } else {
        this.nav.classList.add('active');
      }
    })
  }

  render() {
    return (
      <header className="main-header fixed width-100">
        <div className="container flexible flex flex--between">
          <h1 className="logo self--center"><Link to="/">LOGO</Link></h1>
          <ul className="signing-links flex self--center" ref={ nav => this.nav = nav }>
            <li className="signing-link link"><Link onClick={() => this.hideMobileNav()} to="signin" activeClassName="active"><button className="btn">Sign in</button></Link></li>
            <li className="signing-link link"><Link onClick={() => this.hideMobileNav()} to="signup" activeClassName="active"><button className="btn">Sign up</button></Link></li>
          </ul>
          <i onClick={() => this.toggleMobileNav()} className="fa fa-bars mobile-nav-toggle" aria-hidden="true"></i>
        </div>
      </header>
    )
  }
}