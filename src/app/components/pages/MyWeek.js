import React from 'react';
import AsideNav from '../modules/AsideNav.js';

import actions from '../../actions/actions';

export default class MyWeek extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.dispatch(actions.changeRoute('My Week'));
    console.log(this.props.dayByHours);
  }

  getDayByHours(displayHour, day) {
    return this.props.dayByHours
      .map((hour, i) => {
        let day = day ? day : '';
        let time = displayHour ? hour : '';
        return (<div 
                  key={i}
                  data-time={hour}
                  className="day-hour hour-space center-text text-green">
                  {time}
                </div>)
      });
  }

  getWeekByDays() {

    return this.props.weekByDays.map((day, i) => {
      let weekend = true ? day === 'Sat' || day === 'Sun' : false;
      return (
        <div key={i} className="week-day flexible text-green">
          <div className="day-heading center-text">{day}</div>
          <div className="day-schedule">
            <div key={i} data-weekend={weekend} data-day={day} className="week-day">
              {this.getDayByHours(false, day)}
            </div>
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