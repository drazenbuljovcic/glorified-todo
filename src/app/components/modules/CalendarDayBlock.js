import React from 'react';

export default class CalendarDayBlock extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    return (
      <div
        data-month={this.props.monthName}
        data-day={this.props.day}
        data-weekend={this.props.weekend}
        className="calendar-day-block flexible flex">
        <span className="day-indicator flex flex--center text-green">{this.props.dayNum}</span>
      </div>
    )
  }
}