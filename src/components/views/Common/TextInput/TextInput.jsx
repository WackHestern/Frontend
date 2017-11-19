import React, { Component } from "react";
import './TextInput.scss'

export class TextInput extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.monitor(event.target.value)
  }

  render() {
    return (
      //needs a width, type, placeholder
      // <div id="TextInput">
      <input onChange={this.handleChange} className="textbox" style={{width:this.props.width}} type={this.props.type} placeholder={this.props.placeholder} name="fname" />
      // </div>
    );
  }
}