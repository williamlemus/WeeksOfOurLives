import React from 'react';
import InputField from './input_field';
import DatePicker from './date_picker';
import SubmitButton from './submit_button';

class NewEventForm extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitDate = this.submitDate.bind(this);
    this.state = {
      eventName: '',
      eventDate: ''
    }
  }

  handleChange(e){
    let name = e.target.name
    let newVal = {};
    newVal[name] = e.target.value;
    this.setState(newVal);
  }

  submitDate(e){
    this.props.handleSubmit(e, this.state.eventName, this.state.eventDate);
  }

  render(){
    return(
      <form className="add-event-form" onSubmit={this.submitDate}
                onChange={this.handleChange}>
        <InputField name="eventName" value={this.state.eventName}/>
        <DatePicker name="eventDate" onChange={this.handleChange} value={this.state.eventDate}/>
        <SubmitButton />
      </form>
    );
  }
}


export default NewEventForm;
