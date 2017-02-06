import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div id="main" className="below-header">
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}