import React from 'react';
import DatePicker from './components/date_picker';

const MS_IN_DAYS = 86400000;


class Main extends React.Component{
  constructor(props){
      super(props);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.state = {
        date: '',
        events: []
      };
  }

  handleDateChange(date){
    this.setState({date: date});
  }

  now(){
    const dateTime = new Date();
    return `${dateTime.getFullYear()}-${dateTime.getMonth() + 1}-${dateTime.getDate()}`;
  }

  totalDays(date){
    return Math.floor((new Date(date) - new Date(this.state.date))/MS_IN_DAYS);
  }

  formatToWD(date){
    const days = this.totalDays(date);
    return `W${Math.floor(1 + days/7)}D${1 + days % 7}`;
  }


  render(){
    if(this.state.date === ''){
      return(
        <div>
        Tell us the day that changed your life
        <DatePicker onDateChange={this.handleDateChange}/>
        </div>
      );
    } else {
      return(
        <div>
          W1D1 was {this.state.date}
          <br />
          Today is {this.formatToWD(this.now())}
        </div>
      )
    }
  }
}

export default Main;
