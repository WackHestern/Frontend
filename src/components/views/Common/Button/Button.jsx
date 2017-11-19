import React, { Component } from 'react';
import './Button.scss';

export class Button extends Component {
  render() {
    return (
      <a className="Button" href={this.props.href} style={{width: this.props.width}}>
        {this.props.text}
      </a>
    );
  }
}