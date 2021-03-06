import React, { Component } from 'react';
import './Navbar.scss';
const _ = require('lodash')

export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <a className="title-wrapper" href="home">
          <img className="logo-small" src="public/Assets/logo/logo.png"/>
          <div className="title" >Tradium</div>
        </a>
        <div className="textContent">
          {_.map(Object.keys(this.props.links), (title) => {
            return <a className="link" href={this.props.links[title]} key={Math.random()}>
              <div className="link-text">{title}</div>
            </a>
          })}
        </div>
      </div>
    );
  }
}