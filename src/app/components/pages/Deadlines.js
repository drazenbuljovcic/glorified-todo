import React from 'react';
import AsideNav from '../modules/AsideNav.js';

import helperActions from '../../actions/helperActions.js';

import helpers from '../../helpers.js';

export default class Deadlines extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.dispatch(helperActions.changeRoute('Deadlines'));
  }

  printCalendar(numOfDaysInMonth, firstDay, monthName) {
    let content = [];

    //prepend empty divs
    for(let i = 1; i <= firstDay - 1; i ++) {
      content.push(
        <div 
          key={`emptyPrepend-${i}`}
          className="calendar-day-block flexible flex">
        </div>
      )
    }
    
    //render calendar divs
    for(let i = 1; i <= numOfDaysInMonth; i++) {
      content.push(
        <div
          key={`${monthName}-${i}`}
          className="calendar-day-block flexible flex">
          <span className="day-indicator flex flex--center text-green">{i}</span>
        </div>
      )
    }

    //append empty divs
    for(let i = 0; i < 35 - (numOfDaysInMonth + firstDay - 1); i ++) {
      content.push(
        <div 
          key={`emptyAppend-${i}`}
          className="calendar-day-block flexible flex">
        </div>
      )
    }

    return content;
  }

  render() {
    return (
      <section className="deadlines-wrapper wrapper user-wrapper">
        <AsideNav userFirstName={this.props.user.userFirstName} />
        <main className="flexible flex flex--row">
          <section className="deadlines-calendar flexible flex flex--column">
            <h2 className="text-green">
              {helpers.normalizeMonth(this.props.date.month).full}
            </h2>
            <div className="calendar flex flexible flex--column">
              <header className="calendar-days flex flex--row">
                {
                  this.props.weekByDays
                    .map(day => (
                        <div
                          key={day}
                          data-day={day}
                          data-weekend={true ? day === 'Sat' || day === 'Sun' : false}
                          className="calendar-day flexible center-text text-green">
                          <h3>{day}</h3>
                        </div>
                      )
                    )
                }
              </header>
              <div className="calendar-content flexible flex">
                {
                  this.printCalendar(
                    this.props.date.numOfDaysInMonth,
                    this.props.date.firstDay,
                    helpers.normalizeMonth(this.props.date.month).full
                  )
                }
              </div>
            </div>
          </section>
          <aside className="weekly-manager flex flex--column">
            <ul className="task-priorities flex flex--column">
              <h2 className="text-green">Priority list</h2>
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