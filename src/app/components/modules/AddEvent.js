import React from 'react';

import helperActions from '../../actions/helperActions';

export default class AddEvent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  setAddEventIndicator(e, indicator) {
    if(this.overlayDiv === e.target){
      this.props.dispatch(helperActions.setAddEventIndicator(indicator));
    }
  }

  addEvent(e) {
    e.preventDefault();
    console.log('add');
  }

  render() {
    return (
      <div
        ref={overlayDiv => this.overlayDiv = overlayDiv}
        onClick={(e) => this.setAddEventIndicator(e, false)} 
        className="overlay wrapper flex flex--center">
        <div className="add-form">
          <form
            onSubmit={(e) => this.addEvent(e)} 
            className="flex flex--column items-stretch">
            <h1>Add New Event</h1>
            <label for="eventHeadline">eventHeadline</label>
            <input type="text" placeholder="Event Headline"
              id="eventHeadline"
              ref={eventHeadline => this.eventHeadline = eventHeadline} required/>
            <textarea placeholder="Event Description" 
              ref={eventDescription => this.eventDescription = eventDescription} required>
            </textarea>

            <button type="submit">ADD</button>
          </form>
        </div>
      </div>
    )
  }
}