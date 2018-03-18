import React from 'react';
import NewEventForm from './new_event_form';

class AddEvent extends React.Component{
  render(){
    return(
      <div>
        <NewEventForm handleSubmit={this.props.handleSubmit}/>
      </div>
    );
  }
}

export default AddEvent;
