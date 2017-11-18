import React, { Component } from 'react';
import './Button.scss';

export class Button extends Component {
  render() {
    return (
      <a className="Button" href={this.props.href}>
        {this.props.text}
      </a>
    );
  }
}