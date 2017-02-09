import React from 'react';

import eventActions from '../../actions/eventActions';

export default class EventDetails extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  componentWillUnmount() {
    this.props.dispatch(eventActions.resetEventDetails());
  }
  
  render() {
    return (
      <section className="event-details flex flex--column items--end">
        <h3>Event details</h3>
        <span>{this.props.event.eventHeadline}</span>
        <h4>Name</h4>
        <span>{this.props.event.eventDesc}</span>
        <h4>Description</h4>
        <div className="event-duration flex">
          <div className="event-start">
            <span>{this.props.event.fullStartTime}</span>          
            <h4>Start</h4>
          </div>
          <span>-</span>
          <div className="event-end">
            <span>{this.props.event.end}</span>
            <h4>End</h4>
          </div>
        </div>
      </section>
    )
  }
}