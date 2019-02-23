import React from 'react';
import _ from "lodash";
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
        events: [],
        errorMessage: ""
      };
  }

  handleDateChange(e){
    this.setState({date: e.target.value});
  }

  handleSubmit(e, title, date){
    e.preventDefault();
    this.setState({ errorMessage: "" });
    let events = _.cloneDeep(this.state.events);
    if (title && date) {
      events.push({ id: events.length, title, date });
      this.setState({ events });
    } else {
      this.setState({ errorMessage: "Required field was left blank" });
    }
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
          {this.state.errorMessage && <div> Error: {this.state.errorMessage} </div> }
          <br />
          {
            this.state.events && this.state.events.length > 0 &&
              <div>
                Important Events:
              </div>
          }
          <EventList events={this.state.events} firstDate={this.state.date}/>
          <AddEvent handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
  }
}

export default Main;
