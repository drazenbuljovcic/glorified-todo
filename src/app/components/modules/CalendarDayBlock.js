import React from 'react';

import eventActions from '../../actions/eventActions'; 

export default class CalendarDayBlock extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  eventDetails(eventId) {
    this.props.dispatch(eventActions.eventDetails(eventId));
  }
  
  render() {
    return (
      <figure
        data-month={this.props.monthName}
        data-day={this.props.day}
        data-weekend={this.props.weekend}
        className="calendar-day-block flexible flex">
        <figcaption className="day-indicator flex flex--center text-green">{this.props.dayNum}</figcaption>
        <section className="day-events flexible flex flex--column items--end">          <div className="flexible width-100">
            {this.props.events.map(event => (
              <div
                key={`event-${event.eventId}`}
                data-priority={event.priority} 
                className="event-indicator inline"
                onClick={() => this.eventDetails(event.eventId)}>
              </div>)
            )}
          </div>
        </section>
      </figure>
    )
  }
}