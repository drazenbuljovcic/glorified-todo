import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Main from './components/Main';

class Page extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <html>
        <head>
          <title>Glorified ToDo list</title>
          <link rel='stylesheet' type="text/css" href="app.bundle.css" />
        </head>
        <body ref={ body => this.bodyDOM = body } >
          <Header />
          <div id="main" className="below-header">
            <Main children={this.props.children}/>
          </div>
          <script src="vendor.bundle.js" />
          <script src="app.bundle.js" />
          <script src="/reload/reload.js" />
        </body>
      </html>
    )
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Page);
