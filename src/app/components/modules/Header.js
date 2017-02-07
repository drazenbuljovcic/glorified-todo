import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      navOpened: false
    }
  }

  // componentWillMount() {
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
      if(!this.state.navOpened) {
        this.nav.classList.remove('active');
        window.scrollTo(1, 0);
      }
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
        <div className="height-100 flexible flex flex--between">
          <h1 className="logo self--center"><Link to="/">LOGO</Link></h1>
          { !this.props.user.userLoggedIn ?
              <nav className="self--center">
                <ul className="signing-links flex self--center" ref={ nav => this.nav = nav }>
                  <li className="signing-link link"><Link onClick={() => this.hideMobileNav()} to="/auth/signin" activeClassName="active"><button className="btn">Sign in</button></Link></li>
                  <li className="signing-link link"><Link onClick={() => this.hideMobileNav()} to="/auth/signup" activeClassName="active"><button className="btn">Sign up</button></Link></li>
                </ul>
                <i onClick={() => this.toggleMobileNav()} className="fa fa-bars mobile-nav-toggle" aria-hidden="true"></i>
              </nav>
            :
            <h2 className="route-name flexible self--center text-white lighten-font center-text uppercase">{this.props.route}</h2>
          }
        </div>
      </header>
    )
  }
}

