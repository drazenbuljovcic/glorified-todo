import React from 'react';

import eventActions from '../../actions/eventActions';

export default class MyWeekEvent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    Object.assign(
      this.eventDiv.style,
      {
        'height': this.props.durationInMin * this.props.minuteInPixels,
        'top': this.calculateStartingPoint(
            this.props.timeOfDay, 
            this.props.hour,
            this.props.startInMin
        )
      }
    )
  }

  calculateStartingPoint(timeOfDay, hour, startInMin) {
    //set child top position
    let top = 54; //default starting point
    
    if(timeOfDay === 'PM') {
      // 720
      return top += (this.props.hourInMinutes * this.props.minuteInPixels * 4) + startInMin * this.props.minuteInPixels;
    }
    if(timeOfDay === 'AM' && hour >= 8) {
      // - 1440
      return top += (-this.props.hourInMinutes * this.props.minuteInPixels * 8) + startInMin * this.props.minuteInPixels;
    }
    if(timeOfDay === 'AM' && hour <= 7) {
      // 2880
      return top += (this.props.hourInMinutes * this.props.minuteInPixels * 16) + startInMin * this.props.minuteInPixels;
    }

    return top;
  }

  eventDetails(dispatch, eventId) {
    dispatch(eventActions.showEventDetails(eventId));
  }

  render() {
    return (
      <section 
        ref={eventDiv => this.eventDiv = eventDiv}
        onClick={() => this.eventDetails(this.props.dispatch, this.props.eventId)}
        id={`event-${this.props.eventId}`}
        className={'day-event absolute width-100 flex flex--column'}
        data-priority={this.props.priority}>
        <header><h2>{this.props.eventHeadline}</h2></header>
        <div className={'event-details flexible'}>{this.props.eventDesc}</div>
      </section>
    )
  }
}