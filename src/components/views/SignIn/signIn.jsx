import React, { Component } from "react";

import {Navbar} from './../Common/Navbar/Navbar'
import {SignInWrapper} from './Components/SignInWrapper/SignInWrapper.jsx'

import './SignIn.scss'

const links = {
  "Help": "help",
  "Install": "install",
  "Sign Up": "signup"
}

export default class SignIn extends Component {
  render() {
    return (
      <div id="SignIn">
        <Navbar links={links}/>
        <SignInWrapper/>
      </div>
    );
  }
}