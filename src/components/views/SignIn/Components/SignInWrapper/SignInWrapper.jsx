import React, { Component } from "react";
import './SignInWrapper.scss'

import {Button} from '../../../Common/Button/Button'
import {TextInput} from '../../../Common/TextInput/TextInput'

export class SignInWrapper extends Component {
  render() {
    return (
      <div className="sign-In-wrapper">
        <div id="text-wrapper">
          <div id="title"> Sign In</div>
          <div style={{height: "40px"}}></div>
          <TextInput width="640px" type="text" placeholder="Email Address"/>
          <div style={{height: "40px"}}></div>
          <TextInput width="640px" type="text" placeholder="Password"/>
          <div style={{height: "40px"}}></div>
          <Button width="660px" text="Submit" href="portfolio"/>
        </div>
      </div>
    );
  }
}