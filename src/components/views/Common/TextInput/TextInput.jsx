import React, { Component } from "react";
import './TextInput.scss'

export class TextInput extends Component {
  render() {
    return (
      //needs a width, type, placeholder
      <div id="TextInput">
      <input className="textbox" style={{width:this.props.width}} type={this.props.type} placeholder={this.props.placeholder} name="fname"/>
      </div>
    );
  }
}