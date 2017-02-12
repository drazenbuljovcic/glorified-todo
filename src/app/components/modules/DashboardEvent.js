import React from 'react';

import DeleteDashboardEvent from './DeleteDashboardEvent';

export default class DashboardEvent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <section
        className="dashboard-event flex relative"
        data-priority={this.props.priority}>
        <div className="flexible">
          <header><h2>{this.props.eventHeadline}</h2></header>
          <div className={'event-details flexible'}>{this.props.eventDesc}</div>
        </div>
        <div className="event-duration flex flex--around self--center">
          <div>
            <span>{this.props.day}</span>
            <h4>Day</h4>
            </div>
          <div className="event-start">
            <span>{this.props.fullStartTime}</span>          
            <h4>Start</h4>
          </div>
          <span>-</span>
          <div className="event-end">
            <span>{this.props.end}</span>
            <h4>End</h4>
          </div>
        </div>
        <DeleteDashboardEvent
          eventId={this.props.eventId}
          indicators={this.props.indicators}
          eventIdentifiers={this.props.eventIdentifiers}
          dispatch={this.props.dispatch}
        />
      </section>
    )
  }
}