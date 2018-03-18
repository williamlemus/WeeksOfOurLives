import React from 'react';
import DatePicker from './components/date_picker';
import AddEvent from './components/add_event';
import EventList from './components/event_list';
import * as Utils from './utils/utils';



class Main extends React.Component{
  constructor(props){
      super(props);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        date: '',
        events: []
      };
  }

  handleDateChange(e){
    this.setState({date: e.target.value});
  }

  handleSubmit(e, title, date){
    e.preventDefault();
    let events = this.state.events;
    events.push({id: events.length, title: title, date: date});
    this.setState({events: events});
  }

  render(){
    if(this.state.date === ''){
      return(
        <div>
        Tell us the day that changed your life
        <DatePicker name='initial' onChange={this.handleDateChange}/>
        </div>
      );
    } else {
      return(
        <div>
          W1D1 was {this.state.date}
          <br />
          Today is {Utils.formatToWD(Utils.now(), this.state.date)}
          <br />
          <EventList events={this.state.events}/>
          <AddEvent handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
  }
}

export default Main;
