import React, { Component } from "react";
import {Navbar} from './../Common/Navbar/Navbar'

import './Portfolio.scss'

const links = {
  "Help": "help",
  "Install": "install",
  "Fund": "app.fund"
}

export default class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <Navbar links={links}/>
      </div>
    );
  }
}