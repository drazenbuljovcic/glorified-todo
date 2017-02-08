import React from 'react';

export default class DashboardEvent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="dashboard-event">
        <h1>{this.props.eventHeadline}</h1>
      </div>  
    )
  }
}