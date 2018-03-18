import React from 'react';
import EventItem from './event_item';

class EventList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<ul>
      {this.props.events.map((e) =>{
        return(
          <EventItem key={e.id}
          item={e}
          firstDate={this.props.firstDate}
          />
          );
        }
      )
      }
      </ul>);
  }
}


export default EventList;
