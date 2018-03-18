import React from 'react';


class DatePicker extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    //this.props.onDateChange(e.target.value);
  }

  render() {
    return(
      <input type="date" name={this.props.name} onChange={this.props.onChange}/>
    )
  }

}

export default DatePicker;
