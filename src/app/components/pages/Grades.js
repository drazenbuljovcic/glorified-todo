import React from 'react';

import AsideNav from '../modules/AsideNav';
import AddEvent from '../modules/AddEvent';

import helperActions from '../../actions/helperActions';

export default class Deadlines extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.dispatch(helperActions.changeRoute('Grades'));
  }

  render() {
    return (
      <section className="grades-wrapper wrapper user-wrapper">
        <AsideNav userFirstName={this.props.user.userFirstName} />
        <main className="flexible flex flex--column relative">
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