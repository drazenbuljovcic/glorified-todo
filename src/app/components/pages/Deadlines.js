import React from 'react';

import AsideNav from '../modules/AsideNav';
import CalendarDayBlock from '../modules/CalendarDayBlock';
import EventDetails from '../modules/EventDetails';
import AddEvent from '../modules/AddEvent';

import helperActions from '../../actions/helperActions';

import helpers from '../../helpers';

export default class Deadlines extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.dispatch(helperActions.changeRoute('Deadlines'));
  }

  printCalendar(numOfDaysInMonth, firstDay, monthName, allEvents) {
    let content = [];

    //prepend empty divs
    for(let i = 1; i <= firstDay - 1; i ++) {
      content.push(
        <figure 
          key={`emptyPrepend-${i}`}
          className="calendar-day-block flexible flex">
        </figure>
      )
    }
    
    //render calendar divs
    let monthCalendarDay = firstDay
    for(let day = 1; day <= numOfDaysInMonth; day++) {
      let today;
      if(monthCalendarDay > 7) monthCalendarDay = 1;

      today = {
        numOfDayInWeek: monthCalendarDay,
        numOfDayInMonth: day,
        slug: helpers.normalizeDay(monthCalendarDay).slug
      }

      let daySpecificEvents = this.gatherEvents(allEvents, today.numOfDayInMonth);

      content.push(
        <CalendarDayBlock 
          monthName={monthName}
          key={`${monthName}-${day}-${today.slug}`}
          day={today.slug}
          dayNum={day}
          events={daySpecificEvents}
          dispatch={this.props.dispatch}
          weekend={true ? today.slug === 'Sat' || today.slug === 'Sun' : ''}
        />
      )

      monthCalendarDay++;
    }

    //append empty divs
    for(let i = 0; i < 35 - (numOfDaysInMonth + firstDay - 1); i ++) {
      content.push(
        <figure 
          key={`emptyAppend-${i}`}
          className="calendar-day-block flexible flex">
        </figure>
      )
    }

    return content;
  }

  gatherEvents(allEvents, dayNum) {
    return allEvents.filter(event => event.dayNum === dayNum);
  }

  render() {
    return (
      <section className="deadlines-wrapper wrapper user-wrapper">
        <AsideNav userFirstName={this.props.user.userFirstName} />
        <main className="flexible flex flex--row relative">
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
                    helpers.normalizeMonth(this.props.date.month).full,
                    this.props.events
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