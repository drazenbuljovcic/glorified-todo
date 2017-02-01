import React from 'react';
import { connect } from 'react-redux';

import Content from './Content';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}