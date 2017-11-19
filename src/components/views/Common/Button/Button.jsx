import React, { Component } from 'react';
import './Button.scss';

export class Button extends Component {
  render() {

    return (
      <a className="Button" onClick={this.props.onClick} style={{width: this.props.width}}>
        {this.props.text}
      </a>
    );
  }
}