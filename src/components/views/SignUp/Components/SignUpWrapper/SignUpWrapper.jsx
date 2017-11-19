import React, { Component } from "react";
import './SignUpWrapper.scss'

import {Button} from '../../../Common/Button/Button'
import {TextInput} from '../../../Common/TextInput/TextInput'

export class SignUpWrapper extends Component {
  render() {
    return (
      <div className="sign-Up-wrapper">
        <div id="text-wrapper">
          <div id="title"> Sign Up</div>
          <div className="sideBySide">
            <TextInput width="300px" type="text" placeholder="First name"/>
            <div style={{width: "20px"}}></div>
            <TextInput width="300px" type="text" placeholder="Last name"/>
          </div>
          <div style={{height: "40px"}}></div>
          <TextInput width="640px" type="text" placeholder="Email Address"/>
          <div style={{height: "40px"}}></div>
          <TextInput width="640px" type="password" placeholder="Password"/>
          <div style={{height: "40px"}}></div>
          <TextInput width="640px" type="password" placeholder="Confirm password"/>
          <div style={{height: "40px"}}></div>
          <Button width="660px" text="Submit" href="app"/>
        </div>
      </div>
    );
  }
}