import React from 'react';

export default class DashboardEvent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <section
        className="dashboard-event flex flex--column"
        data-priority={this.props.priority}>
        <header><h2>{this.props.eventHeadline}</h2></header>
        <div className={'event-details flexible'}>{this.props.eventDesc}</div>
      </section>
    )
  }
}