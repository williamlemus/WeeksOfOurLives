import React from 'react';
import {formatToWD} from '../utils/utils'
const EventItem = (props) => {
  return(<li>
    {formatToWD(props.item.date, props.firstDate) + ': ' + props.item.title}
    </li>)
}

export default EventItem;
