import React, { Component } from 'react';
import './Header.scss';
import {Button} from '../../../Common/Button/Button.jsx'
const _ = require('lodash')

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="text-wrapper">
          <div className="header-text">
            Fee-Free.
            <br/>
            Keep What You Earn
          </div>
          <div className="subtext">
            Tradium lets you invest your hard earned money for free.
            <br/>
            Seriously, we charge 0 fees.
          </div>
          <Button text="Sign Up" href="signup"/>
        </div>
        <img className="phone-image" src="public/Assets/Header/S8Mockup.png"/>
      </div>
    );
  }
}