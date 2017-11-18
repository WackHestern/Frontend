import React, { Component } from "react";

import {Navbar} from './../Common/Navbar/Navbar'

import './SignIn.scss'

const links = {
  "Help": "help",
  "Install": "install",
}

export default class SignIn extends Component {
  render() {
    return (
      <div id="SignIn">
        <Navbar links={links}/>
      </div>
    );
  }
}