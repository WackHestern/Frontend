import React, { Component } from 'react';
import './Navbar.scss';
const _ = require('lodash')

const links = {
  "Sign Up": "signup",
  "Help": "help",
  "Install": "install",
  "Sign In": "signin"
}

export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <a className="title-wrapper" href="">
          <img className="logo-small" src="public/Assets/logo/logo.png"/>
          <div className="title" >Tradium</div>
        </a>
        <div className="textContent">
          {_.map(Object.keys(this.props.links), (title) => {
            return <a className="link" href={links[title]}>
              <div className="link-text">{title}</div>
            </a>
          })}
        </div>
      </div>
    );
  }
}