import React from 'react';
import AsideNav from '../modules/AsideNav.js';

import actions from '../../actions/actions';

export default class MyWeek extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.dispatch(actions.changeRoute('My Week'));
  }

  componentDidMount() {
    this.props.events.map((event) => {
      let child = document.createElement('div');
      child.setAttribute('id', event.eventId);
      child.setAttribute('class', 'day-event absolute width-100');
      
      //set child top position
      child.style.top = 33;
      
      if(event.timeOfDay === 'AM' && event.hour >= 8) {
        child.style.top = parseInt(child.style.top, 10) - 1440 + event.startInMin * this.props.minuteInPixels;
      } else if(event.timeOfDay === 'AM' && event.hour <= 7) {
        child.style.top = parseInt(child.style.top, 10) + 2880 + event.startInMin * this.props.minuteInPixels;
      }
      if(event.timeOfDay === 'PM') {
        child.style.top = parseInt(child.style.top, 10) + 720 + event.startInMin * this.props.minuteInPixels;
      }
      
      //set height based on duration
      child.style.height = event.durationInMin * this.props.minuteInPixels;
      
      //set event priority
      child.setAttribute('data-priority', event.priority);
      
      document.getElementById(event.day)
        .appendChild(child)
    })
    // document.querySelector()
  }

  getDayByHours(displayHour, day) {
    return this.props.dayByHours
      .map((hour, i) => {
        let day = day ? day : '';
        let time = displayHour ? hour : '';
        return (
          <div 
            key={i}
            data-time={hour}
            className="day-hour hour-space center-text text-green">
            {time}
          </div>
        )
      });
  }

  getWeekByDays() {
    return this.props.weekByDays.map((day, i) => {
      let weekend = true ? day === 'Sat' || day === 'Sun' : false;
      return (
        <div key={i} className="week-day flexible text-green relative">
          <div className="day-heading center-text">{day}</div>
          <div id={day} className="day-schedule" data-weekend={weekend} data-day={day}>
            {this.getDayByHours(false, day)}
          </div>
        </div>
    )});
  }

  render() {
    return (
      <section className="week-wrapper wrapper user-wrapper">
        <AsideNav userFirstName={this.props.user.userFirstName} />
        <main className="flexible flex flex--row">
          <section className="weekly-events flexible flex flex--row height-100">
            <div className="day-timeline flex flex--column">{this.getDayByHours(true)}</div>
            <div className="week-timeline flexible flex flex--row">{this.getWeekByDays()}</div>
          </section>
          <aside className="weekly-manager flex flex--column">
            <ul className="task-priorities flex flex--column">
              <h2>Priority list</h2>
              <li data-priority="none"
                  className="task-priority flexible self--end">
                <span className="priority-none">None</span>
              </li>
              <li data-priority="high"
                  className="task-priority flexible self--end">
                <span className="priority-high">High</span>
              </li>
              <li data-priority="medium"
                  className="task-priority flexible self--end">
                <span className="priority-medium">Medium</span>
              </li>
              <li data-priority="low"
                  className="task-priority flexible self--end">
                <span className="priority-low">Low</span>
              </li>
            </ul>
          </aside>
        </main>
      </section>
    )
  }
}