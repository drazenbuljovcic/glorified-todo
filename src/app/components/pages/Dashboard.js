import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions/actions';

import AsideNav from '../modules/AsideNav.js';

export default class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tabActive: 'none'
    }
  }

  componentWillMount() {
    this.props.dispatch(actions.changeRoute('Dashboard'));
  }

  componentWillUpdate(nextProps, nextState) {
    Array.prototype.map.call(document.querySelectorAll(`li[data-priority]`), (obj) => {
      obj.style = "";
    });
    console.log(document.querySelector(`li[data-priority=${nextState.tabActive}]`));
    document.querySelector(`li[data-priority=${nextState.tabActive}]`).style.boxShadow = 'none';
  }

  switchTab(priority) {
    this.setState({tabActive: priority});
  }

  render() {
    return (
      <section className="dashboard-wrapper wrapper user-wrapper">
        <AsideNav userFirstName={this.props.user.userFirstName} />
        <main className="flexible flex flex--column flex--center">
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
            </section>
          </dialog>
        </main>
      </section>
    )
  }
}