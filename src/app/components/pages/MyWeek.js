import React from 'react';

import AsideNav from '../modules/AsideNav';
import MyWeekEvent from '../modules/MyWeekEvent';
import EventDetails from '../modules/EventDetails'
import AddEvent from '../modules/AddEvent';

import helperActions from '../../actions/helperActions';

export default class MyWeek extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.dispatch(helperActions.changeRoute('My Week'));
  }

  getDayByHours(displayHour, day) {
    return this.props.dayByHours
      .map((hour, i) => {
        let day, time, content;

        day = day ? day : '';
        content = time = displayHour ? hour : '';
        
        let hourHeight = this.props.hourInMinutes * this.props.minuteInPixels;

        return (
          <div 
            key={i}
            data-time={hour}
            className="day-hour center-text text-green"
            style={{'height': hourHeight}}>
            {content}
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
          <div className="day-schedule" data-weekend={weekend} data-day={day}>
            {this.getDayByHours(false, day)}
            {this.renderEvents(this.props.events.filter(event => event.day === day))}
          </div>
        </div>
    )});
  }

  renderEvents(events) {
    return events.map((event) => {
      return (
        <MyWeekEvent 
          key={event.eventId}
          dispatch={this.props.dispatch}
          minuteInPixels={this.props.minuteInPixels}
          hourInMinutes={this.props.hourInMinutes}
          {...event} />
      );
    });
  }
  
  render() {
    return (
      <section className="week-wrapper wrapper user-wrapper">
        <AsideNav userFirstName={this.props.user.userFirstName} />
        <main className="flexible flex flex--row relative">
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
            {
              this.props.eventIdentifiers.eventDetails
              ?
                <EventDetails 
                  dispatch={this.props.dispatch}
                  event={this.props.events.find(event => event.eventId === this.props.eventIdentifiers.eventDetails)} 
                />
              : 
                null
            }
          </aside>
          {
            this.props.indicators.addEventIndicator
              ? 
                <AddEvent dispatch={this.props.dispatch}/>
              : 
                null
          }
        </main>
      </section>
    )
  }
}