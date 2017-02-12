import React from 'react';

import DeleteEventModal from './DeleteEventModal';

import helperActions from '../../actions/helperActions';

export default class DeleteDashboardEvent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  setDeleteEvent(e, indicator, eventId) {
    this.props.dispatch(helperActions.setDeleteEvent(indicator, eventId));
  }

  render() {
    return (
      <div className="delete-dashboard-event">
        <i
          ref={deleteIndicator => this.deleteIndicator = deleteIndicator}
          onClick={(e) => this.setDeleteEvent(e, true, this.props.eventId)}
          className="fa fa-times" aria-hidden="true" title="Delete Event">
          </i>
          {
              this.props.eventIdentifiers.deleteEvent === this.props.eventId
                && this.props.indicators.dashboardDeleteIndicator
              ?
                <DeleteEventModal 
                  dispatch={this.props.dispatch}
                />
              : 
                null
          }
      </div>
    )
  }
}