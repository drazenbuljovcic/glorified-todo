import React from 'react';
import AsideNav from '../modules/AsideNav.js';

import actions from '../../actions/actions';

export default class Deadlines extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.dispatch(actions.changeRoute('Deadlines'));
  }

  render() {
    return (
      <section className="deadlines-wrapper wrapper user-wrapper">
        <AsideNav userFirstName={this.props.user.userFirstName} />
        <main className="flexible flex flex--column"></main>
      </section>
    )
  }
}