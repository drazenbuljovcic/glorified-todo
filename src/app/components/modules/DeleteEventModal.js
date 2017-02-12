import React from 'react';

import eventActions from '../../actions/eventActions';

export default class DeleteEventModal extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  delete(answer) {
    this.props.dispatch(eventActions.deleteEventAnswer(answer));
  }

  render() {
    return (
      <div className="delete-event-modal overlay flex flex--center flex--column">
        <span className="text-green uppercase">Delete Event?</span>
        <div className="delete-question flexible flex flex--around items--stretch">
          <button 
            data-answer="yes" 
            className="self--center text-white bold-font uppercase"
            onClick={() => this.delete(true)}>Yup</button>
          <button 
            data-answer="no"
            className="self--center text-white bold-font uppercase"
            onClick={() => this.delete(false)}>Nope</button>
        </div>
      </div>
    )
  }
}