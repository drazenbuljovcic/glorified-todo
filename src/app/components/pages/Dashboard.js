import React from 'react';
import { connect } from 'react-redux';

import helperActions from '../../actions/helperActions';

import AsideNav from '../modules/AsideNav';
import DashboardEvent from '../modules/DashboardEvent';
import AddEvent from '../modules/AddEvent';

export default class Dashboard extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      tabActive: 'none'
    }
  }

  componentWillMount() {
    this.props.dispatch(helperActions.changeRoute('Dashboard'));
  }

  componentWillUpdate(nextProps, nextState) {
    //in a component re-render remove box shadow from all tabs
    //and add it just to the active one
    Array.prototype.map
      .call(document.querySelectorAll(`li[data-priority]`), obj => obj.style = "");
    document.querySelector(`li[data-priority=${nextState.tabActive}]`)
      .style.boxShadow = 'none';
  }

  FilterByPriorityAndRenderEvents(events, priority) {
    return events
      .filter(event => event.priority === priority)
      .map(event => this.renderEvent(event))
  }

  renderEvent(event) {
    return <DashboardEvent dispatch={this.props.dispatch} key={event.eventId} {...event} />;
  }

  switchTab(priority) {
    //set state which triggers component re-render
    this.setState({tabActive: priority});
  }

  render() {
    return (
      <section className="dashboard-wrapper wrapper user-wrapper">
        <AsideNav userFirstName={this.props.user.userFirstName} />
        <main className="flexible flex flex--column flex--center relative">
          <dialog className="dashboard-modal flex flex--column relative">
            <header className="dashboard-modal-header">
              <ul className="task-priorities flex flexible height-100">
                <li data-priority="none"
                    onClick={ () => this.switchTab('none') } 
                    className="task-priority flexible">
                  <span className="priority-none">None</span>
                </li>
                <li data-priority="high"
                    onClick={ () => this.switchTab('high') }
                    className="task-priority flexible">
                  <span className="priority-high">High</span>
                </li>
                <li data-priority="medium"
                    onClick={ () => this.switchTab('medium') }
                    className="task-priority flexible">
                  <span className="priority-medium">Medium</span>
                </li>
                <li data-priority="low"
                    onClick={ () => this.switchTab('low') }
                    className="task-priority flexible">
                  <span className="priority-low">Low</span>
                </li>
              </ul>
            </header>
            <section className="dashboard-modal-content flexible">
              {
                this.FilterByPriorityAndRenderEvents(this.props.events, this.state.tabActive)
              }
            </section>
          </dialog>
          {
            this.props.indicators.addEventIndicator
              ? <AddEvent dispatch={this.props.dispatch}/>
              : ''
          }
        </main>
      </section>
    )
  }
}