import React from 'react';

import helperActions from '../../actions/helperActions';

export default class DeleteDashboardEvent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  setDashboardDeleteIndicator(e, indicator) {
    this.props.dispatch(helperActions.setDashboardDeleteIndicator(indicator));
  }

  render() {
    return (
      <div className="delete-dashboard-event">
        <i
          ref={deleteIndicator => this.deleteIndicator = deleteIndicator}
          onClick={(e) => this.setDashboardDeleteIndicator(e, true)}
          className="fa fa-times" aria-hidden="true" title="Delete Event">
          </i>
      </div>
    )
  }
}