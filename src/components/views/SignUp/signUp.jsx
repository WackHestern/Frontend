import React, { Component } from "react";

import {Navbar} from './../Common/Navbar/Navbar'
import {SignUpWrapper} from './Components/SignUpWrapper/SignUpWrapper.jsx'

import './SignUp.scss'

const links = {
  "Help": "help",
  "Install": "install",
}

export default class SignUp extends Component {
  render() {
    return (
      <div id="SignUp">
        <Navbar links={links}/>
        <SignUpWrapper/>
      </div>
    );
  }
}