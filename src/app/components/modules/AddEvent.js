import React from 'react';

import helperActions from '../../actions/helperActions';

export default class AddEvent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    console.log('Mounting AddEvent component');
  }
  componentWillUnmount() {
    console.log('Unmounting AddEvent component');
  }
  setAddEventIndicator(e, indicator) {
    if(this.overlayDiv === e.target){
      this.props.dispatch(helperActions.setAddEventIndicator(indicator));
    }
  }

  render() {
    return (
      <div
        ref={overlayDiv => this.overlayDiv = overlayDiv}
        onClick={(e) => this.setAddEventIndicator(e, false)} 
        className="overlay wrapper flex flex--center">
        <div></div>
      </div>
    )
  }
}