import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { connect } from 'react-redux';
import Promise from 'promise-polyfill';

import Header from './components/modules/Header';
import Main from './components/modules/Main';

class Page extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      devReload: false,
      devScriptInjected: false
    }
  }

  componentWillMount() {
    if(this.props.env === 'dev-hmr')
      console.log("Hot Module Reload enabled.");
  }

  componentDidMount() {
    if(!window.Promise) {
      window.Promise = Promise;
    }
    console.log(`Page rendered in ${this.props.env} mode!`);

    if(this.props.env === 'development')
      this.setState({devReload: true})
  }
  

  maybeInjectDevelopmentReloadScript() {
    if (this.state.devReload && !this.state.devScriptInjected) {
      // return <script src='/reload/reload.js' />;
      let s = document.createElement('script');
      s.setAttribute('src','/reload/reload.js');
      document.body.appendChild(s);

      s.onload = () => {
        this.setState({devScriptInjected: true});
        console.log('Development mode with autoreload.')
      };
    };
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <head>
          <title>Glorified ToDo list</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1.0, minimum-scale=1.0" />
          <link rel='stylesheet' type="text/css" href="/app.bundle.css" />
        </head>
        <body ref={ body => this.bodyDOM = body } >
          <div className="wrapper">
            <Header 
              user={this.props.user}
              route={this.props.route}
              />
            <Main 
              children={this.props.children}
              {...this.props}
              />
          </div>
          <script src="/vendor.bundle.js" />
          <script src="/app.bundle.js" />
          { this.maybeInjectDevelopmentReloadScript() }
        </body>
      </html>
    )
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Page);
