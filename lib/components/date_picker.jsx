import React from 'react';


class DatePicker extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <input type="date" name={this.props.name} onChange={this.props.onChange}/>
    )
  }

}

export default DatePicker;
