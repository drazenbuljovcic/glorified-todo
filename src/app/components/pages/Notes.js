import React from 'react';

import AsideNav from '../modules/AsideNav';
import AddEvent from '../modules/AddEvent';

import helperActions from '../../actions/helperActions';

export default class Notes extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.dispatch(helperActions.changeRoute('Notes'));
  }

  render() {
    return (
      <section className="notes-wrapper wrapper user-wrapper">
        <AsideNav userFirstName={this.props.user.userFirstName} />
        <main className="flexible flex flex--column relative">
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