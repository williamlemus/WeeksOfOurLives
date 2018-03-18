import React from 'react';

const EventItem = (props) => {
  return(<li>
    {props.item.date + ' ' + props.item.title} 
    </li>)
}

export default EventItem;
